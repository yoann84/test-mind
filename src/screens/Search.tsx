import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useQuery} from 'react-query';
import {getFromApi} from '../api/host';
import Input from '../components/Input/Input';
import ViewContact from '../components/Views/ViewContact';

export type itemType = {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  id: number;
};

const Search = () => {
  const [input, setInput] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(1);

  const {data: resultsApi, status} = useQuery(['searchContacts', page], () =>
    getFromApi({page, delay: 1}),
  );

  const resultsFiltered =
    resultsApi &&
    resultsApi.filter((item: any) => {
      let type: string = 'email' || 'last_name' || 'first_name';
      return item[type].toLowerCase().includes(input.toLowerCase());
    });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.containerInputTotal}>
          <Input value={input} setState={setInput} />
          <Text>Total: {resultsFiltered?.length}</Text>
        </View>
        <View style={{marginTop: verticalScale(30)}}>
          <FlatList
            style={{marginBottom: scale(50)}}
            onRefresh={() => (page === 1 ? setPage(2) : setPage(1))}
            refreshing={status === 'loading'}
            data={resultsFiltered}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: itemType) => item.id.toString()}
            renderItem={({item}) => <ViewContact item={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(15),
    paddingTop: verticalScale(10),
  },
  containerInputTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(10),
    justifyContent: 'space-evenly',
  },
});

export default Search;
