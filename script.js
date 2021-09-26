$(document).ready(function(){
    $(".mail").validate({
        rules:{
            name:{
                required:true,
                email:true
            
            }
        }
    })
})