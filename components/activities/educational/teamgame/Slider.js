import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Start from './Start';
import WarmUp from './WarmUp';
import Build from './Build';
import ShareModels from './ShareModels';
import FreeYourMind from './FreeYourMind';
import Build2 from './Build2';
import DiscussGoals from './DiscussGoals';
import Timer1 from './Timer1';
import Timer2 from './Timer2';

import Header from './../../../Header';

const slides = [
    {
        key: 'slide_1',
        content: Start,
        reference: React.createRef(),
    }, {
        key: 'slide_2',
        content: WarmUp,
        reference: React.createRef(),
    }, {
        key: 'slide_3',
        content: Build,
        reference: React.createRef(),
    }, {
        key: 'slide_4',
        content: Timer1,
        reference: React.createRef(),
    }, {
        key: 'slide_5',
        content: ShareModels,
        reference: React.createRef(),
    }, {
        key: 'slide_6',
        content: FreeYourMind,
        reference: React.createRef(),
    }, {
        key: 'slide_7',
        content: Build2,
        reference: React.createRef(),
    }, {
        key: 'slide_8',
        content: Timer2,
        reference: React.createRef(),
    }, {
        key: 'slide_9',
        content: ShareModels,
        reference: React.createRef(),
    }, {
        key: 'slide_10',
        content: DiscussGoals,
        reference: React.createRef(),
    }, 
]

export default class Slider extends Component {

    _setItemAsCompleted = () => {
        // this.props.setItemAsCompleted(this.props.item)
        this.props.cancelActivity()
    }

    // Handle mounting and unmounting of slides (to play/pause videos)
    _onSlideChange = (index, lastIndex) => {
        currentSlide = slides[index].reference.current
        lastSlide = slides[lastIndex].reference.current
        
        if (currentSlide.handleMount !== undefined)
            currentSlide.handleMount()
        
        if (lastSlide.handleUnmount !== undefined)
            lastSlide.handleUnmount()
    }

    _onDone = () => {
        this.props.setItemAsCompleted(this.props.item)
        this.props.cancelActivity()
    }

    _renderItem = ({ item }) => {
        return <item.content ref = {item.reference} />
    }


    render() {
        return (
            <View style = {styles.container}>
                <Header
                    onPressAction = {this._setItemAsCompleted}
                    headerTitleText = {'Team Game'}
                    name = {'md-arrow-back'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />

                <AppIntroSlider
                    slides = {slides}
                    showPrevButton = {true}
                    onDone = {this._onDone}
                    renderItem = {this._renderItem}
                    onSlideChange = {this._onSlideChange}
                    bottomButton = {true}
                    dotStyle = {display = 'none'}
                    activeDotStyle = {display = 'none'}
                />
            </View>
            
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B06495',
        alignItems: 'center',
        justifyContent: 'center',
    },
});