import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Alert } from 'react-native';

import Header from './../../Header';

export default class Settings extends Component {
    
    _clearProgressData = () => {
        Alert.alert(
            'Clear Progress Data',
            'Are you sure you want to delete all your progress?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                }, {
                    text: 'OK',
                    onPress: () => AsyncStorage.removeItem('PROGRESS_DATA')
                },
            ],
        )
    }
    
    _showIntroOnNextLaunch = () => {
        Alert.alert(
            'Show Intro on Next Launch',
            'You will see the introduction again next time you open the app. Proceed?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                }, {
                    text: 'OK',
                    onPress: () => AsyncStorage.removeItem('SHOW_INTRO')
                },
            ],
        )
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    onPressAction = {this.props.navigation.toggleDrawer}
                    name = {'md-menu'}
                    headerTitleText = {'Settings'}
                    drawerButtonColor = {'black'}
                    headerTitleColor = {'black'}
                />
                <View style = {styles.content}>
                    <View style = {styles.separator}></View>
                    
                    <TouchableOpacity
                        style = {styles.setting}
                        onPress = {this._clearProgressData}>
                            <Text style = {styles.settingText}>
                                Clear progress data
                            </Text>
                    </TouchableOpacity>

                    <View style = {styles.separator}></View>

                    <TouchableOpacity
                        style = {styles.setting}
                        onPress = {this._showIntroOnNextLaunch}>
                            <Text style = {styles.settingText}>
                                Show intro on next launch
                            </Text>
                    </TouchableOpacity>
                    
                    <View style = {styles.separator}></View>
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
        marginTop: 10,
    },
    setting: {
        width: '100%',
        marginVertical: 10,
    },
    settingText: {
        marginLeft: 10,
        fontSize: 18,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#bfbfbf',
    },
});
