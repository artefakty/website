export type EventItem = {
	id: string
	title: string
	description: string
	date: string
	place: string
	image: string
	tag: string
	calendar?: boolean
	startDate?: string
	endDate?: string
	startTime?: string
	endTime?: string
	location?: string
}

const placeholderImage = '/assets/images/avatar.svg'

export const events: EventItem[] = [
	{
		id: 'gamejam-2024',
		title: '23h WFIIS GameJam 2024',
		description: 'Nasza drużyna stworzyła prototyp w mniej niż dobę i zgarnęła wyróżnienie za design.',
		date: '2024-12-05',
		place: 'Łódź, Wydz. Fizyki i Informatyki Stosowanej',
		image: placeholderImage,
		tag: 'GAME JAM',
		calendar: true,
		startDate: '2024-12-05',
		endDate: '2024-12-05',
		startTime: '10:00',
		endTime: '18:00',
	},
	{
		id: 'warsztaty-unity',
		title: 'Warsztaty Unity: Multiplayer & Netcode',
		description: 'Pokazaliśmy podstawy netcode, synchronizację ruchu i deterministykę w grach sieciowych.',
		date: '2024-11-18',
		place: 'Lab 3.12, FIiS',
		image: placeholderImage,
		tag: 'WORKSHOP',
		calendar: true,
		startDate: '2024-11-18',
		endDate: '2024-11-18',
		startTime: '17:00',
		endTime: '19:00',
	},
	{
		id: 'spotkanie-integracyjne',
		title: 'Integracja & Playtesty',
		description: 'Sprawdziliśmy nowe buildy, zebraliśmy feedback i pograliśmy w prototypy członków koła.',
		date: '2024-10-30',
		place: 'Sala gier, FIiS',
		image: placeholderImage,
		tag: 'MEETUP',
		calendar: false,
	},
]

export const latestEvents = [...events]
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	.slice(0, 3)
