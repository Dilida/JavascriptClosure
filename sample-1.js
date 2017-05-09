var cloureFn = function(prefix, suffix) {
    var fnA = function() { alert('Prefix:' + prefix); }
    var fnB = function() { alert('Suffix:' + suffix); }
    var fnC = function() { return fnB; }

    return {
        showPrefix: fnA,
        showSuffix: fnB,
        otherFn: fnC
    };
}

var fn = cloureFn("新年快樂", "紅包拿來");

fn.showPrefix();
fn.showSuffix();