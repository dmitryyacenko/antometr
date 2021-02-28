interface IUSerAttributes {
  email: string;
  email_verified: boolean;
  identities: string;
  name: string;
  picture: string;
}

export interface ICognitoUser {
  id: string;
  username: string;
  attributes: IUSerAttributes;
}
