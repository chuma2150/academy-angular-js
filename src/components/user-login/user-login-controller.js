class UserLoginController {

    constructor(UserService) {

        this.authToken = null;
        this.user = {};
        this.userService = UserService;
    }

    logIn() {
        this.userService.logIn(this.user)
            .then((responseMessage) => {
                this.responseMessage = responseMessage;
            });

        // authToken in cookie speichern und bei allen gesicherten seiten im requestheader mit senden

        this.user = {};
    }
}

// wenn depend. dann davor (array)
export default ['UserService', UserLoginController];
