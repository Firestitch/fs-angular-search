
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

