export interface UserInterface {
  id: number | string;
  firstName: string;
  lastName: string;
}

export class User implements UserInterface {
  public id: string | number;
  public firstName: string;
  public lastName: string;

  constructor ( id: number | string, firstName: string, lastName: string ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  };
}
