import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-list-state';
import ContactListController from './contact-list-controller';
import ContactListFilter from './contact-list-filter';
import ContactFormDirective from './contact-list-directive';


const dependencies = [
    uiRouter
];

export default angular
    .module('ContactList', dependencies)
    .config(contactListState)
    .controller('ContactListController', ContactListController)
    .filter('capatalize', ContactListFilter)
    .directive("contactForm", ContactFormDirective);

