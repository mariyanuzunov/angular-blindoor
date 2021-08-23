export interface IUser {
  _id: string;
  role: string;
  email: string;
  displayName: string;
  phone: string;
  accessToken: string;

  // TODO remove later
  firstName: string;
  lastName: string;
}
