//a) Print Odd numbers in an array
var odd = (arr)=>{
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            arr1.push(arr[i]);
        }
    }
    return arr1;
};
console.log(odd([2,1,4,5,6,4,7,8,9]));

//b) Convert all the Strings to caps in a string array
var caps = (arr)=>{
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        a=arr[i];
        var b=a[0].toUpperCase()+a.slice(1);
        arr1.push(b);
    }
    return arr1;
};
console.log(caps(["rajesh","kumar","converting","array"]));

//c) Sum of all numbers in the array
var sum = (arr)=>{
    var arr1=0;
    for(var i=0;i<arr.length;i++){
        arr1+=arr[i];
    }
    return arr1;
};
console.log(sum([1,5,9,7,45,63,2]));
//d) Return all prime numbers in an array
var prime = (arr)=>{
    var arr1=[];
    arr.sort();
    for(var i=0;i<arr.length;i++){
        var count=0;
        for(var j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count++;
            }
        }
        if(count==2){
            arr1.push(arr[i]);
        }
    }
    return arr1;
};
console.log(prime([1,5,9,7,45,63,2]));
//e) Return all palindrome in an array
var palindrome = (arr)=>{
    var arr1=[];
    for(var i=0;i<arr.length;i++){
        var s=String(arr[i]).split("").map(Number);
        var a="";
        for(var j=s.length-1;j>=0;j--){
            a+=s[j];
        }
        if(arr[i]==a){
            arr1.push(arr[i]);
        }
    }
    return arr1;
};
console.log(palindrome([121,451,858,623,78987]));
