/*
	// portfolio card object
	{
		id,
		logoSrc,
		logoAltText,
		description,
		techStack: [
			{
				'Back-end': ['tech1', ...]
			},
			{
				'Front-end': ['tech1', ...]
			}
		],
		siteHref,
		githubHref

		// for YT vid only!
		embeddedId: <youtube embed id at end of url>,

		// for other media only!
		linkedImgUrl: 'something.png',
		linkedImgUrlAltText: 'alt_text_here',
	}

*/

export const portfolioContent = [
  {
    id: 1,
    logoSrc: "/portfolio/assets/connect-logo.svg",
    logoAltText: "connect-logo",
    description:
      "A project management suite that allows users to create and join organizations, invite teammates to collaborate on projects with Kanban-style boards, and stay in touch with realtime updates/communication support",
    techStack: [
      { "Back-end": ["PostgresSQL + Sequelize", "Express", "socket.io"] },
      {
        "Front-end": [
          "React + React Context API",
          "React Beautiful DnD",
          "socket.io-client",
          "vanilla CSS",
        ],
      },
    ],
    siteHref: "https://connect-kanban.herokuapp.com",
    githubHref: "https://github.com/shapirodaniel/connect",
    embedId: "VbKLG30Nuo0",
  },
  {
    id: 5,
    logoSrc: "/portfolio/assets/openweather-mobile-logo.svg",
    logoAltText: "openweather-mobile-logo",
    description:
      "A mobile weather app with mocked Google Places location search (select US cities) and autocomplete, powered by OpenWeather OneCall, Geocoding APIs",
    techStack: [
      { "Back-end": ["Azure Functions Serverless Compute"] },
      {
        "Front-end": [
          "React + React Context API",
          "React Swipeable Views",
          "Styled Components",
        ],
      },
    ],
    siteHref: "https://purple-hill-074194210.azurestaticapps.net",
    githubHref: "https://github.com/shapirodaniel/weather-app",
    linkedImgUrl: "/portfolio/assets/openweather-mobile-screencap-forecast.png",
    linkedImgUrlAltText: "openweather-mobile-7-day-forecast",
  },
  {
    id: 2,
    logoSrc: "/portfolio/assets/sp-scrollable-logo.svg",
    logoAltText: "single-page-scrollable-site-navigation",
    name: "Single-Page Scrollable Site Navigation with React Custom Hooks",
    description:
      "Leveraging IntersectionObserver + useRef + useContext to build a responsive nav for a single-page scrollable site",
    techStack: [
      { "Front-end": ["React + React Context API", "React custom hooks"] },
    ],
    siteHref:
      "https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1",
    githubHref: "https://github.com/shapirodaniel/single-page-nav",
    linkedImgUrl: "/portfolio/assets/sp-scrollable-medium-screencap.png",
    linkedImgUrlAltText: "use-nav-custom-hook",
  },
  {
    id: 3,
    logoSrc: "/portfolio/assets/breadbakersfriend-logo.png",
    logoAltText: "bread-bakers-friend-logo",
    name: "Bread Baker's Friend",
    description:
      "A web app designed for artisan bakery production floors, allowing dynamic recipe recalculation and alterations, export to dynamic spreadsheets, and recipe file storage + upload",
    techStack: [
      { "Back-end": ["Node.js, Natural"] },
      { "Front-end": ["HTML5, CSS3, JavaScript"] },
    ],
    siteHref: "https://breadbakersfriend.com",
    githubHref: "https://github.com/shapirodaniel/breadbakersfriend",
    embedId: "gGb3Wp1s33w", // https://youtu.be/gGb3Wp1s33w <- embedId is this hash
  },
  {
    id: 4,
    logoSrc: "/portfolio/assets/guessing-game-logo.png",
    logoAltText: "the-guessing-game-logo",
    name: "The Guessing Game",
    description:
      "A detailed look into refactoring an imperative code base to React, React Hooks, and state management via React's Context API",
    techStack: [{ "Front-end": ["React + React Context API"] }],
    siteHref:
      "https://medium.com/geekculture/rebuilding-an-imperatively-coded-game-from-scratch-in-react-9a082ad002c0",
    githubHref: "https://github.com/shapirodaniel/guessing-game-react",
    linkedImgUrl: "/portfolio/assets/guessing-game-medium-screencap.png",
    linkedImgUrlAltText: "the-guessing-game",
  },
];
