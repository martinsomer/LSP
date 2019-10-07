import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';

// Import all intro slide components
import Splash from './components/screens/intro/Splash';
import LegoSeriousPlay from './components/screens/intro/LegoSeriousPlay';
import GuidedVideos from './components/screens/intro/GuidedVideos';
import MiniGames from './components/screens/intro/MiniGames';
import ShareSkills from './components/screens/intro/ShareSkills';
import WhatYouNeed from './components/screens/intro/WhatYouNeed';
import LastSlide from './components/screens/intro/LastSlide';
import MainScreen from './components/screens/MainScreen';

// Create slides for intro
const slides = [
    {
        key: 'slide_1',
        content: Splash,
        reference: React.createRef(),
    }, {
        key: 'slide_2',
        content: LegoSeriousPlay,
        reference: React.createRef(),
    }, {
        key: 'slide_3',
        content: GuidedVideos,
        reference: React.createRef(),
    }, {
        key: 'slide_4',
        content: MiniGames,
        reference: React.createRef(),
    }, {
        key: 'slide_5',
        content: ShareSkills,
        reference: React.createRef(),
    }, {
        key: 'slide_6',
        content: WhatYouNeed,
        reference: React.createRef(),
    }, {
        key: 'slide_7',
        content: LastSlide,
        reference: React.createRef(),
    },
]

export default class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            showIntro: true,
        }
    }
    
    componentDidMount() {
        AsyncStorage.getItem('SHOW_INTRO').then(response => {
            if (response === null)
                return
            
            this.setState({
                showIntro: response === 'true',
            })
        })
        
        //AsyncStorage.clear()
    }
    
    // Icons for Next/Back/Done buttons
    _renderNextButton = () => {
        return (
            <View style = {styles.navigationButton}>
                <Ionicons
                    name = 'md-arrow-round-forward'
                    color = 'white'
                    size = {24}
                    style = {{ backgroundColor: 'transparent' }}
                />
            </View>
        )
    }
    
    _renderPrevButton = () => {
        return (
            <View style = {styles.navigationButton}>
                <Ionicons
                    name = 'md-arrow-round-back'
                    color = 'white'
                    size = {24}
                    style = {{ backgroundColor: 'transparent' }}
                />
            </View>
        )
    }
    
    _renderDoneButton = () => {
        return (
            <View style = {styles.navigationButton}>
                <Ionicons
                    name = 'md-checkmark'
                    color = 'white'
                    size = {24}
                    style = {{ backgroundColor: 'transparent' }}
                />
            </View>
        )
    }
    
    // Handle mounting and unmounting of slides (to play / pause videos)
    _onSlideChange = (index, lastIndex) => {
        currentSlide = slides[index].reference.current
        lastSlide = slides[lastIndex].reference.current
        
        if (currentSlide.handleMount != undefined)
            currentSlide.handleMount()
        
        if (lastSlide.handleUnmount != undefined)
            lastSlide.handleUnmount()
    }
    
    _onDone = () => {
        this.setState({
            showIntro: false,
        })
        
        AsyncStorage.setItem('SHOW_INTRO', 'false')
    }
    
    _renderItem = ({ item }) => {
        return <item.content ref = {item.reference} />
    }
    
    render() {
        if (this.state.showIntro) {
            return (
                <AppIntroSlider
                    slides = {slides}
                    showPrevButton = {true}
                    onDone = {this._onDone}
                    renderItem = {this._renderItem}
                    onSlideChange = {this._onSlideChange}
                    renderNextButton = {this._renderNextButton}
                    renderPrevButton = {this._renderPrevButton}
                    renderDoneButton = {this._renderDoneButton}
                />
            )
        }

        return <MainScreen />
    }
}
    
const styles = StyleSheet.create({
    navigationButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
});
    