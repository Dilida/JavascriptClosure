var globalScope = function(x) {

	var z = 10;

	var privateScope = function(y) {
		return x * y *z;
	};
	
	return privateScope;
};

var privateScope = globalScope(8);
var fn2 = privateScope(7);

console.log([privateScope, fn2]);
