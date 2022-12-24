import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    color: string;
    transition?: string;
    buttonBg?: string;
  }
}
