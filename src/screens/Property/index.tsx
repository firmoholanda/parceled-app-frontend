import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Box, HStack, Text} from 'native-base';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import type {PropertyParams} from './types';

const apiURL = 'http://localhost:3000/properties';

function Property() {
  const [propertiesList, setPropertiesList] = useState<PropertyParams[]>([]);

  const fetchProperties = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();

    setPropertiesList(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <SafeAreaView>
      <Menu params={propertiesList} />
      <Box p={4} display="flex" alignItems="center">
        <Text p={4} fontSize="xl">
          this is the react native component for the parceled sr. react code
          challenge - 2023. please click on property to see the list of
          properties available in the app.
        </Text>
        <HStack space={2}>
          <Text>total properties available:</Text>
          <Text bold>{propertiesList.length}</Text>
        </HStack>
        <HStack space={2}>
          <Text>api url:</Text>
          <Text bold>{apiURL}</Text>
        </HStack>
        <Footer />
      </Box>
    </SafeAreaView>
  );
}

export default Property;
