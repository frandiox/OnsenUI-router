
var app = angular.module('myApp', ['onsen', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	// By default show Tab 1 - Navigator MasterDetail example
	$urlRouterProvider.otherwise("/navigator");

	$stateProvider

		// Tab 1 - MasterDetail example - Navigator init
		.state('navigator', {
			url: '/navigator',
			onEnter: ['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {
				$rootScope.myTabbar.setActiveTab(0);
				$rootScope.myTabbar.loadPage('html/tab1.html');
				$timeout(function(){
					$state.go('master');
				});
			}]
		})

		// Tab 1 - MasterDetail example - List of items
		.state('master', {
			parent: 'navigator',
			url: '/master',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myNavigator.resetToPage('html/master.html');
			}]
		})

		// Tab 1 - MasterDetail example - Item details
		.state('detail', {
			parent: 'master',
			url: '/detail/:index',
			onEnter: ['$rootScope','$stateParams', function($rootScope,$stateParams) {
				$rootScope.myNavigator.pushPage('html/detail.html', {'index': $stateParams.index});
			}],
			onExit: function($rootScope) {
				$rootScope.myNavigator.popPage();
			}
		})

		// Tab 2 - SlidingMenu example - SlidingMenu init
		.state('sliding', {
			url: '/sliding',
			onEnter: ['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {
				$rootScope.myTabbar.setActiveTab(1);
				$rootScope.myTabbar.loadPage('html/tab2.html');
				$timeout(function(){
					$state.go('main');
				});
			}]
		})

		// Tab 2 - SlidingMenu example - Landing page
		.state('main', {
			parent: 'sliding',
			url: '/main',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/main.html', {closeMenu: true});
			}]
		})

		// Tab 2 - SlidingMenu example - Example page 1
		.state('page1', {
			parent: 'sliding',
			url: '/page1',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/page1.html', {closeMenu: true});
			}]
		})

		// Tab 2 - SlidingMenu example - Example page 2
		.state('page2', {
			parent: 'sliding',
			url: '/page2',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/page2.html', {closeMenu: true});
			}]
		})
	;

});
