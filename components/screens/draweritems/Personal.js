import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Header from './../../Header';
import PersonalTree from './../progression/PersonalTree';

export default class Personal extends Component {
    
    _goToProfileScreen = () => {
        this.props.navigation.navigate('Profile')
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    toggleDrawer = {this.props.navigation.toggleDrawer}
                    headerTitleText = {'Personal'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                <View style = {styles.content}>
                    <Text style = {styles.description}>
                        Use LEGO Serious Play for personal purpose. Build your goals and aspirations, build your habits and solve your problems.
                    </Text>
                    <Image
                        style = {styles.image}
                        source = {require('./../../../assets/goalsetting.png')}
                        resizeMode = 'contain'
                    />
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity style = {styles.button}>
                            <Text style = {styles.buttonText}>Start</Text>
                        </TouchableOpacity>
                        {this.props.navigation.getParam('showBackButton', false) &&
                            <TouchableOpacity
                                style = {styles.button}
                                onPress = {this._goToProfileScreen}>
                                    <Text style = {styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#88C9B3',
    },
    content: {
        flex: 1,
        padding: 10,
    },
    description: {
        textAlign: 'justify',
        fontSize: 20,
        color: 'white',
    },
    image: {
        marginTop: 60,
        marginBottom: 40,
        width: '100%',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 7,
        paddingRight: 7,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
    },
});
