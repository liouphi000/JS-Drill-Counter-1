if (count === undefined) {
  console.log('ERROR. Count is not defined')
} else {
  var countHTML = document.getElementById('counter')
  countHTML.textContent = count //initialize count

  var increase = document.getElementById('increase');
  var decrease = document.getElementById('decrease');
  var log = document.getElementById('log')
  increase.addEventListener('click', function() {
    increaseCount();
    countHTML.textContent = count
  })

  decrease.addEventListener('click', function() {
    decreaseCount();
    countHTML.textContent = count
  })

  log.addEventListener('click', function() {
    logCountInConsole();
  })
}
