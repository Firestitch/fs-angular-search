(function () {

    angular.module('fs-angular-search')
	.provider("fsSearch",function() {

		var _options = {}, _instances = {};
		this.options = function(options) {
			_options = options;
		}

		this.$get = function($rootScope) {

			var service = {
				options: options,
				reload: reload,
				add: add,
				get: get
			 };

			return service;

			function options() {
				return _options;
			}

			function reload(name) {
				$rootScope.$broadcast('search-' + name,{ action: 'reload' });
			}

			function add(id, instance) {
				return _instances[id] = instance;
			}

			function get(id) {
				return _instances[id];
			}
		}
	});
})();