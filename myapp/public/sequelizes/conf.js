const Sequelize = require('sequelize');
const sequelize = new Sequelize('world', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
sequelize
.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch(err=>{
    console.error('unable to connect to the database:',err);
});

const User=sequelize.define('user',{
    firstName:{
        type:Sequelize.STRING
    },
    lastName:{
        type:Sequelize.STRING
    }
});
User.sync({force:true}).then(()=>{
    return User.create({
        firstName:'John',
        lastName:'Hancock'
    });
});