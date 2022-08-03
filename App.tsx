import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navigation from './src/navigation/navigation';
import appStyles from './src/utils/appStyles';
import {convertNavigationScreensToObj} from './src/utils/helper';
import {PREFIXES} from './src/utils/links';

const config = {
  screens: convertNavigationScreensToObj(),
};

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <NavigationContainer
        linking={{
          prefixes: PREFIXES,
          config,
        }}>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
