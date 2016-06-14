import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-list-state';
import ContactListController from './contact-list-controler'


const dependencies = [
    uiRouter
];

export default angular
    .module('ContactList', dependencies)
    .config(contactListState)
    .controller('ContactListController', ContactListController)
    .filter('capatalize', function () {
        return function (input) {
            return input.charAt(0) ? input.charAt(0).toUpperCase()
                + (input.charAt(1) ? input.substr(1).toLowerCase() : '') : '';
        }
    });

