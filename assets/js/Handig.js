var pageLoaded;
function showContent(page, consult, folder, formulier) {
	var numRand = Math.floor(Math.random() * 1000001);
	
	if(folder) {
		page = folder + '/' + page;
		consult = folder + '/' + consult;
	}	
	
	if(pageLoaded != page) {
		$('#loadContent').html("");
		$('#loadContent').load(page + '.html?random=' + numRand, function(responseText, textStatus, XMLHttpRequest){
			pageLoaded = page;
			if(textStatus == 'error') {
				$('#loadContent').html('<div class="alert alert-error alert-proto-nopage"><strong>Deze pagina is nog niet geimplementeerd in het prototype.</strong></div>');
			}
			// Tabbladen initieren indien aanwezig.
			if($('.nav-tabs').length > 0) { initTabs(); }
			
			// Load forms
			if(consult){
				$('#tabContent').load(consult + '.html?random=' + numRand, function(){
					pageReady(consult, formulier);
				});
			} else {
				pageReady(page);
			}
		});
	} else {
		// Pagina is al geladen dus kan alleen het formulier worden geladen.
		$('#tabContent').load(consult + '.html?random=' + numRand, function(){
			pageReady(consult, formulier);
		});
	}
}

function pageReady(page, formulier){
	
	// Pagina specifieke functies aanroepen.
	switch(page) {
		case "patient/soep_ingevuld":
			// Weergave buttons
			$('#MDO').hide();
			$('#agenda').hide();
			$('#onderzoek').hide();
			$('#soep-ingevuld').show();	
			break;
		default:
			initLayoutView();
	}
	

}


var pageLoaded;
function showContent(page, folder) {
	var numRand = Math.floor(Math.random() * 1000001);
	
	if(folder) {
		page = folder + '/' + page;
		consult = folder + '/' + consult;
	}	
	
	if(pageLoaded != page) {
		$('#loadContent').html("");
		$('#loadContent').load(page + '.html?random=' + numRand, function(responseText, textStatus, XMLHttpRequest){
			pageLoaded = page;
			if(textStatus == 'error') {
				$('#loadContent').html('<div class="alert alert-error alert-proto-nopage"><strong>Deze pagina is nog niet geimplementeerd in het prototype.</strong></div>');
			}			
			 else {
				pageReady(page);
			}
		});
	} else {
		// Pagina is al geladen dus kan alleen het formulier worden geladen.
		$('#tabContent').load(consult + '.html?random=' + numRand, function(){
			pageReady(consult, formulier);
		});
	}
}