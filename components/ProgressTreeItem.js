import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class ProgressTreeItem extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.badgeContainer}>
                    {this.props.badgeImage &&
                        <Image
                            style = {styles.badge}
                            resizeMode = 'contain'
                            source = {this.props.badgeImage}
                        />
                    }
                </TouchableOpacity>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>
                        {this.props.itemText}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 80,
    },
    badgeContainer: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 40,
    },
    badge: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
});
