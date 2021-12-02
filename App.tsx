// import React, { Component, Fragment } from 'react';
// import { StatusBar } from 'react-native';
// // import { Font } from 'expo';
// // import Routes from './screens/Routes'
// import Home from "./screens/Home";

// class App extends Component {
//   state = {
//     isFontLoaded: false
//   }

//   async componentDidMount() {
//     await Font.loadAsync({
//       'dogbyte': require('./assets/fonts/dogbyte.otf'),
//     });
//     this.setState({ isFontLoaded: true })
//   }

//   render() {
//     return(<Home />);
//     // if(!this.state.isFontLoaded) {
//     //   return <Fragment />
//     // } else {
//     //   return (
//     //     <Fragment>
//     //       <StatusBar barStyle="light-content" />
//     //       <Routes />
//     //     </Fragment>
//     //   )
//     // }
//   }
// }

// export default App;

import React, { FC } from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// import Home from "./screens/Home";
import MainStack from './screens/MainStack'
import { NavigationContainer } from '@react-navigation/native';

const App: FC = () => {
  let [fontsLoaded] = useFonts({
    'dogbyte': require('./assets/fonts/dogbyte.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        fallback={
          <Text>{'Loading...'}</Text>
        }
      >
        <MainStack />
      </NavigationContainer>
    );
  }
};

export default App;