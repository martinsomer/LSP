import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class Build2 extends Component {
    render() {
        return (
            <View style = {styles.container}>

                <View style = {styles.content}>

                    <View style = {styles.headingView}>
                        <Text style = {[styles.textContent, styles.headingText]}>
                            BUILD
                        </Text>
                    </View>

                    <View style = {styles.descriptionView}>
                        <Text style = {[styles.textContent, styles.descriptionText]}>
                        Think of what you enjoy doing. What is important to you. Who do you want to be. 
                        {"\n"}{"\n"}
                        And now build a model of what you’ll be doing in 10 years time.
                        {"\n"}{"\n"}
                        Use as many bricks as you wish.
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
        flex: 0.1,
        justifyContent: 'center',
    },
    descriptionView: {
        flex: 0.9,
        justifyContent: 'center',
    },
    headingText: {
        textAlign: 'center',
        fontSize: width * 0.13
    },
    descriptionText: {
        textAlign: 'center',
        fontSize: width * 0.06,
    },
});