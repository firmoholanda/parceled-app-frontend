import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './routes';

import {NativeBaseProvider} from 'native-base';

import Property from './screens/Property';
import PropertyDetails from './screens/Property/PropertyDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Property">
          <Stack.Screen
            name="Property"
            component={Property}
            options={{title: 'property list'}}
          />
          <Stack.Screen
            name="PropertyDetais"
            component={PropertyDetails}
            options={{title: 'property details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
