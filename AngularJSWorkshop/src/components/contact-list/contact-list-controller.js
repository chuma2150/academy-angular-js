class ContactListController {

    constructor(ContactsService, contactList) {

        this.contactList = contactList;
        this.contactsService = ContactsService;
    }

    add() {
        this.contactsService.addContact(this.contact)
            .then((responseMessage) => {
                this.responseMessage = responseMessage;
            });

        this.contactList.push(this.contact);
        this.contact = {};
    }
}

// wenn depend. dann davor (array)
export default ['ContactsService','contactList', ContactListController];
