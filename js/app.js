
var app = angular.module('myApp', ['onsen', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/master");

	$stateProvider
		// First page of MasterDetail
		.state('master', {
			url: '/master',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myTabbar.setActiveTab(0);
				$rootScope.myTabbar.loadPage('html/tab1.html');
			}]
		})
		// Second page of MasterDetail
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
		.state('main', {
			parent: 'sliding',
			url: '/main',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/main.html', {closeMenu: true});
			}]
		})
		.state('page1', {
			parent: 'sliding',
			url: '/page1',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/page1.html', {closeMenu: true});
			}]
		})
		.state('page2', {
			parent: 'sliding',
			url: '/page2',
			onEnter: ['$rootScope', function($rootScope) {
				$rootScope.myMenu.setMainPage('html/page2.html', {closeMenu: true});
			}]
		})
	;

});