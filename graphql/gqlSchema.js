const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphql;
const mutations = require('./mutations.js');
const queries = require('./queries.js');

// queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: queries.fetchUsers,
        projects: queries.fetchProjects,
        notifications: queries.fetchNotifications
    }
});

// mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        userSignup: mutations.userSignup,
        userLogin: mutations.userLogin,
        userAuth: mutations.userAuth
    }
});

// export schema
module.exports = new GraphQLSchema ({
    query: RootQuery,
    mutation: Mutation
});
