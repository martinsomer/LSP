import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

export default class Splash extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image
                    style = {styles.image}
                    source = {require('./../../../assets/seriousplayapp.jpg')}
                    resizeMode = 'contain'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#f8f7fc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
