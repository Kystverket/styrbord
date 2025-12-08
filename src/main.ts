import './css/index.scss';
import '@material-symbols/font-400/outlined.css';

export type { SupportedLanguage, ScreenSize } from './utils/types';

//^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\
//  Komponenter som er på vei ut
//^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\

export {
  default as DeprecatedErrorLabel,
  type ErrorLabelProps as DeprecatedErrorLabelProps,
} from './components/deprecated/ErrorLabel/errorLabel';

export {
  default as DeprecatedInputLabel,
  type InputLabelProps as DeprecatedInputLabelProps,
} from './components/deprecated/InputLabel/inputLabel';

export {
  Details as DeprecatedDetails,
  type DetailsProps as DeprecatedDetailsProps,
} from './components/deprecated/Details/Details';

export { default as DeprecatedCard, type CardProps as DeprecatedCardProps } from './components/deprecated/Card/Card';

//^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\
//  Egenproduserte komponenter
//^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\

export { default as KyvDivider } from './components/kystverket/KyvDivider/kyvDivider';

export { default as Alert } from './components/kystverket/Alert/alert';
export type { AlertLevel } from './components/kystverket/Alert/alert.types';
export type { AlertProps } from './components/kystverket/Alert/alert';

export { default as Box } from './components/kystverket/Box/box';
export type { BoxProps } from './components/kystverket/Box/box';

export { default as Stepper } from './components/kystverket/Stepper/stepper';
export type { StepperProps } from './components/kystverket/Stepper/stepper';

export { default as LabelContent, type LabelContentProps } from './components/kystverket/LabelContent/labelContent';

export { default as Icon } from './components/kystverket/Icon/icon';
export type { IconId } from './components/kystverket/Icon/icon.types';

export * from './components/kystverket/Image/image';

export { Body, Accent, Typography } from './components/kystverket/Typography/typography';
export type {
  TypographyProps,
  BodyTypographyProps,
  AccentTypographyProps,
  LabelTypographyProps,
} from './components/kystverket/Typography/typography';

export { default as BorderedToggleGroup } from './components/kystverket/BorderedToggleGroup/borderedToggleGroup';
export type { BorderedToggleGroupProps } from './components/kystverket/BorderedToggleGroup/borderedToggleGroup';

export { default as BorderedRadioGroup } from './components/kystverket/BorderedRadioGroup/borderedRadioGroup';
export type { BorderedRadioGroupProps } from './components/kystverket/BorderedRadioGroup/borderedRadioGroup';

export { Summary } from './components/kystverket/Summary/summary';
export type { SummaryProps, SummaryRowProps } from './components/kystverket/Summary/summary.types';

export { Logo } from './components/kystverket/Logo/Logo';
export type { LogoProps, LogoVariant } from './components/kystverket/Logo/Logo';

export { Footer } from './components/kystverket/Footer/Footer';
export type { FooterProps } from './components/kystverket/Footer/Footer';

export { Header } from './components/kystverket/Header/Header';
export type { HeaderProps } from './components/kystverket/Header/Header';

export { Datepicker, type DatepickerProps } from './components/kystverket/Datepicker/Datepicker';

export { DateTimePicker, type DateTimePickerProps } from './components/kystverket/DateTimePicker/DateTimePicker';

export { FileUploader, type FileUploaderProps } from './components/kystverket/FileUploader/FileUploader';
export {
  FileUploaderContext,
  type FileUploaderContextProps,
} from './components/kystverket/FileUploader/FileUploader.context';
export type * from './components/kystverket/FileUploader/FileUploader.types';

export { default as CardTitle, type CardTitleProps } from './components/designsystemet/CardTitle/CardTitle';

//^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\
//  Komponenter fra Designsystemet
//^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\_/^\

export { Button } from './components/designsystemet/Button/Button';
export type { ButtonProps } from './components/designsystemet/Button/Button';

export { TextInput } from './components/designsystemet/TextInput/TextInput';
export type { TextInputProps } from './components/designsystemet/TextInput/TextInput';

export { NumberInput } from './components/designsystemet/NumberInput/NumberInput';
export type { NumberInputProps } from './components/designsystemet/NumberInput/NumberInput';

export { TextArea } from './components/designsystemet/TextArea/TextArea';
export type { TextAreaProps } from './components/designsystemet/TextArea/TextArea';

export type { InputSize } from './utils/input/input';

export { Select } from './components/designsystemet/Select/Select';
export type { SelectProps, SelectOption } from './components/designsystemet/Select/Select';

export { default as Tabs } from './components/designsystemet/Tabs/Tabs';
export type { TabsProps } from './components/designsystemet/Tabs/Tabs';

export { default as Tag } from './components/designsystemet/Tag/Tag';
export type { TagProps } from './components/designsystemet/Tag/Tag';

export { Link } from './components/designsystemet/Link/Link';
export type { LinkProps } from './components/designsystemet/Link/Link';

export { default as Table } from './components/designsystemet/Table/Table';

export { Avatar } from './components/designsystemet/Avatar/Avatar';
export type { AvatarProps } from './components/designsystemet/Avatar/Avatar';

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//
// RE-EKSPORT AV DESIGNSYSTEMET
//
// Tidligere eksportere vi med export * from '@digdir/designsystemet-react';
// Dette ga denne feilen:
// "It's currently unsupported to use "export *" in a client boundary".
// Alt eksporteres nå eksplisitt.
//
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

export { EXPERIMENTAL_Suggestion as Suggestion } from '@digdir/designsystemet-react';

export type { BadgePositionProps, BadgeProps } from '@digdir/designsystemet-react';
export { Badge, BadgePosition } from '@digdir/designsystemet-react';
export type {
  BreadcrumbsItemProps,
  BreadcrumbsLinkProps,
  BreadcrumbsListProps,
  BreadcrumbsProps,
} from '@digdir/designsystemet-react';
export { Breadcrumbs, BreadcrumbsItem, BreadcrumbsLink, BreadcrumbsList } from '@digdir/designsystemet-react';
export type { ComboboxEmptyProps, ComboboxOptionProps, ComboboxProps } from '@digdir/designsystemet-react';
export { Combobox, ComboboxEmpty, ComboboxOption } from '@digdir/designsystemet-react';
export type { CardBlockProps, CardProps } from '@digdir/designsystemet-react';
export { Card, CardBlock } from '@digdir/designsystemet-react';
export type { CheckboxProps } from '@digdir/designsystemet-react';
export { Checkbox } from '@digdir/designsystemet-react';
export type {
  ChipButtonProps,
  ChipCheckboxProps,
  ChipRadioProps,
  ChipRemovableProps,
} from '@digdir/designsystemet-react';
export { Chip, ChipButton, ChipCheckbox, ChipRadio, ChipRemovable } from '@digdir/designsystemet-react';
export type { DetailsContentProps, DetailsProps, DetailsSummaryProps } from '@digdir/designsystemet-react';
export { Details, DetailsContent, DetailsSummary } from '@digdir/designsystemet-react';
export type {
  DialogBlockProps,
  DialogProps,
  DialogTriggerContextProps,
  DialogTriggerProps,
} from '@digdir/designsystemet-react';
export { Dialog, DialogBlock, DialogTrigger, DialogTriggerContext } from '@digdir/designsystemet-react';
export type { DividerProps } from '@digdir/designsystemet-react';
export { Divider } from '@digdir/designsystemet-react';
export type {
  DropdownButtonProps,
  DropdownHeadingProps,
  DropdownItemProps,
  DropdownListProps,
  DropdownProps,
  DropdownTriggerContextProps,
} from '@digdir/designsystemet-react';
export {
  Dropdown,
  DropdownButton,
  DropdownHeading,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
  DropdownTriggerContext,
} from '@digdir/designsystemet-react';
export type {
  ErrorSummaryHeadingProps,
  ErrorSummaryItemProps,
  ErrorSummaryLinkProps,
  ErrorSummaryListProps,
  ErrorSummaryProps,
} from '@digdir/designsystemet-react';
export {
  ErrorSummary,
  ErrorSummaryHeading,
  ErrorSummaryItem,
  ErrorSummaryLink,
  ErrorSummaryList,
} from '@digdir/designsystemet-react';
export type {
  FieldAffixesProps,
  FieldAffixProps,
  FieldCounterProps,
  FieldDescriptionProps,
  FieldProps,
} from '@digdir/designsystemet-react';
export { Field, FieldAffix, FieldAffixes, FieldCounter, FieldDescription } from '@digdir/designsystemet-react';
export type { FieldsetDescriptionProps, FieldsetLegendProps, FieldsetProps } from '@digdir/designsystemet-react';
export { Fieldset, FieldsetDescription, FieldsetLegend } from '@digdir/designsystemet-react';
export type { HeadingProps } from '@digdir/designsystemet-react';
export { Heading } from '@digdir/designsystemet-react';
export type { InputProps } from '@digdir/designsystemet-react';
export { Input } from '@digdir/designsystemet-react';
export type { LabelProps } from '@digdir/designsystemet-react';
export { Label } from '@digdir/designsystemet-react';
export type { ListItemProps, ListOrderedProps, ListUnorderedProps } from '@digdir/designsystemet-react';
export { List, ListItem, ListOrdered, ListUnordered } from '@digdir/designsystemet-react';
export type {
  PaginationButtonProps,
  PaginationItemProps,
  PaginationListProps,
  PaginationProps,
} from '@digdir/designsystemet-react';
export { Pagination, PaginationButton, PaginationItem, PaginationList } from '@digdir/designsystemet-react';
export type { ParagraphProps } from '@digdir/designsystemet-react';
export { Paragraph } from '@digdir/designsystemet-react';
export type { PopoverProps, PopoverTriggerContextProps, PopoverTriggerProps } from '@digdir/designsystemet-react';
export { Popover, PopoverTrigger, PopoverTriggerContext } from '@digdir/designsystemet-react';
export type { RadioProps } from '@digdir/designsystemet-react';
export { Radio } from '@digdir/designsystemet-react';
export type { SearchButtonProps, SearchClearProps, SearchInputProps, SearchProps } from '@digdir/designsystemet-react';
export { Search, SearchButton, SearchClear, SearchInput } from '@digdir/designsystemet-react';
export type { SelectOptgroupProps, SelectOptionProps } from '@digdir/designsystemet-react';
export { SelectOptgroup } from '@digdir/designsystemet-react';
export type { SkeletonProps } from '@digdir/designsystemet-react';
export { Skeleton } from '@digdir/designsystemet-react';
export type { SkipLinkProps } from '@digdir/designsystemet-react';
export { SkipLink } from '@digdir/designsystemet-react';
export type { SpinnerProps } from '@digdir/designsystemet-react';
export { Spinner } from '@digdir/designsystemet-react';
export type {
  SuggestionClearProps,
  SuggestionEmptyProps,
  SuggestionInputProps,
  SuggestionItem,
  SuggestionListProps,
  SuggestionMultipleProps,
  SuggestionOptionProps,
  SuggestionProps,
  SuggestionSingleProps,
} from '@digdir/designsystemet-react';
export {
  EXPERIMENTAL_Suggestion,
  EXPERIMENTAL_SuggestionClear,
  EXPERIMENTAL_SuggestionEmpty,
  EXPERIMENTAL_SuggestionInput,
  EXPERIMENTAL_SuggestionList,
  EXPERIMENTAL_SuggestionOption,
} from '@digdir/designsystemet-react';
export type { SwitchProps } from '@digdir/designsystemet-react';
export { Switch } from '@digdir/designsystemet-react';
export type {
  TableBodyProps,
  TableCellProps,
  TableFootProps,
  TableHeaderCellProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from '@digdir/designsystemet-react';
export { TableBody, TableCell, TableFoot, TableHead, TableHeaderCell, TableRow } from '@digdir/designsystemet-react';
export type { TabsListProps, TabsPanelProps, TabsTabProps } from '@digdir/designsystemet-react';
export { TabsList, TabsPanel, TabsTab } from '@digdir/designsystemet-react';
export type { TextareaProps } from '@digdir/designsystemet-react';
export { Textarea } from '@digdir/designsystemet-react';
export type { TextfieldProps } from '@digdir/designsystemet-react';
export { Textfield } from '@digdir/designsystemet-react';
export type { ToggleGroupItemProps, ToggleGroupProps } from '@digdir/designsystemet-react';
export { ToggleGroup, ToggleGroupItem } from '@digdir/designsystemet-react';
export type { TooltipProps } from '@digdir/designsystemet-react';
export { Tooltip } from '@digdir/designsystemet-react';
export type { ValidationMessageProps } from '@digdir/designsystemet-react';
export { ValidationMessage } from '@digdir/designsystemet-react';
