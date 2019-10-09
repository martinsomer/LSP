import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Header from './../../Header';

export default class Core extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    toggleDrawer = {this.props.navigation.toggleDrawer}
                    headerTitleText = {'Core'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                <View style = {styles.content}>
                    <Text style = {styles.description}>
                        Learn the basics of LEGO Serious Play. How to use LEGO bricks for communication, creativiy, and new ideas.
                    </Text>
                    <Image
                        style = {styles.image}
                        source = {require('./../../../assets/communication.png')}
                        resizeMode = 'contain'
                    />
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity style = {styles.button}>
                            <Text style = {styles.buttonText}>Alone</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.button}>
                            <Text style = {styles.buttonText}>Team</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9C137',
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
