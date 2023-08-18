$('.addBtn').click(function () {
    $('.add').animate({ left: "0px"}, 700)
    $('.addBtn').animate({ left: "0px"}, 700)
})

$('.close').click(function () {
    $('.add').animate({left: "-248px" }, 700)
    $('.addBtn').animate({ left: "-248px"}, 700)
})

$('#clik a').click(function(){
    let href=$(this).attr('href');
    let Offset=$(href).offset().top;
    $('html,body').animate({scrollTop:Offset},1000)
})


$('.margn h2').click(function(){
    $(this).next().slideToggle()
    $(".margn p").not($(this).next()).slideUp()
})


let downData =new Date("Dec 10,2023 23:59:59").getTime()

let counter = setInterval(()=>{
    let dataNow=new Date().getTime()
    let dataDif=downData-dataNow

    let days=Math.floor(dataDif/(1000*60*60*24))
    let hours=Math.floor((dataDif%(1000*60*60*24))/(1000*60*60))
    let minutes=Math.floor((dataDif%(1000*60*60))/(1000*60))
    let seconds=Math.floor((dataDif%(1000*60))/(1000))

    document.querySelector('.days').innerHTML=days
    document.querySelector('.hours').innerHTML=hours
    document.querySelector('.minutes').innerHTML=minutes
    document.querySelector('.seconds').innerHTML=seconds
if(dataDif<0){
clearInterval(counter)
}

},1000)

$('.text_text').keyup(function(){
let length = $(this).val().length
$('#inlin').text(100-length <= 0 ? "your available character finished" : 100 - length)
})