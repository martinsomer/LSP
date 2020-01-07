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
                badges.core.stories,
            ]
        }, {
            id: '2',
            items: [
                badges.core.metaphor,
            ]
        }, {
            id: '3',
            items: [
                badges.core.mindgame,
                badges.core.teamgame,
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
                badges.personal.teamgame,
                badges.personal.practical,
            ]
        },
    ],
    educational: [
        {
            id: '0',
            items: [
                badges.educational.introduction,
            ]
        }, {
            id: '1',
            items: [
                badges.educational.video,
            ]
        }, {
            id: '2',
            items: [
                badges.educational.use_cases,
                badges.educational.faq,
            ]
        }, {
            id: '3',
            items: [
                badges.educational.mindgame,
                badges.educational.teamgame,
                badges.educational.workshops,
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
                badges.business.teamgame,
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
