// Config
// ------------
// Description: The configuration file for the website.

import type { moveEmitHelpers } from "typescript"

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Thomas Vochten',
	siteDescription:
		'Thomas Vochten&quot;s personal website - Microsoft MVP',
	ogImage: '/og.jpg',
	logo: {
		src: '/avatar.jpg',
		alt: 'Foxi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
