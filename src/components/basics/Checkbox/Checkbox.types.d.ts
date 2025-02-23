import { Sizes } from "../../../global";

export interface CheckboxProps {
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  size?: Exclude<Sizes, "large">;
  className?: string;
  onChange?: (checked: boolean) => void;
}
