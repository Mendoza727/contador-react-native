//import { HolaMundo } from "./src/screens/HolaMundo";
//import { CounterScreen } from "./src/screens/CounterScreen";
//import { BoxObjectModelScreen, styles } from "./src/screens/BoxObjectModelScreen";
//import { DimensionsScreens } from './src/screens/DimensionsScreens';

import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./src/screens/BoxObjectModelScreen";
import { PositionScreen } from "./src/screens/PositionScreen";


export const App = () => {
  return (
    <SafeAreaView style={ styles.flex }>
      {/* <CounterScreen/> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreens /> */}
      <PositionScreen />
    </SafeAreaView>
  )
} 

