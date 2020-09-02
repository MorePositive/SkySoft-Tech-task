var myApply = function(thisArg, target, args){
  target(args.join(" "))
 };
 myApply(console, console.log, ["[Error]", "admin:", "File not found!"]) // [Error] admin: File not found! 


 var myBind = function(thisArg, target, arg1, arg2, arg3){
  var args = Array.prototype.slice.call(arguments, 2);
  return function(newArgs) {
    target.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)));
  }
};


var user = "admin:";
var log = {
  error: myBind(console, console.log, "[Error]", user),
  warning: myBind(console, console.log, "[Warning]", user)
};
log.error("File not found!"); // [Error] admin: File not found!
log.warning("No timezone set!"); // [Warning] admin: No timezone set!

var periodicIterator = function (array, time) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(function() {
     console.log(array[i])
    }, time * i)
  }
}

console.log(periodicIterator([3,2,4], 100));


var findLongest = (str) => {
	var longest = '';
  var current = '';
  for(var i=0; i < str.length; i++) {
    var repeated = current.indexOf(str[i]);
    if(repeated > -1) {
      if(longest.length < current.length) {
      	longest = current;
      }
      current = current.substr(repeated+1);
    }
    current += str[i];
  }
  return longest.length < current.length ? current : longest;
};

console.log(findLongest('1213212')); // 321 ??? 213
console.log(findLongest('1243121')); // 4312
console.log(findLongest('ababacsabzab')); // csabz