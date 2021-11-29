import React, { useState } from "react";
import { IUser, IBlogPost } from "./Types/GeneralTypes";
//define type - multiple options or types for value

//define type for a functon
//type OnValueChanged = (value: string) => void;

//I is from C , define interface for props
interface IApp {
  user: IUser;
  post: IBlogPost;
}

interface IState {
  searchPhrase: string;
  backgroundColor: string;
}

const App: React.FC<IApp> = (props) => {
  const [data, setData] = useState<IState>();

  // Extracting the user object from the props object
  // This is equal to => (const user = props.user;)
  // User and post is an object
  const { user, post } = props;
  //Extract contract details from User
  const { contactDetails } = user;
  const { address } = contactDetails;
  //Extract firstName
  const { firstName } = user;
  const { lastName } = user;

  //const user = props.user;
  //const post = props.post;

  // Study this article:
  // https://dmitripavlutin.com/javascript-object-destructuring/

  return (
    <div>
      <span>{`First Name: ${firstName}`}</span>
      <br />
      {/* <span>{`Last Name: ${user?.lastName}`}</span><br/> */}
      {/* <span>{`Last Name: ${user?.lastName.primary}`}</span><br/> */}
      <span>{`Last Name: ${lastName.primary}`}</span>
      <br />
      <span>{`Adress: ${address}`}</span>
    </div>
  );
};

export default App;
