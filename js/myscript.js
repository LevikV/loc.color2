$(function(){

    function checkCart(){

        if (localStorage.getItem('cart')) {
            if (JSON.parse(localStorage.getItem('cart')).products.length) {
                var co = 0
                JSON.parse(localStorage.getItem('cart')).products.forEach( function(el, i) {
                    co += el.count
                });
                $('#cart-icon').show()
                $('#cart-icon .co').text(co)
            }else{
                $('#cart-icon').hide()
            }
        }
    }
    checkCart()

    function totalSum(cartData){
        var total = 0;
        cartData.products.forEach( function(el, i) {
            total += el.price * el.count;
        });
        return "Итого: "+total+" руб."
    }


    function renderCart(cartData){
        $("#cart").css('opacity' , "0")
        $(".total").css('opacity' , "0")
        $("a#order").css('opacity' , "0")
        $("a#cont").css('opacity' , "0")
        var html ="<div class='cart_header'><div class='t'>Товар</div><div class='p'>Цена</div><div class='c'>Количество</div></div>";
        cartData.products.forEach(function(el, i){
            html += "<div data-i='"+i+"' class='cart_item'><div class='t'><img src="+el.img+"><span>"+el.name+"</span></div><div class='p'>"+el.price * el.count +" руб.</div><div class='c'><span class='plus'>+</span><span class='count'>"+el.count+"</span><span class='minus'>−</span></div></div>"
        })
        $("#cart").html('').append(html)
        $('.total').text(totalSum(cartData))

        $(".plus").click(function(e) {
            e.preventDefault()
            var prodIndex = $(this).parents(".cart_item").data('i')
            cartData.products[prodIndex].count +=1
            console.log(cartData.products)
            localStorage.setItem('cart', JSON.stringify(cartData))
            $(this).parents(".cart_item").find('.p').text((cartData.products[prodIndex].count * cartData.products[prodIndex].price) + " руб.")
            $(this).parents(".cart_item").find('.count').text(cartData.products[prodIndex].count)
            $('.total').text(totalSum(cartData))
            checkCart()
        });
        $(".minus").click(function(e) {
            e.preventDefault()
            var prodIndex = $(this).parents(".cart_item").data('i')
            if (cartData.products[prodIndex].count === 1) {
                $(this).parents(".cart_item").detach()
                cartData.products.splice(prodIndex, 1);
                localStorage.setItem('cart', JSON.stringify(cartData))
                if (cartData.products.length) {
                    $('.total').text(totalSum(cartData))
                    console.log(cartData.products)
                    $(".cart_item").each(function(index, el) {
                        $(el).attr('data-i' , index)
                    });
                }else{
                    $('.popup').fadeOut(100);
                    $('#overlay').remove();
                }
            }else{
            cartData.products[prodIndex].count -=1
            console.log(cartData.products)
            localStorage.setItem('cart', JSON.stringify(cartData))
            $(this).parents(".cart_item").find('.p').text((cartData.products[prodIndex].count * cartData.products[prodIndex].price) + " руб.")
            $(this).parents(".cart_item").find('.count').text(cartData.products[prodIndex].count)
            $('.total').text(totalSum(cartData))
            }
            checkCart()
        });
        setTimeout(function(){
            $("#cart").css('opacity' , "1")
            $(".total").css('opacity' , "1")
            $("a#order").css('opacity' , "1")
            $("a#cont").css('opacity' , "1")
    },400)
    }


    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    $('.single-item').slick({
      dots: true,
      arrows: true,
    });
	
	
	
	
	
	
	$('.single-item-1').slick({
      dots: true,
      arrows: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  initialSlide: 1,
	  zIndex: 9999,
	  variableWidth: true 
	  //autoplay: true,
		


    });
	
	
	
    $('.tab-content').each(function(){
        var title = $(this).attr("title")
        $(this).find('a.tovbut').attr("title", title);
        $(this).find('.tovbutimg').attr("title", title);
    })
    $('a.tovbut').click(function(){

        var cartData = JSON.parse(localStorage.getItem('cart'))

        var tovElem = $(this).parents(".tovar-item")
        var name = $(this).attr("title") + " " + tovElem.children('.tov-articul').text()
        var price = parseInt(tovElem.children('.tov-price').html().split("</span>")[1].replace(" ", '').replace("р.", ''))
        var img = tovElem.children('img').attr('src')

        var newData = {
                    name: name,
                    price: price,
                    img: img,
                    count:1
                }

        if(cartData){
            var isFind = false;
            cartData.products.some( function(el, i) {
                if (name == el.name) {
                    el.count +=1
                    isFind = true
                    localStorage.setItem('cart', JSON.stringify(cartData))
                    return el
                }
            });
            if (!isFind) {

                cartData.products.push(newData)
                localStorage.setItem('cart', JSON.stringify(cartData))
            }

        }else{
            localStorage.setItem('cart', JSON.stringify({
                products:[newData]
            }))
            cartData = {products:[newData]}
        }

        renderCart(cartData)
        $(".popup").animate({
            width: "toggle"
        });
        checkCart()
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css('opacity','0.8');
        $('a.close , #overlay').click(function () {
            $('.popup').fadeOut(100);
            $('#overlay').remove();
            return false;
        });
        $('.popup').click(function(e){
            e.stopPropagation();    
        });
        return false;
    })
    $("#cart-icon").click(function(event) {
        renderCart(JSON.parse(localStorage.getItem('cart')))
        $(".popup").animate({
            width: "toggle"
        });
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css('opacity','0.8');
        $('.popup a.close , #overlay').click(function () {
            $('.popup').fadeOut(100);
            $('#overlay').remove();
            return false;
        });

        $('.popup').click(function(e){
            e.stopPropagation();    
        });
        return false;
    });



    $('a#order').click(function(event) {
        event.preventDefault()
        $('#cart-icon').hide()
        var order = JSON.parse(localStorage.getItem('cart'))
        var orderStr = "";
        var orderSum = 0;
        order.products.forEach( function(el, i) {
            orderSum += el.price * el.count
            orderStr += "Товар: " + el.name + "\nКоличество: " + el.count + "\n\n"
        });
        orderStr += "\nОбщая сумма: " + orderSum
        $('input[name="comment"]').val(orderStr)
        

        $('.popup').fadeOut(100);
        $('.popup2').show()

        $('.popup2 a.close').click(function () {
            $('.popup2').fadeOut(100);
            $('#overlay').remove();
            checkCart()
            return false;
        });


        $('#overlay').click(function(event) {
            event.preventDefault()
            $('.popup').fadeOut(100);
            $('.popup2').fadeOut(100)
            $('#overlay').remove();
            checkCart()
        });

    });

    $('a#cont').click(function(event) {
            event.preventDefault()
            $('.popup').fadeOut(100);
            $('#overlay').remove();
    });


});