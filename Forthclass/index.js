// let nums = [3,4,5,6,24,53,55];
// function work(x,y){
//     console.log(x,":",y);
// }
// nums.map(work);
// nums.map((x,y)=>{console.log(x,":",y);});

// nums.reverse();
// console.log(nums);
// console.log(nums.length);


// let friends = ["sachin","rahul","rohit","dhoni"];
// friends.sort();
// console.log(friends);

// friends.toLowerCase;
// console.log(friends);

// friends.map((x)=>console.log(x.toUpperCase()));

// friends.map((x)=>{console.log(x.reverse());});


// let fruits = ["mango","dragon fruit","pine apple","pine apple","grapes"];
// let result = fruits.find((x)=>x=="mango");
// console.log(result,"is there in the list");

// let ans = new Set(fruits);
// let res1 = Array.from(new Set(fruits));
// console.log(ans,res1);


// let str = "welcome to lpu";
// let s1 = str.split(" ");
// let s2 = Array.from(str);
// console.log(s1,s2);

// let nums = [3,4,5,6,7,8,9,10];
// let sum =0;
// nums.map((x)=>{sum+=x;});
// console.log(sum);

// let nums = [4,8,12,16,20,24,28,32];
// let res = nums.reduce((acc,cur)=>acc+=cur,0);
// console.log(res);

// let friends = ["Ram","Shyam","Mohan","Sohan","Ramesh"];
// // console.log(nums,friends);
// console.log(...nums,...friends);
// let dost = ["Bunti","krish","viveka",...friends];
// console.log(dost);

// let fruits = ["mango","banana","grapes","orange"];
// console.log(fruits);
// let [a,b,c,d] = fruits;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// need to fetch data from the index.html file using js

function submit_button() {
    let lebal = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let num = document.getElementById("number").value;

    document.getElementById("output").innerHTML =
        `<strong>Name</strong>: ${lebal}<br> <strong>Email</strong>: ${email}<br> <strong>Number</strong> : ${num}`;
}
