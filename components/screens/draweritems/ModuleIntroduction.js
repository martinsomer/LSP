import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class ModuleIntroduction extends Component {
    
    _goToProfileScreen = () => {
        this.props.navigation.navigate('Profile')
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.description}>
                    {this.props.descriptionText}
                </Text>
                <Image
                    style = {styles.image}
                    source = {this.props.descriptionImage}
                    resizeMode = 'contain'
                />
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {this.props.startModule}>
                            <Text style = {styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                    {this.props.showBackButton &&
                        <TouchableOpacity
                            style = {styles.button}
                            onPress = {this._goToProfileScreen}>
                                <Text style = {styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
        paddingHorizontal: 7,
        paddingVertical: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
    },
});
