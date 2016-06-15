var contactJson = '/contact-list.json';

class ContactDetailController {

    constructor($stateParams, $http) {

        this.contactList = [];

        var contactListController = this;
        $http.get(contactJson).success(function (data) {
            contactListController.contactList = data.contactList
                .filter(function (contact) { return contact.name.match(new RegExp($stateParams.name, "i")); });
        });
    }
}

// wenn depend. dann davor (das ist ein Array ;))
// Da hier der state schon angegeben wurde, muss er bei index nicht mehr mit angegeben werden
export default ['$stateParams', '$http', ContactDetailController];
