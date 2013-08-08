$(document).ready(function() {
    uitklappenFolder();
    dragndrop();
});

$(function(){
    // Prototype: Load default page
    showContent('beheer', 'pages');
});

// Pagina laden
var pageLoaded;

function showContent(page, folder) {
	var numRand = Math.floor(Math.random() * 1000001);
	
	if(folder) {
		page = folder + '/' + page;
	} else {
		page = page;
	}

	if(pageLoaded != page) {
		$('#loadContent').html("");
		$('#loadContent').load(page + '.html?random=' + numRand, function(responseText, textStatus, XMLHttpRequest){
			pageLoaded = page;
			// Tabbladen initieren indien aanwezig.
			if($('.nav-tabs').length > 0) { initTabs(); }
			
			// Load forms
			else {
				pageReady(page);
			}
		});
	}
}

//Sidebar weergave
function initSidenav(ActiveApplication){
	$('.side-nav').css('display', 'block');
	$('.dashboardknop.' + ActiveApplication).addClass('active');
}

function pageReady(page){
	// Pagina specifieke functies aanroepen.
	switch(page) {
		case "pages/login" :
			loginscreenBackground(true);
			break;
		case "pages/nieuws":			
			// Weergave actieve applicaties
			initSelected('nieuws');
			// Weergave fullscreenTransitie
			hideTransition();
			// Weergave Side-nav
			initSidenav('nieuws');
			hideSideNav('start');
			loginscreenBackground(false);
			break;
		case "pages/e-verwijzen":
			// Weergave fullscreenTransitie
			hideTransition();
			// Weergave Side-nav
			initSidenav('e-verwijzen');
			hideSideNav('start');
			// Weergave actieve applicaties
			initSelected('e-verwijzen');
			break;
		case "pages/orders":
			// Weergave actieve applicaties
			initSelected('orders');
			// Weergave fullscreenTransitie
			hideTransition();
			// Weergave Side-nav
			initSidenav('orders');
			hideSideNav('start');
			break;
		case "pages/resultaten":
			// Weergave actieve applicaties
			initSelected('resultaten');
			// Weergave fullscreenTransitie
			hideTransition();
			// Weergave Side-nav
			initSidenav('resultaten');
			hideSideNav('start');
			break;
		case "pages/aanvragen":
			// Weergave actieve applicaties
			initSelected('aanvragen');
			// Weergave fullscreenTransitie
			hideTransition();
			// Weergave Side-nav
			initSidenav('aanvragen');
			hideSideNav('start');
			break;
		case "pages/homepage":			
			// Weergave actieve applicaties
			initSelected();
			behandelplanAccordion();
			hideSideNav('stop');
			uitklappenFolder();
			dragndrop();
			notifications();
			$('body').removeClass('loginScreenBackground');
			break;
		case "pages/beheer":
		// Weergave actieve applicaties
			initSelected();
			behandelplanAccordion();
			hideSideNav('stop');
			uitklappenFolder();
			dragndrop();
			break;
		default:
			hideSideNav('stop');
			uitklappenFolder();
			//notifications();
	}
}