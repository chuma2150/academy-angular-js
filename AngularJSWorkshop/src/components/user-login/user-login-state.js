import template from './user-login.html';

function userLoginRoute($stateProvider) {
    return $stateProvider
        .state('app.userLogin', {
            url: 'login',
            views: {
                main: {
                    template: template,
                    controller: 'UserLoginController as userLoginCtrl'
                    //das hier muss ich quasi bei allen seiten einbauen, wo ich ein login haben will
                    //resolve: {
                    //    authToken: ['UserService', function (UserService) {
                    //        return UserService.logIn();
                    //    }]
                    //}
                }
            }
        });
}

export default [
    '$stateProvider',
    userLoginRoute
];