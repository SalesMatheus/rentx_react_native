import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes';
import { TabRoutes } from './app.tab.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {
        user ? <TabRoutes /> : <AuthRoutes />
      }
    </NavigationContainer>
  );
}