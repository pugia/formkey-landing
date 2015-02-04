$(function() {
	
	autoresize();
	
	var timer = null;
	$('div.titleBeAnyone')
		.on('keydown', '#wannabe', function(e) {
			editor();			
		})
		.on('keyup', '#wannabe', function(e) {
			autoresize();
			clearTimeout(timer);
			setTimeout(function() {
				autoresize()
			}, 10);
		})

	$('textarea.editor')
		.on('keydown', function(e) {
			editor();
		})
		.on('keyup', function(e) {
			editor();
			clearTimeout(timer);
			setTimeout(function() {
				editor()
			}, 10);
		})
		
	
		
  var map = new Datamap({ 
		  scope: 'world'
		,	element: document.getElementById('mapContainer') 
		,	fills: {
				defaultFill: '#b6babf'
			}
	  ,  geographyConfig: {
	        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
	        hideAntarctica: true,
	        borderWidth: 0,
	        borderColor: '#b6babf',
	        popupOnHover: false, //disable the popup while hovering
	        highlightOnHover: false,
	    }

	 });
			
})

function autoresize() {
	var val = $('#wannabe').val();
	$('#wannabe_hidden').html(val.replace(/ /g, '&nbsp;'));
	$('#wannabe').width($('#wannabe_hidden').width());
}

function editor() {
	var pre = $('pre.editor');
	var txt = $('textarea.editor');
	var cnt = $('#remainLines');
	pre.text(txt.val());
	txt.height(pre.height());
	
	var linee = 240 - (pre.height()/24);
	cnt.text(linee);
	
}