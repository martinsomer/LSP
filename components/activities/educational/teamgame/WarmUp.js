import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class Start extends Component {
    render() {
        return (
            <View style = {styles.container}>

                <View style = {styles.content}>

                    <View style = {styles.headingView}>
                        <Text style = {[styles.textContent, styles.headingText]}>
                            WARM UP
                        </Text>
                    </View>

                    <View style = {styles.descriptionView}>
                        <Text style = {[styles.textContent, styles.descriptionText]}>
                            For a warm-up take 15 random Lego bricks.
                        </Text>
                    </View>

                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B06495',
    },
    content: {
        flex: 1,
        padding: 30,
        justifyContent: 'center'
    },
    textContent: {
        color: 'white',
        fontWeight: 'bold',
    },
    headingView: {
        flex: 0.2,
        justifyContent: 'center',
    },
    descriptionView: {
        flex: 0.8,
        justifyContent: 'center',
    },
    headingText: {
        textAlign: 'center',
        fontSize: width * 0.13
    },
    descriptionText: {
        textAlign: 'center',
        fontSize: width * 0.07,
    },
});