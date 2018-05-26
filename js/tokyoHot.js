var setPeogress = function(ele, start, stop, time) {
    var timeProress = 0
    var progressBar_Box = document.getElementById(ele)
    var progress = progressBar_Box.firstElementChild
    var title = progressBar_Box.lastElementChild
    var dragDutton = document.getElementById('td_btn')
    progress.style.width = start + "%"
    var temp = (stop - start) / (time / 100)
    var temp1 = start
    var myVar = setInterval(function() {
        temp1 += temp
        progress.style.width = temp1 + "%"
        dragDutton.style.marginLeft = temp1 - 1 + "%"
        timeProress += 1 / 10
        title.innerHTML = parseInt(temp1) + "%"
        console.log(timeProress)
    }, 100)
    setTimeout(function() {
        clearInterval(myVar)
    }, time);
}

var start = function() {
    console.log('start')
    setPeogress('progressBar_Box', 0, 100, 10000)
}
var start_btn = document.getElementById('peogress_start')
start_btn.onclick = start