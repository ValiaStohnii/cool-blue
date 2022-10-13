/**
 * @author      Valia <valiastohnii@gmail.com>
 * @copyright   Copyright (c) 2022 GmbH 
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*/

define(['jquery'],function($){
    'use strict';
    return function(){    
        console.log(8888)
        $('.incQty, .decQty').on("click",function(){
            let $this = $(this);
            let ctrl = ($(this).attr('id').replace('-upt','')).replace('-dec','');          
            let currentQty = $("#cart-"+ctrl+"-qty").val();
            if($this.hasClass('incQty')){
                let newAdd = parseInt(currentQty)+parseInt(1);
                $("#cart-"+ctrl+"-qty").val(newAdd);
                $("[name='update_cart_action']").trigger("click"); 
            }else{
                if(currentQty>1){
                    let newAdd = parseInt(currentQty)-parseInt(1);
                    $("#cart-"+ctrl+"-qty").val(newAdd); 
                    $("[name='update_cart_action']").trigger("click"); 
                }
            }
        })
    }
});