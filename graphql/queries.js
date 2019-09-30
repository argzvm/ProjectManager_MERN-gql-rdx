const graphql = require('graphql');
const { GraphQLList } = graphql;
const types = require('./types.js');
const userModel = require('../models/userModel.js');
const projectModel = require('../models/projectModel.js');
const notificationModel = require('../models/notificationModel.js');

module.exports.fetchUsers = {
    type: new GraphQLList(types.UserType),
    resolve (parent, args) {
        return userModel.find({}).select("-password");
    }
};

module.exports.fetchProjects = {
    type: new GraphQLList(types.ProjectType),
    resolve (parent, args) {
        return projectModel.find({});
    }
};

module.exports.fetchNotifications = {
    type: new GraphQLList(types.NotificationType),
    resolve (parent, args) {
        return notificationModel.find({}).limit(20);
    }
};
