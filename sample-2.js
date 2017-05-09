// clorue queue 
// let vs var

// bad
// for (let i = 0; i < 5; i++) {
//     var x = 10;
//     window.setTimeout(function () {
//         alert('bed: ' + i);
//     }, 50 * i);
// }

// good
for (let i = 0; i < 5; i++) {
    (function(index) {
        var x = 10;

        window.setTimeout(function() {
            alert('good: ' + i);
        }, 50 * i);
    })(i);
}

