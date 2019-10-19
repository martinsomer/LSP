import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

export default class ShareSkills extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image
                    style = {styles.image}
                    source = {require('./../../../assets/intro/share.png')}
                    resizeMode = 'contain'
                />
                <View style = {styles.content}>
                    <Text style = {styles.title}>
                        Share your skills
                    </Text>
                    <Text style = {styles.text}>
                        Share your skills with your friends and engage them in your games
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
        backgroundColor: '#F9C137',
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
