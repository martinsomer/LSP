import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './../../Header';

const settings = [
    {
        id: '0',
        text: 'Setting 1',
        value: 'Value 1',
    },
    {
        id: '1',
        text: 'Setting 2',
        value: 'Value 2',
    },
    {
        id: '2',
        text: 'Setting 3',
        value: 'Value 3',
    },
    {
        id: '3',
        text: 'Setting 4',
        value: 'Value 4',
    },
    {
        id: '4',
        text: 'Setting 5',
        value: 'Value 5',
    },
    {
        id: '5',
        text: 'Setting 6',
        value: 'Value 6',
    },
]

export default class Settings extends Component {
    
    _renderSeparator = () => {
        return <View style = {styles.separator}></View>
    }
    
    _renderItem = ({item}) => {
        return (
            <View style = {styles.item}>
                <Text style = {styles.itemText}>
                    {item.text}
                </Text>
                <Text style = {styles.itemValue}>
                    {item.value}
                </Text>
            </View>
        )
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Header
                    toggleDrawer = {this.props.navigation.toggleDrawer}
                    headerTitleText = {'Settings'}
                    drawerButtonColor = {'black'}
                    headerTitleColor = {'black'}
                />
                <FlatList
                    style = {styles.flatList}
                    data = {settings}
                    renderItem = {this._renderItem}
                    keyExtractor = {item => item.id}
                    ItemSeparatorComponent = {this._renderSeparator}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 10,
    },
    flatList: {
        flex: 1,
        marginTop: 15,
    },
    item: {
        width: '100%',
        flexDirection: 'row',
    },
    itemText: {
        fontSize: 16,
        flex: 1,
    },
    itemValue: {
        textTransform: 'uppercase',
        fontSize: 16,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#bfbfbf',
        marginTop: 10,
        marginBottom: 10,
    },
});
