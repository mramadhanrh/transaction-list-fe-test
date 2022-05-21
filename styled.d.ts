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

  export interface DefaultTheme {
    color: Record<ColorVariant, string>;
  }
}
