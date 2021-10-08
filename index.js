module.exports = function(base) {
    let stc = "";
    let args = {};
    let quote_on = false;
    for(let i = 0; i < base.length; i++) {
        if(base[i] === '"') {
            quote_on = !quote_on;
        }
        if(base[i] === ' ' && quote_on) {
            stc += 'xP4jcgCaWf3SR74Ht2pi53GvfykRqieHq5Wdka6wOVmhlz4gwI'; // this is UNPROFESSIONAL okay deal with it
        } else {
            stc += base[i];
        }
    }
    stc.split('"').join("").split(" ").forEach(function(itm) {
        let c = itm.split("=").map(bee => bee.split("xP4jcgCaWf3SR74Ht2pi53GvfykRqieHq5Wdka6wOVmhlz4gwI").join(" "));
        args[c[0]] = c[1];
    });
    return args
}