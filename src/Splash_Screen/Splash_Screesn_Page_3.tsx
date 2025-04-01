import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
// @ts-ignore
import React from "react";

function Splash_Screesn_Page_3() {

    return (
        <View style={ styles.container}>

            <View style={styles.container_2}>

                <View style={ styles.containers }></View>

                <Text style={styles.text_main}>Get Started</Text>
                <Text style={styles.text}>
                    Go and enjoy our features for free and
                </Text>
                <Text style={styles.text_1}>
                    make your life easy with us.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Let’s Start</Text>
                    <Image source={require('./src/Img/8.png')} style={styles.image_1} />
                </TouchableOpacity>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDB623", // Тёмный фон после 20 секунд
        justifyContent: 'center',
        alignItems: 'center',
    },
    container_2: {
        backgroundColor:"#333333",
        width:428,
        alignItems:"center",
        left:-2.5,
        margin:50,
        height:295,
        marginTop:550,
        borderRadius:68,
    },
    text:{
        top:-13,
        color:'white',
    },
    text_1: {
        top:-13,
        color:'white',
    },
    button: {
        backgroundColor:"#FDB623",
        width:319,
        alignItems:"center",
        left:-2.5,
        margin:50,
        height:58,
        marginTop:15,
        borderRadius:8,
    },
    buttonText: {
        fontFamily:'Iter',
        margin:17,
        fontWeight:'bold',
    },
    image_1: {
        marginLeft:230,
        top:-38.3,

    },
    text_main:{

        fontFamily:'Intim',
        lineHeight:100,
        fontSize:42,
        top:-5,
        color:'white',
    },
    containers:{
        backgroundColor:"#FDB623",
        width:134,
        alignItems:"center",
        left:-2.5,
        height:5,
        marginTop:30,
        borderRadius:4,
    },
});




export default Splash_Screesn_Page_3;
