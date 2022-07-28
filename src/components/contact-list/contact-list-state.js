import template from './contact-list.html';

function contactListRoute($stateProvider) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contact-list',
            views: {
                main: {
                    template: template,
                    controller: 'ContactListController as contactListCtrl',
                    resolve: {
                        contactList: ['ContactsService', function (ContactsService) {
                            return ContactsService.fetchContacts()}]
                    }
                }
            }
        });
}

export default [
    '$stateProvider',
    contactListRoute
];