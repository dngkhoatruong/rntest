import React, { useEffect, useState } from 'react';
import MainNavigation from './MainStacks';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthStacks';

export default function AppNavigation() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      setTimeout(() => {
        setIsLoggedIn(false);
        setIsLoading(false);
      }, 2000);
    };

    checkLoggedIn();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
