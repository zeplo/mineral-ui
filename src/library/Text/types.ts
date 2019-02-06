/* @flow */
import { ALIGN, APPEARANCE, FONT_WEIGHT } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeObj,
  ThemeValue
} from '../themes/types';

type Align = keyof typeof ALIGN;
type Appearance = keyof typeof APPEARANCE;
type FontWeight = keyof typeof FONT_WEIGHT | number;

export type TextProps = {
  align?: Align,
  appearance?: Appearance,
  children: React.ReactNode,
  color?: string,
  as?: string,
  fontWeight?: FontWeight,
  inherit?: boolean,
  noMargins?: boolean,
  parentAs?: string,
  truncate?: boolean | number | string
};

export type TextDefaultProps = {
  appearance: Appearance
};

export type TextProviderProps = TextProps;

export type TextProviderDefaultProps = TextDefaultProps & {
  as: string
};

export type ElementContextType = string | null;

export type TextWithThemeOverrides = ({
  appearance?: string,
  as?: string,
  children: React.ReactNode,
  displayName: string,
  textComponent: React.ComponentType,
  theme: ThemeObj
}) => React.ReactElement<any>;

export type TextThemeFn = ComponentThemeFn<TextTheme>;
export type TextTheme = ComponentTheme<TextThemeKeys>;
type TextThemeKeys = {
  Text_color: ThemeValue,
  Text_color_h1: ThemeValue,
  Text_color_h2: ThemeValue,
  Text_color_h3: ThemeValue,
  Text_color_h4: ThemeValue,
  Text_color_h5: ThemeValue,
  Text_color_h6: ThemeValue,
  Text_color_mouse: ThemeValue,
  Text_fontSize: ThemeValue,
  Text_fontSize_h1: ThemeValue,
  Text_fontSize_h2: ThemeValue,
  Text_fontSize_h3: ThemeValue,
  Text_fontSize_h4: ThemeValue,
  Text_fontSize_h5: ThemeValue,
  Text_fontSize_h6: ThemeValue,
  Text_fontSize_mouse: ThemeValue,
  Text_fontSize_prose: ThemeValue,
  Text_fontWeight_h1: ThemeValue,
  Text_fontWeight_h2: ThemeValue,
  Text_fontWeight_h3: ThemeValue,
  Text_fontWeight_h4: ThemeValue,
  Text_fontWeight_h5: ThemeValue,
  Text_fontWeight_h6: ThemeValue,
  Text_lineHeight: ThemeValue,
  Text_lineHeight_heading: ThemeValue,
  Text_lineHeight_headingSmall: ThemeValue,
  Text_marginBottom: ThemeValue,
  Text_marginBottom_heading: ThemeValue
};