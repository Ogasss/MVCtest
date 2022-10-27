import $ from 'jquery'
import './app1.css'

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