class ContactDetailController {

    constructor($stateParams, ContactsService, contact) {

        this.error = null;
        this.contact = contact;
        this.contactsService = ContactsService;

        ContactsService.fetchContact($stateParams.id)
            .then((data) => {
                this.contact = data;
            });
    }

    update() {
        this.contactsService.updateContact(this.contact)
            .then((responseMessage) => {
                this.responseMessage = responseMessage;
            });
    }

    delete() {
        this.contactsService.deleteContact(this.contact)
            .then((responseMessage) => {
                this.responseMessage = responseMessage;
            });
    }
}

// wenn depend. dann davor (das ist ein Array ;))
// Da hier der state schon angegeben wurde, muss er bei index nicht mehr mit angegeben werden
export default ['$stateParams','ContactsService','contact', ContactDetailController];
