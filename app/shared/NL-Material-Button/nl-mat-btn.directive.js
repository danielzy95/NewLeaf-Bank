( function () {

	"use strict";

	angular
		.module('ACBank')
		.directive('nlMatBtn', nlMatBtn);

	function nlMatBtn () { 
		var directive = 
        {
            restrict: 'E',
            scope: {
            	imageSource: '@?',
				iconClass: '@?',
				clicked: '&?'
            },
            templateUrl: '../templates/NL-Material-Button/nl-mat-btn.html'
        };

		return directive; 
	}

} ) ();