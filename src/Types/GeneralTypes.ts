//Keep User details in redux store
//Will define interfaces for User

type Genders = "Man" | "Woman";
type AgeType = string | number;

export interface IUser {
  firstName: string;
  lastName: {
    primary: string;
    secondary: string;
  };
  dateOfBorth: Date;
  gender: Genders;
  age: AgeType;
  // nested objects
  contactDetails: {
    address: string;
    postcode: number;
  };
}

export interface IBlogPost {
  url: string;
  content: string;
}
