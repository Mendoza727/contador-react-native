import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import tailwind from "twrnc";

interface Props {
    title: string;
    position?: 'right' | 'left';
    onPress: () => void;
}

export const FloatingActionButton = ({ title, onPress, position = 'right' }: Props) => {
    return (
        <TouchableOpacity
            style={[
            tailwind.style('bg-indigo-500 w-18 h-18 rounded-full shadow shadow-xl'), 
            ( position === 'left') ? tailwind.style('absolute -bottom-0 right-4 shadow') : tailwind.style('left-4') ]}
            onPress={ onPress }
        >
            <View style={tailwind.style('flex justify-center')}>
                <Text style={tailwind.style('font-bold text-gray-800 text-2xl self-center mt-4 text-white')}>{ title }</Text>
            </View>
        </TouchableOpacity>
    )
}
