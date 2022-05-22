import 'styled-components';

declare module 'styled-components' {
  export type ColorVariant =
    | 'cloud'
    | 'green'
    | 'orange'
    | 'linen'
    | 'lightgray'
    | 'platinum'
    | 'white'
    | 'black';

  export type ButtonVariant = 'primary' | 'secondary' | 'outline';

  export interface DefaultTheme {
    color: Record<ColorVariant, string>;
    buttonColor: Record<ButtonVariant, string>;
    buttonBorderColor: Record<ButtonVariant, string>;
    buttonTextColor: Record<ButtonVariant, string>;
  }
}
