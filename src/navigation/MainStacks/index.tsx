import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainRoutes from './routes';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      {MainRoutes.map(route => (
        <Stack.Screen
          key={route.key}
          name={route.name}
          component={route.compoent}
          options={route.screenOptions}
        />
      ))}
    </Stack.Navigator>
  );
}
