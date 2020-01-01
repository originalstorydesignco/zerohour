var timerId =
  countdown(
    new Date('December 31, 2029'),
    function(ts) {
      document.getElementById('pageTimer').innerHTML = ts.years + "  :  " + ts.days + '  :  ' + ts.hours + "  :  " + ts.minutes + "  :  " + ts.seconds;
      document.getElementById('pageTimed').innerHTML = "years" + "    " +"days" +"    " +"hours"+"   "+    "minutes" + "   "+  "seconds";
    },
    countdown.YEARS | countdown.DAYS | countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

console.log(timerId)
