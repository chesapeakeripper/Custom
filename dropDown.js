$('.dropDown').on('click',function(){
    if($('.dropDownList').is(":visible")){
        $('.dropDownList').hide();
    }
    else{
        $('.dropDownList').show();
    }
});

$('.dropDownList div').on('click',function(){
    $('.dropDownList').hide();
})

$('.dropDownList div').on('click',function(event){
    $('.dropDown .selected').html(event.target.innerHTML);
});