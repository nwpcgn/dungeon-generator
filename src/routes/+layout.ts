export const load: LayoutLoad = async () => {
	return {
		nav: [
			{
				name: 'Start',
				href: '/',
				icon: 'nwp-home'
			},
			{
				name: 'Icons',
				href: '/icons',
				icon: 'nwp-archive'
			},
			{
				name: 'Generator',
				href: '/generator',
				icon: 'nwp-grid'
			}
		]
	}
}
