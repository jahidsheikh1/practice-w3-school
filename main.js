// ES6 Rest PARAMETER..........

// function calulation(...numbers){
//     let sum=0;
//     for(let i of numbers){
//         sum=sum+i;

// }
// console.log(sum);
// }

// calulation(10,20,30,30,8,)

// function shakil(...numbers){
//     let sum=0;
//     for(let i of numbers){
//         sum=sum+i;
//     }
//  console.log(sum);
// }

// shakil(10,20)


// Dynamic function

var name=function(nameValue){
    return nameValue;
}

console.log(name("shakil hasn"));

name='shakil hasan'
console.log(name);

 var name;


// simple for loop

// var i;
// for(i=0;i<=100;i++){
//     console.log("allah")
// }



// var Mycounty=['dhaka','tangail','khulna', 'borisal'];

// for(let mycity of Mycounty ){
//   console.log(mycity);
// }


// var nameValue=['shakil','tamzid','mohu','mohima'];

// for(let Mycounty of nameValue){
//   console.log(nameValue);
// }



// the for in loop
// var myself = {firstname:'shakil', lastname:"hasan",age:29,city:"dhaka"};
// for ( let props in myself){
//   console.log(myself[props]);
// }

// var myself = {firstname:'shakil', lastname:"hasan",age:29,city:"dhaka"};
// for ( let props in myself){
//   console.log(props+'='+myself[props]);
// }


// Decision Making


// var myself = {firstname:'shakil', lastname:"hasan",age:29,city:"dhaka"};

// if(myself['firstname']=="hasan"){
//   console.log("shirt color is red");
// }

// else if(myself['firstname']=="jahid"){
//   console.log("shirt color is blue");
// }


// else{
//   console.log("shirt color is blue");
// }



// simple function

// function myname(){
//   var x=10;
//   var y=10;
//   var z= x+y;
//   console.log(z)
// }

// myname();

// function myname(){
//   var x=10;
//   var y=20;
//   var z=x*y;
//   console.log(z);
// }

// myname();

// parameteized functions

// function myname(x,y){
//   var z= x+y;
//   console.log(z);
// }

// myname(10,20)

// rest parameters

// function something(...x){
//   console.log(x);
// }

// something(1,2,3,4,5,6,9,7,"a","b","c")


// function something(...x){
//   console.log(x[7]);
// }

// something(1,2,3,4,5,6,9,7,"a","b","c")


// function funOne(){
//   return 20;
// }

// function funtow(){
//   return funOne();
// }

// console.log(funOne()+funtow());


// anonymouse function


// var myfun=function(){
//   return"hello"
// }

// console.log(myfun());


// var myfun=function(x){
//   return x;
// }
// console.log(myfun("hello world"));



// var myfun=function(...x){
//   return x;
// }
// console.log(myfun(1,2,3,4,5,6,));





// var myfun=function(){
//   return "hello";
// }


// var myfun=function(){
//   return "hello again";
// }

// console.log(myfun());

// arrow function


// var myarrow=()=>{
//   console.log("my first arrow function");
// }


// myarrow();


// var myarrow=(...x)=>{
//   console.log(x);
// }


// myarrow("1,2,3,4,5,6");


// var myarrow=()=>{
//   return "hello world";
// }


// console.log(myarrow());



// simpole Array


// var myarray=["a", "b","c","d"]

// var myarraypro= new Array("a", "b","c","d");

// console.log(myarray[2]);



// var myarray=["a", "b","c","d"]

// var myarraypro= new Array("a", "b","c","d");

// for(let item of myarraypro ){
//   console.log(item);
// }


// multidimensional arrays

// var bangladesh=["dhaka","tangail","ctg"]
// var india=["mumbai","chennai","kolkata"]
// var china=["uhan","shanghai","hongkong"]


// var asia=[bangladesh,india,china,]

// console.log(asia[1][2]);


// array de-stucturing

// var countrues=['BAN','IND','CANA','PAK']

// var[a,c,b,d]=countrues

// console.log(b);

// loop for map values and keys

// var myMap= new Map();


// myMap.set("key1",'bangladesh')
// myMap.set("key2",'india')
// myMap.set("key3",'sirilanka')
// myMap.set("key4",'maldiv')
// myMap.set("key5",'nepal')
// myMap.set("key6",'thailand')


// for(let myvalue of myMap.values()){
//   console.log(myvalue);
// }

// map
// var myMap= new Map();


// myMap.set("key1",'bangladesh')
// myMap.set("key2",'india')
// myMap.set("key3",'sirilanka')
// myMap.set("key4",'maldiv')
// myMap.set("key5",'nepal')
// myMap.set("key6",'thailand')

// console.log(myMap.keys());


// set

// var mySet=new Set();


// mySet.add("india");
// mySet.add("nepal");
// mySet.add("bhutan");
// mySet.add("maldiv");
// mySet.add("chaina");
// mySet.add("chaina");

// console.log(mySet);



// var mySet=new Set();


// mySet.add("india");
// mySet.add("nepal");
// mySet.add("bhutan");
// mySet.add("maldiv");
// mySet.add("chaina");
// mySet.add("chaina");


// mySet.delete("nepal");

// console.log(mySet.size);

// var mySet=new Set();


// mySet.add("india");
// mySet.add("nepal");
// mySet.add("bhutan");
// mySet.add("maldiv");
// mySet.add("chaina");
// mySet.add("chaina");

// if(mySet.has("india")){
// console.log("yes");
// }
// else{
// console.log("no");
// }


// class myclass{



// myfunction () {
//     console.log("ami tumal bhalobashe");
// }
// myfunction1 () {
//     console.log("ami tumal bhalobashe");
// }
// myfunction2 () {
//     console.log("ami tumal bhalobashe");
// }
// myfunction3 () {
//     console.log("ami tumal bhalobashe");
// }


// }

// var obj=new myclass;

// obj.myfunction();



// class myclass{



// myfunction (shakil) {
//     console.log(shakil);
// }
// myfunction1 (shakil) {
//     console.log(shakil);
// }
// myfunction2 (shakil) {
//     console.log(shakil);
// }
// myfunction3 (shakil) {
//     console.log(shakil);
// }


// }

// var obj=new myclass;

// obj.myfunction("hasan");
// obj.myfunction('shakil');
// obj.myfunction("hsan1");
// obj.myfunction("hsan1");



// class Myclass{
//     constructor(a,b){
//         this.firstNum=a
//         this.secondNum=b
//     }

//     add(){
//         let result=this.firstNum+this.secondNum;
//         console.log(result);
//     }
// }

// var obj=new Myclass(10,20);

// obj.add();



// static keyword


// class myclass{
//     static hello(){
//         console.log("hello world");
//     }
// }

//  myclass.hello();


//  es6 module- jot kora aktit kora

// const person = {
//    num: "shakil",
//    age: "22"
// };

// const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};



