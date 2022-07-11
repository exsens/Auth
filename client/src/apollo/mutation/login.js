import { gql } from "graphql-tag";

export const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      username,
      email,
      token
    }
  }
`;

