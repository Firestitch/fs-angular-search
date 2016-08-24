'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope) {

    $scope.options = {

    	filters: [
	    	{
	    		name: 'search',
	    		type: 'text',
	    		label: 'Search'
	    	}
    	],

    	change: function(query) {
    		debugger;
    	},

    	//load: true
    };

});
