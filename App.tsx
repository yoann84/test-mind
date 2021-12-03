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
  // const [isLoading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, []);

  // if (isLoading) {
  //   return <Splash />;
  // }

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
