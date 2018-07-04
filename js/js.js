

$(document).ready(function(){
    var x = "";
    var xx = "";
    
    var i = 0;
    var ii = 0;
    
    $("#remplir").click(function(){        
        $(".rond, .carre, .losange").removeClass("fond");
        $(".rond, .carre, .losange").addClass("fond");         
    });
    
    $("#vider").click(function(){        
        $(".rond, .carre, .losange").removeClass("fond");      
    });
    
    $(".rond").click(function(){        
        $(this).toggleClass("fond");     
    }); 
    
    $(".carre").click(function(){        
        for (i = 0; i< 6; i++) {
            x="l" + i;        
            if ($(this).hasClass(x)){
                 $("." + x).toggleClass("fond");
            }
        }          
        
        if ($(this).hasClass("fond")){
            for (i = 0; i< 6; i++) {
                x="c" + i;            
                if ($(this).hasClass(x)){
                    $("." + x).removeClass("fond");
                    $("." + x).addClass("fond");                 
                } 
            }
        }
            
        if (!$(this).hasClass("fond")){
            for (i = 0; i< 6; i++) {
                x="c" + i;
                if ($(this).hasClass(x)){
                    $("." + x).removeClass("fond");               
                }  
            }
        }            
             
        for (i = 0; i< 6; i++) {       
            if ($('.carre.c' + i).hasClass("fond")&& i!= 3){
                $(".rond.c" + i).removeClass("fond");               
                $(".rond.c" + i).addClass("fond"); 
                
            }
        }
        for (i = 0; i< 6; i++) {       
            if (!$('.carre.c' + i).hasClass("fond")&& i!= 3){
                $(".rond.c" + i).removeClass("fond");                             
            }
        } 
        
    }); 
    
    $(".losange").click(function(){
        
        $(".l3, .c3").toggleClass("fond");        
        //$(".losange").toggleClass("fond");
        //$(".c3").toggleClass("fond");
        //$(".losange").toggleClass("fond"); 

        for (i = 0; i< 6; i++) {    
            
            if ($('.carre.c' + i).hasClass("fond") && i!= 3){
                $(".rond.c" + i).removeClass("fond");               
                $(".rond.c" + i).addClass("fond");                
            }
        }
        for (i = 0; i< 6; i++) {       
            if (!$('.carre.c' + i).hasClass("fond") && i != 3){
                $(".rond.c" + i).removeClass("fond");               
            }
        }        
    });    

    
});