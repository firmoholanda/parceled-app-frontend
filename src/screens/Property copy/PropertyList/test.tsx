import 'react-native';
import React from 'react';
import Property from '../../Property';

import {renderWithProviders} from '../../../utils/testsUtil';

it('renders correctly Property', () => {
  renderWithProviders(<Property />);
});
