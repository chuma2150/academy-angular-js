//import ContactList from './contact-list.json';

class ContactListController {

    constructor($http) {

        this.contact = {};
        this.contactList = [];

        var contactListController = this;
        $http.get('/contact-list.json').success(function (data) {
            contactListController.contactList = data.contactList;
        });
    }

    add() {
        this.contactList.push(this.contact);
        this.contact = { };
    }
}

// wenn depend. dann davor (array)
export default ['$http', ContactListController];
