// const fs = require('fs');
// let file = fs.readFileSync('file.txt');
// let func = (file,callback)=>{
//         if(file){
//                 callback(new Error('failed'));
//         }
//         else{
//                 callback("success");
//         }
// }
// let func2 = (err,data)=>{
//         if(err){
//                 console.log(err);
//         }
//         else{
//                 console.log(data);
//         }
// }
// func(file,func2)