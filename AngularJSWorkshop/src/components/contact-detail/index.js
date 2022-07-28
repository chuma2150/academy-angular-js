import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactDetailState from './contact-detail-state';
import ContactDetailController from './contact-detail-controller'
import ContactsService from 'components/contact-list/contact-list-service';

const dependencies = [
    uiRouter
];

export default angular
    .module('ContactDetail', dependencies)
    .config(contactDetailState)
    .controller('ContactDetailController', ContactDetailController)
    .service('ContactsService', ContactsService);
