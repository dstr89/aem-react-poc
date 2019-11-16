import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import HeadlineWithCtas from '../HeadlineWithCtas';
import {
  componentProperties,
  componentAttributes,
} from '../componentProperties';

const reactProps = { ...componentAttributes, ...componentProperties };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeadlineWithCtas {...reactProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<HeadlineWithCtas {...reactProps} />).toJSON();
  expect(renderTree).toMatchSnapshot();
});
