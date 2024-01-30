import { MAIN_INFO } from './siteInfo';

export const NAV_LINKS = [
	{
		name: 'Contact',
		url: '#contact',
		sub: [
			{
				name: 'Email',
				url: `mailto:${MAIN_INFO.contact.messaging.p1}@${MAIN_INFO.contact.messaging.p2}.${MAIN_INFO.contact.messaging.p3}`,
			},
			...MAIN_INFO.contact.accounts,
		],
	},
	{
		name: 'Projects',
		url: '#projects',
	},
];
