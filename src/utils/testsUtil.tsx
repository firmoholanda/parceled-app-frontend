import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';

export const renderWithProviders = (component: React.ReactElement) => {
  return renderer.create(<NativeBaseProvider>{component}</NativeBaseProvider>);
};
