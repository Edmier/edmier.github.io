interface Link {
	name: string;
	url: string;
}

export interface ProjectSection {
	name: string;
	description?: string;
	list?: string[];
	link?: Link;
}

export interface Project {
	name: string;
	description: string;
	tech?: string[];
	type: 'games' | 'web';
	date: string;
	sections: ProjectSection[];
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
		type: 'web',
		description:
			'A full-stack project that brings in-game player stats to the web. Bringing player stats to the web brings together a community of players and encourages engagement. This project and idea is built around the public API provided by Hypixel Inc. for their Minecraft server, Hypixel.',
		date: '2021 - Present',
		tech: [
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
			'Hetzner VPS',
		],
		sections: [
			{
				name: 'My Role',
				description:
					'I am the lead developer and owner of the project. I am responsible for the website, backend, and Discord bot, as well as hosting and maintenance.',
			},
			{
				name: 'Statistics',
				description:
					'Currently, the domain (through Cloudflare) sees 20+ million requests and 200+ thousand unique visitors per month. There\'s also 15k registered users, 850k tracked players, and the accompanying Discord Bot is in 5,000 servers. The website is also the first result on Google for the search term "elite farmers".',
			},
			{
				name: 'Monetization',
				description:
					'The website sells cosmetics and a subscription through Discord monetization, which has turned a profit.',
				link: {
					name: 'Shop Page',
					url: 'https://elitebot.dev/shop',
				},
			},
			{
				name: 'Front End',
				description: 'The website is built with SvelteKit with Svelte 5 and TailwindCSS.',
				link: {
					name: 'GitHub',
					url: 'https://github.com/EliteFarmers/Website',
				},
			},
			{
				name: 'Back End',
				description:
					"The backend is an ASP.NET Core Web API, and is hosted on a Docker Compose stack on Hetzner Cloud. Responsible for fetching data from Hypixel's API, parsing it, and serving it with caches and authorization.",
				link: {
					name: 'GitHub',
					url: 'https://github.com/EliteFarmers/API',
				},
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
			{
				image: '/projects/elitewebsite/shop.png',
				description: 'Shop page',
			},
		],
	},
	{
		name: 'Dungeon Game (WIP Title)',
		date: 'Fall 2023',
		type: 'games',
		tech: ['Godot Engine 4', 'C#', '.NET 8'],
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
	{
		name: 'Sorcelia',
		date: 'Spring 2023 - (On Hold)',
		type: 'games',
		tech: ['Godot Engine 4', '.NET 8', 'C#'],
		description:
			'A story of a young witch/wizard trying to escape their exile from the town. A farming simulator and potion brewing game with a focus on story and character development. Made during an independent study at Miami University, and put on hold to finish later in order to focus on current semester classes.',
		sections: [
			{
				name: 'My Role',
				description:
					"I am the lead programmer for Sorcelia, responsible for the game's architecture, systems, and mechanics. I also work with the game's artist (Brooke Banfill) to implement the game's art assets.",
				link: {
					name: 'Brooke Banfill (LinkedIn)',
					url: 'https://www.linkedin.com/in/brooke-banfill',
				},
			},
			{
				name: 'Interesting Features',
				description:
					'My goal with this project was to make it as extensible as I could. To this end, I built a custom save game system using custom C# attributes (not fully complete) and a resource pack system (inspired by Minecraft) that allows for easy modding of the game by adding new items, recipes, and more.',
				link: {
					name: 'Template Resource Pack Repository',
					url: 'https://github.com/FarmingProject/TemplatePack',
				},
			},
		],
		slideshow: [
			{
				image: '/projects/sorcelia/menu.png',
				description: 'The main menu',
			},
			{
				image: '/projects/sorcelia/crops.png',
				description: 'Tend to dozens of crops',
			},
			{
				image: '/projects/sorcelia/house.png',
				description: 'Order board and shipping box',
			},
			{
				image: '/projects/sorcelia/cauldron.png',
				description: 'Brew potions in the cauldron',
			},
		],
	},
];
