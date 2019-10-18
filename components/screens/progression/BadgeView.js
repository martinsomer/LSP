import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { GetBadgesAsArray } from './../../Badges';

const badges = GetBadgesAsArray()

export default class BadgeView extends Component {
    
    _renderRow = (items) => {
        const progress = this.props.progress
        let row = []
        
        items.forEach(function(item, index) {
            row.push(
                <View style = {styles.itemContainer} key = {item.id}>
                    <View style = {styles.imageContainer}>
                            {progress.includes(item.id) &&
                                <Image
                                    style = {styles.image}
                                    source = {item.image}
                                    resizeMode = 'contain'
                                />
                            }
                    </View>
                </View>
            )
        })
        
        return row
    }
    
    _renderBadges = () => {
        let table = []
        
        for (let i = 0; i < badges.length; i += 5) {
            table.push(
                <View style = {styles.rowContainer}
                    key = {i}>
                        <View
                            style = {styles.row}>
                            {this._renderRow(badges.slice(i, i + 5))}
                        </View>
                </View>
            )
            
        }
        
        return table
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.sectionHeader}>Badges</Text>
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
        flex: 1,
        flexDirection: 'row',
    },
    itemContainer: {
        padding: 10,
        width: '20%',
        aspectRatio: 1,
        padding: 10,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    sectionHeader: {
        width: '100%',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 5,
        color: '#888888',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 25,
    },
});
