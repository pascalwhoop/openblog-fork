export type Image = {
	src: string
	alt?: string
}

export type Site = {
	website: string
	author: string
	desc: string
	title: string
	ogImage?: Image
	lightAndDarkMode: boolean
	postPerPage: number
}

export const siteConfig: Site = {
	website: 'https://everycure.org',
	author: 'Every Cure',
	desc: 'Unlocking the hidden potential of existing drugs to save lives',
	title: 'Every Cure Blog',
	ogImage: {
		src: '/opengraph-image.jpg',
		alt: 'Every Cure - Unlocking the hidden potential of existing drugs'
	},
	lightAndDarkMode: true,
	postPerPage: 5
}

export const LOCALE = ['en-EN'] // set to [] to use the environment default

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46
}

export type SocialObjects = {
	name: string
	href: string
	linkTitle: string
	active: boolean
}[]

export const SOCIALS: SocialObjects = [
	{
		name: 'Github',
		href: 'https://github.com/everycure-org',
		linkTitle: `${siteConfig.title} on Github`,
		active: true
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/company/everycure/',
		linkTitle: `${siteConfig.title} on LinkedIn`,
		active: true
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/everycure',
		linkTitle: `${siteConfig.title} on Twitter`,
		active: true
	}
]
