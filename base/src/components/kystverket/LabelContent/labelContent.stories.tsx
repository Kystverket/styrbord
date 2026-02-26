import type { Meta, StoryObj } from '@storybook/react';
import LabelContent, { LabelContentProps } from './labelContent';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Helpers/LabelContent',
  component: LabelContent,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof LabelContent>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: LabelContentProps = {
  text: 'Fyll inn ditt navn',
};

export const Default: Story = {
  args: defaultProps,
};

export const Valgfritt: Story = {
  args: { ...defaultProps, optional: true },
};

export const LangTekst: Story = {
  args: {
    ...defaultProps,
    text: 'Dette er en altfor lang tekst og bør stort sett aldri skje, men må allikevel håndteres. Det kan jo hende teksten ikke er for lang men containeren er for liten.',
    optional: true,
  },
};

export const LangRequired: Story = {
  args: {
    ...defaultProps,
    text: 'Dette er en altfor lang tekst og bør stort sett aldri skje, men må allikevel håndteres. Det kan jo hende teksten ikke er for lang men containeren er for liten.',
    required: true,
  },
};

export const LangRequiredText: Story = {
  args: {
    ...defaultProps,
    text: 'Dette er en altfor lang tekst og bør stort sett aldri skje, men må allikevel håndteres. Det kan jo hende teksten ikke er for lang men containeren er for liten.',
    required: 'Påkrevd',
  },
};

export const Required: Story = {
  args: { ...defaultProps, required: true },
};

export const RequiredText: Story = {
  args: { ...defaultProps, required: 'Påkrevd' },
};

export const Hvorfor: Story = {
  args: { ...defaultProps, required: true, optional: true },
};

export const Hvorfor2: Story = {
  args: { ...defaultProps, required: 'Påkrevd', optional: 'Eller ikke' },
};
