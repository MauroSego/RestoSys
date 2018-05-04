$(document).ready(function(){

	const Mesa = {
		init(nroMesa, ocupado){
			this.nroMesa = $idMesa; 
			this.ocupado = 0;
		}
	}



//Cambio de estado de la mesa
	$('.mesa').on('click', function(){
		var $idMesa = $(this).attr('id');
		$('div.mesaSeleccionada').text($idMesa);
		$('#'+$idMesa).toggleClass('libre ocupada')


	})

})