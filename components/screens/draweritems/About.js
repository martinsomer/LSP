import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

import Header from './../../Header';

export default class About extends Component {
    
    _openSourcePage = () => {
        Linking.openURL('http://seriousplaypro.com/about/open-source/')
    }
    
    _openSeriousPlayPro = () => {
        Linking.openURL('http://seriousplaypro.com/')
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    navigation = {this.props.navigation}
                    headerTitleText = {'About'}
                    drawerButtonColor = {'black'}
                    headerTitleColor = {'black'}
                />
                <View style = {styles.content}>
                    <Text style = {styles.textContent}>
                        This APP is a tool to help to teach about using open source LEGO Serious Play methodology. The creators of this APP are not affiliated with LEGO group. LEGO and Serious Play are the trademarks of LEGO group, which have been used according to Open Source guidelines.
                    </Text>

                    <Text style = {styles.textContent}>
                        The creators of this APP are not affiliated with LEGO group. LEGO and Serious Play are the trademarks of LEGO group, which have been used according to Open Source guidelines.
                    </Text>

                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity style = {styles.button}
                            onPress = {this._openSourcePage}>
                            <Text style = {styles.buttonText}>
                                About LEGO® Serious Play® Open Source
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.button}
                            onPress = {this._openSeriousPlayPro}>
                            <Text style = {styles.buttonText}>
                                International Facilitators Community
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style = {styles.textContent}>
                        Concept: Marko Rillo, Martin Sillaots
                    </Text>

                    <Text style = {styles.textContent}>
                        Design: Esin Kalay, Miriam Margishvili
                    </Text>

                    <Text style = {styles.textContent}>
                        Content: Dania Castillo
                    </Text>

                    <Text style = {styles.textContent}>
                        Coding: Erik Kaljumäe, Paul Oskar Soe, Martin Sõmer, Veli Vaigur
                    </Text>

                    <Text style = {styles.textContent}>
                        © 2019 LSP app. All rights reserved.
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    content: {
        flex: 1,
        padding: 10,
    },
    textContent: {
        color: '#979797',
        textAlign: 'justify',
        marginBottom: 10,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1EB5F6',
        marginBottom: 15,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    buttonText: {
        color: 'white',
    },
});
