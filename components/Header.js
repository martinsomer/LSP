import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default class Header extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity onPress = {this.props.onPressAction}>
                    <Ionicons
                        name = {this.props.name}
                        color = {this.props.drawerButtonColor}
                        size = {45}
                        style = {{ backgroundColor: 'transparent' }}
                    />
                </TouchableOpacity>
                <View style = {styles.titleContainer}>
                    <Text style = {[styles.headerTitle, {color: this.props.headerTitleColor}]}>
                        {this.props.headerTitleText}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginVertical: 7,
    },
    drawerButton: {
        
    },
    titleContainer: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
