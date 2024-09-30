import classes from "./icon.module.css";
import { IconId } from "./icon.types";

export interface MaterialIconProps {
  material: IconId;
  filled?: boolean;
  className?: string;
}

const Icon = ({
  material,
  filled = false,
  className = "",
}: MaterialIconProps) => {
  const classNames = [classes.icon, className, "material-symbols-outlined"];

  if (filled) {
    classNames.push(classes.filled);
  }

  return (
    <span aria-hidden className={classNames.join(" ")}>
      {material}
    </span>
  );
};

export default Icon;
