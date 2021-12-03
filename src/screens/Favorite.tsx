import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import ViewContact from '../components/Views/ViewContact';
import {useAppSelector} from '../store/hooks';
import {itemType} from './Search';

const Favorite = () => {
  const favorite = useAppSelector(state => state.favorite.favoritePeople);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{paddingHorizontal: scale(15)}}>
        <Text style={styles.textTitle}>Favorites</Text>
        <View style={{marginTop: verticalScale(30)}}>
          <FlatList
            data={favorite}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: itemType) => item.id.toString()}
            renderItem={({item}) => <ViewContact item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    textAlign: 'center',
    fontSize: moderateScale(25, 0.3),
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Favorite;
