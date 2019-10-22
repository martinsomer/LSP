import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

import GameIntroduction from './GameIntroduction';

export default class Mindgame extends Component {
constructor(props) {
        super(props);
        
        this.state = {
            gameStarted: false,
            gameFinished: false,
            instructionIndex: 0,
            alignment: {
                practical: 60,
                creative: 20,
                rational: 0,
                emotional: 20,
            },
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
    
   _renderOptions = (options) => {
        let rows = []
        
        for (let option of options) {
            rows.push(
                <TouchableOpacity
                    key = {option}
                    style = {styles.button}
                    onPress = {this._nextInstruction}>
                        <Text style = {styles.buttonText}>
                            {option}
                        </Text>
                </TouchableOpacity>
            )
        }
        
        return rows
    }
    
    _renderItems = () => {
        const index = this.state.instructionIndex
        const items = this.props.item.activity.data
        
        const image = items[index].image
        const options = items[index].options
        
        if (!this.state.gameFinished) {
            return (
                <View style = {styles.container}>
                    <Text style = {styles.title}>
                        Caption the image!
                    </Text>
                    <Image
                        style = {styles.image}
                        source = {image}
                        resizeMode = 'contain'
                    />
                    <View style = {styles.options}>
                        {this._renderOptions(options)}
                    </View>
                </View>
            )
        }
        return (
            <View style = {styles.container}>
                
                <View style = {styles.topBar}>
                    <Text style = {styles.gameFinishedTitle}>
                        Level Complete!
                    </Text>

                    <Text style = {styles.gameFinishedSubitle}>
                        Here is your alignment so far according to your answers:
                    </Text>
                </View>

                <View style = {styles.alignmentContainer}>
                    <View style = {styles.alignmentRow}>
                        <View style = {styles.alignmentItem}>
                            <Text style = {styles.alignmentPercentage}>
                                {this.state.alignment.practical + '%'}
                            </Text>
                            <Text style = {styles.alignmentSubtitle}>
                                Practical
                            </Text>
                        </View>
                        <View style = {styles.alignmentItem}>
                            <Text style = {styles.alignmentPercentage}>
                                {this.state.alignment.creative + '%'}
                            </Text>
                            <Text style = {styles.alignmentSubtitle}>
                                Creative
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.alignmentRow}>
                        <View style = {styles.alignmentItem}>
                            <Text style = {styles.alignmentPercentage}>
                                {this.state.alignment.rational + '%'}
                            </Text>
                            <Text style = {styles.alignmentSubtitle}>
                                Rational
                            </Text>
                        </View>
                        <View style = {styles.alignmentItem}>
                            <Text style = {styles.alignmentPercentage}>
                                {this.state.alignment.emotional + '%'}
                            </Text>
                            <Text style = {styles.alignmentSubtitle}>
                                Emotional
                            </Text>
                        </View>
                    </View>
                </View>
                
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
                    gameSubtitle = {'Learn about your personality!'}
                    gameDescription = {'Mind Game tells you your personality type based how you respond to the pictures you see.'}
                />
            )
        }
        
        return (
            this._renderItems()
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
    title: {
        margin: 10,
        marginTop: 30,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
    image: {
        flex: 1,
        width: '100%',
    },
    options: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    topBar: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    gameFinishedTitle: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    gameFinishedSubitle: {
        color: 'white',
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
    },
    alignmentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    alignmentRow: {
        width: '100%',
        flexDirection: 'row',
    },
    alignmentItem: {
        flex: 1,
        marginVertical: 10,
    },
    alignmentPercentage: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        width: '100%',
        textAlign: 'center',
    },
    alignmentSubtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});
