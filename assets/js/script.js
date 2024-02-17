$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    }



})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});




$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

function sendEmail(){
    Email.send({
        SecureToken  : "8aac61ce-ccaf-4d74-90f2-778fc4318e53",
        From : "Digitechseva24@gmail.com",
        To : 'digitallakhara@gmail.com',
        Subject : document.getElementById("formuserName").value + " would like to reach you!!",
        Body : "Name: "+ document.getElementById("formuserName").value
                + "<br> Email: "+ document.getElementById("formuserEmail").value
                + "<br> Phone Number: "+ document.getElementById("formuserPhone").value
                + "<br> State: "+ document.getElementById("formuserState").value
                + "<br> District: "+ document.getElementById("formuserDist").value
                + "<br> Pin Code: "+ document.getElementById("formuserPinCode").value
                + "<br> Message: "+ document.getElementById("formuserMessage").value
    }).then(
      message => messageSentAlert()
    ); 
}

function messageSentAlert(){
    Swal.fire({
        position: "middle",
        icon: "success",
        title: "Message sent Successfully!!",
        showConfirmButton: false,
        timer: 3000
      });
}