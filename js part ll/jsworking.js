//  1 : compile ;
//  2 : execute ;

// compilation phase :

//  1.tokeinization(breking code in smaller parts)
//  2.parsing  (determing the scope,,, global or function)
//  3.code Generation 

// note:...
//  early error checking 
//  determining the scope of varibale 



// Global execution phase ################

//... in javascript code executes inside the executin context 
//    called Global execution context 
//    1. creation phase (Global memory  )
//    2.code execution phase 


// key points #########333

//    1.java sccript a synchronous programming languge 
//    the browser makes it the asynchronous /
//    2.single threaded(until the first line finish execution it cant move to the next one)
//    3.in js environment the window is the global object but it differs in the  node js 


// function declaration ########################
//   js is alexical scoped language 
//   the scope is decide on the way by which code has been written 


// hoisting ############################3

// function expression in case of naonymous  becomes undefined if it is called before the line in which it was created


// in case of let and const ########################


// in global memory the the variable becomes uninitialized if it is called before the intilaizing 
// let and const are also hoisted.............
// TDZ(temporal dead zone)..............
// the  period in which a variable remains unintilized in the Global memory


// function executin context ######################3
// scope chain ######################3


//##################### there is a dom tree in which we study about parent node and child node 
// in html files 