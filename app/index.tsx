import { Link } from "expo-router"
import { View, Text, TextInput, StyleSheet} from "react-native";
import {useState} from 'react';

import VarScreen from './materi dasar/var.jsx';
import IfScreen from './materi dasar/kondisi.jsx';
import LoopScreen from './materi dasar/loop.jsx';

export default function Index() {

    return (
        <View style={{ 
            flex:1,
            justifyContent: "center",
            alignItems: "center"
         }}>
            {/* # soal materi var  */}
            {/* <VarScreen></VarScreen> */}
            {/* <MateriStyle></MateriStyle> */}

            {/* # soal materi if  */}
            {/* <IfScreen></IfScreen> */}

            {/* # soal materi loop */}
            {/* <LoopScreen></LoopScreen> */}

            {/* <Text>Hellow world</Text> */}

      
        </View>
    );
}