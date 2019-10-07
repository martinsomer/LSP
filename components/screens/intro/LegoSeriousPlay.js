import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import Constants from 'expo-constants';

export default class LegoSeriousPlay extends Component {
    
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
                    source = {{ uri: 'https://seriousplayapp.com/videos/01_introduction_what_is_lsp.mp4' }}
                    rate = {1.0}
                    volume = {1.0}
                    isMuted = {false}
                    resizeMode = 'contain'
                    shouldPlay = {false}
                    isLooping = {false}
                    useNativeControls = {true}
                    style = {styles.video}
                    ref = 'player'
                />
                <View style = {styles.content}>
                    <Text style = {styles.title}>
                        LEGO® Serious Play®
                    </Text>
                    <Text style = {styles.text}>
                        Use LEGO bricks to make sense of yourself and communicate better with others
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
        backgroundColor: '#88C9B3',
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
