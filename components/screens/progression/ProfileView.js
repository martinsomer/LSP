import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProfileView extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Profile View Placeholder</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
