import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Profile from './draweritems/Profile';
import Core from './draweritems/Core';
import Personal from './draweritems/Personal';
import Educational from './draweritems/Educational';
import Business from './draweritems/Business';
import Settings from './draweritems/Settings';
import About from './draweritems/About';

const RouteConfig = {
    'Profile': {
        screen: Profile,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name = 'md-person'
                    color = 'black'
                    size = {24}
                />
            )
        }
    },
    'Core': {
        screen: Core,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name = 'md-battery-full'
                    color = 'black'
                    size = {24}
                />
            )
        }
    },
    'Personal': {
        screen: Personal,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name = 'md-heart'
                    color = 'black'
                    size = {24}
                />
            )
        }
    },
    'Educational': {
        screen: Educational,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name = 'md-school'
                    color = 'black'
                    size = {24}
                />
            )
        }
    },
    'Business': {
        screen: Business,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name = 'md-briefcase'
                    color = 'black'
                    size = {24}
                />
            )
        }
    },
    'Settings': {
        screen: Settings,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name = 'md-settings'
                    color = 'black'
                    size = {24}
                />
            )
        }
    },
    'About': {
        screen: About,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name = 'md-information-circle'
                    color = 'black'
                    size = {24}
                />
            )
        }
    },
}

const DrawerNavigatorConfig = {
    initialRouteName: 'Profile',
    unmountInactiveRoutes: false,
}

const DrawerNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig)
export default createAppContainer(DrawerNavigator)
