import { View,  StyleSheet } from "react-native";
import React from "react";

function App() {
    return (
        <View style={styles.container}>

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
});

export default App;
