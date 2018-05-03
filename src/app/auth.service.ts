import { TodoService } from './todos/todo.services';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, Route } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                () => console.log('success!')
            )
            .catch(
                error => {
                    console.log(error);
                    alert(error);
                }
            );
            // display the error ot the user
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                error => {
                    console.log(error);
                    alert(error);
                }
            );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    // since the getToken() method is a promise, i will return the token saved upon signing in
    // and generate a new one when using the firebase data
    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
