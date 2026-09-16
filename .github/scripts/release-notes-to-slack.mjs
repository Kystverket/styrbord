// Bygger Slack-payload for utgivelsesvarsel.
//
// release-please produserer GitHub-flavored markdown (### overskrifter, * punkter,
// [tekst](url)). Slack sin mrkdwn støtter ingen av delene, så notatene må
// oversettes før de sendes. Skriver ferdig payload til stien som sendes som første argument.

import { writeFileSync } from 'node:fs';

// Slack sitt tak er 3000 tegn per section-tekst. Legg oss godt under.
const MAX_BODY_LENGTH = 2500;

function escapeForSlack(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function toSlackMrkdwn(markdown) {
  const lines = escapeForSlack(markdown.trim())
    // Overskriften gjentar bare pakke og versjon, som allerede står i Slack-meldingen.
    .replace(/^##\s+\[?\d[^\n]*\n/, '')
    // Commit-lenken bak hvert punkt er støy i Slack. PR-lenken beholdes.
    .replace(/\s*\(\[[0-9a-f]{7,40}\]\([^)]*\/commit\/[^)]*\)\)/g, '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<$2|$1>')
    .replace(/\*\*([^*]+)\*\*/g, '*$1*')
    .split('\n')
    .map((line) =>
      line
        .replace(/^\s*#{1,6}\s+(.*)$/, '*$1*')
        .replace(/^\s*[*-]\s+/, '• ')
        .trimEnd(),
    );

  const isHeading = (line) => /^\*[^*]+\*$/.test(line);

  return lines
    .filter((line, index) => line !== '' || !isHeading(lines[index - 1] ?? ''))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function truncate(text, url) {
  if (text.length <= MAX_BODY_LENGTH) return text;
  const cut = text.slice(0, MAX_BODY_LENGTH);
  const atLineBreak = cut.slice(0, cut.lastIndexOf('\n'));
  return `${atLineBreak || cut}\n…\n<${url}|Se hele utgivelsesnotatet>`;
}

function releaseBlocks({ name, version, body, url }) {
  const notes = truncate(toSlackMrkdwn(body ?? ''), url);

  return [
    { type: 'divider' },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*<${url}|${escapeForSlack(name)} v${escapeForSlack(version)}>*${notes ? `\n${notes}` : ''}`,
      },
      accessory: {
        type: 'button',
        text: { type: 'plain_text', text: 'Se utgivelse' },
        url,
      },
    },
  ];
}

const releases = [
  {
    released: process.env.BASE_RELEASED === 'true',
    name: '@kystverket/styrbord',
    version: process.env.BASE_VERSION,
    body: process.env.BASE_BODY,
    url: process.env.BASE_URL,
  },
  {
    released: process.env.KART_RELEASED === 'true',
    name: '@kystverket/styrbord-kart',
    version: process.env.KART_VERSION,
    body: process.env.KART_BODY,
    url: process.env.KART_URL,
  },
].filter((release) => release.released);

const blocks = [
  {
    type: 'header',
    text: { type: 'plain_text', text: '🚢 Ny Styrbord-versjon publisert', emoji: true },
  },
  ...releases.flatMap(releaseBlocks),
];

const outputPath = process.argv[2];
if (!outputPath) throw new Error('Mangler sti til payload-fil');

writeFileSync(outputPath, JSON.stringify({ blocks }, null, 2));
