import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box, Text} from 'native-base';

import Footer from '../../components/Footer';

function Documentation() {
  return (
    <SafeAreaView>
      <Box p={4} display="flex" alignItems="center">
        <Text p={4} fontSize="xl">
          documentation
        </Text>
        <Footer />
      </Box>
    </SafeAreaView>
  );
}

export default Documentation;
