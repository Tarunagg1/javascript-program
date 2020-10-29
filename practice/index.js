// arr = ["lets","Upgrade","javascript","programing","learning","webtech"];
// console.log(arr);
// for(let i=arr.length-1; i>=0; i--){
//     console.log("Element is: ",arr[i]);
// }


// str = "javascript tutorial teach by lets upgrade";
// char = "i";
// if(str.indexOf(char)){
//     console.log("Element if found at index: ",str.indexOf(char))
// }else{
//     console.log("Element if not found ")
// }


// function mintosec(n){
//     sec = n*60;
//     console.log(`in ${n} Minutes ${sec} Second`);    
// }
// mintosec(10)

// arr = ["lets","Upgrade","javascript","pro","learning","webtech","apple"];
// arr.forEach(element => {
//     if(element.indexOf("a") >=0){
//         console.log(`Element containing Char A is ${element}`);
//     }
// });


// isfound = false
// const findstr = (arr, ele) => {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] == ele) {
//             isfound = true;
//             return i;
//         }
//     }
// }
// arr = ["lets", "Upgrade", "javascript", "pro", "learning", "webtech", "apple"];
// ele = "php";
// ret = findstr(arr, ele);
// if (isfound) {
//     console.log(`Element ${ele} found at : ${ret}`);
// } else {
//     console.log(`Element ${ele} not found`);
// }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! practice !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const revstr = (str)=>{
//     const arr = str.split("");
//     arr.reverse();
//     str = arr.join("");
//     console.log(str);
// }
// revstr("tarun")

// ///////////////////////////////////////////////////////////////////////////////////////////

// const maxchar = (str)=>{
//     let obj = {};
//     for(let char of str){        
//         (!obj[char]) ?obj[char] = 1:obj[char]++;
//     }
//     let maxnum = 0;
//     let maxchar = '';
//     for(let char of str){
//         if(obj[char] >= maxnum){
//             maxnum = obj[char]
//             maxchar = char;
//         }
//     }
//     console.log(maxchar+" "+maxnum);
// }
// maxchar("ataaratun")

////////////////////////////////////////////////////////////////////////
// const chunks =(arr,n)=>{
//     const chunked = [];
//     for(let ele of arr){
//         let last = chunked[chunked,length-1];
//         if(!last || last.length == n)
//             chunked.push(ele)
//         else
//             last.push(ele)
//     }
//     return chunked;
// }
// chunks

//////////////////////////////////////////////////////////////////////////

// function revstr(str){
//     let strarr  = str.split("");
//     var rev = strarr.reverse().join("");
//     return rev   
// }
// console.log(revstr("tarun"));

////////////////////////////////////////////
// function fact(num){
//     fact = 1;
//     for(let i=1; i<=num; i++){
//         fact *= i;
//     }
//     return fact
// }
// console.log(fact(5));

///////////////////////////////////////
// function palindrom(str) {
//     var rev = str.split('').reverse().join("");
//     if(rev === str){
//         return true;
//     }else{
//         return false;
//     }
// }
// if(palindrom('aba')){
//     console.log('true');
// }else{
//     console.log('false');
    
// }

////////////////////////////////////////////////
// function longestword(str){
//     var word = str.split(" ");
//     let max = ""
//     word.forEach(element => {
//         if(element.length > max.length)
//             max = element
//     });
//     return max;
// }
// console.log(longestword("this is tarkjkjkun aggarwal"));

////////////////////////////////////////////////////////////////////////
// function titlecase(str){
//     var word = str.split(" ");
//     for(var i=0; i<word.length; i++){
//         word[i] = word[i][0].toUpperCase() + word[i].slice(1);
//     }
//     return word.join(" ");
// }
// console.log(titlecase("this is tarkjkjkun aggarwal"));

////////////////////////////////////////////////////////////////////////

// function findmaxinarr(arr){
//     listmax = [];
//     for(var i=0; i<arr.length; i++){
//         tempmax = arr[i][0];
//         for(var j=0; j<arr[i].length; j++){
//             if(tempmax <= arr[i][j]){
//                 tempmax= arr[i][j]
//             }
//         }
//         listmax.push(tempmax)
//     }
//     return listmax;
// }
// arr = [[4,84,848],[48,4,895,42,15],[558,48,14,85,74],[4008,84,18,08,8484]]
// console.log(findmaxinarr(arr));

///////////////////////////////////////////////////////////////////////////////
// function repeatnumtime(str,num){
//     // return str.repeat(num)
//     if(num < 0)
//         return ""
//     return str + repeatnumtime(str,num-1);
// }
// console.log(repeatnumtime("abc",3));

/////////////////////////////////////////////////////////////////////////////
// function chunkarray(arr,num){
//     var group = [];
//     while(arr.length > 0){
//         group.push(arr.slice(0,num));
//     }
//     return group;
// }
// console.log(chunkarray(["a","b","c","d","c"],2));

//////////////////////////////////////////////////////////////////////////
// function deleteiteminarr(arr,num){
//     arr.slice(0,num); 
//     return arr;
// }
// console.log(deleteiteminarr(["ss","ss","ffg","df","dff"],2));

////////////////////////////////////////////////////////////////////

// function mutation(arr){
//     var fword = arr[0].toLowerCase();
//     var sword = arr[1]
//     for(var i=0; i<sword.length; i++){
//         if(fword.indexOf(sword[i]) === -1){
//             return false;
//         }else{
//             return true
//         }   
//     }
// }
// console.log(mutation(["nurat","tarun"])); 

///////////////////////////////////////////////////////////////////////////

// function bouncher(arr){
//     var turelist = [];
//     for(ele of arr){
//         if(ele){
//             turelist.push(ele)
//         }
//     }
//     return turelist;
// }

// console.log( bouncher([7,'ate',true,undefined,false,0,9,8]));

/////////////////////////////////////////////////////////////////////////////////////

// nums = [2,8,1,0,98,8]
// nums.filter(function(ele){
//     console.log(ele < 4); 
// })
////////////////////////////////////////////////////////////////////////









