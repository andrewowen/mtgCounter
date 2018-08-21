import React from 'react';
import PlayerLifeButton from '../src/components/PlayerLifeButton';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<PlayerLifeButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
