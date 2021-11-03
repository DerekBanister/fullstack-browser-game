const User = require("./User");
const Level = require("./Level");
const Comment = require("./Comment");

// basically
// const levelComment = require("./levelComments");
// const UserComment = require("./userComments");


Comment.belongsTo(Level, {
    foreignKey: "level_id",
    onDelete: "CASCADE"
});

Level.hasMany(Comment, {
    foreignKey: "level_id"
});
// ////////////////////////
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});


module.exports = { User, Level, Comment }