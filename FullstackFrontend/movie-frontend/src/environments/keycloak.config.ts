import { KeycloakConfig } from "keycloak-js";

const KeycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8080',
    realm: 'MovieRealm',
    clientId: 'New_Movie_Client'
};

export default KeycloakConfig;

