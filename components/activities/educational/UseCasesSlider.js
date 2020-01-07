import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import Header from './../../Header';

const slides = [
    {
        key: 'slide_1',
        text: 'Create collaboration between new people. Generate new energy to students returning from summer holiday.',
        popup: 'STEPS for ice-breaking:\n\nBUILD a model of your expectations towards the new school year.\n\nSHARE your stories, ask questions.\n\nREFLECT what were the shared expectations? What stood out?\n\nWhat is the most challenging expectation to achieve?\n\nAs an additional building round you can ask to build models about barriers to learning.\nAnd generate discussion as a result.'
    }, {
        key: 'slide_2',
        text: 'We recommend implementing Lego Serious Play, when you face a topic where uncertainty or confusion is high.\nManipulating an object physically can help students think and articulate their  ideas.',
        popup: 'STEPS for dealing with complex topics:\n\nConstruct Lego models based on what YOU have read about the topic.\n\nSHARE STORIES in the group.\n\nREFLECT each others models. What are the new perspectives? What were shared visions? Has the topic got clearer? Has something remained confusing?'
    }, {
        key: 'slide_3',
        text: 'Shared storytelling gives everyone equal possibility to contribute, it challenges students to listen carefully and to think about connections with each others work.\n\nFor elementary school it is as a learning tool for creative storytelling. For older students it can be used as an icebreaker for more thorough group work.',
        popup: 'An example flow creative storytelling for elementary school:\n\nIn 5 minutes build as many animals as you can.\n\nGive your animal a name and tell a story about it (how they feel, what they do, etc).\n\nStory will be continued one by one (2min per storyteller).\n\nREFLECT. Was it a shared story about their lives? What was difficult? Enjoyable?'
    }, {
        key: 'slide_4',
        text: 'Longer (at least 2-3 hours). Serious Play sessions allow you to create new roadmap of a project. How?',
        popup: 'STEPS for creating project road-map:\n\nBUILD your personal idea about the outcome of the project.\n\nSHARE your vision with others. Ask and investigate (e.g. meaning of bricks, reasons behind it).\n\nAs a team build a single shared model of your project outcome. Construct it together, make sure all participanys agree with the model.'
    }, {
        key: 'slide_5',
        text: 'Feel being an innovator. You can take any topic, to ideate the problems in the group and then use LSP for building models as first tangible prototypes of solutions.',
        popup: 'An example about inventor\'s toolkit for rising children\'s social awareness:\n\nSHARE the problems in local community. What might have caused it? Write each problem and keywords on a single page.\n\nLet each person choose the problem most relevant to them.\n\nBUILD a model about an invention that could solve the problem.\n\nSHARE your stories.\n\nREFLECT. What were the most interesting inventions? What are the most tangible ones?'
    }, {
        key: 'slide_6',
        text: 'Suitable for groups who have worked together for a longer period of time.',
        popup: 'An example about students reflecting back on their shool year:\n\nThink about your skills, knowledge and attitudes in the beginning of the school year and comapre them to current ones.\n\nBUILD a model, reflecting the changes.\n\nSHARE with others.\n\nREFLECT. What is surprising? What is common with others? New things about yourself? New things about others?'
    }
]

export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            popupVisible: false,
        }
    }
    
    componentDidMount() {
        /*
            This method is SUPPOSED to scroll to the index of initial slide (passed using props)
            Instead it scrolls to index 0, resulting in a bug (the slide content and dots at the bottom do not match)
            When used anywhere else, it works perfectly (e.g. on button press)
            
            NB: The slider library lacks the initialScrollIndex property of FlatList (that it is based on)
        */
        
        this.slider.goToSlide(this.props.initialSlide)
        
//        this.slider.setState({
//            activeIndex: this.props.initialSlide
//        })
//        
//        this.forceUpdate()
//        
//        this.slider.forceUpdate()
    }
    
    _showPopup = () => {        
        this.setState({
            popupVisible: true,
        })
    }
    
    _hidePopup = () => {
        this.setState({
            popupVisible: false,
        })
    }
    
    // Icons for Next/Back buttons
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
    
    _renderItem = ({ item }) => {
        return (
            <View style = {styles.container}>
                <Header
                    onPressAction = {this.props.headerButtonAction}
                    headerTitleText = {'Use cases'}
                    name = {'md-arrow-back'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                
                <View style = {styles.useCaseContent}>
                    <Text style = {styles.useCaseText}>
                        {item.text}
                    </Text>
                    
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {this._showPopup}>
                            <Text style = {styles.buttonText}>See the steps</Text>
                    </TouchableOpacity>
                </View>
                
                {this.state.popupVisible &&
                    <View style = {styles.popup}>
                        <TouchableOpacity
                            onPress = {this._hidePopup}
                            style = {styles.closePopupButtonContainer}>
                                <Ionicons
                                    name = 'md-close-circle-outline'
                                    color = 'rgba(0, 0, 0, 0.6)'
                                    size = {50}
                                    style = {styles.closePopupButton}
                                />
                        </TouchableOpacity>
                        <View style = {styles.popupContent}>
                            <Text style = {styles.popupText}>
                                {item.popup}
                            </Text>
                        </View>
                    </View>
                }
            </View>
        )
    }
    
    render() {
        return (
            <AppIntroSlider
                slides = {slides}
                showPrevButton = {true}
                showDoneButton = {false}
                renderItem = {this._renderItem}
                onSlideChange = {this._onSlideChange}
                renderNextButton = {this._renderNextButton}
                renderPrevButton = {this._renderPrevButton}
                ref = {ref => this.slider = ref}
                extraData = {this.state}
            />
        )
    }
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B06495',
        position: 'relative',
    },
    navigationButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    useCaseContent: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    useCaseText: {
        color: 'white',
        fontSize: 25,
        paddingHorizontal: 30,
    },
    button: {
        width: '60%',
        borderRadius: 5,
        backgroundColor: '#DE8DC2',
        borderWidth: 2,
        borderColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
    },
    popup: {
        position: 'absolute',
        width: '80%',
        height: '80%',
        marginHorizontal: '10%',
        marginVertical: Dimensions.get('window').height / 10 + Constants.statusBarHeight,
        backgroundColor: '#DE8DC2',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
    },
    popupContent: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    popupText: {
        color: 'white',
        fontSize: 20,
    },
    closePopupButtonContainer: {
        width: '100%',
        alignItems: 'flex-end',
    },
    closePopupButton: {
        marginTop: -23,
        marginRight: -18,
        backgroundColor: 'transparent',
    }
});
    