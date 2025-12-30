import images from '@constants/images';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../constants/icons';

const SignIn = () => {
  const handleLogin = async () => {
    // const result = await login();
    // if (result) {
    //   refetch();
    // } else {
    //   Alert.alert('Error', 'Failed to login');
    // }
    console.log('Login button pressed');
  };
  return (
    <SafeAreaView className='bg-white flex-1'>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        contentContainerClassName='px-10 pb-8'
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={images.onboarding}
          className='w-full h-96'
          resizeMode='contain'
        />
        <Image
          source={images.onboarding}
          className='w-full h-96'
          resizeMode='contain'
        />
        <Text className='text-base text-center uppercase font-rubik text-black-200'>
          Welcome To Real Scout
        </Text>
        <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
          Let´s Get You Closer To {'\n'}
          <Text className='text-primary-300'>Your Ideal Home</Text>
        </Text>
        <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
          Login to Real Scout with Google
        </Text>
        <TouchableOpacity
          onPress={handleLogin}
          className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'
        >
          <View className='flex flex-row items-center justify-center'>
            <Image
              source={icons.google}
              className='w-5 h-5'
              resizeMode='contain'
            />
            <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogin}
          className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'
        >
          <View className='flex flex-row items-center justify-center'>
            <Image
              source={icons.google}
              className='w-5 h-5'
              resizeMode='contain'
            />
            <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogin}
          className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'
        >
          <View className='flex flex-row items-center justify-center'>
            <Image
              source={icons.google}
              className='w-5 h-5'
              resizeMode='contain'
            />
            <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
