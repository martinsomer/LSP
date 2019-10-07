import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

export default class MiniGames extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image
                    style = {styles.image}
                    source = {require('./../../../assets/minigames.png')}
                    resizeMode = 'contain'
                />
                <View style = {styles.content}>
                    <Text style = {styles.title}>
                        Mini-games
                    </Text>
                    <Text style = {styles.text}>
                        Play mini-games to develop collaboration and creativity
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#4F4F94',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    },
    content: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: 'white',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
    },
});
