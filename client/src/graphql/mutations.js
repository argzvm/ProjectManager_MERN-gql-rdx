import { gql } from 'apollo-boost';


export const authUserMutation = gql`
    mutation userAuth($token:String!) {
        userAuth(token:$token) {
            id
            username
            fullname
            email
            created
        }
    }
`;

export const userLoginMutation = gql`
    mutation userLogin($username:String!, $password:String!) {
        userLogin(username:$username, password:$password) {
            token
        }
    }
`;

export const userSignupMutation = gql`
    mutation userSignup($fullname:String!,$username:String!, $profile:String!, $email:String!, $password:String!) {
        userSignup(fullname:$fullname, username:$username, profile:$profile, email:$email, password:$password) {
            fullname
            username
            profile
            email
            password
        }
    }
`;
