import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight, Dimensions } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';

console.disableYellowBox = true;

const { width } = Dimensions.get('window');

export default class Timer2 extends Component {
	constructor(props) {
	super(props);
	this.state = {
		timerStart: false,
		totalDuration: 600000,
		timerReset: false,
	};
	this.toggleTimer = this.toggleTimer.bind(this);
	this.resetTimer = this.resetTimer.bind(this);
	}  

	toggleTimer() {
		this.setState({timerStart: !this.state.timerStart, timerReset: false});
	}

	resetTimer() {
		this.setState({timerStart: false, timerReset: true});
	}

	render() {
		return (
			<View style = {styles.container}>

                <View style = {styles.content}>

                    <View style = {styles.headingView}>
                        <Text style = {[styles.textContent, styles.headingText]}>
                            COUNTDOWN TIMER
                        </Text>
                    </View>

                    <View style = {styles.descriptionView}>
						<Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
							reset={this.state.timerReset}
							options={options}
							handleFinish={handleTimerComplete} />
						<TouchableHighlight style = {styles.button} onPress={this.toggleTimer}>
							<Text style={{fontSize: 30, color: 'white'}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
						</TouchableHighlight>
						<TouchableHighlight style = {styles.button} onPress={this.resetTimer}>
							<Text style={{fontSize: 30, color: 'white'}}>Reset</Text>
						</TouchableHighlight>
                    </View>

                </View>
                
            </View>
		);
	}
}

const handleTimerComplete = () => alert("Time is up!");

const options = {
    container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
		alignItems: 'center',
		marginBottom: 15
    },
    text: {
        fontSize: width * 0.1,
        color: '#FFF',
        marginLeft: 7,
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B06495',
    },
    content: {
        flex: 1,
        padding: 30,
        justifyContent: 'center'
    },
    textContent: {
        color: 'white',
        fontWeight: 'bold',
    },
    headingView: {
        flex: 0.2,
		justifyContent: 'center',
    },
    descriptionView: {
        flex: 0.8,
		justifyContent: 'center',
		alignItems: 'center',
    },
    headingText: {
        textAlign: 'center',
        fontSize: width * 0.13
	},
	button: {
		borderWidth: 3,
		borderColor: 'white',
		borderRadius: 10,
		marginTop: 13,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#DD8DC0'
	}
});

AppRegistry.registerComponent('Timer2', () => Timer2);