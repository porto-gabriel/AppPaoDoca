import { Stack } from 'expo-router';

import { EstoqueProvider } from '../contexts/EstoqueContext';

export default function RootLayout() {
  return (
    <EstoqueProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </EstoqueProvider>
  );
}