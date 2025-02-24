import { ColorsScheme, IconPosition, Sizes } from "../../../global";

export interface TagProps {
  variant?: ColorsScheme;
  closable?: boolean;
  size?: Sizes;
  className?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

export interface TagWithIconProps extends TagProps {
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
}
