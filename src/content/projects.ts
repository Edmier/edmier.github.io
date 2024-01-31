interface Link {
	name: string;
	url: string;
}

export interface Project {
	name: string;
	description: string;
	date: string;
	sections: {
		name: string;
		description?: string;
		list?: string[];
		link?: Link;
	}[];
	links?: Link[];
	video?: Link;
	slideshow?: {
		image: string;
		description: string;
	}[];
}

export const PROJECTS: Project[] = [
	{
		name: 'Elite Farmers Website',
		description:
			'A full-stack project that brings in-game player stats to the web. Bringing player stats to the web brings together a community of players and encourages engagement. This project and idea is built around the public API provided by Hypixel Inc. for their Minecraft server, Hypixel.',
		date: '2021 - Present',
		sections: [
			{
				name: 'Statistics',
				description:
					'Currently, the domain (through Cloudflare) sees 7.5 million requests and 91 thousand unique visitors per month. There\'s also 2.5k registered users, 850k tracked players, and the accompanying Discord Bot is in 1.5k servers. The website is also the first result on Google for the search term "elite farmers".',
			},
			{
				name: 'Front End',
				description:
					'The website is built with SvelteKit and TailwindCSS. This is a fast and modern tech stack with a focus on performance and developer experience.',
				link: {
					name: 'GitHub',
					url: 'https://github.com/EliteFarmers/Website',
				},
			},
			{
				name: 'Back End',
				description:
					'The backend is an ASP.NET Core Web API, and is hosted on a Docker Compose stack on Hetzner Cloud. The backend is responsible for fetching data from the game servers, transforming/parsing it, and serving it to the frontend with caches and authorization.',
				link: {
					name: 'GitHub',
					url: 'https://github.com/EliteFarmers/API',
				},
			},
			{
				name: 'All Technologies',
				description:
					"The front end, back end, and discord bot use a wide variety of technologies, which is somewhat overengineed for a project of this size, but it's been a great learning experience.",
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
					'Hetzner Cloud',
				],
			},
		],
		links: [
			{
				name: 'View Live Website',
				url: 'https://elitebot.dev',
			},
		],
		slideshow: [
			{
				image: '/projects/elitewebsite/main.png',
				description: 'Home page',
			},
			{
				image: '/projects/elitewebsite/stats.png',
				description: "A player's stats page",
			},
			{
				image: '/projects/elitewebsite/leaderboard.png',
				description: 'One (of many) player leaderboard pages',
			},
			{
				image: '/projects/elitewebsite/contests.png',
				description: 'Leaderboards of in-game events ("contests")',
			},
		],
	},
	{
		name: 'Dungeon Game (WIP Title)',
		date: 'Fall 2023',
		description:
			"Find treasure in a dark and spooky dungeon enviroment before you're caught by the creatures lurking in the walls. An unforgiving game that will punish any players being too callous. A completed game made in Godot 4.",
		sections: [
			{
				name: 'Information',
				description:
					'The game is relatively simple, but I packed in a lot of code features behind the scenes. There is a custom danger level system which reacts to the noise levels made by the player. Sprinting and jumping produces more noise, which increases the difficulty and plays screams and spooky sounds more often, while crouching and walking barely makes any noise. The tresure chest location is also randomly selected from a list of possible locations, allowing for some replayability.',
				link: {
					name: 'Godot Engine',
					url: 'https://godotengine.org',
				},
			},
			{
				name: 'Why Godot?',
				description:
					"Godot is a free and open-source game engine that I've been using for years. I've used Godot for 2D and 3D projects, and I've always enjoyed it. I have experience in Unity and Unreal Engine, but I prefer Godot for its more enjoyable developer experience.",
				link: {
					name: 'Godot Engine',
					url: 'https://godotengine.org',
				},
			},
			{
				name: 'Where To Play',
				description:
					"The game was made for a class, which naturally lead to a limited scope of the project. While I do consider everything finished, there's currently only 10-20 minutes of actual gameplay content. I would like to expand the level size before making it public. For now, feel free to contact me if you'd like to play it.",
			},
			{
				name: 'Technologies',
				list: ['Godot Engine 4', 'C#', '.NET 8'],
			},
		],
		video: {
			url: '/projects/dungeon/walkthrough.mp4',
			name: 'Gameplay Walkthrough',
		},
		slideshow: [
			{
				image: '/projects/dungeon/spawnroom.png',
				description: 'The spawn room',
			},
			{
				image: '/projects/dungeon/spider.png',
				description: 'Being chased by a spider',
			},
			{
				image: '/projects/dungeon/library.png',
				description: '',
			},
			{
				image: '/projects/dungeon/treasure.png',
				description: 'Finding the treasure',
			},
			{
				image: '/projects/dungeon/win.png',
				description: 'The win screen',
			},
			{
				image: '/projects/dungeon/gameover.png',
				description: 'The game over screen',
			},
			{
				image: '/projects/dungeon/menu.png',
				description: 'Main menu',
			},
		],
	},
];
