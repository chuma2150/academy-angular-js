class ContactListController {
    constructor() {

        this.ContactList = [
            { Name: "MeinName", Email: "MeineAdresse@test.de", Phone: "123"},
            { Name: "MeinName2", Email: "MeineAdresse2@test.de", Phone: "123"},
            { Name: "Finde mich", Email: "Gefunden@test.de", Phone: "123"}
        ];
    }
}

// wenn depend. dann davor (array)
export default [ContactListController];
