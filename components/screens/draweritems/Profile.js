import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './../../Header';

export default class Profile extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    toggleDrawer = {this.props.navigation.toggleDrawer}
                    headerTitleText = {'Profile'}
                    drawerButtonColor = {'black'}
                    headerTitleColor = {'black'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
});