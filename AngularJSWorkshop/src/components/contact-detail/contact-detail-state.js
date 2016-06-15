import template from './contact-detail.html';

function contactListRoute($stateProvider) {
    return $stateProvider
        .state('app.contactDetail', {
            url: 'contact-detail/:name', // Pathvaribale, wenn mit GET-Methode, dann hier auch ?Param1 a.s.o.
            views: {
                main: {
                    template: template,
                    controller: 'ContactDetailController as contactDetailCtrl'
                }
            }
        });
}

export default [
    '$stateProvider',
    contactListRoute
];