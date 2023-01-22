import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';

type token={
  __zone_symbol__value:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService:KeycloakService) { }

  public getLoggedUser():KeycloakTokenParsed | undefined{
    try{
      const userDetails:KeycloakTokenParsed | undefined=this.keycloakService.getKeycloakInstance().idTokenParsed;
      console.log(userDetails);
      return userDetails;
    }catch(e){
      console.error("Exception",e);
      return undefined;
    }
  }

  public isLoggedIn():Promise<boolean>{
    return this.keycloakService.isLoggedIn();
  }

  public loadUserProfile():Promise<KeycloakProfile>{
    return this.keycloakService.loadUserProfile();
  }

  public login():void{
    this.keycloakService.login();
  }

  public logout():void{
    this.keycloakService.logout(window.location.origin);
  }

  public redirectToProfile():void{
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  public getRoles():string[]{
    return this.keycloakService.getUserRoles();
  }
  
  public  getToken():Promise<string>{
    
    return (this.keycloakService.getToken());
  }

}
