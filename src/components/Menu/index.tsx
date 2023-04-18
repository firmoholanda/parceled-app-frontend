import React, {useCallback} from 'react';

import {Box, Pressable, HStack, Text} from 'native-base';
import {MenuParams} from './types';
import {navigate} from '../../routes/index';

const Menu = ({params}: MenuParams) => {
  const handlePress = useCallback(
    (menuItemName: string) => {
      switch (menuItemName) {
        case 'home':
          navigate('Property');
          break;
        case 'properties':
          navigate('PropertyList', {propertiesList: params});
          break;
        case 'documentation':
          navigate('Documentation');
          break;
      }
    },
    [params],
  );

  const renderItem = (item: any) => {
    return (
      <Pressable onPress={() => handlePress(item.name)} key={item.name}>
        <Text
          color="white"
          fontSize="20"
          px="3"
          fontWeight={item.isActive ? 'bold' : 'normal'}>
          {item.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <Box>
      <HStack
        bg="warning.400"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          {renderItem({name: 'home', isActive: true})}
          {renderItem({name: 'properties'})}
          {renderItem({name: 'documentation'})}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Menu;
