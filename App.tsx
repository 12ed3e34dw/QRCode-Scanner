import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
// @ts-ignore
import React,{alert} from "react";

function App() {



    return (
        <View style={styles.container}>

            <View style={styles.container_Main}>
           <Text style={styles.text}></Text>


                <TouchableOpacity style={styles.button} onPress={() => alert('Let’s Start!')}>
                    <Text style={ styles.buttonText}>Generate QR Code</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333D6",
        justifyContent: 'center',
        alignItems: 'center',
    },
container_Main: {
        width:336,
         height:335,
         backgroundColor:"#3B3B3BC7",
         top:-10,
    borderRadius:6,
},
text:{
        left:30,
         top:100,
       color:'white',
},
    input:{

    },
    button:{
        height:46,
        borderRadius:6,
        top:236,
        left:85,
        width:153,
        backgroundColor:"#FDB623",
    },
    buttonText:{
        fontSize:14,
       left:18,
        top:12.5,
    },
});

export default App;
