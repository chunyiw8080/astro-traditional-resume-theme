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

  darkBackgroundColor: '#000000',
  darkBackgroundTopColor: '#FF7CA2',
  darkBackgroundBottomColor: '#FF7CA2',

  lightBackgroundColor: '#8AEED1',
  lightBackgroundTopColor: '#F35B83',
  lightBackgroundBottomColor: '#F35B83',

  darkFontColor: '#FFFFFF',
  lightFontColor: '#000000',

  darkHighlightFontColor: '#FFFFFF',
  lightHighlightFontColor: '#000000',
};

export default theme;
