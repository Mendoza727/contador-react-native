import { Text, View } from "react-native";
import taiwtind from "twrnc";

export const HolaMundo = () => {
  return (
    <View>
       <Text style={ taiwtind.style('flex items-center font-bold p-3 text-center mt-82 text-4xl') }>Hola Mundo</Text>
    </View>
  )
}
