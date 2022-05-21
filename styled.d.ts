import "styled-components";

declare module "styled-components" {
  export type ColorVariant = "cloud" | "green" | "orange";

  export interface DefaultTheme {
    color: Record<ColorVariant, string>;
  }
}
