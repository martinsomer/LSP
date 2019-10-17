import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ProgressTreeItem from './../../ProgressTreeItem';
import { GetBadges } from './../../Badges';

const badges = GetBadges('core')
const rows = [
    {
        id: '0',
        items: [
            badges.etiquette,
        ]
    }, {
        id: '1',
        items: [
            badges.build,
            badges.storytelling,
        ]
    }, {
        id: '2',
        items: [
            badges.methaphor,
        ]
    }, {
        id: '3',
        items: [
            badges.mindgame,
            badges.collabgame,
            badges.practical,
        ]
    },
]

export default class CoreTree extends Component {
    
    _renderItem = ({item}) => {
        const progress = this.props.progress.core
        
        return (
            <View style = {styles.itemRowContainer}>
                <View style = {styles.itemRow}>
                    {Object.keys(item.items).map(key =>
                        <ProgressTreeItem
                            key = {key}
                            id = {item.items[key].id}
                            text = {item.items[key].text}
                            image = {progress.includes(item.items[key].id) ? item.items[key].image : undefined}
                            saveProgress = {this.props.saveProgress}
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
                extraData = {this.props}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 0,
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
