const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;

// graphql auth object type
module.exports.AuthType = new GraphQLObjectType({
    name: 'Auth',
    fields: {
        id: { type: GraphQLID },
        fullname: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        created: { type: GraphQLString },
        token: { type: GraphQLString }
    }
});

// graphql user object type
module.exports.UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        fullname: { type: GraphQLString },
        username: { type: GraphQLString },
        profile: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        created: { type: GraphQLString },
        modified: { type: GraphQLString },
        login: { type: GraphQLString }
    }
});

// graphql project object type
module.exports.ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        username: { type: GraphQLString },
        created: { type: GraphQLString },
        modified: { type: GraphQLString },
        private: { type: GraphQLBoolean }  //GraphQLBoolean
    }
});

// graphql notification object type
module.exports.NotificationType = new GraphQLObjectType({
    name: 'Notification',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        username: { type: GraphQLString },
        message: { type: GraphQLString },
        created: { type: GraphQLString }
    }
});
