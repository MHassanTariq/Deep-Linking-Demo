import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationParams, NavigationScreens} from './helper';
import ScreenA from '../screens/screenA/screenA';
import ScreenB from '../screens/screenB/screenB';
import ScreenC from '../screens/screenC/screenC';
import LinkingScreen from '../screens/linkingScreen/linkingScreen';

const Stack = createNativeStackNavigator<NavigationParams>();

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationScreens.ScreenA} component={ScreenA} />
      <Stack.Screen name={NavigationScreens.ScreenB} component={ScreenB} />
      <Stack.Screen name={NavigationScreens.ScreenC} component={ScreenC} />
      <Stack.Screen
        name={NavigationScreens.LinkingScreen}
        component={LinkingScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
