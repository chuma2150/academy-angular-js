class ContactListController {

    constructor() {

        this.contact = { };
        this.contactList = [{ name: "TestName", email: "TestEmail@testmail.de", phone: "0761234567"}];
    }

    add() {
        this.contactList.push(this.contact);
        this.contact = { };
    }
}

// wenn depend. dann davor (array)
export default [ContactListController];
