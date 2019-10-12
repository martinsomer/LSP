import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EducationalTree extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Educational Progress Tree Placeholder</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
