let settings = {
	language: {
		'key': 'en',
		'name': 'English',
		'nativeName': 'English'

	},
	filter: {
			discipline: 'All' 
	},
	sidebarTab: 'Language',
	filters: [
		{
			discipline: 'Mathematics',
			subjects: [
				{
					subject: 'Algebra'
				},
				{
					subject: 'Nonlinear systems'
				},
			]
		},
		{
			discipline: 'Physics',
			subject: [
				{
					subject: 'Mechanics'
				},
				{
					subject: 'Linear Mechanics'
				},
			]
		},
		{
			discipline: 'Chemistry',
			subject: [
				{
					subject: 'Biochem'
				},
				{
					subject: 'Non-organic'
				},
			]
		}
	]
}

export default settings;
