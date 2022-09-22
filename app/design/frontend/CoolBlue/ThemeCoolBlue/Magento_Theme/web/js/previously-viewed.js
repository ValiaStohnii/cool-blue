/**
 * @author      Valia <valiastohnii@gmail.com>
 * @copyright   Copyright (c) 2022 GmbH 
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*/

define(['jquery'],function($){
    'use strict';
    return function(){    
        console.log(123)
        $('.previously_viewed_block').addClass('is-hidden');

        if($('.previously_viewed_product').contains($('.product-items'))){
            $('.previously_view_block').addClass('is-hidden');
        }else{
            $('.previously_viewed_block').addClass('is-hidden');
            $('.previously_viewed_product').addClass('is-hidden');
        }
    }
});