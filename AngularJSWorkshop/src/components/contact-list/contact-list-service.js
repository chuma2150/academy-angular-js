
class ContactsService {

    constructor($http, ContactsServiceApi) {

        this.http = $http;
        this.http.defaults.headers.common['Authorization'] = document.cookie;
        this.contactsServiceBaseUrl = ContactsServiceApi.baseUrl;
    }

    fetchContacts() {
        return this.http.get(this.contactsServiceBaseUrl)
            .then((response) => {
                return response.data;
            });
    }

    fetchContact(id) {
        return this.http.get(this.contactsServiceBaseUrl + '/' + id)
            .then((response) => {
                return response.data;
            });
    }

    addContact(contact) {
        return this.http.post(this.contactsServiceBaseUrl, contact)
            .then((response) => {
                return 'Contact added successfully.'
            }, (response) => { return response.status + response.statusText; });
    }

    updateContact(contact) {
        return this.http.put(this.contactsServiceBaseUrl + '/' + contact.id, contact)
            .then((response) => {
                return 'Contact updated successfully.';
            }, (response) => { return response.status + response.statusText; });
    }

    // kann nur welche löschen, die ich mit dem gleichen cookie beim post oder put auch angelegt habe!
    // Deshalb eig. bei jedem request durch intercepter die config mit senden
    deleteContact(contact) {
        return this.http.delete(this.contactsServiceBaseUrl + '/' + contact.id)
            .then((response) => {
                return 'Contact deleted successfully.'
            }, (response) => {return 'Please first log in.' });
    }
}

export default ['$http', 'ContactsServiceApi', ContactsService];
