
import React from "react";

import {View, StyleSheet} from 'react-native';

export default function DeleteButton(){
    return (
        <View style={styles.container}>
            <Text>ola</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:100,
        height: 50,
        backgroundColor: 'red'
    }
})