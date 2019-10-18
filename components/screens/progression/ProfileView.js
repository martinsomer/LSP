import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AlignmentBars from './AlignmentBars';
import BadgeView from './BadgeView';

export default class ProfileView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            practical: 60,
            creative: 20,
            rational: 0,
            emotional: 20,
        }
    }
    
    _editAvatar = () => {
        //TODO avatar customization
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <ScrollView>
                    <View style = {styles.content}>
                        <View style = {styles.avatar}>
                            <Image
                                style = {styles.image}
                                source = {require('./../../../assets/avatar.png')}
                                resizeMode = 'contain'
                            />
                            <TouchableOpacity
                                style = {styles.editAvatar}
                                onPress = {this._editAvatar}>
                                    <Ionicons
                                        name = 'md-brush'
                                        color = 'white'
                                        size = {26}
                                        style = {{ backgroundColor: 'transparent' }}
                                    />
                            </TouchableOpacity>
                        </View>
                        <AlignmentBars
                            practical = {this.state.practical}
                            creative = {this.state.creative}
                            rational = {this.state.rational}
                            emotional = {this.state.emotional}
                        />
                    </View>
                    <BadgeView progress = {this.props.progress} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 0,
    },
    content: {
        alignItems: 'center',
    },
    avatar: {
        width: '70%',
        aspectRatio: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    editAvatar: {
        position: 'absolute',
        right: 0,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
});
