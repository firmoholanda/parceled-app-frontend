import 'react-native';
import React from 'react';
import PropertyDetails from '../../Property/PropertyDetail';

import {renderWithProviders} from '../../../utils/testsUtil';

it('renders correctly PropertyDetails', () => {
  renderWithProviders(<PropertyDetails />);
});
