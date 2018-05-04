$(document).ready(function(){
	$('.mesa').on('click', function(){
		var id = $(this).attr('id');
		
		$('div.mesaSeleccionada').text(id);
		$('#'+id).toggleClass('libre ocupada')


	})

})