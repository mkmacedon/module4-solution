(function() {
	'use strinct'

	angular.module('data').
	service('MenuDataService', MenuDataServiceController);

	MenuDataServiceController.$inject = ['$http', 'urls'];
	function MenuDataServiceController($http, urls) {
		var service = this;

		service.getAllCategories = function() {
			return $http({
				method: 'GET',
				url: urls.base_url + urls.categories
			}).then(function(result) {
				return result.data;
			});
		};

		service.getItemsForCategory = function(categoryShortName) {
			return $http({
				method: 'GET',
				url: urls.base_url + urls.menu_items,
				params: {
					category: categoryShortName
				}
			}).then(function(result) {
				return result.data;
			});
		};
	};

})();