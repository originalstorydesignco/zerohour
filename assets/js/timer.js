var timerId =
  countdown(
    new Date('July 12, 2019'),
    function(ts) {
      document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
    },
    countdown.DAYS | countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

console.log(timerId)
