$(document).ready(function (){
    
    $("#clciktest").on("click",function () {
        //alert('jjjje');
        var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        $.ajax({
            url:'appAPI/main/postTest',
            method:'POST',
            // credentials: 'same-origin',
            headers: {
               // 'CSRF-Token': token // <-- is the csrf token as a header
              },
              data:{
                  '_csrf':token
              },
            success:function(res){
                alert('success111');
            },
            error:function(){
                alert('error');
            }
        })

        // $.ajax({
        //     url:'appAPI/main/getTest1',
        //     method:'GET',
        //     success:function(res){
        //         alert('success111');
        //     },
        //     error:function(){
        //         alert('error');
        //     }
        // })
    });

    
})