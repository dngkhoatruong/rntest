import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from './routes';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {AuthRoutes.map(route => (
        <Stack.Screen
          key={route.key}
          name={route.name}
          component={route.compoent}
        />
      ))}
    </Stack.Navigator>
  );
}
