class ContactDetailController {
    constructor($stateParams) {

        this.ContactDetail = [
            { Name: $stateParams.name, Email: $stateParams.email, Phone: $stateParams.phone}
        ];
    }
}

// wenn depend. dann davor (das ist ein Array ;))
// Da hier der state schon angegeben wurde, muss er bei index nicht mehr mit angegeben werden
export default ['$stateParams', ContactDetailController];
