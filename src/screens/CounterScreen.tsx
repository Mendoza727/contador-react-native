import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import tailwind from 'twrnc';

export const CounterScreen = () => {

   const [contador, setContador] = useState(0);

   return (
      <View>
         <Text style={tailwind.style('font-bold text-center mt-88 mb-64 text-4xl')}>
            Contador: {contador}
         </Text>
         <TouchableOpacity
            style={tailwind.style('bg-indigo-500 w-18 h-18 rounded-full left-4 shadow shadow-xl')}
            onPress={ () => setContador( contador - 1 ) }
         >
            <View style={ tailwind.style('flex justify-center') }>
               <Text style={tailwind.style('font-bold text-gray-800 text-2xl self-center mt-4 text-white')}>-1</Text>
            </View>
         </TouchableOpacity>
         <TouchableOpacity
            style={tailwind.style('bg-indigo-500 w-18 h-18 rounded-full absolute -bottom-0 right-4 shadow shadow-xl')}
            onPress={ () => setContador( contador + 1 ) }
         >
            <View style={ tailwind.style('font-bold text-center flex justify-center') }>
               <Text style={tailwind.style('text-gray-800 text-2xl self-center text-white mt-4')}>+1</Text>
            </View>
         </TouchableOpacity>
      </View>
      //contador hecho en reactnative
   )
}
