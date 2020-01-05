import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class FreeYourMind extends Component {
    render() {
        return (
            <View style = {styles.container}>

                <View style = {styles.content}>

                    <View style = {styles.headingView}>
                        <Text style = {[styles.textContent, styles.headingText]}>
                            FREE YOUR MIND
                        </Text>
                    </View>

                    <View style = {styles.descriptionView}>
                        <Text style = {[styles.textContent, styles.descriptionText]}>
                        Now it’s time to let your mind wander and trust your hands while building your future!
                        {"\n"}{"\n"}
                        Imagine that everything goes as you wish for. There is no room for hesitation or self-doubt. Be creative and bold.
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