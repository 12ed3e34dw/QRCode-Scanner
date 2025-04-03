import {View, StyleSheet, Text} from 'react-native';
import React, { useEffect, useState } from 'react';

function Splash_Screesn_Page_Loading() {
    const [isFirstStyle, setIsFirstStyle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFirstStyle(true); // Один раз меняем стиль
        }, 3000); // Через 3 секунд

        return () => clearTimeout(timer); // Очищаем таймер при размонтировании
    }, []);





    //<Image source={require('./src/Logo_and_Img/Group9209.png')} style={styles.Image} /> Error 500
    return (
        <View style={isFirstStyle ? styles.container : styles.container_main}>
            <Text>3</Text>

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
    container_main: {
        flex: 1,
        backgroundColor: "#333333", // Тёмный фон после 20 секунд
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Splash_Screesn_Page_Loading();
