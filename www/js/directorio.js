$(function(){
				$('#tblTabla2').dataTable( {
					"bInfo":false,
			"oLanguage": {
            "sLengthMenu": "Mostrar _MENU_ records por p�gina",
            "sZeroRecords": "No hay resultados, intente otra b&uacute;squeda",
            "sInfo": "Registro del _START_ a _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Registro 0 a 0 de 0 records",
            "sInfoFiltered": "(filtered from _MAX_ total records)",
					"sSearch": "Buscar:",
			      "oPaginate": {
        "sFirst": "Inicio",
		"sLast": "Fin",
		"sPrevious": "Ant",
		"sNext": "Sig",
      }	
        },
		"bLengthChange": false,
		"bAutoWidth": false,
					"iDisplayLength": 5,
			
					"aaData": DataSet_CCC,
					"aoColumns": [
						{ "sTitle": "Depto", "sWidth": "40px" },
						{ "sTitle": "Municipio", "sWidth": "40px" },
						{ "sTitle": "Direcci�n", "sWidth": "100px" },
						{ "sTitle": "M�s Informaci�n", "sWidth": "40px" }
					]
				} );
});
