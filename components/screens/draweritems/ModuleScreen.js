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
            currentActivity: null,
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
    
    _cancelActivity = () => {
        this.setState({
            currentActivity: null,
        })
    }
    
    _startActivity = (item) => {
        const activity = item
        this.setState({
            currentActivity: item,
        })
    }
    
    _setItemAsCompleted = (item) => {
        const id = item.id
        const progress = this.state.progressData
        
        if (progress.includes(id)) {
            return
        }
        
        progress.push(id)
        AsyncStorage.setItem('PROGRESS_DATA', JSON.stringify(progress))
        
        this.setState({
            progressData: progress,
        })
    }
    
    _renderHeader = () => {
        return (
            <Header
                onPressAction = {this.props.navigation.toggleDrawer}
                headerTitleText = {this.props.headerTitleText}
                name = {'md-menu'}
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
        
        if (this.state.currentActivity !== null) {
            const Activity = this.state.currentActivity.activity.component
            
            return (
                <Activity
                    item = {this.state.currentActivity}
                    cancelActivity = {this._cancelActivity}
                    setItemAsCompleted = {this._setItemAsCompleted}
                />
            )
        }
        
        return (
            <View style = {[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                {this._renderHeader()}
                <ProgressTree
                    progress = {this.state.progressData}
                    progressTree = {this.props.progressTree}
                    startActivity = {this._startActivity}
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
