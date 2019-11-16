import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SimpleBanner from '../SimpleBanner';
import {
  componentProperties,
  componentAttributes,
} from '../componentProperties';

const reactProps = { ...componentAttributes, ...componentProperties };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleBanner {...reactProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<SimpleBanner {...reactProps} />).toJSON();
  expect(renderTree).toMatchSnapshot();
});
