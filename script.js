let $sred = document.querySelectorAll('.sred')
let $sorange = document.querySelectorAll('.sorange')
let $sgreen = document.querySelectorAll('.sgreen')
let $wred = document.querySelectorAll('.wred')
let $worange = document.querySelectorAll('.worange')
let $wgreen = document.querySelectorAll('.wgreen')
let $rgb = document.querySelectorAll('.rgb')

let red = true
let orange = false
let green = false
let redTime
let orangeTime
let greenTime
let walk
let walkcolor = setInterval(function(){
    $rgb.style.backgroundColor = ""
})

let redInterval = setInterval(function () {
    clearInterval(greenTime)
    $sred[0].style.backgroundColor = "red"
    $sred[1].style.backgroundColor = "red"
    $wgreen[0].style.backgroundColor = "greenyellow"
    $wgreen[1].style.backgroundColor = "greenyellow"
    $sgreen[0].style.backgroundColor = "black"
    $sgreen[1].style.backgroundColor = "black"
    $wred[0].style.backgroundColor = "black"
    $wred[1].style.backgroundColor = "black"
    red = false
    orange = true
    $sred[0].innerHTML = "2"
    $sred[1].innerHTML = "2"
    redTime = setInterval(function () {
        $sred[0].textContent = $sred[0].textContent - 1
        $sred[1].textContent = $sred[0].textContent
    }, 1000)
    let orangeInterval = setTimeout(function () {
        clearInterval(redTime)
        $sred[0].style.backgroundColor = "black"
        $sred[1].style.backgroundColor = "black"
        $sorange[0].style.backgroundColor = "orange"
        $sorange[1].style.backgroundColor = "orange"
        $worange[0].style.backgroundColor = "orange"
        $worange[1].style.backgroundColor = "orange"
        $wgreen[0].style.backgroundColor = "black"
        $wgreen[1].style.backgroundColor = "black"
        $wred[0].style.backgroundColor = "black"
        $wred[1].style.backgroundColor = "black"
        orange = false
        green = true
        $sorange[0].innerHTML = "1"
        $sorange[1].innerHTML = "1"
        orangeTime = setInterval(function () {
            $sorange[0].textContent = $sorange[0].textContent - 1
            $sorange[1].textContent = $sorange[0].textContent
        }, 1000)
    }, 3000)
    let greenInterval = setTimeout(function () {
        if (green) {
            clearInterval(orangeTime)
            $sgreen[0].style.backgroundColor = "greenyellow"
            $sgreen[1].style.backgroundColor = "greenyellow"
            $sorange[0].style.backgroundColor = "black"
            $sorange[1].style.backgroundColor = "black"
            $worange[0].style.backgroundColor = "black"
            $worange[1].style.backgroundColor = "black"
            $wred[0].style.backgroundColor = "red"
            $wred[1].style.backgroundColor = "red"
            $wgreen[0].style.backgroundColor = "black"
            $wgreen[1].style.backgroundColor = "black"
            red = true
            green = false
            $sgreen[0].innerHTML = "2"
            $sgreen[1].innerHTML = "2"
            greenTime = setInterval(function () {
                $sgreen[0].textContent = $sgreen[0].textContent - 1
                $sgreen[1].textContent = $sgreen[0].textContent
            }, 1000)
        }
    }, 5000)
}, 8000)


