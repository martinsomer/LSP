import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import Constants from 'expo-constants';

export default class WhatYouNeed extends Component {
    
    handleMount() {
        this.refs.player.playAsync()
    }
    
    handleUnmount() {
        this.refs.player.stopAsync()
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Video
                    style = {styles.video}
                    source = {{ uri: 'https://seriousplayapp.com/videos/720p/03_core_what_do_you_need_for_lsp_app.mp4' }}
                    rate = {1.0}
                    volume = {1.0}
                    isMuted = {false}
                    resizeMode = 'contain'
                    shouldPlay = {false}
                    isLooping = {false}
                    useNativeControls = {true}
                    ref = 'player'
                />
                <View style = {styles.content}>
                    <Text style = {styles.title}>
                        What do you need?
                    </Text>
                    <Text style = {styles.text}>
                        What do you need for this app?
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
        backgroundColor: '#B06495',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
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
