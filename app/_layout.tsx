import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/lib/theme';
import { useFonts, Geist_400Regular, Geist_500Medium, Geist_600SemiBold } from '@expo-google-fonts/geist';
import * as SplashScreen from 'expo-splash-screen'
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();
  const colorScheme = useColorScheme();
  
  const [fontsLoaded] = useFonts({
    Geist_400Regular,
    Geist_500Medium,
    Geist_600SemiBold
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? 'dark' : 'light'}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'
          }
        }}
      />
    </ThemeProvider>
  );
}