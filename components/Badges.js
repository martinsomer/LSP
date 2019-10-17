const badges = {
    core: {
        etiquette: {
            id: 'core_etiquette',
            text: 'Etiquette',
            image: require('./../assets/badges/placeholder.png'),
        },
        build: {
            id: 'core_build',
            text: 'Build',
            image: require('./../assets/badges/placeholder.png'),
        },
        storytelling: {
            id: 'core_storytelling',
            text: 'Storytelling',
            image: require('./../assets/badges/placeholder.png'),
        },
        methaphor: {
            id: 'core_methaphor',
            text: 'Metaphor',
            image: require('./../assets/badges/placeholder.png'),
        },
        mindgame: {
            id: 'core_mindgame',
            text: 'Mind Game',
            image: require('./../assets/badges/placeholder.png'),
        },
        collabgame: {
            id: 'core_collabgame',
            text: 'Collab Game',
            image: require('./../assets/badges/placeholder.png'),
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
        collabgame: {
            id: 'personal_collabgame',
            text: 'Collab Game',
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
        collabgame: {
            id: 'educational_collabgame',
            text: 'Collab Game',
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
        collabgame: {
            id: 'business_collabgame',
            text: 'Collab Game',
            image: require('./../assets/badges/placeholder.png'),
        },
        practical: {
            id: 'business_practical',
            text: 'Practical',
            image: require('./../assets/badges/placeholder.png'),
        },
    }
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
