import template from './contact-detail.html';

function contactListRoute($stateProvider) {
    return $stateProvider
        .state('app.contactDetail', {
            url: 'contact-detail/:id', // Pathvaribale, wenn mit GET-Methode, dann hier auch ?Param1 a.s.o.
            views: {
                main: {
                    template: template,
                    controller: 'ContactDetailController as contactDetailCtrl',
                    resolve: {
                        contact: ['$stateParams', 'ContactsService', function ($stateParams, ContactsService) {
                            return ContactsService.fetchContact($stateParams.id)}]
                    }
                }
            }
        });
}

export default [
    '$stateProvider',
    contactListRoute
];