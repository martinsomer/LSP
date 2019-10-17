import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AlignmentBars extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.alignmentBarHeader}>Practical</Text>
                <View style = {styles.alignmentBar}>
                    <View style = {[styles.alignmentBarProgress, {width: this.props.practical + '%'}]}>
                        {this.props.practical > 0 &&
                            <Text style = {styles.alignmentBarPercentage}>{this.props.practical + '%'}</Text>
                        }
                    </View>
                </View>
                
                <Text style = {styles.alignmentBarHeader}>Creative</Text>
                <View style = {styles.alignmentBar}>
                    <View style = {[styles.alignmentBarProgress, {width: this.props.creative + '%'}]}>
                        {this.props.creative > 0 &&
                            <Text style = {styles.alignmentBarPercentage}>{this.props.creative + '%'}</Text>
                        }
                    </View>
                </View>
                
                <Text style = {styles.alignmentBarHeader}>Rational</Text>
                <View style = {styles.alignmentBar}>
                    <View style = {[styles.alignmentBarProgress, {width: this.props.rational + '%'}]}>
                        {this.props.rational > 0 &&
                            <Text style = {styles.alignmentBarPercentage}>{this.props.rational + '%'}</Text>
                        }
                    </View>
                </View>
                
                <Text style = {styles.alignmentBarHeader}>Emotional</Text>
                <View style = {styles.alignmentBar}>
                    <View style = {[styles.alignmentBarProgress, {width: this.props.emotional + '%'}]}>
                        {this.props.emotional > 0 &&
                            <Text style = {styles.alignmentBarPercentage}>{this.props.emotional + '%'}</Text>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        marginTop: 20,
    },
    alignmentBarHeader: {
        marginTop: 10,
        fontSize: 17,
        color: '#666666',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    alignmentBar: {
        borderRadius: 8,
        height: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
    alignmentBarProgress: {
        borderRadius: 8,
        height: '100%',
        backgroundColor: '#1EB5F6',
    },
    alignmentBarPercentage: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
});
