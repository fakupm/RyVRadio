// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// Add the 'ionic.service.core' module to your main angular module:
angular.module('test', ['ionic.service.core'])
// Identify App
.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID for the server
    app_id: 'dd80787c',
    // The API key all services will use for this app
    api_key: '8f9a8a8a1375cd5dbb2ba28f200bc4fb3546bb869422fc0c'
  });
}])

angular.module('myApp', ['ionic',  'ionic.service.analytics'])

.run(['$ionicAnalytics', function($ionicAnalytics) {
  
  // Track how many users are doing amazing things
  $ionicAnalytics.track('myAmazingEvent', {
    myAmazingEventData: 32
  });
}])