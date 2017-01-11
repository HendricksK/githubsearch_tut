import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = 'bdd786199e16ede04e60';
    private client_secret = '3cf494e0e244ec6b85eea0d7541d0117ee637a08';

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
        return this._http.get('http://api.github.com/users/username'+this.username+
            '/repos?client_id='+this.client_id+
            '&client_secrete='+this.client_secret).map(res => res.json());
    }
}
