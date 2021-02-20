function ValidarExisteContactoPago() {
         
    var Nombre;
    var IdUsuario;
    if ($("#Nombre").val() !== null || $("#IdUsuario").val() !== null) {
        IdUsuario = $("#IdUsuario").val();
        Nombre = $("#Nombre").val();
        var existeUsuario;
        $.ajax({
            type: "POST",
            url: "/Pago/IndexTC",
            contentType: "application/json; charset=utf-8",
            dataType: "html",
            data: {
                IdUsuario: $("#IdUsuario").val(),
                Nombre: $("#Nombre").val()   
            },
            async: false,
            success: function (data) {

                existeUsuario = true;
                console.log('Data received: ');
                console.log(result);

                if (data.success) {

                    existeUsuario = true;
                    console.log('Data received: ');
                    console.log(result);
                }
                else {
                    existeUsuario = false;
                    console.log('Data received: ');
                    console.log(result);
                }

            },
                error: function (data) {
                existeUsuario = false;
                console.log('Data received: ');
                console.log(result);
            }
        });

    } else {
        existeUsuario = false;
        console.log('Data received: ');
        console.log(data);
    }


    return existeUsuario;
}



function URLExisteContacto() {


    var telefonoSms;
    var textoSms;
    if ($("#telefono").val() !== null || $("#texto").val() !== null) {
        telefonoSms = $("#telefono").val();
        textoSms = $("#texto").val();
        var existeUsuario;
        $.ajax({
            type: "GET",
            url: "/Pago/IndexTC",
            contentType: "application/json; charset=utf-8",
            dataType: "html",
            data: {
                Texto: textoSms,
                Telefono: telefonoSms
            },
            async: false,
            success: function (result) {

                existeUsuario = false;
                console.log('Data received: ');
                console.log(result);
               
            },
            error: function (result) {
                existeUsuario = false;
                console.log('Data received: ');
                console.log(result);
            }
        });

    } else {
        existeUsuario = false;
        console.log('Data received: ');
        console.log(result);
    }


    return existeUsuario;
}