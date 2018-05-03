import * as firebase from 'firebase';

export class AuthService {
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

    signinUser(email:string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            )
            .catch(
                error => {
                    console.log(error);
                    alert(error);
                }
            );
    }
}
