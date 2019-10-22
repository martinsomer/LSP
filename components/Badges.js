// Core
import IntroductionVideo from './activities/core/IntroductionVideo';

// General
import Mindgame from './activities/Mindgame';
import Teamgame from './activities/Teamgame';

const badges = {
    core: {
        etiquette: {
            id: 'core_etiquette',
            text: 'Etiquette',
            image: require('./../assets/badges/placeholder.png'),
            activity: {
                component: IntroductionVideo,
                subtitle: 'Learn how to make LEGO Serious Play sessions better for everyone.',
                data: 'https://seriousplayapp.com/videos/720p/04_core_lsp_etiquette.mp4',
            }
        },
        build: {
            id: 'core_build',
            text: 'Build',
            image: require('./../assets/badges/placeholder.png'),
            activity: {
                component: IntroductionVideo,
                subtitle: 'Learn where to start and how to experiment with LEGO bricks.',
                data: 'https://seriousplayapp.com/videos/720p/05_core_how_to_build.mp4',
            }
        },
        metaphor: {
            id: 'core_metaphor',
            text: 'Metaphor',
            image: require('./../assets/badges/placeholder.png'),
            activity: {
                component: IntroductionVideo,
                subtitle: 'Learn how to explore ideas, express emotions, and communicate.',
                data: 'https://seriousplayapp.com/videos/720p/06_core_metaphors.mp4',
            }
        },
        stories: {
            id: 'core_stories',
            text: 'Stories',
            image: require('./../assets/badges/placeholder.png'),
            activity: {
                component: IntroductionVideo,
                subtitle: 'Learn how to find connections and tell stories about your creations.',
                data: 'https://seriousplayapp.com/videos/720p/07_core_stories.mp4',
            }
        },
        mindgame: {
            id: 'core_mindgame',
            text: 'Mind Game',
            image: require('./../assets/badges/placeholder.png'),
            activity: {
                component: Mindgame,
                data: [
                    {
                        image: require('./../assets/mindgame/man_with_fire.jpg'),
                        options: ['Story', 'Canvas', 'Color', 'Solitude'],
                    }, {
                        image: require('./../assets/mindgame/roof.jpg'),
                        options: ['Closeness', 'Cookie', 'Coverage', 'Roof'],
                    }, {
                        image: require('./../assets/mindgame/bear.jpg'),
                        options: ['Life', 'Robot', 'Bear', 'Nature'],
                    }, {
                        image: require('./../assets/mindgame/apple.jpg'),
                        options: ['Sour', 'Bounce', 'Apple', 'Knife'],
                    }, {
                        image: require('./../assets/mindgame/piano.jpg'),
                        options: ['Piano', 'Play', 'Sensations', 'Teeth'],
                    }, {
                        image: require('./../assets/mindgame/door.jpg'),
                        options: ['Mystery', 'Door', 'Music', 'Knock'],
                    }, {
                        image: require('./../assets/mindgame/mouse.jpg'),
                        options: ['Scientist', 'Nasty', 'Cheese', 'Mouse'],
                    }
                ]
            }
        },
        teamgame: {
            id: 'core_teamgame',
            text: 'Team Game',
            image: require('./../assets/badges/placeholder.png'),
            activity: {
                component: Teamgame,
                data: [
                    {
                        text: 'Build a tower with 5 blocks',
                        button: 'It\'s ready',
                    }, {
                        text: 'Now pass it to the person next to you',
                        button: 'OK!',
                    }, {
                        text: 'Tell a story about the building',
                        button: 'Done!',
                    }, {
                        text: 'Now pass it to the person next to you',
                        button: 'OK!',
                    }, {
                        text: 'Change the building so that it is taller',
                        button: 'Done!',
                    }, {
                        text: 'Now pass it to the person next to you',
                        button: 'OK!',
                    }, {
                        text: 'Ask the next person to close their eyes. Do 3 changes to the building',
                        button: 'Done!',
                    }, {
                        text: 'Now pass it to the person next to you',
                        button: 'OK!',
                    }, {
                        text: 'Ask them to explain the building while blindfolded.',
                        button: 'Done!',
                    }, {
                        text: 'Ask them to open their eyes',
                        button: 'OK!',
                    }
                ]
            }
        },
        practical: {
            id: 'core_practical',
            text: 'Practical',
            image: require('./../assets/badges/placeholder.png'),
        },
    },
    personal: {
        tutorial: {
            id: 'personal_tutorial',
            text: 'Tutorial',
            image: require('./../assets/badges/placeholder.png'),
        },
        video: {
            id: 'personal_video',
            text: 'Video',
            image: require('./../assets/badges/placeholder.png'),
        },
        infographic_1: {
            id: 'personal_infographic_1',
            text: 'Infographic',
            image: require('./../assets/badges/placeholder.png'),
        },
        infographic_2: {
            id: 'personal_infographic_2',
            text: 'Infographic',
            image: require('./../assets/badges/placeholder.png'),
        },
        mindgame: {
            id: 'personal_mindgame',
            text: 'Mind Game',
            image: require('./../assets/badges/placeholder.png'),
        },
        teamgame: {
            id: 'personal_teamgame',
            text: 'Team Game',
            image: require('./../assets/badges/placeholder.png'),
        },
        practical: {
            id: 'personal_practical',
            text: 'Practical',
            image: require('./../assets/badges/placeholder.png'),
        },
        
    },
    educational: {
        tutorial: {
            id: 'educational_tutorial',
            text: 'Tutorial',
            image: require('./../assets/badges/placeholder.png'),
        },
        video: {
            id: 'educational_video',
            text: 'Video',
            image: require('./../assets/badges/placeholder.png'),
        },
        infographic_1: {
            id: 'educational_infographic_1',
            text: 'Infographic',
            image: require('./../assets/badges/placeholder.png'),
        },
        infographic_2: {
            id: 'educational_infographic_2',
            text: 'Infographic',
            image: require('./../assets/badges/placeholder.png'),
        },
        mindgame: {
            id: 'educational_mindgame',
            text: 'Mind Game',
            image: require('./../assets/badges/placeholder.png'),
        },
        teamgame: {
            id: 'educational_teamgame',
            text: 'Team Game',
            image: require('./../assets/badges/placeholder.png'),
        },
        practical: {
            id: 'educational_practical',
            text: 'Practical',
            image: require('./../assets/badges/placeholder.png'),
        },
    },
    business: {
        tutorial: {
            id: 'business_tutorial',
            text: 'Tutorial',
            image: require('./../assets/badges/placeholder.png'),
        },
        video: {
            id: 'business_video',
            text: 'Video',
            image: require('./../assets/badges/placeholder.png'),
        },
        infographic_1: {
            id: 'business_infographic_1',
            text: 'Infographic',
            image: require('./../assets/badges/placeholder.png'),
        },
        infographic_2: {
            id: 'business_infographic_2',
            text: 'Infographic',
            image: require('./../assets/badges/placeholder.png'),
        },
        mindgame: {
            id: 'business_mindgame',
            text: 'Mind Game',
            image: require('./../assets/badges/placeholder.png'),
        },
        teamgame: {
            id: 'business_teamgame',
            text: 'Team Game',
            image: require('./../assets/badges/placeholder.png'),
        },
        practical: {
            id: 'business_practical',
            text: 'Practical',
            image: require('./../assets/badges/placeholder.png'),
        },
    },
}

export function GetBadges(module) {
    switch (module) {
        case 'core':
            return badges.core
        
        case 'personal':
            return badges.personal
        
        case 'educational':
            return badges.educational
        
        case 'business':
            return badges.business
        
        default:
            return badges
    }
}

export function GetBadgesAsArray() {
    let allBadges = []
    
    Object.values(badges).forEach((module) => {
        Object.values(module).forEach((item) => {
            allBadges.push(item)
        })
    })
    
    return allBadges
}
