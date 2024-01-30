export interface Project {
	name: string,
	description: string,
	sections: {
		name: string,
		description?: string,
		list?: string[],
		link?: {
			name: string,
			url: string,
		}
	}[],
	links: {
		name: string,
		url: string,
	}[],
	slideshow: {
		image: string,
		description: string,
	}[],
}

export const PROJECTS: Project[] = [
	{
		name: 'Elite Farmers Website',
		description: 'A full-stack project that brings in-game player stats to the web. Bringing player stats to the web brings together a community of players and encourages engagement. This project and idea is built around the public API provided by Hypixel Inc. for their Minecraft server, Hypixel.',
		sections: [
			{
				name: 'Statistics',
				description: 'Currently, the domain (through Cloudflare) sees 7.5 million requests and 91 thousand unique visitors per month. There\'s also 2.5k registered users, and the accompanying Discord Bot is in 1.5k servers.',
			},
			{
				name: 'Front End',
				description: 'The website is built with SvelteKit and TailwindCSS. This is a fast and modern tech stack with a focus on performance and developer experience.',
				link: {
					name: 'GitHub',
					url: 'https://github.com/EliteFarmers/Website',
				}
			},
			{
				name: 'Back End',
				description: 'The backend is an ASP.NET Core Web API, and is hosted on a Docker Compose stack on Hetzner Cloud. The backend is responsible for fetching data from the game servers, transforming/parsing it, and serving it to the frontend with caches and authorization.',
				link: {
					name: 'GitHub',
					url: 'https://github.com/EliteFarmers/API',
				}
			},
			{
				name: 'All Technologies',
				list: [
					'SvelteKit',
					'TypeScript',
					'TailwindCSS',
					'Node.js',
					'discord.js',
					'ASP.NET Core',
					'C#',
					'PostgreSQL',
					'Redis',
					'RabbitMQ',
					'Docker Compose',
					'GitHub Actions',
					'Cloudflare',
					'Hetzner Cloud'
				],
			},
		],
		links: [
			{
				name: 'View Live Website',
				url: 'https://elitebot.dev',
			},
			{
				name: 'GitHub',
				url: 'https://github.com/EliteFarmers/Website',
			}
		],
		slideshow: [
			{
				image: '/projects/elitewebsite/main.png',
				description: 'Home page',
			},
			{
				image: '/projects/elitewebsite/stats.png',
				description: 'A player\'s stats page',
			},
			{
				image: '/projects/elitewebsite/leaderboard.png',
				description: 'One player leaderboard page',
			},
			{
				image: '/projects/elitewebsite/contests.png',
				description: 'Leaderboards of in-game events ("contests")',
			},
		]
	}
]