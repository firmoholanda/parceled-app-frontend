import 'react-native';
import React from 'react';
import SearchBar from '../../components/SearchBar';

import {renderWithProviders} from '../../utils/testsUtil';

it('renders correctly', () => {
  renderWithProviders(<SearchBar onChangeSearchBarText={() => {}} />);
});
