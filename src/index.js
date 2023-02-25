module.exports =  function reverse (ints) {
    let rev = '';
    ints = Math.abs(ints);
    ints = ints.toString();

    for (let i = 0; i < ints.length; i++) {

      rev = ints[i] + rev;

    }

    return Number(rev);

  }
