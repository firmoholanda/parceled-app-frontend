import React from 'react';

import {Box, HStack, Text, Divider} from 'native-base';

const Footer = () => {
  return (
    <>
      <Box pt="100%" />
      <Divider my="2" />
      <HStack space={2}>
        <Text>parceled-app-api created by:</Text>
        <Text bold>firmo holanda</Text>
      </HStack>
    </>
  );
};

export default Footer;
