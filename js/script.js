// JavaScript Document

/*----------------------------
//ハンバーガーメニュー
---------------------------*/

$(".btn-trigger").on("touchstart",function(){
	$(this).toggleClass("active");
	$(".header-nav").fadeToggle(500);
});




/*----------------------------
//ページトップボタン
---------------------------*/

$(".btn-pageTop").on("click",function(){
	$("html,body").animate({scrollTop:0},1500);
});


/*----------------------------
//画像が浮かんでくる
---------------------------*/
//$(".prof-pic").css({
//	left:"-100px",
//	opacity:"0.0"
//}).animate({
//	left:"100px",
//	opacity:"1.0"
//},5000);


/*----------------------------
//画像がフェードインする
---------------------------*/

//$(".prof-pic").hide.fadeIn(8000);







