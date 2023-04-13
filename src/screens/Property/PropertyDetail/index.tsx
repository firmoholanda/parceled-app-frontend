import React from 'react';
import {Box, HStack, Text, VStack} from 'native-base';

import {RouteProp, useRoute} from '@react-navigation/native';

import type {RouteParams} from './types';

function PropertyDetails() {
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const {item} = route.params;

  const itemKeyValues = Object.entries(item);

  return (
    <Box>
      <VStack p="4">
        <Text fontSize="lg" color="coolGray.800" bold pb="4">
          {item.address}
        </Text>
        {itemKeyValues.map(([key, value]) => {
          return (
            <HStack space={[2, 3]} justifyContent="space-between" key={key}>
              <Text color="coolGray.600">{key}: </Text>
              <Text color="coolGray.600">{value}</Text>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
}

export default PropertyDetails;
