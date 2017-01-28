
(function () {
    'use strict';

    angular.module('fs-angular-search',['fs-angular-lister'])
    .directive('fsSearch', function($location) {
        return {
            template: '<fs-lister ls-options="options" ls-instance="instance"></fs-lister>',
            restrict: 'E',
            scope: {
               options: "=?fsOptions",
               instance: "=?fsInstance"
            },

            controller: function($scope) {
                $scope.options = $scope.options || {};

                if(!$scope.options.filters) {
                    $scope.options.filters = [{ type: 'text', label: 'Search' }];
                }

                $scope.options = angular.extend({   paging: false,
                                                    inline: true,
                                                    load: false,
                                                    namespace: 'search',
                                                    data: function(query, cb) {
                                                        if($scope.options.change) {
                                                            $scope.options.change(query);
                                                        }
                                                        cb([]);
                                                    }},$scope.options);
            },
            link: function($scope, element, attrs, ctrl) {

            }
        };
    });
})();
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
