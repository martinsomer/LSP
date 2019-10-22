import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ProgressTreeItem from './../../ProgressTreeItem';

export default class ProgressTree extends Component {
    
    _renderItem = ({item}) => {
        const progress = this.props.progress
        
        return (
            <View style = {styles.itemRowContainer}>
                <View style = {styles.itemRow}>
                    {Object.keys(item.items).map(key =>
                        <ProgressTreeItem
                            key = {key}
                            item = {item.items[key]}
                            isCompleted = {progress.includes(item.items[key].id) ? true : false}
                            startActivity = {this.props.startActivity}
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
                data = {this.props.progressTree}
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
        marginBottom: 20,
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
