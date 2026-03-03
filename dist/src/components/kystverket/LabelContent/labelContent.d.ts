export interface LabelContentProps {
    optional?: boolean | string | undefined;
    required?: boolean | string | undefined;
    text?: string | null;
    loading?: boolean;
}
declare const LabelContent: ({ text, loading, optional, required }: LabelContentProps) => React.JSX.Element | null;
export default LabelContent;
