// import { createStackNavigator, createAppContainer } from "react-navigation";
// import Home from "./Home";
// import Game from "./Game";

// const StackNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//     Game: {
//       screen: Game,
//       navigationOptions: {
//         gesturesEnabled: false,
//       },
//     }
//   },
//   {
//     initialRouteName: "Home",
//     headerMode: "none",
//   }
// );

// export default createAppContainer(StackNavigator);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Game from './Game';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Game' component={Game} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStack;
