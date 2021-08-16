export interface IUser {
  id: string;
  role: string;
  email: string;
  displayName: string;
  phone: string;
  itemsBought?: any;
  accessToken: string;

  // TODO remove later
  firstName: string;
  lastName: string;
}
