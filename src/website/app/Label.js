/* @flow */
import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React$Node,
  variant?: 'success' | 'warning' | 'danger'
};

const Root = styled('span')(({ theme, variant }) => {
  const backgroundColor = variant
    ? theme[`backgroundColor_${variant}Primary`]
    : theme.color_theme_60;

  return {
    backgroundColor,
    borderRadius: theme.borderRadius_1,
    bottom: '0.15em', // optical adjustment for middle vertical alignment
    color: theme.color_themePrimary,
    fontSize: theme.fontSize_mouse,
    padding: `${theme.space_stack_xs} ${theme.space_inset_sm}`,
    position: 'relative', // optical adjustment for middle vertical alignment
    textTransform: 'uppercase',
    whiteSpace: 'nowrap'
  };
});

export default function Label(props: Props) {
  return <Root {...props} />;
}
