const crypto = require('crypto');
const os = require('os');
const fs = require('fs');

const value = require('./data.js');


var userdata = value("Astheek Nadig",2022,"B.Tech")
userdata.Userid = 2401;
userdata.Username = os.userInfo()["username"];
userdata.Password = crypto.createHmac('sha256', JSON.stringify(userdata)).update('Prograd').digest('hex');

fs.writeFileSync('./message.txt',JSON.stringify(userdata));
console.log(userdata);