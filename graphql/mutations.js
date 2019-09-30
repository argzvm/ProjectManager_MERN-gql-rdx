const graphql = require('graphql');
const { GraphQLString, GraphQLNonNull } = graphql;
const types = require('./types.js');
const userModel = require('../models/userModel.js');
const projectModel = require('../models/projectModel.js');
const notificationModel = require('../models/notificationModel.js');
const bcrypt = require('bcryptjs');
const keys = require('../config/keys.js');
const jwt = require('jsonwebtoken');

module.exports.userAuth = {
    type: types.AuthType,
    args: {
        token: { type: GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLString },
        id: { type: GraphQLString },
        fullname: { type: GraphQLString },
        email: { type: GraphQLString },
        created: { type: GraphQLString },
    },
    resolve (parent, args) {
        return new Promise((resolve, reject) => {
            let decoded = jwt.verify(args.token, keys.jwtSecret)
            resolve( userModel.findOne({_id: decoded.id}).select("-password") )
        });
    }
};

module.exports.userLogin = {
    type: types.AuthType,
    args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        token: { type: GraphQLString }
    },

    resolve (parent, args) {
        return new Promise((resolve, reject) => {
            userModel.findOne({username: args.username})
            .then( async function(user) {
                if (user) {
                    await bcrypt.compare(args.password, user.password)
                    .then( async function(isMatch) {
                        if (isMatch) {
                            jwt.sign({ id: user._id }, keys.jwtSecret, { expiresIn: 3600 }, async function (err, token) {
                                if (err)
                                    throw err;
                                let notification = {};
                                notification.username = user.username;
                                notification.message = "has logged in";
                                notification.created = Date.now();
                                await userModel.findOneAndUpdate({ _id: user._id }, { login: Date.now() }, { new: true })
                                    .then(async function () {
                                        await notificationModel(notification).save()
                                            .then(async function () {
                                                args.token = token;
                                                resolve(args);
                                            }).catch((err) => console.error(err));
                                    }).catch((err) => console.error(err));
                            });
                        } else {
                            resolve(null) // insert error handler, error placeholder in AuthType
                        }
                    }).catch( (err) => console.error(err) );
                } else {
                    resolve(null)
                }
            }).catch( (err) => console.error(err) );
        });
    }
};

module.exports.userSignup = {
    type: types.UserType,
    args: {
        fullname: { type: GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLNonNull(GraphQLString) },
        profile: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve (parent, args) {
        let user = {};
        user.fullname = args.fullname;
        user.username = args.username;
        user.profile = args.profile;
        user.email = args.email;
        user.password = args.password;
        user.created = Date.now();
        user.modified = Date.now();
        user.login = Date.now();
        return userModel(user).save();
    }
};

module.exports.userUpdate = {
    type: types.UserType,
    args: {
        id: { type: GraphQLString },
        fullname: { type: GraphQLNonNull(GraphQLString) },
        profile: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve (parent, args) {
        let user = {};
        user.fullname = args.fullname;
        user.profile = args.profile;
        user.email = args.email;
        return userModel.findOneAndUpdate({_id: args.id}, user, {new: true});
    }
};

module.exports.userDelete = {
    type: types.UserType,
    args: {
        id: { type: GraphQLString }
    },
    resolve (parent, args) {
        return userModel.findOneAndDelete({_id: args.id});
    }
};

module.exports.projectCreate = {
    type: types.ProjectType,
    args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLNonNull(GraphQLString) },
        private: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve (parent, args) {
        let project = {};
        project.title = argz.title;
        project.content = argz.content;
        project.private = argz.private;
        project.username = "admin";
        project.created = Date.now();
        project.modified = Date.now();
        return projectModel(project).save();
    }
};

module.exports.projectUpdate = {
    type: types.ProjectType,
    args: {
        id: { type: GraphQLString },
        title: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve (parent, args) {
        let project = {};
        project.title = argz.title;
        project.content = argz.content;
        return projectModel.findOneAndUpdate({_id: args.id}, project, {new: true});
    }
};

module.exports.projectDelete = {
    type: types.ProjectType,
    args: {
        id: { type: GraphQLString }
    },
    resolve (parent, args) {
        return projectModel.findOneAndDelete({_id: args.id});
    }
};

module.exports.notification = {
    type: types.NotificationType,
    args: {
        title: { type: GraphQLString },
        username: { type: GraphQLNonNull(GraphQLString) },
        message: { type: GraphQLNonNull(GraphQLString) },
        created: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve (parent, args) {
        let notification ={};
        notification.username = args.username;
        notification.message = args.message;
        notification.title = args.title;
        notification.created = Date.now();
        return notificationModel(notification).save();
    }
};
