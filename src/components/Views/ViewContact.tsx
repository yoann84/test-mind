import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import {itemType} from '../../screens/Search';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addOrdelete, selectId} from '../../store/reducers/favoriteSlice';

const ViewContact = ({item}: {item: itemType}) => {
  const dispatch = useAppDispatch();
  const idLiked = useAppSelector(selectId);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.avatar}} />
      <View style={styles.containerRightPart}>
        <Pressable
          style={styles.icon}
          hitSlop={moderateScale(15)}
          onPress={() => dispatch(addOrdelete(item))}>
          <Icon
            size={moderateScale(25)}
            color="black"
            name={idLiked.includes(item.id) ? 'heart' : 'heart-outline'}
          />
        </Pressable>
        <Text style={styles.text}>
          {item.first_name} {item.last_name}
        </Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(3),
    height: scale(100),
    marginBottom: verticalScale(13),
    marginTop: verticalScale(2),
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: 15,
    elevation: 3,
  },
  image: {
    height: scale(100),
    width: scale(100),
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  containerRightPart: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: scale(8),
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: verticalScale(15),
    right: scale(15),
  },
  text: {
    marginBottom: verticalScale(3),
    fontWeight: 'bold',
    fontSize: moderateScale(18, 0.3),
    color: 'black',
  },
});

export default ViewContact;
