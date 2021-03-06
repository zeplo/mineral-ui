/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import FormField from '../FormField';
import examples from '../../../website/app/demos/Form/FormField/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowFormField(props = {}) {
  const formFieldProps = {
    label: 'Test',
    ...props
  };

  return shallow(<FormField {...formFieldProps} />);
}

describe('FormField', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const formField = shallowFormField();

      expect(formField.exists()).toEqual(true);
    });
  });
});
