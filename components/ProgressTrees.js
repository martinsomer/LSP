import { GetBadges } from './Badges';
const badges = GetBadges()

const progressTrees = {
    core: [
        {
            id: '0',
            items: [
                badges.core.etiquette,
            ]
        }, {
            id: '1',
            items: [
                badges.core.build,
                badges.core.storytelling,
            ]
        }, {
            id: '2',
            items: [
                badges.core.methaphor,
            ]
        }, {
            id: '3',
            items: [
                badges.core.mindgame,
                badges.core.collabgame,
                badges.core.practical,
            ]
        },
    ],
    personal: [
        {
            id: '0',
            items: [
                badges.personal.tutorial,
            ]
        }, {
            id: '1',
            items: [
                badges.personal.video,
            ]
        }, {
            id: '2',
            items: [
                badges.personal.infographic_1,
                badges.personal.infographic_2,
            ]
        }, {
            id: '3',
            items: [
                badges.personal.mindgame,
                badges.personal.collabgame,
                badges.personal.practical,
            ]
        },
    ],
    educational: [
        {
            id: '0',
            items: [
                badges.educational.tutorial,
            ]
        }, {
            id: '1',
            items: [
                badges.educational.video,
            ]
        }, {
            id: '2',
            items: [
                badges.educational.infographic_1,
                badges.educational.infographic_2,
            ]
        }, {
            id: '3',
            items: [
                badges.educational.mindgame,
                badges.educational.collabgame,
                badges.educational.practical,
            ]
        },
    ],
    business: [
        {
            id: '0',
            items: [
                badges.business.tutorial,
            ]
        }, {
            id: '1',
            items: [
                badges.business.video,
            ]
        }, {
            id: '2',
            items: [
                badges.business.infographic_1,
                badges.business.infographic_2,
            ]
        }, {
            id: '3',
            items: [
                badges.business.mindgame,
                badges.business.collabgame,
                badges.business.practical,
            ]
        },
    ],
}

export function GetProgressTree(module) {
    switch (module) {
        case 'core':
            return progressTrees.core
        
        case 'personal':
            return progressTrees.personal
        
        case 'educational':
            return progressTrees.educational
        
        case 'business':
            return progressTrees.business
        
        default:
            return progressTrees
    }
}
