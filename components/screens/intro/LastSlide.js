import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Constants from 'expo-constants';

export default class WhatYouNeed extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
        }
    }
    
    _handleChange = (value) => {
        this.setState({
            email: value,
        })
    }
    
    _handleSubmit = () => {
        const email = this.state.email
        const regex = RegExp('^[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)*\\.[a-zA-Z0-9]+$')
              
        if (regex.test(email) !== true)
            return
        
        //todo send email
        
        alert('E-mail sent.')
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Send me the infographic:
                </Text>
                <TextInput
                    style = {styles.textInput}
                    onChangeText = {this._handleChange}
                    textContentType = 'emailAddress'
                    placeholder = 'E-mail '
                    placeholderTextColor = 'white'
                    ref = 'inputField'
                    value = {this.state.email}
                />
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {this._handleSubmit}>
                        <Text style = {styles.buttonText}>SEND</Text>
                </TouchableOpacity>
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
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    textInput: {
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 5,
        fontSize: 20,
        width: '60%',
    },
    button: {
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 7,
        paddingRight: 7,
    },
    buttonText: {
        color: '#4F4F94',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
