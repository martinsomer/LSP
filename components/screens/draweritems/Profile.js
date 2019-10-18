import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage, ActivityIndicator } from 'react-native';

import Header from './../../Header';
import ProfileView from './../progression/ProfileView';

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
                progressData: response !== null ? response : null,
            })
        })
    }
    
    _goToCoreScreen = () => {
        this.props.navigation.navigate('Core', {
            showBackButton: true,
        })
    }
    
    _goToPersonalScreen = () => {
        this.props.navigation.navigate('Personal', {
            showBackButton: true,
        })
    }
    
    _goToEducationalScreen = () => {
        this.props.navigation.navigate('Educational', {
            showBackButton: true,
        })
    }
    
    _goToBusinessScreen = () => {
        this.props.navigation.navigate('Business', {
            showBackButton: true,
        })
    }
    
    render() {
        if (this.state.loading) {
            return (
                <View style = {styles.container}>
                    <Header
                        toggleDrawer = {this.props.navigation.toggleDrawer}
                        headerTitleText = {'Profile'}
                        drawerButtonColor = {'black'}
                        headerTitleColor = {'black'}
                    />
                    <View style = {styles.loadingAnimationContainer}>
                        <ActivityIndicator size = 'large' color = 'black' />
                    </View>
                </View>
            )
        }
        
        if (this.state.progressData === null) {
            return (
                <View style = {styles.container}>
                    <Header
                        toggleDrawer = {this.props.navigation.toggleDrawer}
                        headerTitleText = {'Profile'}
                        drawerButtonColor = {'black'}
                        headerTitleColor = {'black'}
                    />
                    
                    <Text style = {styles.selectPathTitle}>
                        Select a Path
                    </Text>
                    
                    <View style = {styles.content}>        
                        <View style = {styles.pathSelectionContainer}>
                            <View style = {styles.pathSelectionRow}>
                                <TouchableOpacity
                                    style = {styles.pathSelectionItem}
                                    onPress = {this._goToCoreScreen}>
                                        <Image
                                            style = {styles.image}
                                            source = {require('./../../../assets/core.png')}
                                            resizeMode = 'contain'
                                        />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style = {styles.pathSelectionItem}
                                    onPress = {this._goToPersonalScreen}>
                                        <Image
                                            style = {styles.image}
                                            source = {require('./../../../assets/personal.png')}
                                            resizeMode = 'contain'
                                        />
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.pathSelectionRow}>
                                <TouchableOpacity
                                    style = {styles.pathSelectionItem}
                                    onPress = {this._goToEducationalScreen}>
                                        <Image
                                            style = {styles.image}
                                            source = {require('./../../../assets/educational.png')}
                                            resizeMode = 'contain'
                                        />
                                </TouchableOpacity>
                                <TouchableOpacity
                                        style = {styles.pathSelectionItem}
                                        onPress = {this._goToBusinessScreen}>
                                        <Image
                                            style = {styles.image}
                                            source = {require('./../../../assets/business.png')}
                                            resizeMode = 'contain'
                                        />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        
        return (
            <View style = {styles.container}>
                <Header
                    toggleDrawer = {this.props.navigation.toggleDrawer}
                    headerTitleText = {'Profile'}
                    drawerButtonColor = {'black'}
                    headerTitleColor = {'black'}
                />
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
    content: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    loadingAnimationContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectPathTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#818181',
        textTransform: 'uppercase',
        marginTop: 40,
        marginBottom: 25,
    },
    pathSelectionContainer: {
        width: '100%',
        aspectRatio: 1,
    },
    pathSelectionRow: {
        flex: 1,
        flexDirection: 'row',
    },
    pathSelectionItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
