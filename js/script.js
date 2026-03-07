// Scroll-to-top button: runs first so it's never blocked; visible after scrolling down on every page
(function initScrollToTop() {
	var threshold = 80;
	function setup(btn) {
		if (!btn || btn._scrollToTopSetup) return;
		btn._scrollToTopSetup = true;
		function updateVisible() {
			var y = window.pageYOffset !== undefined ? window.pageYOffset : window.scrollY;
			if (y > threshold) {
				btn.classList.add('is-visible');
			} else {
				btn.classList.remove('is-visible');
			}
		}
		window.addEventListener('scroll', updateVisible, { passive: true });
		window.addEventListener('resize', updateVisible, { passive: true });
		updateVisible();
		btn.addEventListener('click', function () {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
	function run(retries) {
		retries = retries || 0;
		var btn = document.getElementById('scrollToTopBtn');
		if (btn) {
			setup(btn);
		} else if (retries < 40) {
			setTimeout(function () { run(retries + 1); }, 50);
		}
	}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', run);
	} else {
		run();
	}
})();

var menu = document.querySelector('.menu');
var menuSection = menu && menu.querySelector('.menu-section');
var menuArrow = menu && menu.querySelector('.menu-mobile-arrow');
var menuClose = menu && menu.querySelector('.menu-mobile-close');
var menuToggle = document.querySelector('.menu-mobile-toggle');
var menuOverlay = document.querySelector('.overlay');
var subMenu;

if (menu && menuSection && menuArrow && menuToggle && menuOverlay) {
	menuSection.addEventListener('click', (e) => {
		if (!menu.classList.contains('active')) {
			return;
		}
		if (e.target.closest('.menu-item-has-children')) {
			e.preventDefault();
			var hasChildren = e.target.closest('.menu-item-has-children');
			showSubMenu(hasChildren);
		}
	});

	menuArrow.addEventListener('click', () => {
		hideSubMenu();
	});

	menuToggle.addEventListener('click', () => {
		toggleMenu();
	});

	menuOverlay.addEventListener('click', () => {
		toggleMenu();
	});

	if (menuClose) {
		menuClose.addEventListener('click', () => {
			toggleMenu();
		});
	}

	function toggleMenu() {
		menu.classList.toggle('active');
		menuOverlay.classList.toggle('active');
		if (menuToggle && menuToggle.classList.contains('menu__icon')) {
			menuToggle.classList.toggle('icon-open', menu.classList.contains('active'));
		}
		if (!menu.classList.contains('active')) {
			menu.querySelectorAll('.menu-subs.active').forEach(el => el.classList.remove('active'));
			menu.querySelectorAll('.menu-item-has-children.submenu-open').forEach(el => el.classList.remove('submenu-open'));
		}
	}

	function showSubMenu(hasChildren) {
		subMenu = hasChildren.querySelector('.menu-subs');
		if (subMenu.classList.contains('active')) {
			subMenu.classList.remove('active');
			hasChildren.classList.remove('submenu-open');
		} else {
			subMenu.classList.add('active');
			hasChildren.classList.add('submenu-open');
		}
	}

	function hideSubMenu() {
		if (subMenu) {
			subMenu.classList.remove('active');
			var parent = subMenu.closest('.menu-item-has-children');
			if (parent) parent.classList.remove('submenu-open');
		}
		var titleEl = menu.querySelector('.menu-mobile-title');
		var headerEl = menu.querySelector('.menu-mobile-header');
		if (titleEl) titleEl.innerHTML = '';
		if (headerEl) headerEl.classList.remove('active');
	}

	window.onresize = function () {
		if (this.innerWidth > 991) {
			if (menu.classList.contains('active')) {
				toggleMenu();
			}
		}
	};
}


jQuery(document).ready(function(){
	jQuery("#images_change1").mouseenter(function(){
		jQuery("#images_change1").attr('src', './images/lenovo-na-laptop-original-imafuzt8r5jqppfn.webp');
	});
	jQuery("#images_change1").mouseleave(function(){
		jQuery("#images_change1").attr('src', './images/70211-apple-mockup-pro-drive-air-laptops-disc.png');
	});

	jQuery("#images_change2").mouseenter(function(){
		jQuery("#images_change2").attr('src', './images/47f8eaed8dbbb0a289ca901e5b6e52dd.png');
	});
	jQuery("#images_change2").mouseleave(function(){
		jQuery("#images_change2").attr('src', './images/Sony_DualSense.png');
	});

	jQuery("#images_change3").mouseenter(function(){
		jQuery("#images_change3").attr('src', './images/264261_zzl2aq.png');
	});
	jQuery("#images_change3").mouseleave(function(){
		jQuery("#images_change3").attr('src', './images/ipad-mini-select-wifi-purple-202109_FMT_WHH.png');
	});

	jQuery("#images_change4").mouseenter(function(){
		jQuery("#images_change4").attr('src', './images/apple-airpods-ai-generative-free-png.webp');
	});
	jQuery("#images_change4").mouseleave(function(){
		jQuery("#images_change4").attr('src', './images/MME73.png');
	});

	jQuery("#images_change5").mouseenter(function(){
		jQuery("#images_change5").attr('src', './images/main-qimg-dc7945b5fa006e7b882c7c7c72c3e455.png');
	});
	jQuery("#images_change5").mouseleave(function(){
		jQuery("#images_change5").attr('src', './images/Irusu_Monster_VR_Box_Headset_3.png');
	});

	jQuery(".list-item.text-center.one").mouseenter(function(){
		jQuery(".list-item.text-center.one > a > img ").attr('src', './images/pay_vr_3.png');
	});
	jQuery(".list-item.text-center.one").mouseleave(function(){
		jQuery(".list-item.text-center.one > a > img ").attr('src', './images/61-tgcn-R3L._SX425_.png');
	});

	jQuery(".list-item.text-center.two").mouseenter(function(){
		jQuery(".list-item.text-center.two > a > img ").attr('src', './images/New Project_3.png');
	});
	jQuery(".list-item.text-center.two").mouseleave(function(){
		jQuery(".list-item.text-center.two > a > img ").attr('src', './images/71Nf9OECD+L._AC_SL1500_.png');
	});

	jQuery(".list-item.text-center.three").mouseenter(function(){
		jQuery(".list-item.text-center.three > a > img ").attr('src', './images/ipad_6.png');
	});
	jQuery(".list-item.text-center.three").mouseleave(function(){
		jQuery(".list-item.text-center.three > a > img ").attr('src', './images/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.png');
	});

	jQuery(".list-item.text-center.four").mouseenter(function(){
		jQuery(".list-item.text-center.four > a > img ").attr('src', './images/iphone_4.png');
	});
	jQuery(".list-item.text-center.four").mouseleave(function(){
		jQuery(".list-item.text-center.four > a > img ").attr('src', './images/apple-iphone-11-pro-max_156819558940.png');
	});
});


$(document).ready(function(){
	$('.most_popular_img.one > img').mouseenter(function(){
		$('.most_popular_img.one > img').attr('src', 'images/gamepad_3.png');
	});
	$('.most_popular_img.one > img').mouseleave(function(){
		$('.most_popular_img.one > img').attr('src', 'images/71Nf9OECD+L._AC_SL1500_.png');
	});

	$('.most_popular_img.two > img').mouseenter(function(){
		$('.most_popular_img.two > img').attr('src', 'images/ipad_5.png');
	});
	$('.most_popular_img.two > img').mouseleave(function(){
		$('.most_popular_img.two > img').attr('src', 'images/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.png');
	});

	$('.most_popular_img.three > img').mouseenter(function(){
		$('.most_popular_img.three > img').attr('src', 'images/iphone_3.png');
	});
	$('.most_popular_img.three > img').mouseleave(function(){
		$('.most_popular_img.three > img').attr('src', 'images/apple-iphone-11-pro-max_156819558940.png');
	});

	$('.most_popular_img.four > img').mouseenter(function(){
		$('.most_popular_img.four > img').attr('src', 'images/play_vr_4.png');
	});
	$('.most_popular_img.four > img').mouseleave(function(){
		$('.most_popular_img.four > img').attr('src', 'images/61-tgcn-R3L._SX425_.png');
	});
});
/*inner product-page start*/
$(document).ready(function(){
	$('.product_list_image.first > a > img').mouseenter(function(){
		$('.product_list_image.first > a > img').attr('src', 'images/lightheadphone.jpg');
	});
	$('.product_list_image.first > a> img').mouseleave(function(){
		$('.product_list_image.first > a>  img').attr('src', 'images/blackcamera.jpg');
	});
	
	$('.product_list_image.second > a > img').mouseenter(function(){
		$('.product_list_image.second > a > img').attr('src', 'images/black-camera1.jpg');
	});
	$('.product_list_image.second > a> img').mouseleave(function(){
		$('.product_list_image.second > a>  img').attr('src', 'images/iphonelist.jpg');
	});
	
	$('.product_list_image.third > a > img').mouseenter(function(){
		$('.product_list_image.third > a > img').attr('src', 'images/list-mobiless.jpg');
	});
	$('.product_list_image.third > a> img').mouseleave(function(){
		$('.product_list_image.third > a>  img').attr('src', 'images/bluegamepad.jpg');
	});
	
	$('.product_list_image.fourth > a > img').mouseenter(function(){
		$('.product_list_image.fourth > a > img').attr('src', 'images/bluegamepad.jpg');
	});
	$('.product_list_image.fourth > a> img').mouseleave(function(){
		$('.product_list_image.fourth > a>  img').attr('src', 'images/lightheadphone.jpg');
	});
	
	$('.product_list_image.fifth > a > img').mouseenter(function(){
		$('.product_list_image.fifth > a > img').attr('src', 'images/blackcamera.jpg');
	});
	$('.product_list_image.fifth > a> img').mouseleave(function(){
		$('.product_list_image.fifth> a>  img').attr('src', 'images/black-camera1.jpg');
	});
	
	$('.product_list_image.sixth > a > img').mouseenter(function(){
		$('.product_list_image.sixth> a > img').attr('src', 'images/blackcamera.jpg');
	});
	$('.product_list_image.sixth > a> img').mouseleave(function(){
		$('.product_list_image.sixth > a>  img').attr('src', 'images/vrsleep.jpg');
	});
	
	$('.product_list_image.seventh> a > img').mouseenter(function(){
		$('.product_list_image.seventh > a > img').attr('src', 'images/lightheadphone.jpg');
	});
	$('.product_list_image.seventh > a> img').mouseleave(function(){
		$('.product_list_image.seventh > a>  img').attr('src', 'images/listhead1.jpg');
	});
	
	$('.product_list_image.eighth > a > img').mouseenter(function(){
		$('.product_list_image.eighth > a > img').attr('src', 'images/iphonelist.jpg');
	});
	$('.product_list_image.eighth > a> img').mouseleave(function(){
		$('.product_list_image.eighth> a>  img').attr('src', 'images/ipad-game.jpg');
	});
	
	$('.product_list_image.ninth > a > img').mouseenter(function(){
		$('.product_list_image.ninth> a > img').attr('src', 'images/vrsleep.jpg');
	});
	$('.product_list_image.ninth > a> img').mouseleave(function(){
		$('.product_list_image.ninth > a>  img').attr('src', 'images/listlaptop.jpg');
	});
	});
/*inner product-page end*/

function showDetails(animal) {
	document.getElementById('poupo').innerHTML = animal.innerHTML;
	modal.style.display = "block";
	$("#poupo .most_popular_heading").append("<div class='counter'><span class='down' onClick='decreaseCount(event, this)'>-</span><input type='text' value='1'><span class='up' onClick='increaseCount(event, this)'>+</span></div>");

	// var theDiv = document.querySelector("#poupo .most_popular_heading");
	// var div = document.createElement("div");
	// theDiv.append(div);
	// var element = document.querySelector("#poupo .most_popular_heading div");
	// element.classList.add("counter");
	// var theDiv = document.querySelector("#poupo .most_popular_heading > .counter");
	// var span = document.createElement("span");
	// theDiv.append(span);


    // var theDiv = document.querySelector("#poupo .most_popular_heading");
	// var div = document.createElement("div");
	// theDiv.append(div);
	// var element = document.querySelector("#poupo .most_popular_heading div");
   	// element.classList.add("mystyle");
	// var theDiv = document.querySelector("#poupo .most_popular_heading > div");
	// var a = document.createElement("a");
	// theDiv.append(a);
	// document.querySelector(".mystyle > a").innerHTML = "Add To Cart";

	
}



function increaseCount(a, b) {
	var input = b.previousElementSibling;
	var value = parseInt(input.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	input.value = value;
}
  
function decreaseCount(a, b) {
	var input = b.nextElementSibling;
	var value = parseInt(input.value, 10);
	if (value > 1) {
	  value = isNaN(value) ? 0 : value;
	  value--;
	  input.value = value;
	}
}


    window.onload = function(){
        var preloader = document.querySelector(".preloader");
        if (preloader) preloader.style.display = "none";
    }
