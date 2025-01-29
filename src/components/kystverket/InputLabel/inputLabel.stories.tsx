import type { Meta, StoryObj } from '@storybook/react';
import InputLabel, { InputLabelProps } from './inputLabel';
import { Textfield } from '@digdir/designsystemet-react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/InputLabel',
  component: InputLabel,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: InputLabelProps = {
  text: 'Fyll inn ditt navn',
  children: <Textfield />,
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
