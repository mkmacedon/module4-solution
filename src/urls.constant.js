(function() {
	'use strinct'

	angular.module('data').
	constant('urls', {
		base_url: 'https://davids-restaurant.herokuapp.com/',
		categories: 'categories.json',
		menu_items: 'menu_items.json'
	});
})();