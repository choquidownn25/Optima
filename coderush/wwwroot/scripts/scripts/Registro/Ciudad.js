function ValidarExisteCiudad() {
    //$("[data-rel='chosen']").chosen();
    //var ddlCiudad = $("[data-rel='chosen']");
    var ddlCiudad = $("#Ciudad");
    ddlCiudad.empty().append('<option selected="selected" value="0" disabled = "disabled">Loading.....</option>');
        $.ajax({
            type: 'GET',
            url: "CargaCiudad",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $("#Ciudad").val(data.Nombre);

                
            },  
            failure: function (data) {
                alert(data.responseText);
            },
            error: function (data) {
                alert(data.responseText);
                existeUsuario = false;
            }
        });
 
 

    
}