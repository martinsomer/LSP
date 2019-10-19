import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Profile from './draweritems/Profile';
import Settings from './draweritems/Settings';
import About from './draweritems/About';
import { Core, Personal, Educational, Business } from './draweritems/Modules';

const RouteConfig = {
    'Profile': {
        screen: Profile,
        navigationOptions: {
            drawerIcon: () => (
                <Image
                    style = {styles.icon}
                    source = {require('./../../assets/drawericons/profile.png')}
                    resizeMode = 'contain'
                />
            )
        }
    },
    'Core': {
        screen: Core,
        navigationOptions: {
            drawerIcon: () => (
                <Image
                    style = {styles.icon}
                    source = {require('./../../assets/drawericons/core.png')}
                    resizeMode = 'contain'
                />
            )
        }
    },
    'Personal': {
        screen: Personal,
        navigationOptions: {
            drawerIcon: () => (
                <Image
                    style = {styles.icon}
                    source = {require('./../../assets/drawericons/personal.png')}
                    resizeMode = 'contain'
                />
            )
        }
    },
    'Educational': {
        screen: Educational,
        navigationOptions: {
            drawerIcon: () => (
                <Image
                    style = {styles.icon}
                    source = {require('./../../assets/drawericons/educational.png')}
                    resizeMode = 'contain'
                />
            )
        }
    },
    'Business': {
        screen: Business,
        navigationOptions: {
            drawerIcon: () => (
                <Image
                    style = {styles.icon}
                    source = {require('./../../assets/drawericons/business.png')}
                    resizeMode = 'contain'
                />
            )
        }
    },
    'Settings': {
        screen: Settings,
        navigationOptions: {
            drawerIcon: () => (
                <Image
                    style = {styles.icon}
                    source = {require('./../../assets/drawericons/settings.png')}
                    resizeMode = 'contain'
                />
            )
        }
    },
    'About': {
        screen: About,
        navigationOptions: {
            drawerIcon: () => (
                <Image
                    style = {styles.icon}
                    source = {require('./../../assets/drawericons/about.png')}
                    resizeMode = 'contain'
                />
            )
        }
    },
}

const DrawerNavigatorConfig = {
    initialRouteName: 'Profile',
    unmountInactiveRoutes: true,
}

const DrawerNavigator = createDrawerNavigator(RouteConfig, DrawerNavigatorConfig)
export default createAppContainer(DrawerNavigator)

const styles = StyleSheet.create({
    icon: {
        width: 22,
        tintColor: '#555555',
    },
});
