import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

type propsType = {
  value: string;
  setState: (arg: string) => void;
};

const Input = ({value, setState}: propsType) => {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.iconInput}
        size={moderateScale(20)}
        color="black"
        name="search-outline"
      />
      <TextInput
        value={value}
        placeholder="Search"
        onChangeText={setState}
        autoCorrect={false}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(25, 0.3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignSelf: 'center',
    marginTop: verticalScale(3),
  },
  iconInput: {
    paddingLeft: moderateScale(25),
    paddingRight: moderateScale(15),
    alignItems: 'center',
  },
  textInput: {
    flex: 2 / 3,
    fontSize: moderateScale(14, 0.3),
    height: moderateScale(37, 0.3),
  },
});

export default Input;
