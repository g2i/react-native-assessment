import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Text>Hello world</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
