import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class PathSelection extends Component {
    
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
        return (
            <View style = {styles.container}>

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
                                        source = {require('./../../../assets/pathselection/core.png')}
                                        resizeMode = 'contain'
                                    />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style = {styles.pathSelectionItem}
                                onPress = {this._goToPersonalScreen}>
                                    <Image
                                        style = {styles.image}
                                        source = {require('./../../../assets/pathselection/personal.png')}
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
                                        source = {require('./../../../assets/pathselection/educational.png')}
                                        resizeMode = 'contain'
                                    />
                            </TouchableOpacity>
                            <TouchableOpacity
                                    style = {styles.pathSelectionItem}
                                    onPress = {this._goToBusinessScreen}>
                                    <Image
                                        style = {styles.image}
                                        source = {require('./../../../assets/pathselection/business.png')}
                                        resizeMode = 'contain'
                                    />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
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
