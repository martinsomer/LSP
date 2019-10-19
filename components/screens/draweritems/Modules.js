import React, { Component } from 'react';

import ModuleScreen from './ModuleScreen';
import { GetProgressTree } from './../../ProgressTrees';

export class Core extends Component {
    render() {
        return(
            <ModuleScreen
                headerTitleText = {'Core'}
                descriptionText = {'Learn the basics of LEGO Serious Play. How to use LEGO bricks for communication, creativity, and new ideas.'}
                descriptionImage = {require('./../../../assets/pathselection/communication.png')}
                backgroundColor = {'#F9C137'}
                progressTree = {GetProgressTree('core')}
                navigation = {this.props.navigation}
            />
        )
    }
}

export class Personal extends Component {
    render() {
        return(
            <ModuleScreen
                headerTitleText = {'Personal'}
                descriptionText = {'Use LEGO Serious Play for personal purpose. Build your goals and aspirations, build your habits and solve your problems.'}
                descriptionImage = {require('./../../../assets/pathselection/goalsetting.png')}
                backgroundColor = {'#88C9B3'}
                progressTree = {GetProgressTree('personal')}
                navigation = {this.props.navigation}
            />
        )
    }
}

export class Educational extends Component {
    render() {
        return(
            <ModuleScreen
                headerTitleText = {'Educational'}
                descriptionText = {'Use LEGO Serious Play in classroom. Make your students play with LEGO bricks for new ideas, better classroom climate and learning.'}
                descriptionImage = {require('./../../../assets/pathselection/ideation.png')}
                backgroundColor = {'#B06495'}
                progressTree = {GetProgressTree('educational')}
                navigation = {this.props.navigation}
            />
        )
    }
}

export class Business extends Component {
    render() {
        return(
            <ModuleScreen
                headerTitleText = {'Business'}
                descriptionText = {'Use LEGO Serious Play in organizations. Build teams, come up with strategies and new business ideas.'}
                descriptionImage = {require('./../../../assets/pathselection/teambuilding.png')}
                backgroundColor = {'#4F4F94'}
                progressTree = {GetProgressTree('business')}
                navigation = {this.props.navigation}
            />
        )
    }
}
