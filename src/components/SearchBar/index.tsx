import React, {useMemo, useRef, useState} from 'react';

import {
  Pressable,
  VStack,
  Input,
  Divider,
  Box,
  SearchIcon,
  CloseIcon,
} from 'native-base';
import {TextInput} from 'react-native-gesture-handler';

const SearchBar = ({onChangeSearchBarText}) => {
  const refInput = useRef<TextInput>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClearInput = () => {
    refInput?.current?.clear();
  };

  const renderInputLeftElement = useMemo(() => {
    return <SearchIcon size="5" pl="8" color="warning.400" />;
  }, []);

  const renderInputRightElement = useMemo(() => {
    if (isFocused) {
      return (
        <Pressable onPress={handleClearInput}>
          <CloseIcon size="5" pl="8" color="warning.400" />
        </Pressable>
      );
    }
    return undefined;
  }, [isFocused]);

  return (
    <Box w="100%" alignItems="center">
      <VStack p="4">
        <Input
          ref={refInput}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={onChangeSearchBarText}
          placeholder="search for property"
          width="90%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={renderInputLeftElement}
          InputRightElement={renderInputRightElement}
        />
      </VStack>
      <Divider />
    </Box>
  );
};

export default SearchBar;
