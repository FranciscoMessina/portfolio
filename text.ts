export interface DataText {
	lang: string;
	welcome: string;
	short_desc: string;
	projects_desc: string;
	about_me: string;
	skills: string;
	contact: string;
	nav: {
		home: string;
		projects: string;
		about: string;
		contact: string;
	};
}

export const english: DataText = {
	lang: 'English',
	welcome: 'Hi! My name is Francisco Messina',
	short_desc:
		"I'm a fullstack web developer from Buenos Aires, Argentina. I started coding in 2021, and quickly fell in love with it.",
	projects_desc:
		"While learning to code, I've built many projects to improve my skills. Here you can see some of my favorites:",
	about_me:
		"Since I was little I always loved computers, mainly for playing games, ocassionaly I dabbled in coding, but never went too far. In 2021 I decided to get more serious and joined Digital House's Fullstack Web Developer Bootcamp, since completing the bootcamp in September 2021 I continued investigating about coding and learning on my own by reading online articles and watching videos. My current goal is to get a job in a company where I can put my skills to the test and learn more, while doing work that has an impact in peoples lives.",
	skills:
		"I have knowledge in JavaScript both for Frontend and Backend developement, and I am currently learning Typescript. I'm always looking to improve my skills, and if necessary to build a project I will learn a new technology. I try to spend a little time coding each day, because I believe that is the best way I can keep improving.",
	contact:
		'If your are interested in hiring me to work for your company, or just want to chat about coding , you can reach me through any of the methods below.',
	nav: {
		home: 'Home',
		about: 'About me',
		projects: 'Projects',
		contact: 'Contact Me',
	},
};

export const spanish: DataText = {
	lang: 'Español',
	welcome: 'Hola! Me llamo Francisco Messina',
	short_desc:
		'Soy un desarrollador web Fullstack de Buenos Aires, Argentina. Empecé a estudiar programación en 2021, y rapidamente me di cuenta que es algo que me apasiona.',
	projects_desc:
		'Mientras continuo en mi camino de aprendizaje en la programción realize varios projectos para mejorar mis habilidades, aqui estan algunos de mis favoritos:',
	about_me:
		'Desde chico siempre pasaba mucho tiempo usando la computadora, principalmente jugando videojuegos, pero la programación siempre me dio curiosidad, en 2021 decidi a aprender a programar y me anote en el curso de Desarrollo Fullstack de Digital House, después de completarlo en Septiembre del mismo año, continue investigando y aprendiendo sobre programación por mi cuenta, viendo videos y leyendo articulos online.  Actualmente estoy buscando trabajo en una compañia en donde pueda poner mis habilidades a prueba y seguir desarrollandolas, haciendo trabajo que tenga un impacto en las vidas de la gente.',
	skills:
		'El stack de tecnologias con el que me manejo es MERN, utilizando JavaScript como lenguaje principal, tanto para Frontend como Backend. Siempre estoy buscando aprender nuevas cosas, ya sea dentro de las tecnologias que ya manejo u otras, ',
	contact:
		'Si estas interesado en contratarme para trabajar en tu empresa, o queres hablar sobre programación podes contactarme por cualquiera de los siguientes medios:',
	nav: {
		home: 'Inicio',
		about: 'Sobre mi',
		projects: 'Proyectos',
		contact: 'Contactame',
	},
};
