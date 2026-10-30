import { Surface, Heading, Paragraph, Icon } from '~/main';
import { ContentRowProps, HeadingRowProps, SummaryRowProps, ValueRowProps } from './summary.types';
import classes from './summary.module.css';

type SummaryItem = ValueRowProps | ContentRowProps;

interface SummaryList {
  title?: string;
  items: SummaryItem[];
}

interface SummaryPage {
  heading?: HeadingRowProps;
  lists: SummaryList[];
}

/**
 * Groups the flat row list into pages (one per heading row) and lists (one per title row),
 * so each title gets its own bordered list instead of sharing one grid.
 */
const groupRows = (rows: SummaryRowProps[]): SummaryPage[] => {
  const pages: SummaryPage[] = [];
  const currentPage = () => {
    if (pages.length === 0) pages.push({ lists: [] });
    return pages[pages.length - 1];
  };
  const currentList = () => {
    const page = currentPage();
    if (page.lists.length === 0) page.lists.push({ items: [] });
    return page.lists[page.lists.length - 1];
  };

  for (const row of rows) {
    if ('editButton' in row) {
      pages.push({ heading: row, lists: [] });
    } else if ('title' in row) {
      currentPage().lists.push({ title: row.title, items: [] });
    } else if ('value' in row || 'content' in row) {
      currentList().items.push(row);
    }
  }
  return pages;
};

const SummaryValue = ({ label, value, error = undefined }: ValueRowProps) => {
  return (
    <div className={classes.valueRow}>
      <Paragraph className={classes.valueLabel} data-size="md">
        {label}
      </Paragraph>
      <Paragraph className={classes.valueText} data-size="md">
        {value}
      </Paragraph>
      {error && (
        <Paragraph className={classes.error} data-size="sm">
          {error}
        </Paragraph>
      )}
    </div>
  );
};

const SummaryContent = ({ label, content, error = undefined }: ContentRowProps) => {
  return (
    <div className={classes.contentRow}>
      <Paragraph className={classes.contentLabel} data-weight="medium" data-size="md">
        {label}
      </Paragraph>
      <div className={classes.contentArea}>{content}</div>
      {error && (
        <Paragraph className={classes.error} data-size="sm">
          {error}
        </Paragraph>
      )}
    </div>
  );
};

const SummaryItemRow = (props: SummaryItem) => {
  if ('value' in props) {
    return <SummaryValue {...props} />;
  }
  return <SummaryContent {...props} />;
};

const SummaryListView = ({ title, items }: SummaryList) => {
  return (
    <div className={classes.list}>
      {title && (
        <Paragraph className={classes.title} data-weight="medium" data-size="md">
          {title}
        </Paragraph>
      )}
      {items.map((item, index) => (
        <SummaryItemRow key={index} {...item} />
      ))}
    </div>
  );
};

const SummaryPageView = ({ heading, lists }: SummaryPage) => {
  return (
    <Surface gap={5}>
      {heading && <Heading data-size="sm">{heading.title}</Heading>}
      {lists.map((list, index) => (
        <SummaryListView key={index} {...list} />
      ))}
      {heading && (
        <button
          type="button"
          className={classes.editButton}
          onClick={heading.editButton.onClick}
          aria-label={heading.editButton.ariaLabel}
        >
          <Icon material="edit_square" size="md" />
          <span className={classes.editButtonText}>{heading.editButton.label}</span>
        </button>
      )}
    </Surface>
  );
};

export const Summary = ({ rows }: { rows: SummaryRowProps[] }) => {
  return (
    <Surface gap={12}>
      {groupRows(rows).map((page, index) => (
        <SummaryPageView key={index} {...page} />
      ))}
    </Surface>
  );
};
