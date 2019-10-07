import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './../../Header';

export default class Settings extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    toggleDrawer = {this.props.navigation.toggleDrawer}
                    headerTitleText = {'Settings'}
                    drawerButtonColor = {'black'}
                    headerTitleColor = {'black'}
                />
                <Text>Settings Placeholder</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
