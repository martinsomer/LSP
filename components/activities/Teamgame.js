import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';

import GameIntroduction from './GameIntroduction';

export default class Teamgame extends Component {
constructor(props) {
        super(props);
        
        this.state = {
            gameStarted: false,
            gameFinished: false,
            instructionIndex: 0,
        }
    }
    
    _nextInstruction = () => {
        const index = this.state.instructionIndex
        
        if (index >= this.props.item.activity.data.length - 1) {
            this.setState({
                gameFinished: true,
            })
            return
        }
        
        this.setState({
            instructionIndex: index + 1,
        })
    }
    
    _finish = () => {
        this.props.setItemAsCompleted(this.props.item)
        this.props.cancelActivity()
    }
    
    _startOver = () => {
        this.setState({
            gameFinished: false,
            instructionIndex: 0,
        })
    }
    
    _start = () => {
        this.setState({
            gameStarted: true,
        })
    }
    
    _renderInstructions = () => {
        const index = this.state.instructionIndex
        const instructions = this.props.item.activity.data
        
        const instruction = instructions[index].text
        const buttonText = instructions[index].button
        
        return (
            <View style = {styles.container}>
                <View style = {styles.innerContainer}>
                    <Text style = {styles.instruction}>
                        {instruction}
                    </Text>
                </View>
                {!this.state.gameFinished ? (
                    <View style = {styles.innerContainer}>
                        <TouchableOpacity
                            style = {styles.button}
                            onPress = {this._nextInstruction}>
                                <Text style = {styles.buttonText}>
                                    {buttonText}
                                </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style = {styles.innerContainer}>
                        <TouchableOpacity
                            style = {styles.button}
                            onPress = {this._finish}>
                                <Text style = {styles.buttonText}>
                                    Finish
                                </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {styles.button}
                            onPress = {this._startOver}>
                                <Text style = {styles.buttonText}>
                                    Play again!
                                </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        )
    }
    
    render() {
        if (!this.state.gameStarted) {            
            return (
                <GameIntroduction
                    cancelActivity = {this.props.cancelActivity}
                    start = {this._start}
                    mediaSource = {require('./../../assets/misc/videoplaceholder.png')}
                    gameTitle = {this.props.item.text}
                    gameSubtitle = {'Improve your communication skills!'}
                    gameDescription = {'In Team Game You need 2+ people and some LEGO bricks. Watch the video to learn the rules.'}
                />
            )
        }
        
        return (
            this._renderInstructions()
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#505050',
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    instruction: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
    },
    button: {
        marginVertical: 7,
        width: '85%',
        backgroundColor: '#1EB5F6',
        borderRadius: 5,
        paddingHorizontal: 11,
        paddingVertical: 6,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
    },
});
