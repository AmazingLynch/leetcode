var isHappy = function(n) {
  var cache = {};
  while (n !== 1) {
    if (cache[n]) break;
    cache[n] = true;
    var tmp = 0;
    while (n) {
      tmp += Math.pow(n % 10, 2);
      n = parseInt(n / 10);
    }
    n = tmp;
  }

  return 1 === n;
};

console.log(isHappy(19));