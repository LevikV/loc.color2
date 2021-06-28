<?php
 /* Здесь проверяется существование переменных */
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 if (isset($_POST['name'])) {$name = $_POST['name'];}
 if (isset($_POST['comment'])) {$comment = $_POST['comment'];}

 
/* Сюда впишите свою эл. почту */
 $address = "raptorstas@mail.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "\nТелефон: $phone\nИмя: $name\nКомментарий: $comment";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заявка с сайта Корпорация сновидений'; //сабж
$email='morelles.ru'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');

// Интеграция с RetailCRM
$data=array(
  'name'=>isset($_POST['name']) ? $_POST['name'] : '',
  'utm_source'=>isset($_POST['utm_source']) ? $_POST['utm_source'] : '',
  'utm_campaign'=>isset($_POST['utm_campaign']) ? $_POST['utm_campaign'] : '',
  'utm_medium'=>isset($_POST['utm_medium']) ? $_POST['utm_medium'] : '',
  'utm_keyword'=>isset($_POST['utm_keyword']) ? $_POST['utm_keyword'] : '',
  'phone'=>isset($_POST['phone']) ? $_POST['phone'] : '' 
);

extract($data);


$comm = $_POST['comment'];




if(!$phone) exit;
$order = json_encode(
array(
	"phone" => $phone,
	"firstName" => $name,
	"source" => array(
		"source" => $utm_source,
		"medium" => $utm_medium,
		"campaign" => $utm_campaign,
		"keyword" => $utm_keyword,
		"content" => "",
	),
	"customerComment" => $comm
));

$peremen = array(
	"site" => "zn-morelles-ru",
	"order" => $order,
);

$handle=curl_init();
curl_setopt($handle, CURLOPT_URL, "https://stanislav.retailcrm.ru/api/v4/orders/create?apiKey=0wke2kDe038UZU4ZVSJHpfZhcMZLU2LA");
curl_setopt($handle, CURLOPT_HTTPHEADER, array("Content-type: application/x-www-form-urlencoded"));
curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
curl_setopt($handle, CURLOPT_POST, true);
curl_setopt($handle, CURLOPT_POSTFIELDS, http_build_query($peremen));
curl_setopt($handle, CURLOPT_HEADER, false);
$response=curl_exec($handle);
$code=curl_getinfo($handle, CURLINFO_HTTP_CODE);
curl_close($handle);
//var_dump($response);
// все сделано
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="upsells/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="upsells/favicon.ico" type="image/x-icon">
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,300italic,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lobster" />
    <link media="all" href="upsells/css/main.css" rel="stylesheet" type="text/css"/>
    <link media="all" href="upsells/css/hint.css" rel="stylesheet" type="text/css"/>
	<link media="all" href="upsells/css/newland_rules_rewrite.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="upsells/js/jquery.placeholder.js"></script>
    <script type="text/javascript" src="upsells/js/init.js"></script>
	<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<!-- Latest compiled and minified JavaScript -->
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <title>Спасибо, ваша заявка отправлена</title>
	<style>
	.conf-overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 9999;
		background: #000;
		cursor: pointer;
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
		filter: alpha(opacity=90);
		-khtml-opacity: 0.9;
		opacity: 0.9;
	}
	.conf-info {
    position: relative;
    cursor: default;
    max-width: 800px;
    padding: 30px 30px;
    color: #000;
    z-index: 9999;
    text-align: left;
    background: #fff;
    position: fixed;
    top: 8%;
    left: 50%;
    margin: 0 0 0 -420px;
}



/* Errors */
.formError, label.error {
	font-size: 10px;
	color: red;
	margin-bottom: 10px;
	width: 250px;
	display: block;
}
.fieldWithErrors {
	display: inline;
}

#errorExplanation {
	width: 400px;
	border: 2px solid #CF0000;
	padding: 5px;
	margin: 5px;
	background-color: #f0f0f0;
	background-color: #FCC;
	border: solid 1px #C66;
}

#errorExplanation h2 {
	text-align: left;
	font-weight: bold;
	padding: 5px 5px 5px 15px;
	font-size: 12px;
	margin: 0px;
	background-color: #c00;
	color: #fff;
	display: none;
}

#errorExplanation p {
	color: #333;
	margin: 5px 5px 5px 5px;
	padding: 0;
	font-weight: 900;
}

#errorExplanation ul {
	margin: 10px 0 0 0;
	padding: 0;
	padding-left: 30px;
}

#errorExplanation ul li {
	font-size: 12px;
	list-style: disc;
}

.fieldWithErrors input, input.error {
	border: 2px solid #C24949;
	background: #FFBCBC;
	-webkit-box-shadow: inset 0px 0px 16px rgba(255, 99, 70, 1);
	-moz-box-shadow: inset 0px 0px 16px rgba(255, 99, 70, 1);
	box-shadow: inset 0px 0px 16px rgba(255, 99, 70, 1);
}

/* Notice and Error */
#flash_notice, #flash_error {
	padding: 5px 8px;
	margin: 10px 0;
	width: 70%;
	color: black;
}

#flash_notice {
	background-color: #CFC;
	border: solid 1px #6C6;
}

#flash_error {
	background-color: #FCC;
	border: solid 1px #C66;
}
#flash_error ul {
	padding-left: 30px;
}

/* Confident window */
.confident-link{cursor:pointer;font-size:12px;line-height:12px;text-decoration:underline;margin:10px 0 0;}
.confident-link:hover{text-decoration:none;}
.em-policy{cursor:pointer;font-size:12px;line-height:12px;text-decoration:underline;margin:10px 0 0;}
.em-policy:hover{text-decoration:none;}
.hidden-conf{display:none;}
.conf-overlay{position: fixed;width:100%;height:100%;top:0;left:0;z-index:9999;background:#000;cursor:pointer;-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";filter: alpha(opacity=90);-khtml-opacity: 0.9;opacity: 0.9;}
.conf-info{position: relative;cursor: default;max-width: 800px;padding: 30px 30px;color: #000;z-index: 9999;text-align: left;background: #fff; position: fixed;top: 8%;left: 50%;margin: 0 0 0 -420px;}
.conf-info .conf-head{font:30px/30px 'arial', sans-serif;margin:0 0 16px;}
.conf-info h5{font:bold 18px/18px 'arial', sans-serif;margin:16px 0 6px;}
.conf-info p{font:13px/15px 'arial', sans-serif;margin:0 0 8px;}
.closeconf-but{position:absolute;top:20px;right:20px;height:29px;width:29px;cursor:pointer;background:url(http:img/close-conf.png) no-repeat;}

body.loading{height:100%;overflow:hidden;}
#loading {display:none;width: 100%;height: 100%;top: 0px;left: 0px;position: fixed;background-color: #fff;z-index: 9999;text-align: center;}
.loading #loading{display:block;}
.loading-image { position: absolute;top: 20%;left:50%;margin:0 0 0 -32px;z-index: 99999;}
.suggestions-wrapper{display:none !important;}
	
@media only screen and (max-width: 1002px){
	.conf-info{
	    padding:20px;
		max-width: 600px;
		margin: 0 0 0 -300px;
		height: 800px;
	}
	.conf-info h5{font:bold 16px/16px 'arial', sans-serif;margin:16px 0 6px;}
	#rh-snippet, #rc-connect{display: none !important;}
}
@media only screen and (max-width: 768px){
	.conf-info{
		max-width: 500px;
		margin: 0 0 0 -250px;
		height: 800px;
	}
}
@media only screen and (max-width: 640px){
	.conf-info{
		max-width: 400px;
		margin: 0 0 0 -200px;
		height: 800px;
	}
}
@media only screen and (max-width: 480px){
	.conf-info{
		max-width: 280px;
		margin: 0 0 0 -140px;
		height: 500px;
	}
}

	</style>
	
	

<link rel="stylesheet" type="text/css" href="fonts/roboto.css">
        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/plugins.js" type="text/javascript"></script>
        
        <script src="js/detect.js" type="text/javascript"></script>
     <!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2882337458746900');
  fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=2882337458746900&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<meta name="facebook-domain-verification" content="zt68s93y0fmey7reb0gy00ziigsf3b" />
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-198455217-1">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-198455217-1');
</script>

</head>

<body class="man" style="background-color: #f1f4f6">

<div class="section block-1" >
    <div class="wrap">
        <img src="upsells/img/girl_wh.png" alt="">

        <div class="top-title">
            <h2>Спасибо, Ваш заказ принят!</h2>

            <div>Наш оператор свяжется с вами в ближайшее время</div>
            <p>Юлия Петрова, менеджер отдела продаж</p>
        </div>
    </div>
</div>
<!-- ЕСЛИ ЭТО ТОВАРЫ НА ОФФЕРАХ КРАСОТА И ЗДОРОВЬЕ //-->


</div>

</body>
</html>