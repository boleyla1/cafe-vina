
let offsetcoffeebar = $('.coffe-bar').offset().top
let offsetdami = $('.dami').offset().top
let offsetice = $('.ice-coffee').offset().top
let offsetchai = $('.damnosh').offset().top
let offsetshake = $('.shake').offset().top
let offsetihot = $('.hot').offset().top
let offsetsmoti = $('.smoti').offset().top
let offsetmokt = $('.moktil').offset().top
let offsetvafel =$('.vafel').offset().top


$(document).scroll(function (){
    let st = $(this).scrollTop()
    if (st >= offsetcoffeebar && st < offsetdami){
        $('#li1').css({
            'background' : '#FFA500'
        })
        $('#li2').css({
            'background' : '#202020'
        })
        $('#li3').css({
            'background' : '#202020'
        })
        $('#li4').css({
            'background' : '#202020'
        })
        $('#li5').css({
            'background' : '#202020'
        })
        $('#li6').css({
            'background' : '#202020'
        })
        $('#li7').css({
            'background' : '#202020'
        })
        $('#li8').css({
            'background' : '#202020'
        })
        $('#li9').css({
            'background' : '#202020'
        })
    }else if(st >= offsetdami && st < offsetice){
        $('#li1').css({
            'background' : '#202020'
        })
        $('#li2').css({
            'background' : '#FFA500'
        })
        $('#li3').css({
            'background' : '#202020'
        })
        $('#li4').css({
            'background' : '#202020'
        })
        $('#li5').css({
            'background' : '#202020'
        })
        $('#li6').css({
            'background' : '#202020'
        })
        $('#li7').css({
            'background' : '#202020'
        })
        $('#li8').css({
            'background' : '#202020'
        })
        $('#li9').css({
            'background' : '#202020'
        })
    }else if(st >= offsetice && st < offsetchai){
        $('#li1').css({
            'background' : '#202020'
        })
        $('#li2').css({
            'background' : '#202020'
        })
        $('#li3').css({
            'background' : '#FFA500'
        })
        $('#li4').css({
            'background' : '#202020'
        })
        $('#li5').css({
            'background' : '#202020'
        })
        $('#li6').css({
            'background' : '#202020'
        })
        $('#li7').css({
            'background' : '#202020'
        })
        $('#li8').css({
            'background' : '#202020'
        })
        $('#li9').css({
            'background' : '#202020'
        })
    }else if(st >= offsetchai && st < offsetshake) {
        $('#li1').css({
            'background' : '#202020'
        })
        $('#li2').css({
            'background' : '#202020'
        })
        $('#li3').css({
            'background' : '#202020'
        })
        $('#li4').css({
            'background' : '#FFA500'
        })
        $('#li5').css({
            'background' : '#202020'
        })
        $('#li6').css({
            'background' : '#202020'
        })
        $('#li7').css({
            'background' : '#202020'
        })
        $('#li8').css({
            'background' : '#202020'
        })
        $('#li9').css({
            'background' : '#202020'
        })
    }else if(st >= offsetshake && st < offsetihot){
        $('#li1').css({
            'background' : '#202020'
        })
        $('#li2').css({
            'background' : '#202020'
        })
        $('#li3').css({
            'background' : '#202020'
        })
        $('#li4').css({
            'background' : '#202020'
        })
        $('#li5').css({
            'background' : '#FFA500'
        })
        $('#li6').css({
            'background' : '#202020'
        })
        $('#li7').css({
            'background' : '#202020'
        })
        $('#li8').css({
            'background' : '#202020'
        })
        $('#li9').css({
            'background' : '#202020'
        })
    }else if(st >= offsetihot && st < offsetsmoti){
        $('#li1').css({
            'background' : '#202020'
        })
        $('#li2').css({
            'background' : '#202020'
        })
        $('#li3').css({
            'background' : '#202020'
        })
        $('#li4').css({
            'background' : '#202020'
        })
        $('#li5').css({
            'background' : '#202020'
        })
        $('#li6').css({
            'background' : '#FFA500'
        })
        $('#li7').css({
            'background' : '#202020'
        })
        $('#li8').css({
            'background' : '#202020'
        })
        $('#li9').css({
            'background' : '#202020'
        })
    }else if(st >= offsetsmoti && st < offsetmokt){
        $('#li1').css({
            'background' : '#202020'
        })
        $('#li2').css({
            'background' : '#202020'
        })
        $('#li3').css({
            'background' : '#202020'
        })
        $('#li4').css({
            'background' : '#202020'
        })
        $('#li5').css({
            'background' : '#202020'
        })
        $('#li6').css({
            'background' : '#202020'
        })
        $('#li7').css({
            'background' : '#FFA500'
        })
        $('#li8').css({
            'background' : '#202020'
        })
        $('#li9').css({
            'background' : '#202020'
        })
    }else if(st >= offsetmokt && st < offsetvafel){
        $('#li1').css({
            'background' : '#202020'
        })
        $('#li2').css({
            'background' : '#202020'
        })
        $('#li3').css({
            'background' : '#202020'
        })
        $('#li4').css({
            'background' : '#202020'
        })
        $('#li5').css({
            'background' : '#202020'
        })
        $('#li6').css({
            'background' : '#202020'
        })
        $('#li7').css({
            'background' : '#202020'
        })
        $('#li8').css({
            'background' : '#FFA500'
        })
        $('#li9').css({
            'background' : '#202020'
        })
    }else if(st > offsetvafel){
        $('#li1').css({
            'background' : '#202020'
        })
        $('#li2').css({
            'background' : '#202020'
        })
        $('#li3').css({
            'background' : '#202020'
        })
        $('#li4').css({
            'background' : '#202020'
        })
        $('#li5').css({
            'background' : '#202020'
        })
        $('#li6').css({
            'background' : '#202020'
        })
        $('#li7').css({
            'background' : '#202020'
        })
        $('#li8').css({
            'background' : '#202020'
        })
        $('#li9').css({
            'background' : '#FFA500'
        })
    }
})
let offsetcoffeebar1 = $('#coffe-bar').offset().top
let offsetdami1 = $('#dami').offset().top
let offsetice1 = $('#ice-coffe').offset().top
let offsetchai1 = $('#chai-damnosh').offset().top
let offsetshake1 = $('#shake').offset().top
let offsetihot1 = $('#noshidani-garm').offset().top
let offsetsmoti1 = $('#smoti').offset().top
let offsetmokt1 = $('#moktil').offset().top
let offsetvafel1 = $('#vafel').offset().top


$('#li1').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetcoffeebar1
    },500,'linear')
})

$('#li2').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetdami1
    },500,'linear')
})
$('#li3').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetice1
    },500,'linear')
})
$('#li4').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetchai1
    },500,'linear')
})
$('#li5').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetshake1
    },500,'linear')
})
$('#li6').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetihot1
    },500,'linear')
})
$('#li7').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetsmoti1
    },500,'linear')
})
$('#li8').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetmokt1
    },500,'linear')
})
$('#li9').click(function(){
    $('html,body').animate({
        'scrollTop' : offsetvafel1
    },500,'linear')
})

