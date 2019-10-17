import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { GetBadgesAsArray } from './../../Badges';

const badges = GetBadgesAsArray()

export default class BadgeView extends Component {
    
    _renderRow = (items) => {
        let itemArray = []
        
        items.forEach(function(item, index) {
            itemArray.push(
                <View style = {styles.imageContainer}
                    key = {item.id}>
                        <Image
                            style = {styles.image}
                            source = {item.image}
                            resizeMode = 'contain'
                        />
                </View>
            )
        })
        
        return itemArray
    }
    
    _renderBadges = () => {
        let table = []
        
        while (badges.length) {
            table.push(
                <View style = {styles.rowContainer}
                    key = {badges.length}>
                        <View
                            style = {styles.row}>
                            {this._renderRow(badges.splice(0, 4))}
                        </View>
                </View>
            )
            
        }
        
        return table
    }
    
    render() {
        return (
            <View style = {styles.container}>
                {this._renderBadges()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    rowContainer: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imageContainer: {
        flex: 1,
        aspectRatio: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
