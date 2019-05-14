const connection = require("./connection");

// * ORM is the connection to the DB

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num.length; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    create: function (table, cols, vals, cb) {
        let queryString = `insert into ${table} (${cols.toString()}) values (${printQuestionMarks(vals.length)})`
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        let queryString = `update ${table} set ${objToSql(objColVals)} where ${condition}`
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    all: function (table, cb) {

        connection.query(`SELECT * FROM ${table}`, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    }

}

module.exports = orm;