/* @flow */
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import { componentStyleReset } from '../styles';
import { themed } from '../themes';
import Flex, { FlexItem } from '../Flex';
import TextInput from '../TextInput';
import Button from '../Button';

import { paginationTheme } from './themes';

export const PaginationRoot = withProps({
  as: 'nav',
  justifyContent: 'end'
})(
  styled(Flex)(({ theme: baseTheme }) => {
    const theme = paginationTheme(baseTheme);

    return {
      ...componentStyleReset(baseTheme),

      flexWrap: 'wrap-reverse',
      marginBottom: `-${theme.Pagination_gutterWidth}`,

      '& > *': {
        marginBottom: theme.Pagination_gutterWidth
      }
    };
  })
);

export const PagesRoot = styled(FlexItem)(({ theme: baseTheme }) => {
  const theme = paginationTheme(baseTheme);
  const rtl = theme.direction === 'rtl';
  const middleMargin = rtl ? 'marginLeft' : 'marginRight';
  return {
    '& > button, & > span': {
      '&:not(:last-child)': {
        [middleMargin]: theme.Pagination_gutterWidth
      }
    }
  };
});

const ThemedButton = themed(Button)(({ theme }) => ({
  color_disabled: theme.color_theme
}));

export const PagesEllipsisButton = withProps({
  'aria-disabled': true,
  as: 'span',
  minimal: true,
  size: 'medium'
})(
  styled(ThemedButton)({
    pointerEvents: 'none'
  })
);

export const PageJumperNumberInput = styled(TextInput)({
  '& > input': {
    MozAppearance: 'textfield',

    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    }
  }
});

export const PageJumperRoot = styled(FlexItem)(({ width }) => ({
  width
}));
