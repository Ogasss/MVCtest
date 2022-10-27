import $ from 'jquery'
import './app2.css'

const html = 
`
<section id="app2">
<ol class="tab-bar">
    <li><span>列表一</span></li>
    <li><span>列表二</span></li>
</ol>
<ol class="tab-content">
    <li>内容一</li>
    <li>内容二</li>
</ol>
</section>
`

const $element = $(html).appendTo($('body>.page'))

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

$tabBar.on('click','li',(e)=>{
    const $li = $(e.currentTarget)

    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')

    const index = $li.index()
    localStorage.setItem(localKey,index)

    $tabContent
    .children()
    .eq(index)
    .removeClass('active')
    .siblings()
    .addClass('active')
})

$tabBar.children().eq(index).trigger('click')