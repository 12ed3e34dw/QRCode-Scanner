import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Splash_Screesn_Page_1 from './src/Generate_QR/Splash_Screesn_Page_1.tsx';
import Splash_Screesn_Page_2 from './src/Generate_QR/Splash_Screesn_Page_2.tsx';



type RootStackParamList = {

    Splash1: Splash_Screesn_Page_1;
    Splash2: Splash_Screesn_Page_2;
};

type Props = NativeStackScreenProps<RootStackParamList, "Splash1">;

const App: React.FC<Props> = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Таймер для смены фона через 3 секунды
        const styleTimer = setTimeout(() => {
            setIsDarkMode(true);
        }, 3000);

        // Таймер для перехода на следующий экран через 5 секунд
        const navigationTimer = setTimeout(() => {
            navigation.replace("Splash2");
        }, 5000);

        // Очистка таймеров при размонтировании
        return () => {
            clearTimeout(styleTimer);
            clearTimeout(navigationTimer);
        };
    }, []);

    return (
        <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
            <Text style={styles.text}>Ожидайте...</Text>
        </View>
    );
};
//1
const styles = StyleSheet.create({
    lightContainer: {
        flex: 1,
        backgroundColor: "#FDB623", // Жёлтый фон в начале
        justifyContent: "center",
        alignItems: "center",
    },
    darkContainer: {
        flex: 1,
        backgroundColor: "#333333", // Тёмный фон после 3 секунд
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        color: "#FFFFFF",
    },
});

export default App;

