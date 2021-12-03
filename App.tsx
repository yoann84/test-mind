import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabScreens from './src/navigation/BottomTab';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {store} from './src/store/indexReducer';
import Splash from './src/components/Splash';
import Stack from './src/navigation/Stack';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
