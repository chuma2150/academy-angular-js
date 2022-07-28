import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserLoginState from './user-login-state';
import UserLoginController from './user-login-controller';
import UserLoginService from './user-login-service';

const dependencies = [
    uiRouter
];


export default angular
    .module('UserLogin', dependencies)
    .config(UserLoginState)
    .controller('UserLoginController', UserLoginController)
    .service('UserService', UserLoginService)
    .constant('UserServiceApi', { baseUrl: 'http://10.10.0.177:3000/api/Users', apiKey: 'users' });

