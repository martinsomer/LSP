import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CoreTree extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Core Progress Tree Placeholder</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
