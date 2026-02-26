import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Footer } from '~/components/kystverket/Footer/Footer';

import { Box, BoxProps, Header, StyrbordTranslationContext } from '~/main';
import { supportedLanguages } from '~/utils/types';

const meta = {
  title: 'Helpers/StyrbordTranslationContext',
  component: Box,

  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],

  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: BoxProps = {
  children: (
    <>
      <Header
        logo={{
          title: 'StyrbordTranslationContext',
          url: '#',
          variant: undefined,
        }}
      />
      <pre>
        &lt;StyrbordTranslationContext.Provider value=&#123;&#123; language: '{supportedLanguages.join('|')}'
        &#125;&#125;&gt; ... &lt;/StyrbordTranslationContext.Provider&gt;
      </pre>
      <pre>const &#123; t &#125; = useStyrbordTranslation();</pre>
      <Footer />
    </>
  ),
};

export const Norsk: Story = {
  decorators: [
    (Story) => (
      <StyrbordTranslationContext.Provider value={{ language: 'nb-NO' }}>
        <Story />
      </StyrbordTranslationContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
  },
};

export const Nynorsk: Story = {
  decorators: [
    (Story) => (
      <StyrbordTranslationContext.Provider value={{ language: 'nn-NO' }}>
        <Story />
      </StyrbordTranslationContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
  },
};

export const Engelsk: Story = {
  decorators: [
    (Story) => (
      <StyrbordTranslationContext.Provider value={{ language: 'en-US' }}>
        <Story />
      </StyrbordTranslationContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
  },
};
