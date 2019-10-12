import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';

import Header from './../../Header';
import CoreTree from './../progression/CoreTree';

export default class Core extends Component {
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
                progressData: response !== null ? JSON.parse(response) : {},
            })
        })
    }
    
    _goToProfileScreen = () => {
        this.props.navigation.navigate('Profile')
    }
    
    _startModule = () => {
        let progress = this.state.progressData
        progress.core = {}
        
        AsyncStorage.setItem('PROGRESS_DATA', JSON.stringify(progress))
        
        this.setState({
            progressData: progress,
        })
    }
    
    render() {
        if (this.state.loading) {
            return (
                <View style = {styles.container}>
                    <Header
                        toggleDrawer = {this.props.navigation.toggleDrawer}
                        headerTitleText = {'Core'}
                        drawerButtonColor = {'white'}
                        headerTitleColor = {'white'}
                    />
                    <View style = {styles.loadingAnimationContainer}>
                        <ActivityIndicator size = 'large' color = 'white' />
                    </View>
                </View>
            )
        }
        
        if (this.state.progressData.core === undefined) {
            return (
                <View style = {styles.container}>
                    <Header
                        toggleDrawer = {this.props.navigation.toggleDrawer}
                        headerTitleText = {'Core'}
                        drawerButtonColor = {'white'}
                        headerTitleColor = {'white'}
                    />
                    <View style = {styles.content}>
                        <Text style = {styles.description}>
                            Learn the basics of LEGO Serious Play. How to use LEGO bricks for communication, creativiy, and new ideas.
                        </Text>
                        <Image
                            style = {styles.image}
                            source = {require('./../../../assets/communication.png')}
                            resizeMode = 'contain'
                        />
                        <View style = {styles.buttonContainer}>
                            <TouchableOpacity
                                style = {styles.button}
                                onPress = {this._startModule}>
                                <Text style = {styles.buttonText}>Start</Text>
                            </TouchableOpacity>
                            {this.props.navigation.getParam('showBackButton', false) &&
                                <TouchableOpacity
                                    style = {styles.button}
                                    onPress = {this._goToProfileScreen}>
                                        <Text style = {styles.buttonText}>Back</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            )
        }
    
        return (
            <View style = {styles.container}>
                <Header
                    toggleDrawer = {this.props.navigation.toggleDrawer}
                    headerTitleText = {'Core'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                <CoreTree progress = {this.state.progressData.core} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9C137',
    },
    loadingAnimationContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        padding: 10,
    },
    description: {
        textAlign: 'justify',
        fontSize: 20,
        color: 'white',
    },
    image: {
        marginTop: 60,
        marginBottom: 40,
        width: '100%',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 7,
        paddingRight: 7,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
    },
});
