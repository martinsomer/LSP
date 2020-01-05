import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class Start extends Component {
    
    render() {
        return (
            <View style = {styles.container}>

                <View style = {styles.content}>

                    <View style = {styles.headingView}>
                        <Text style = {[styles.textContent, styles.headingText]}>
                            TEAM GAME
                        </Text>
                    </View>

                    <View style = {styles.descriptionView}>
                        <Text style = {[styles.textContent, styles.descriptionText]}>
                            This team game helps to explore your strengths and interests. What are you passionate about? Let your hands lead you while building the models. Do you see new engaging future paths as a result of a game? 
                            {"\n"}{"\n"}
                            Group size: 2-5 people.{"\n"}
                            If you conduct the game with many groups, then models are introduced in the small group. 
                            {"\n"}{"\n"}
                            What you need:{"\n"}
                            Lego bricks (approx. 100 bricks per person){"\n"}
                            One smartphone for a small group or transmission to the bic screen.
                        </Text>
                    </View>

                    {/* <View style = {styles.buttonView}>
                        <TouchableOpacity style = {styles.button}>
                            <Text style = {[styles.textContent, styles.buttonText]}>
                                START
                            </Text>
                        </TouchableOpacity>
                    </View> */}

                </View>
                
            </View>
        )
    }
}

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
        paddingBottom: 50,
    },
    // buttonView: {
    //     flex: 0.2,
    //     justifyContent: 'center',
    // },
    headingText: {
        textAlign: 'center',
        fontSize: width * 0.13
    },
    descriptionText: {
        textAlign: 'left',
        fontSize: width * 0.045
    },
    // button: {
    //     marginLeft: width * 0.25,
    //     marginRight: width * 0.25,
    //     borderRadius: 10,
    //     borderWidth: 5,
    //     borderColor: 'white',
    //     backgroundColor: '#DD8DC0',
    // },
    // buttonText: {
    //     textAlign: 'center',
    //     fontSize: width * 0.06,
    // }
});
