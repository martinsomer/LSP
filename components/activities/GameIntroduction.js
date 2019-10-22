import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

import Header from './../Header';

export default class GameIntroduction extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    onPressAction = {this.props.cancelActivity}
                    headerTitleText = {this.props.gameTitle}
                    name = {'md-arrow-back'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                
                <Text style = {styles.subtitle}>
                    {this.props.gameSubtitle}
                </Text>
                
                <View style = {styles.imageContainer}>
                    <Image
                        style = {styles.image}
                        source = {this.props.mediaSource}
                        resizeMode = 'contain'
                    />
                </View>
                
                <Text style = {styles.description}>
                    {this.props.gameDescription}
                </Text>
                
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {this.props.start}>
                        <Text style = {styles.buttonText}>
                            Start
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#505050',
        alignItems: 'center',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
    },
    subtitle: {
        marginTop: 10,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    description: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        padding: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#1EB5F6',
        borderRadius: 5,
        paddingHorizontal: 7,
        paddingVertical: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
    },
});
