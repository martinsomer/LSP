import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ProgressTreeItem from './../../ProgressTreeItem';

const rows = [
    {
        id: '0',
        items: [
            {
                itemText: 'Etiquette',
                //badgeImage: require('./../../../assets/badges/core/<image_name>.png'),
            },
        ]
    }, {
        id: '1',
        items: [
            {
                itemText: 'Build',
            }, {
                itemText: 'Storytelling',
            }
        ]
    }, {
        id: '2',
        items: [
            {
                itemText: 'Metaphor',
            },
        ]
    }, {
        id: '3',
        items: [
            {
                itemText: 'Mind game',
            }, {
                itemText: 'Collab game',
            }, {
                itemText: 'Practical',
            }
        ]
    },
]

export default class CoreTree extends Component {
    
    // It just works.
    _renderItem = ({item}) => {
        return (
            <View style = {styles.itemRowContainer}>
                <View style = {styles.itemRow}>
                    {Object.keys(item.items).map(key =>
                        <ProgressTreeItem
                            key = {key}
                            itemText = {item.items[key].itemText}
                            badgeImage = {item.items[key].badgeImage}
                        />
                    )}
                </View>
            </View>
        )
    }
    
    render() {
        return (
            <FlatList
                style = {styles.container}
                data = {rows}
                renderItem = {this._renderItem}
                keyExtractor = {item => item.id}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemRowContainer: {
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
    },
    itemRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
