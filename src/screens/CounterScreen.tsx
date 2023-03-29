import { View, Text } from 'react-native';
import { FloatingActionButton } from '../components/FloatingActionButton';
import { useState } from 'react';
import tailwind from 'twrnc';
import React from 'react';

export const CounterScreen = () => {

   const [contador, setContador] = useState(0);

   return (
      <View>
         <Text style={tailwind.style('font-bold text-center mt-88 mb-64 text-4xl')}>
            Contador: {contador}
         </Text>

         <FloatingActionButton 
            title='+1'
            onPress={ () => setContador( contador + 1) }
            position="left"
         />

         <FloatingActionButton 
            title='-1'
            onPress={ () => setContador( contador - 1) }
            position='right'
         />
      </View>
   )
}
