
class UserService {

    constructor($http, UserServiceApi) {

        this.http = $http;
        this.http.defaults.headers.common['Authorization'] = document.cookie;
        this.userServiceApiBaseUrl = UserServiceApi.baseUrl;
    }

    logIn(user) {
        return this.http.post(this.userServiceApiBaseUrl + '/login', user)
        .then((response) => {
            document.cookie = response.data;
            return response.data;
        }, (response) => { return 'Username and/or password wrong. Please try again.' });
    }
}

export default ['$http', 'UserServiceApi', UserService];
