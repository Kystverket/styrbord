import style from './labelContent.module.css';
import { Spinner, Tag } from '~/main';
import { useTranslation } from '~/translations';

export interface LabelContentProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  text?: string | null;
  loading?: boolean;
}

const LabelContent = ({ text, loading = false, optional = false, required = false }: LabelContentProps) => {
  const { t } = useTranslation();

  if (!text) return null;

  const requiredText = typeof required === 'string' ? required : undefined;
  const optionalText = typeof optional === 'string' ? optional : undefined;

  return (
    <span>
      {text}
      {loading && <Spinner aria-label="spinning" data-size="xs" className={style.loading} />}
      {required && requiredText && (
        <Tag className={`${style.spacing} ${style.tag}`} data-color="warning">
          {requiredText}
        </Tag>
      )}
      {required && !requiredText && <span className={style.requiredStar}>*</span>}
      {optional && <Tag className={`${style.spacing} ${style.tag}`}>{optionalText ?? t('labelContent.optional')}</Tag>}
    </span>
  );
};

export default LabelContent;
