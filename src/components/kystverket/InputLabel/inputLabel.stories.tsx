import type { Meta, StoryObj } from '@storybook/react';
import InputLabel, { InputLabelProps } from './inputLabel';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Helpers/InputLabel',
  component: InputLabel,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: InputLabelProps = {
  text: 'Fyll inn ditt navn',
  children: <input type="text" />,
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
