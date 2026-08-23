import { Link } from "expo-router"
import { View, Text, TextInput, StyleSheet} from "react-native";
import {useState} from 'react';

import VarScreen from './var.jsx';
import IfScreen from './kondisi.jsx';
import LoopScreen from './loop.jsx';

export default function Index() {

    return (
        <View style={{ 
            flex:1,
            justifyContent: "center",
            alignItems: "center"
         }}>
            {/* # soal materi var  */}
            <VarScreen></VarScreen>
            
            {/* # soal materi if  */}
            <IfScreen></IfScreen>

            {/* # soal materi loop */}
            <LoopScreen></LoopScreen>

            {/* <Text>Hellow world</Text> */}
      
        </View>
    );
}