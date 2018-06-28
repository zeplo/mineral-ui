/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import IconArrowDropdownDown from '../Icon/IconArrowDropdownDown';
import IconArrowDropdownUp from '../Icon/IconArrowDropdownUp';
import TableColumnHeader from './TableColumnHeader';

import type { SortComparator } from './withSort';
import type { Messages } from './DataTable';

type Props = {
  /** Rendered content */
  children: React$Node,
  /** Accessible label */
  label?: string,
  /** Name of column */
  name: string,
  /** TODO: Controlled */
  sort?: {
    key: string,
    ascending?: boolean
  },
  sortComparator?: SortComparator,
  /** Called when button is clicked */
  sortFn: (key: string, comparator?: SortComparator) => -1 | 0 | 1,
  /** Various messages and labels used by DataTable */
  messages: Messages
};

const componentTheme = (baseTheme: Object) => ({
  TableColumnHeader_border_focus: `1px solid ${
    baseTheme.borderColor_theme_focus
  }`,
  ...baseTheme
});

const focusStyles = (theme) => ({
  outline: theme.TableColumnHeader_border_focus,
  outlineOffset: `-${theme.TableColumnHeader_border_focus.split(' ')[0]}` // TODO: IE?
});

const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      cursor: 'pointer',

      '&:hover': {
        color: theme.icon_color_theme
      },

      '&:focus-within': focusStyles(theme)
    };
  },
  button: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      background: 'none',
      border: 0,
      color: 'inherit',
      cursor: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      verticalAlign: theme.TableColumnHeader_verticalAlign,
      whiteSpace: 'nowrap',
      width: '100%',

      '&:focus': focusStyles(theme),

      '*:focus-within > &:focus': {
        outline: 0
      }
    };
  },
  content: {
    whiteSpace: 'normal'
  },
  iconHolder: ({ isActiveSort, direction, theme }) => {
    const iconAdjustment = pxToEm(2);
    const space = `${parseFloat(theme.space_inline_xxs) +
      parseFloat(iconAdjustment)}em`;

    return {
      color: theme.icon_color,
      display: 'inline-block',
      height: '0.875em',
      marginLeft: theme.direction === 'ltr' ? space : null,
      marginRight: theme.direction === 'rtl' ? space : null,
      opacity: isActiveSort ? null : 0,
      position: 'relative',
      top: direction === 'ascending' ? 2 : 1,
      width: '0.875em',

      '& > [role="img"]': {
        margin: `-${iconAdjustment}`
      },

      '*:hover > button > &, button:focus > &': {
        color: 'inherit',
        opacity: 1
      }
    };
  }
};

const Root = createStyledComponent(TableColumnHeader, styles.root, {
  withProps: { noPadding: true }
});
const Button = createStyledComponent(TableColumnHeader, styles.button, {
  withProps: { element: 'button' }
});
const Content = createStyledComponent('span', styles.content);
// TODO: Maybe not necessary
const IconHolder = createStyledComponent('span', styles.iconHolder);

const iconProps = {
  'aria-hidden': true,
  size: 'auto'
};
const sortIcon = {
  ascending: <IconArrowDropdownUp {...iconProps} />,
  descending: <IconArrowDropdownDown {...iconProps} />
};

export default function SortableColumnHeader({
  children,
  label,
  name,
  messages,
  sort,
  sortComparator,
  sortFn,
  ...restProps
}: Props) {
  const sortColumn = sort && sort.key;
  const ascending = sort && sort.ascending;

  const isActiveSort = sortColumn === name;
  const activeDirection = isActiveSort
    ? ascending ? 'ascending' : 'descending'
    : undefined;
  const nextDirection = ascending ? 'descending' : 'ascending';

  const a11yLabel = label || children;

  const rootProps = {
    ...restProps,
    // TODO: Mac Chrome VO (others?) announces this twice?
    'aria-label': a11yLabel,
    'aria-sort': sortColumn === name ? activeDirection : 'none',
    // TODO: Feels wrong to duplicate onClick like this (see buttonProps)
    // onClick: () => {
    //   onClick(name, nextDirection);
    // },
    role: 'columnheader'
  };

  const buttonProps = {
    ...restProps,
    'aria-label': messages.sortButtonLabel(messages.sortOrder[nextDirection]),
    onClick: () => {
      sortFn(name, sortComparator);
    }
  };
  const iconHolderProps = {
    direction: activeDirection || 'ascending',
    isActiveSort
  };

  return (
    <Root {...rootProps}>
      <Button {...buttonProps}>
        <Content>{children}</Content>&nbsp;<IconHolder {...iconHolderProps}>
          {sortIcon[iconHolderProps.direction]}
        </IconHolder>
      </Button>
    </Root>
  );
}