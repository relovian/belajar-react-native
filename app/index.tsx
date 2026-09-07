import { Link } from "expo-router"
import { View, Text, TextInput, StyleSheet} from "react-native";
import {useState} from 'react';

import VarScreen from './materi dasar/var.jsx';
import IfScreen from './materi dasar/kondisi.jsx';
import LoopScreen from './materi dasar/loop.jsx';
import ArrayScreen from './materi dasar/array.jsx';
import FungsiScreen from './materi dasar/fungsi.jsx';
import ButtonKustom from './materi component/ButtonKustom.jsx';
import CustomImage from './materi component/CustomImage.jsx';
import IndikatorKoneksi from './materi component/IndikatorKoneksi.jsx';
import Katalog from './materi component/Katalog.jsx';
import LearningPage from './materi component/LearningPage.jsx';
import LoginForm from './materi component/LoginForm.jsx';
import PrivacyPolite from './materi component/PrivacyPolite.jsx';
import StudentDashboard from './materi component/StudentDashboard.jsx';
import UserCard from './materi component/UserCard.jsx';
import ThemeSettings from './materi component/ThemeSettings.jsx';
import StudentDasboard from './materi component/StudentDashboard.jsx';


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

            {/* # soal materi array */}
            <ArrayScreen></ArrayScreen>

            {/* # soal materi fungsi */}
            <FungsiScreen></FungsiScreen>
       

            {/* Soal Materi Components  */}

            {/* Soal 1  */}
            <UserCard></UserCard>

            {/* Soal 2  */}
            <LoginForm></LoginForm>

            {/* Soal 3  */}
            <Katalog></Katalog>

            {/* Soal 4 */}
            <LearningPage></LearningPage>

            {/* Soal 5 */}
            <ButtonKustom></ButtonKustom>

            {/* Soal 6 */}
            <IndikatorKoneksi></IndikatorKoneksi>

            {/* Soal 7 */}
            <CustomImage></CustomImage>

            {/* Soal 8*/}
            <StudentDashboard></StudentDashboard>

            {/* Soal 9 */}
            <ThemeSettings></ThemeSettings>

            {/* Soal 10 */}
            <PrivacyPolite></PrivacyPolite>


            {/* <Text>Hellow world</Text> */}

      
        </View>
    );
}