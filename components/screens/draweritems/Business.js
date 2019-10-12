import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';

import Header from './../../Header';
import BusinessTree from './../progression/BusinessTree';

export default class Business extends Component {
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
        progress.business = {}
        
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
                        headerTitleText = {'Business'}
                        drawerButtonColor = {'white'}
                        headerTitleColor = {'white'}
                    />
                    <View style = {styles.loadingAnimationContainer}>
                        <ActivityIndicator size = 'large' color = 'white' />
                    </View>
                </View>
            )
        }
        
        if (this.state.progressData.business === undefined) {
            return (
                <View style = {styles.container}>
                    <Header
                        toggleDrawer = {this.props.navigation.toggleDrawer}
                        headerTitleText = {'Business'}
                        drawerButtonColor = {'white'}
                        headerTitleColor = {'white'}
                    />
                    <View style = {styles.content}>
                        <Text style = {styles.description}>
                            Use LEGO Serious Play in organizations. Build teams, come up with strategies and new business ideas.
                        </Text>
                        <Image
                            style = {styles.image}
                            source = {require('./../../../assets/teambuilding.png')}
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
                    headerTitleText = {'Business'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                <BusinessTree progress = {this.state.progressData.business} />
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F4F94',
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
