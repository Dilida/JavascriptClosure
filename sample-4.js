function count(x) {
	
	var total = x;

  var counter = function(y) {
		
		if (typeof(y) !== 'undefined')
			total *= y;

		return counter;
  }
	
	counter.toString = function() {

		return total.toString();
	}

	return counter;
}

var result = count(3)(2)(8)(100);

alert(result)

