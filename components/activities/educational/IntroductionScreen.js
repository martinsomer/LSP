import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Header from './../../Header';

export default class IntroductionScreen extends Component {

    _setItemAsCompleted = () => {
        this.props.setItemAsCompleted(this.props.item)
        this.props.cancelActivity()
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    onPressAction = {this._setItemAsCompleted}
                    headerTitleText = {this.props.item.text}
                    name = {'md-arrow-back'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                <View style = {styles.content}>
                    <View style = {styles.topView}>
                        <Text style = {styles.textContent}>
                            Do you want to give your students creative ways to solve problems? Do you want to encourage cooperation while giving a voice to every student?
                        </Text>
                        <Text style = {styles.textContent}>
                            Let us give give you tools to create more paths.
                        </Text>
                    </View>

                    <View style = {styles.bottomView}>
                        <Image
                            style = {styles.image}
                            source = {require('./../../../assets/badges/Education/introduction.png')}
                        />
                    </View>
                    
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
        textAlign: 'justify',
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    topView: {
        flex: 0.6,
        justifyContent: 'center'
    },
    bottomView: {
        flex: 0.4,
        justifyContent: 'center'
    }
});
