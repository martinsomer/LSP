import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

import Header from './../../Header';
import UseCasesSlider from './UseCasesSlider';

export default class UseCases extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            useCaseView: false,
            initialSlide: 0,
        }
    }
    
    _setItemAsCompleted = () => {
        this.props.setItemAsCompleted(this.props.item)
        this.props.cancelActivity()
    }
    
    _goToUseCase = (index) => {
        this.setState({
            useCaseView: true,
            initialSlide: index,
        })
    }
    
    _returnToUserCases = () => {
        this.setState({
            useCaseView: false,
        })
    }
    
    render() {
        if (this.state.useCaseView) {
            return <UseCasesSlider
                initialSlide = {this.state.initialSlide}
                headerButtonAction = {this._returnToUserCases}
            />
        }
        
        return (
            <View style = {styles.container}>
                <Header
                    onPressAction = {this._setItemAsCompleted}
                    headerTitleText = {this.props.item.text}
                    name = {'md-arrow-back'}
                    drawerButtonColor = {'white'}
                    headerTitleColor = {'white'}
                />
                
                <Text style = {styles.subtitle}>
                    Here are only some examples of how LSP has been used.
                    {'\n'}
                    Create your own context. Break the ice. Solve issues. BE FLEXIBLE.
                    {'\n'}
                    Share your story with the community.
                </Text>
            
                <View style = {styles.useCasesContainer}>
                    <View style = {styles.useCasesRow}>
                        <TouchableOpacity
                            style = {styles.useCasesItem}
                            onPress = {() => this._goToUseCase(0)}>
                                <Image
                                    style = {styles.image}
                                    source = {require('./../../../assets/usecases/icebreaking.png')}
                                    resizeMode = 'cover'
                                />
                                <Text style = {styles.useCaseText}>
                                    Ice breaking
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.useCasesItem}
                            onPress = {() => this._goToUseCase(1)}>
                                <Image
                                    style = {styles.image}
                                    source = {require('./../../../assets/usecases/complex_topics.png')}
                                    resizeMode = 'cover'
                                />
                                <Text style = {styles.useCaseText}>
                                    Complex topics
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.useCasesItem}
                            onPress = {() => this._goToUseCase(2)}>
                                <Image
                                    style = {styles.image}
                                    source = {require('./../../../assets/usecases/creative_storytelling.png')}
                                    resizeMode = 'cover'
                                />
                                <Text style = {styles.useCaseText}>
                                    Creative storytelling
                                </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.useCasesRow}>
                        <TouchableOpacity
                            style = {styles.useCasesItem}
                            onPress = {() => this._goToUseCase(3)}>
                                <Image
                                    style = {styles.image}
                                    source = {require('./../../../assets/usecases/project_roadmapping.png')}
                                    resizeMode = 'cover'
                                />
                                <Text style = {styles.useCaseText}>
                                    Project road-mapping
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.useCasesItem}
                            onPress = {() => this._goToUseCase(4)}>
                                <Image
                                    style = {styles.image}
                                    source = {require('./../../../assets/usecases/inventors_toolkit.png')}
                                    resizeMode = 'cover'
                                />
                                <Text style = {styles.useCaseText}>
                                    Inventors toolkit
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.useCasesItem}
                            onPress = {() => this._goToUseCase(5)}>
                                <Image
                                    style = {styles.image}
                                    source = {require('./../../../assets/usecases/reflection_tool.png')}
                                    resizeMode = 'cover'
                                />
                                <Text style = {styles.useCaseText}>
                                    Reflection tool
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B06495',
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    useCasesContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    useCasesRow: {
        flexDirection: 'row',
        marginBottom: 35,
        paddingHorizontal: 20,
    },
    useCasesItem: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 22,
        margin: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 22,
    },
    useCaseText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    }
});
