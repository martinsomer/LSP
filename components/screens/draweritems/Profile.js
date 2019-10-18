import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, ActivityIndicator } from 'react-native';

import Header from './../../Header';
import ProfileView from './../progression/ProfileView';
import PathSelection from './../progression/PathSelection';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            progressData: null,
        }
    }
    
    componentDidMount() {
        AsyncStorage.getItem('PROGRESS_DATA').then(response => {
            this.setState({
                loading: false,
                progressData: response,
            })
        })
    }
    
    _renderHeader = () => {
        return (
            <Header
                navigation = {this.props.navigation}
                headerTitleText = {'Profile'}
                drawerButtonColor = {'black'}
                headerTitleColor = {'black'}
            />
        )
    }
    
    render() {
        if (this.state.loading) {
            return (
                <View style = {styles.container}>
                    {this._renderHeader()}
                    <View style = {styles.loadingAnimationContainer}>
                        <ActivityIndicator size = 'large' color = 'black' />
                    </View>
                </View>
            )
        }
        
        if (this.state.progressData === null) {
            return (
                <View style = {styles.container}>
                    {this._renderHeader()}
                    <PathSelection navigation = {this.props.navigation} />
                </View>
            )
        }
        
        return (
            <View style = {styles.container}>
                {this._renderHeader()}
                <ProfileView progress = {this.state.progressData} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    loadingAnimationContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
