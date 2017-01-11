import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = 'bdd786199e16ede04e60';
    private client_secret = '4433f698830df00288b4158b62896ab65ccb32b7';

    constructor(private _http: Http) {
        console.log('Github Service Read....');
        this.username = 'HendricksK';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+
            '?client_id='+this.client_id+
            '&client_secrete='+this.client_secret).map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+
            '/repos?client_id='+this.client_id+
            '&client_secrete='+this.client_secret).map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }
}
