import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className='text-xl font-bold my-10'>Welcome to the ReState</Text>
      <Link href='/signin'>Go to SignIn</Link>
      <Link href='/explore'>Go to Explore</Link>
      <Link href='/profile'>Go to Profile</Link>
      <Link href='/properties/124'>Go to Property 123</Link>
    </View>
  );
}
