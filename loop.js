function myApp(){
    const arr=[2,5,6,7,8,9,10];
    var mapArr;
    var filterArr;

    // console.log(typeof mapArr);
    ////ForEach
//  arr.forEach(foreach1);
//  arr.forEach(foreach2);
//  console.log(arr);   
    ////Map
//     mapArr=arr.map(map);
//     console.log(mapArr);
//     console.log(arr);
    //// Filter
     result=arr.filter(filterFunc);
     console.log(result);
}

// function foreach1(num){
//     console.log(num);
// }

// function foreach2(item,index,asrr){
//     arr[index]=item*10;
// }
// function map(item){
//     item=item*2;
//     return `${item} hello`;
// }
function filterFunc(item){
    return item%2==0;
}
myApp();
