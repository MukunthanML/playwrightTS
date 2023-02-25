let CryptoJS = require("crypto-js");
// const salt = "3uku7";

// let uname = CryptoJS.AES.encrypt("standard_user", salt);
// let pw = CryptoJS.AES.encrypt("secret_sauce", salt);

// console.log(uname.toString());
// console.log(pw.toString());

// let decryptedun = CryptoJS.AES.decrypt(uname, salt);
// let decryptedpw = CryptoJS.AES.decrypt(pw, salt);

// console.log(uname.toString(CryptoJS.enc.Utf8));
// console.log(pw.toString(CryptoJS.enc.Utf8));

export default function getDecryptValue(encrypted: string) {
  return CryptoJS.AES.decrypt(encrypted, process.env.SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );
}
