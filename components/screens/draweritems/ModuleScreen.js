import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, ActivityIndicator } from 'react-native';

import Header from './../../Header';
import ProgressTree from './../progression/ProgressTree';
import ModuleIntroduction from './ModuleIntroduction';

export default class ModuleScreen extends Component {
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
                progressData: JSON.parse(response),
            })
        })
    }
    
    _startModule = () => {
        let progress = []
        
        AsyncStorage.setItem('PROGRESS_DATA', JSON.stringify(progress))
        
        this.setState({
            progressData: progress,
        })
    }
    
    _saveProgress = (item) => {
        let progress = this.state.progressData
        
        if (progress.includes(item)) {
            return
        }
        
        progress.push(item)
        AsyncStorage.setItem('PROGRESS_DATA', JSON.stringify(progress))
        
        this.setState({
            progressData: progress,
        })
    }
    
    _renderHeader = () => {
        return (
            <Header
                navigation = {this.props.navigation}
                headerTitleText = {this.props.headerTitleText}
                drawerButtonColor = {'white'}
                headerTitleColor = {'white'}
            />
        )
    }
    
    render() {
        if (this.state.loading) {
            return (
                <View style = {[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                    {this._renderHeader()}
                    <View style = {styles.loadingAnimationContainer}>
                        <ActivityIndicator size = 'large' color = 'white' />
                    </View>
                </View>
            )
        }
        
        if (this.state.progressData === null) {
            return (
                <View style = {[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                    {this._renderHeader()}
                    <ModuleIntroduction
                        descriptionText = {this.props.descriptionText}
                        descriptionImage = {this.props.descriptionImage}
                        showBackButton = {this.props.navigation.getParam('showBackButton', false)}
                        navigation = {this.props.navigation}
                        startModule = {this._startModule}
                    />
                </View>
            )
        }
        
        return (
            <View style = {[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                {this._renderHeader()}
                <ProgressTree
                    progress = {this.state.progressData}
                    saveProgress = {this._saveProgress}
                    progressTree = {this.props.progressTree}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingAnimationContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
