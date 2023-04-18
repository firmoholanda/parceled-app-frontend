import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './routes';

import {NativeBaseProvider} from 'native-base';

import Property from './screens/Property';
import PropertyList from './screens/Property/PropertyList';
import PropertyDetails from './screens/Property/PropertyDetail';
import Documentation from './screens/Documentation';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Property">
          <Stack.Screen
            name="Property"
            component={Property}
            options={{title: 'properties home'}}
          />
          <Stack.Screen
            name="PropertyList"
            component={PropertyList}
            options={{title: 'property List'}}
          />
          <Stack.Screen
            name="PropertyDetais"
            component={PropertyDetails}
            options={{title: 'property details'}}
          />
          <Stack.Screen
            name="Documentation"
            component={Documentation}
            options={{title: 'documentation'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
