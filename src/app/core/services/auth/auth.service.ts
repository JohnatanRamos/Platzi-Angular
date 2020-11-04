import { Injectable } from '@angular/core';

// Firebas
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth,
  ) { }

  createUser(email: string, password: string){
    // Esto lo que devuelve es una promesa, por eso la retornamos para despues operarla
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    // Esto lo que devuelve es una promesa, por eso la retornamos para despues operarla
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.afa.signOut();
  }

  // Si hay un usuario esto me va retornar un diferente a null.
  hasUser() {
    return this.afa.authState;
  }
}
