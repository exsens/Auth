import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation registerUser($input: registerInput) {
    registerUser(input: $input) {
      username
      email
      password
    } {
      email
      username
      token
    }
  }
`;
