import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Header from './../../Header';

export default class Business extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    toggleDrawer = {this.props.navigation.toggleDrawer}
                    headerTitleText = {'Business'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                <View style = {styles.content}>
                    <Text style = {styles.description}>
                        Use LEGO Serious Play in organizations. Build teams, come up with strategies and new business ideas.
                    </Text>
                    <Image
                        style = {styles.image}
                        source = {require('./../../../assets/teambuilding.png')}
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
        backgroundColor: '#4F4F94',
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
