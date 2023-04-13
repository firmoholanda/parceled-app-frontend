import React, {useCallback} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Box, Pressable, HStack, VStack, Text} from 'native-base';

import {navigate} from '../../routes';
import type {PropertyParams} from './types';

const propertiesList = require('../../utils/properties.json');

function Property() {
  const handlePress = useCallback((item: PropertyParams) => {
    navigate('PropertyDetais', {item});
  }, []);

  const renderItem = useCallback(
    ({item}: {item: PropertyParams}) => {
      return (
        <Pressable onPress={() => handlePress(item)} key={item.id}>
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
        </Pressable>
      );
    },
    [handlePress],
  );

  const itemSeparator = useCallback(() => {
    return <Box m="2" borderBottomWidth="1" borderColor="muted.300" />;
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={propertiesList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={itemSeparator}
      />
    </SafeAreaView>
  );
}

export default Property;
