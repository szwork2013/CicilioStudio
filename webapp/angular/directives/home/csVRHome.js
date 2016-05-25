/**
 * Created by Lance on 5/24/2016.
 */

function csVRHome($templateCache) {
	'ngInject'

	return {
		scope: {},
		restrict: 'E',
		link: function(scope, element) {

		},
		template: $templateCache.get('vr_home.html')
	}
}