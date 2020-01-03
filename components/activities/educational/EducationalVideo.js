import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import Header from './../../Header';

export default class EducationalVideo extends Component {
    
    _setItemAsCompleted = () => {
        this.props.setItemAsCompleted(this.props.item)
        this.props.cancelActivity()
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    onPressAction = {this._setItemAsCompleted}
                    headerTitleText = {this.props.item.text}
                    name = {'md-arrow-back'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                <Video
                    style = {styles.video}
                    source = {{ uri: this.props.item.activity.data }}
                    rate = {1.0}
                    volume = {1.0}
                    isMuted = {false}
                    resizeMode = 'contain'
                    shouldPlay = {true}
                    isLooping = {false}
                    useNativeControls = {true}
                />
                <View style = {styles.content}>
                    <Text style = {styles.subtitle}>
                        {this.props.item.activity.subtitle}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
    subtitle: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        marginTop: 40,
    },
});
