import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Google Sign-In" onPress={() => { }} />
    </View>
  );
}

Profile.screenOptions = (): NativeStackNavigationOptions => {
  return {
    headerTitle: () => (
      <Text style={{ fontSize: 18 }} numberOfLines={2} allowFontScaling={false}>
        HOME
      </Text>
    ),
  };
};

export default Profile;
