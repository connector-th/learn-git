console.log("Q.3");
var q3 = [{name: "a",height: 3},{name: "b",height: 1},{name: "c",height: 90}];
var min = q3.sort(function(a,b){return a.height-b.height;});
console.log(min);
