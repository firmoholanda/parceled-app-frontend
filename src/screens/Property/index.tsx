import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {Box, HStack, VStack, Text} from 'native-base';
import type {PropertyParams} from './types';

const propertiesList = require('./properties.json');

function Property() {
  const renderItem = useCallback(({item}: {item: PropertyParams}) => {
    return (
      <Box p="2">
        <HStack space={[2, 3]} justifyContent="space-between">
          <VStack>
            <Text fontSize="md" color="coolGray.800" bold>
              {item.address}
            </Text>
            <Text color="coolGray.600">{item.owner}</Text>
          </VStack>
          <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
            {item.id}
          </Text>
        </HStack>
      </Box>
    );
  }, []);

  const itemSeparator = useCallback(() => {
    return (
      <Box
        // p="2"
        m="2"
        borderBottomWidth="1"
        borderColor="muted.300"
        shadow={3}
      />
    );
  }, []);

  return (
    <View>
      <Text fontSize="3xl">properties list</Text>
      <FlatList
        data={propertiesList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
}

export default Property;
