import $ from 'jquery'
import './app1.css'

const html =
`
<section id="app1">
    <div class="output">
        <span id="number">100</span>
    </div>
    <div class="actions">
        <button id="add1">+</button>
        <button id="minus1">-</button>
        <button id="mul2">×</button>
        <button id="device2">÷</button>
    </div>
</section>
`

const $element = $(html).appendTo($('body>.page'))

const $buttonAdd = $('#add1')
const $buttonMinus = $('#minus1')
const $buttonMul = $('#mul2')
const $buttonDevice = $('#device2')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n || 100)

$buttonAdd.on('click',()=>{
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n',n)
    $number.text(n)
})

$buttonMinus.on('click',()=>{
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n',n)
    $number.text(n)
})

$buttonMul.on('click',()=>{
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n',n)
    $number.text(n)
})

$buttonDevice.on('click',()=>{
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n',n)
    $number.text(n)
})