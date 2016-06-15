var contactJson = '/contact-list.json';

class ContactListController {

    constructor($http) {

        this.http = $http;
        this.contact = {};
        this.contactList = [];

        var contactListController = this;
        $http.get(contactJson)
            .success(function (data) {
                contactListController.contactList = data.contactList;
        });
    }

    add() {
        this.errors = null;
        var contactListcontroller = this;
        this.http.post(contactJson, this.contact)
            .catch(function (contact) {
                contactListcontroller.errors = contact.data.error; // funktioniert leider nicht?
            });

        this.contactList.push(this.contact);
        this.contact = {};
    }
}

// wenn depend. dann davor (array)
export default ['$http', ContactListController];
