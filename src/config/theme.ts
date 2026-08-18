export type ColorTheme = 'Auto' | 'light' | 'dark';
export type HexColor = `#${string}`;

export interface ThemeConfig {
  colorTheme: ColorTheme;
  titleFontSize: string;
  darkBackgroundColor: HexColor;
  darkBackgroundTopColor: HexColor;
  darkBackgroundBottomColor: HexColor;
  lightBackgroundColor: HexColor;
  lightBackgroundTopColor: HexColor;
  lightBackgroundBottomColor: HexColor;
  darkFontColor: HexColor;
  lightFontColor: HexColor;
  darkHighlightFontColor: HexColor;
  lightHighlightFontColor: HexColor;
}

const theme: ThemeConfig = {
  colorTheme: 'Auto', // 'Auto' | 'light' | 'dark'

  // 大标题（站点所有者姓名）字号，接受任意 CSS 长度值（px / rem / vw / clamp 等）
  titleFontSize: 'clamp(84px, 13vw, 200px)',

  darkBackgroundColor: '#1D1B2A', //#13111C
  darkBackgroundTopColor: '#13111C',
  darkBackgroundBottomColor: '#13111C',

  lightBackgroundColor: '#F8F7FC',
  lightBackgroundTopColor: '#FFFFFF',
  lightBackgroundBottomColor: '#17202c',

  darkFontColor: '#F3F3F6',
  lightFontColor: '#1E1B2E',

  darkHighlightFontColor: '#F72585',
  lightHighlightFontColor: '#F72585',
};

export default theme;
