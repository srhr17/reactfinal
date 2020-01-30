var express = require("express");
var app = express();
const mysql = require("mysql");
const AWS = require("aws-sdk");
var port = 8001;
var bodyParser = require("body-parser");
var fs = require("fs");
//var formidable = require("formidable");
var upload = require("express-fileupload");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload());
var mysqlConnection = mysql.createConnection({
  host: "database-1.cizsguibvuyu.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "qwertyuiop",
  database: "sys"
});
var s3 = new AWS.S3({
  accessKeyId: "ASIAYELQKAFJAEL5FNEA",
  secretAccessKey: "qpEsqc/orq/SZonW9Ya7975/0bV3aqfQNN0n11qQ",
  /*if you are using educate account include this here*/
  sessionToken:
    "FQoGZXIvYXdzED4aDI64On2OefrrFdVbrSKWAmmBGBEqhKgOk8vT5xHrKCRrQLGZZaFYt80ko2++4aTf2eWoZbBjc7GjAW+7O5Ji+Dnd07aNL3sCR2GfV3kKSXfcYxXUZrt1DEACxDhP1CTvTbI4VqlYXateRyaVBQbzp4U92OlugxeqggrCemBVizO/Usb9RliYD7hLjQaQOlY3l4nqXBSRrUDnJpG1YkV3Bb6eYTdNdh6pvqIXFk0YJkW32AWkb8/PZwsZACTPaVANTk4PXIuVERZh9tOm9A/P0HT7/e0KDuZfSM9lQHu5JhhZGZqhmXGcfo8CVCnPNHz5g8Wk3xw9Gn8Koat6OUOlqZwTQYN2U2m4ttBeMqUR+9KA7rfzLocb65pFHvLpPhbeOW9SZcbeKNiI5+sF"
});
let fileName = "";
var uploadFile = () => {
  fs.readFile("photo_2019-06-17_07-12-32.jpg", (err, data) => {
    if (err) throw err;
    var params = {
      Bucket: "sriharihari1", // pass your bucket name
      Key: "SH", // file will be saved as testBucket/
      Body: data
    };
    s3.upload(params, function (s3Err, data) {
      if (s3Err) throw s3Err;
      console.log("File uploaded successfully at " + data.Location);
    });
  });
};

mysqlConnection.connect(err => {
  if (!err) console.log("Connection succeeded.");
  else
    console.log("Unsuccessful \n Error : " + JSON.stringify(err, undefined, 2));
});

app.get("/login", function (req, res) {
  mysqlConnection.query("select * from home", function (err, result, fields) {
    if (!err) {
      for (let i = 0; i < result.length; i++) {
        console.log(
          result[i].name + " " + result[i].password + " " + result[i].age
        );
        res.write(
          "<!DOCTYPE html> <head></head> <body> <h1> Entry No : " +
          (i + 1) +
          " </h1> <h1> Name : </h1> <h4>" +
          result[i].name +
          "</h4> <h1>  Password : </h1> <h4>" +
          result[i].password +
          "</h4><h1>    Age : </h1><h4>" +
          result[i].age +
          "</h4> <hr> </body>"
        );
        fs.appendFile(
          "mynewfile3.txt",
          result[i].name + " " + result[i].password + " " + result[i].age,
          function (err) {
            if (err) throw err;
          }
        );
      }

      uploadFile();

      res.end();
    } else {
      console.log(err);
      res.end();
    }
  });
});

app.post("/login", function (req, res) {
  console.log("Inside post /login method");

  var name = req.body.date;
  var password = req.body.country;
  var age = req.body.states;
  var filename = req.body.document;
  fileName = filename;
  uploadFile();
  console.log(filename);
  mysqlConnection.query(
    "insert into home(name,password,age) values(?,?,?)",
    [name, password, age],
    function (err, result, fields) {
      if (err) throw err;
      console.log(name + " " + password + " " + age);
    }
  );

  res.send(
    "POST request to the homepage" + " " + name + " " + password + " " + age
  );

  /* new formidable.IncomingForm()
    .parse(req)
    .on("fileBegin", (name, file) => {
      file.path = __dirname + "/uploads/" + name;
      console.log(file.path);
    })
    .on("file", (name, file) => {
      console.log("Uploaded file", name, file);
    });*/
});

app.listen(port, () => console.log("Example app listening on port port!"));