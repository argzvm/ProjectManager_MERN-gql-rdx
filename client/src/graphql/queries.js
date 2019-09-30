import { gql } from 'apollo-boost';

export const fetchSOutDataQuery = gql`
    query {
        users {
            username
        }
        projects {
            id
            title
            content
            private
            username
            created
            modified
        }
        notifications {
            id
            title
            username
            message
            created
        }
    }
`;

export const fetchSInDataQuery = gql`
    query {
        users {
            id
            username
            fullname
            profile
            email
            created
            modified
            login
        }
        projects {
            id
            title
            content
            private
            username
            created
            modified
        }
        notifications {
            id
            title
            username
            message
            created
        }
    }
`;
