import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const Splash = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{marginBottom: verticalScale(15)}}>Hello screen</Text>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default Splash;
