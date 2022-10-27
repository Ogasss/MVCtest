import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')

$square.on('click',()=>{
    if($square.hasClass('active')){
        $square.removeClass('active')
    }else{
        $square.addClass('active')
    }
})