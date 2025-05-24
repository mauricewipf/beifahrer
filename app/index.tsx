import { useEffect } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/lib/auth';

export default function Index() {
  const router = useRouter();
  const { session } = useAuth();

  useEffect(() => {
    if (!session) {
      router.replace('/auth/guest');
    } else {
      router.replace('/chat');
    }
  }, [session, router]);

  return <View />;
}