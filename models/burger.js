const orm = require("../config/orm")

var burger = {
    all: function(cb){
        orm.all("burgers", function (res){
            cb(res);
        })
    }, 
    create: function(cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(cb){
        orm.update("burgers", objColsVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;