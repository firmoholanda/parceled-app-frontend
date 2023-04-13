import React from 'react';
import {Box, HStack, Text, VStack} from 'native-base';

function PropertyDetails({route}) {
  const {item} = route.params;

  console.log('item', item);

  const itemKeyValues = Object.entries(item);
  console.log('itemKeyValues', itemKeyValues);

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