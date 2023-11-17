// 
// let c=10;
// console.log(c);
// console.warn(c);
// you have to find out the difference

//---------------------------------------------------------------
//                         global and non-global module
// ----------------------------------------------------------------
// global -- we don't have to import anything 
// for example -->
 console.log('hello world');
 // here we just print onr message we have not need to import anything
 // using console.log we can print anything 
//------------------------------------------------------------------------------------------------
//                        but in case of non-globale module  we have to import
//------------------------------------------------------------------------------------------------

// if we want to use file   system then we need to import fs module
// using f variable we can perform the following
 const f = require('fs');
//  writeFileSync--> it is A method that use to create a new file and write some contenet in side the file using this

//---------------------------------------------------------------------------------------------------- 
//    syntex - > f.writeFileSync("FILE NAME WITH . EXTENSION" , "data which you insert into the file ") '
//----------------------------------------------------------------------------------------------------

f.writeFileSync("hello.txt","hii this is the content in side the file name hello.txt");

// hello world 
// ------------------->












       


          


