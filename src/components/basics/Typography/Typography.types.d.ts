import { ColorsScheme as Colors, Fonts, FontWeights } from "../../../global";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption"
  | "overline";

export type TypographyAlign = "left" | "center" | "right" | "justify";

export interface TypographyProps {
  variant?: TypographyVariant;
  weight?: FontWeights;
  align?: TypographyAlign;
  color?: Colors;
  font?: Fonts;
  transform?: "none" | "capitalize" | "uppercase" | "lowercase";
  className?: string;
  children: React.ReactNode;
}
