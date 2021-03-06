/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import Button from '../../../../library/Button';

const Root = styled('div')(({ theme }) => ({
  '& > button': {
    marginRight: theme.space_inline_sm,
    marginBottom: theme.space_stack_sm
  }
}));

export default function Variants() {
  return (
    <Root>
      <Button variant="success" primary>
        Success
      </Button>
      <Button variant="warning" primary>
        Warning
      </Button>
      <Button variant="danger" primary>
        Danger
      </Button>
    </Root>
  );
}
