// let family = new Array("Ayush",20,true);
// console.log(family);
// let consines = ["Krish","Ishu","Nandani"];
// // console.log(consines);
// let friends = new Array("Vivek","Viveka","Sachin");
// // console.log(friends);
// let allMembers = family.concat(consines,friends);
// console.log(allMembers);
// let nums = new Array(2,4,6,8,10);
// let even = nums.every((x)=>x%2==0);
// console.log(even);
// let size = nums.length;
// console.log(size);


// let names = ["cat","mat","bat","rat"];
// let result = names.every(name => name.length == 3);

// names.push("get");
// names.pop();
// names.unshift();
// console.log(names);
// names.shift();
// console.log(names);

// let statement = "we are the students of Lpu";
// let words = statement.split(" ");
// let update = words.join(" ");

// console.log(update);



// let nums = [1,2,4,8,16,32,64,128,256,512,1024];
// let result = nums.filter((nums)=>nums<50);
// console.log(result);

// let nums = [2,4,7,12,18,21,36,40,48,52];
// let result = nums.filter((num)=>num%3==0);
// console.log(result);

let data = [{
    name : "Lpu",
    subject : "React",
    fees : 120000
},{
    name : "CU",
    subject : "Computer Networking",
    fees : 130000,
},{
    name : "lpu",
    subject : "Node",
    fees : 122000,
}];
let colleges = data.filter((col)=>col.name.toLowerCase()=="lpu");
console.log(colleges);

let numbers = [2,3,4,8,10,15,20];
let final = [];
numbers.forEach((a,b)=>{
    if(b%2==0){
        a*=2;
        final.push(a);
    }
    else{
        final.push(a*5);
    }
});
console.log(final);
