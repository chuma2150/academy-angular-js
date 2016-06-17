import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-list-state';
import ContactListController from './contact-list-controller';
import ContactListFilter from './contact-list-filter';
import ContactFormDirective from './contact-list-directive';
import ContactsService from './contact-list-service';

const dependencies = [
    uiRouter
];

export default angular
    .module('ContactList', dependencies)
    .config(contactListState)
    .controller('ContactListController', ContactListController)
    .filter('capatalize', ContactListFilter)
    .directive("contactForm", ContactFormDirective)
    .service('ContactsService', ContactsService)
    .constant('ContactsServiceApi', { baseUrl: 'http://10.10.0.177:3000/api/Contacts', apiKey: 'contacts' });

