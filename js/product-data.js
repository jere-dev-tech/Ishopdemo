/**
 * Product template system - data and URL parameter handling.
 * Add new products by adding a new key to the products object below and uploading images to the images folder.
 * Link to a product with: product.html?product=productKey (e.g. product.html?product=ps5)
 */

// WhatsApp number for "Consultar por WhatsApp" (with country code, no + or spaces)
var PRODUCT_WHATSAPP_NUMBER = '543834361333';

/**
 * Products catalog. Each key is the URL parameter value (?product=key).
 * To add a product: copy an existing block, change the key and all fields.
 * images: array of 4 image paths (relative to site root, e.g. "images/ps5.png").
 */
var products = {
	ps5: {
		name: 'PlayStation 5',
		price: '$1.200.000',
		oldPrice: '$1.350.000',
		brand: 'Sony',
		type: 'Consola',
		availability: 'En stock',
		images: [
			'images/ps5.png',
			'images/264261_zzl2aq.png',
			'images/gamew_4.jpg',
			'images/pulseeliteps5.png'
		],
		description: 'Consola Sony PlayStation 5 original con garantía. Incluye mando DualSense, 4K, SSD ultrarrápido y compatibilidad con PlayStation VR2.',
		whatsappMessage: 'Hola! Quiero consultar por la PlayStation 5.'
	},
	'jbl-speaker': {
		name: 'JBL Xtreme 4',
		price: '$450.000',
		oldPrice: '$520.000',
		brand: 'JBL',
		type: 'Parlante',
		availability: 'En stock',
		images: [
			'images/Jblextreme4.png',
			'images/JBLClip5.png',
			'images/jblbanner.png',
			'images/Jblextreme4.png'
		],
		description: 'Parlante portátil JBL Xtreme 4. Sonido potente, resistencia al agua, batería de larga duración. Ideal para uso al aire libre.',
		whatsappMessage: 'Hola! Quiero consultar por el parlante JBL Xtreme 4.'
	},
	iphone15: {
		name: 'iPhone 15',
		price: '$950.000',
		oldPrice: '$1.050.000',
		brand: 'Apple',
		type: 'Celular',
		availability: 'En stock',
		images: [
			'images/iphone_15.jpg',
			'images/iphone12promax.png',
			'images/iPhone13PROMax.png',
			'images/SinfondoIPone.png'
		],
		description: 'iPhone 15 con chip A16 Bionic, cámara de 48 MP y Dynamic Island. Pantalla Super Retina XDR. Producto original con garantía.',
		whatsappMessage: 'Hola! Quiero consultar por el iPhone 15.'
	},
	iphone13: {
		name: 'iPhone 13 Pro Max',
		price: '$850.000',
		oldPrice: '$920.000',
		brand: 'Apple',
		type: 'Celular',
		availability: 'En stock',
		images: [
			'images/iPhone13PROMax.png',
			'images/iphone12promax.png',
			'images/iphone_15.jpg',
			'images/SinfondoIPone.png'
		],
		description: 'iPhone 13 Pro Max. Pantalla ProMotion, cámara Pro con modo macro y Cinematic Mode. Garantía oficial.',
		whatsappMessage: 'Hola! Quiero consultar por el iPhone 13 Pro Max.'
	},
	ipad-mini: {
		name: 'iPad Mini',
		price: '$580.000',
		oldPrice: '$620.000',
		brand: 'Apple',
		type: 'Tablet',
		availability: 'En stock',
		images: [
			'images/ipad-mini-select-wifi-purple-202109_FMT_WHH.png',
			'images/70211-apple-mockup-pro-drive-air-laptops-disc.png',
			'images/ipad-mini-select-wifi-purple-202109_FMT_WHH.png',
			'images/ipad-mini-select-wifi-purple-202109_FMT_WHH.png'
		],
		description: 'iPad Mini con chip A15 Bionic. Compacto y potente, ideal para lectura y entretenimiento. Wi‑Fi o Cellular.',
		whatsappMessage: 'Hola! Quiero consultar por el iPad Mini.'
	},
	airpods: {
		name: 'AirPods',
		price: '$180.000',
		oldPrice: '$210.000',
		brand: 'Apple',
		type: 'Auriculares',
		availability: 'En stock',
		images: [
			'images/apple-airpods-ai-generative-free-png.webp',
			'images/MME73.png',
			'images/apple-airpods-ai-generative-free-png.webp',
			'images/MME73.png'
		],
		description: 'AirPods con chip H1. Sonido de calidad, cancelación de ruido y hasta 30 horas de batería con el estuche.',
		whatsappMessage: 'Hola! Quiero consultar por los AirPods.'
	},
	'jbl-clip': {
		name: 'JBL Clip 5',
		price: '$95.000',
		oldPrice: '$110.000',
		brand: 'JBL',
		type: 'Parlante',
		availability: 'En stock',
		images: [
			'images/JBLClip5.png',
			'images/Jblextreme4.png',
			'images/JBLClip5.png',
			'images/jblbanner.png'
		],
		description: 'Parlante portátil JBL Clip 5. Clip integrado, resistencia al agua, sonido JBL. Ideal para llevar a cualquier lado.',
		whatsappMessage: 'Hola! Quiero consultar por el JBL Clip 5.'
	},
	smartwatch: {
		name: 'Smartwatch Samsung',
		price: '$320.000',
		oldPrice: '$380.000',
		brand: 'Samsung',
		type: 'Smartwatch',
		availability: 'En stock',
		images: [
			'images/watches.png',
			'images/Irusu_Monster_VR_Box_Headset_3.png',
			'images/banner_watch.png',
			'images/watches.png'
		],
		description: 'Smartwatch Samsung con GPS, monitoreo de sueño y actividad. Resistente al agua. Batería de larga duración.',
		whatsappMessage: 'Hola! Quiero consultar por el Smartwatch Samsung.'
	},
	gopro: {
		name: 'GoPro HERO',
		price: '$420.000',
		oldPrice: '$480.000',
		brand: 'GoPro',
		type: 'Cámara',
		availability: 'En stock',
		images: [
			'images/main-qimg-dc7945b5fa006e7b882c7c7c72c3e455.png',
			'images/main-qimg-dc7945b5fa006e7b882c7c7c72c3e455.png',
			'images/main-qimg-dc7945b5fa006e7b882c7c7c72c3e455.png',
			'images/main-qimg-dc7945b5fa006e7b882c7c7c72c3e455.png'
		],
		description: 'Cámara deportiva GoPro HERO. 4K, estabilización, resistente al agua. Incluye accesorios.',
		whatsappMessage: 'Hola! Quiero consultar por la GoPro HERO.'
	},
	'nintendo-switch': {
		name: 'Nintendo Switch',
		price: '$380.000',
		oldPrice: '$420.000',
		brand: 'Nintendo',
		type: 'Consola',
		availability: 'En stock',
		images: [
			'images/ipad-mini-select-wifi-purple-202109_FMT_WHH.png',
			'images/264261_zzl2aq.png',
			'images/gamew_4.jpg',
			'images/ipad-mini-select-wifi-purple-202109_FMT_WHH.png'
		],
		description: 'Nintendo Switch. Modo portátil, sobremesa y tabletop. Incluye base y controles Joy‑Con.',
		whatsappMessage: 'Hola! Quiero consultar por la Nintendo Switch.'
	},
	dualsense: {
		name: 'DualSense (PS5)',
		price: '$95.000',
		oldPrice: '$105.000',
		brand: 'Sony',
		type: 'Joystick',
		availability: 'En stock',
		images: [
			'images/Sony_DualSense.png',
			'images/Joystikplay5j.png',
			'images/47f8eaed8dbbb0a289ca901e5b6e52dd.png',
			'images/Sony_DualSense.png'
		],
		description: 'Mando inalámbrico DualSense para PlayStation 5. Retroalimentación háptica, micrófono integrado y botón de creación.',
		whatsappMessage: 'Hola! Quiero consultar por el mando DualSense de PS5.'
	},
	'vr-headset': {
		name: 'PlayStation VR2',
		price: '$680.000',
		oldPrice: '$750.000',
		brand: 'Sony',
		type: 'VR',
		availability: 'En stock',
		images: [
			'images/Vrplaystation.png',
			'images/Irusu_Monster_VR_Box_Headset_3.png',
			'images/Vrplaystation.png',
			'images/pulseeliteps5.png'
		],
		description: 'PlayStation VR2. Experiencia inmersiva con seguimiento ocular y retroalimentación háptica en el headset.',
		whatsappMessage: 'Hola! Quiero consultar por el PlayStation VR2.'
	},
	laptop: {
		name: 'Laptop Lenovo',
		price: '$720.000',
		oldPrice: '$800.000',
		brand: 'Lenovo',
		type: 'Notebook',
		availability: 'En stock',
		images: [
			'images/lenovo-na-laptop-original-imafuzt8r5jqppfn.webp',
			'images/70211-apple-mockup-pro-drive-air-laptops-disc.png',
			'images/lenovo-na-laptop-original-imafuzt8r5jqppfn.webp',
			'images/lenovo-na-laptop-original-imafuzt8r5jqppfn.webp'
		],
		description: 'Laptop Lenovo con procesador actual, pantalla Full HD y almacenamiento SSD. Ideal para trabajo y estudio.',
		whatsappMessage: 'Hola! Quiero consultar por la Laptop Lenovo.'
	},
	authentics: {
		name: 'Samsung Authentics 300',
		price: '$165.000',
		oldPrice: '$190.000',
		brand: 'Samsung',
		type: 'Parlante',
		availability: 'En stock',
		images: [
			'images/Authentics300.png',
			'images/Authentics300.png',
			'images/JBLClip5.png',
			'images/Authentics300.png'
		],
		description: 'Parlante Samsung Authentics 300. Sonido 360°, diseño premium. Compatible con Bluetooth y Alexa.',
		whatsappMessage: 'Hola! Quiero consultar por el Samsung Authentics 300.'
	},
	auriculares-beats: {
		name: 'Auriculares Beats',
		price: '$220.000',
		oldPrice: '$260.000',
		brand: 'Beats',
		type: 'Auriculares',
		availability: 'En stock',
		images: [
			'images/MME73.png',
			'images/apple-airpods-ai-generative-free-png.webp',
			'images/MME73.png',
			'images/MME73.png'
		],
		description: 'Auriculares Beats con cancelación de ruido. Sonido equilibrado y cómodos para uso prolongado.',
		whatsappMessage: 'Hola! Quiero consultar por los auriculares Beats.'
	},
	'apple-watch': {
		name: 'Apple Watch Ultra',
		price: '$610.000',
		oldPrice: '$670.000',
		brand: 'Apple',
		type: 'Smartwatch',
		availability: 'En stock',
		images: [
			'images/watches.png',
			'images/banner_watch.png',
			'images/Irusu_Monster_VR_Box_Headset_3.png',
			'images/watches.png'
		],
		description: 'Apple Watch Ultra. Titanio 49 mm, GPS preciso, resistencia al agua para buceo. Batería de hasta 36 horas.',
		whatsappMessage: 'Hola! Quiero consultar por el Apple Watch Ultra.'
	}
};

/**
 * Get product key from URL (e.g. product.html?product=ps5 -> "ps5")
 */
function getProductKeyFromUrl() {
	var params = new URLSearchParams(window.location.search);
	return params.get('product') || '';
}

/**
 * Build slider HTML from product.images (main carousel)
 */
function buildSliderHtml(images) {
	var html = '';
	for (var i = 0; i < images.length; i++) {
		html += '<a href="#"><img src="' + images[i] + '" alt="product"/></a>';
	}
	return html;
}

/**
 * Build thumbnail strip HTML (same images, data-id for slider script)
 */
function buildThumbnailsHtml(images) {
	var html = '';
	for (var i = 0; i < images.length; i++) {
		var id = i + 1;
		html += '<div class="short_img img-item"><a href="#" data-id="' + id + '"> <img class="img_' + id + '" id="img_' + id + '" src="' + images[i] + '" alt="short-img"/></a></div>';
	}
	return html;
}

/**
 * Render product data into the page. Call when DOM is ready and product key is valid.
 */
function renderProduct(productKey) {
	var product = products[productKey];
	if (!product) return false;

	var titleEl = document.getElementById('product_title');
	var priceEl = document.getElementById('product_price');
	var vendorEl = document.getElementById('product_vendor');
	var typeEl = document.getElementById('product_type_value');
	var availableEl = document.getElementById('product_available');
	var descriptionEl = document.getElementById('product_description');
	var sliderEl = document.querySelector('.headphones_col_img.product_slider');
	var thumbnailsEl = document.querySelector('.headphones_short_img.img-select');
	var whatsappContainer = document.getElementById('product_whatsapp_container');

	if (titleEl) titleEl.textContent = product.name;
	if (priceEl) {
		if (product.oldPrice) {
			priceEl.innerHTML = ' <del>' + product.oldPrice + '</del> ' + product.price;
		} else {
			priceEl.textContent = product.price;
		}
	}
	if (vendorEl) vendorEl.textContent = product.brand;
	if (typeEl) typeEl.textContent = product.type;
	if (availableEl) availableEl.textContent = product.availability;
	if (descriptionEl) descriptionEl.textContent = product.description;

	if (sliderEl && product.images && product.images.length) {
		sliderEl.innerHTML = buildSliderHtml(product.images);
	}
	if (thumbnailsEl && product.images && product.images.length) {
		thumbnailsEl.innerHTML = buildThumbnailsHtml(product.images);
	}

	// WhatsApp button: link with pre-written message
	if (whatsappContainer && product.whatsappMessage) {
		var encoded = encodeURIComponent(product.whatsappMessage);
		var link = 'https://wa.me/' + PRODUCT_WHATSAPP_NUMBER + '?text=' + encoded;
		whatsappContainer.innerHTML = '<a class="btn_whatsapp" href="' + link + '" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>';
		whatsappContainer.style.display = 'block';
	}

	// Page title
	if (document.title !== undefined) {
		document.title = product.name + ' | iShop Catamarca';
	}

	return true;
}

/**
 * Initialize product page: read ?product=, render if valid, else keep default content.
 */
function initProductPage() {
	var key = getProductKeyFromUrl();
	if (key && products[key]) {
		renderProduct(key);
		// prodoct_slider.js runs after this (same DOMContentLoaded) and binds to the new .img-select a
	} else {
		var w = document.getElementById('product_whatsapp_container');
		if (w) w.style.display = 'none';
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initProductPage);
} else {
	initProductPage();
}
