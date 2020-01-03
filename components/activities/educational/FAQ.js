import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import Header from './../../Header';

const { width } = Dimensions.get('window');

export default class FAQ extends Component {

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
                <View style={styles.colorRight}>
                    <Image
                        style = {styles.image}
                        source = {require('./../../../assets/badges/Education/faq.png')}
                    />
                </View>

                <View style = {styles.textOverlay}>
                    <View style = {styles.content}>
                        <Text style = {[styles.textContent, styles.questions]}>
                            WHAT IF?
                        </Text>
                        <Text style = {[styles.textContent, styles.questions]}>
                            HOW?
                        </Text>
                        <Text style = {[styles.textContent, styles.questions]}>
                            WHY?
                        </Text>
                        <Text style = {[styles.textContent, styles.faq]}>
                            Frequently Asked Questions
                        </Text>
                        <Text style = {[styles.textContent, styles.description]}>
                            Want to learn more about learning? Do you want to give your students creative way to Want to create? Let us give you the tools needed to obtain skills required today.
                        </Text>
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
        alignItems: 'center'
    },
    textContent: {
        color: 'white',
        textAlign: 'justify',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    questions: {
        fontSize: width * 0.1,
    },
    faq: {
        fontSize: width * 0.06,
        padding: 10
    },
    description: {
        fontSize: width * 0.045,
    },
    colorRight:{
        flex: 1,
        width: width * 0.55,
        backgroundColor: '#86406C',
        marginLeft: width * 0.45,
        borderBottomLeftRadius: 70,
        borderTopLeftRadius: 70,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    textOverlay: {
        position: 'absolute',
        width: '100%',
        height: '85%',
        top: '15%',
    },
    image: {
        width: '80%',
        height: '25%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});
