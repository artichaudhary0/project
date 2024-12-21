export type ThemeColor = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export type Theme = {
  name: string;
  colors: ThemeColor;
};