import style from './labelContent.module.css';
import { Spinner, Tag } from '~/main';

export interface LabelContentProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  text?: string | null;
  loading?: boolean;
}

const LabelContent = ({ text, loading = false, optional = false, required = false }: LabelContentProps) => {
  if (!text) return null;

  const requiredText = typeof required === 'string' ? required : undefined;
  const optionalText = typeof optional === 'string' ? optional : undefined;

  return (
    <span>
      {text}
      {loading && <Spinner aria-label="spinning" data-size="xs" className={style.loading} />}
      {required && requiredText && (
        <Tag className={style.spacing} data-color="warning">
          {requiredText ?? 'Må fylles ut'}
        </Tag>
      )}
      {required && !requiredText && <span className={style.requiredStar}>*</span>}
      {optional && <Tag className={style.spacing}>{optionalText ?? 'Valgfritt'}</Tag>}
    </span>
  );
};

export default LabelContent;
