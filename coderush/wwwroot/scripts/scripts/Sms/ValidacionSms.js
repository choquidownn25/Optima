function ValidarExisteContacto() {
   
   
    var telefonoSms;
    var textoSms;
    if ($("#telefono").val() !== null || $("#texto").val() !== null) {
        telefonoSms = $("#telefono").val();
        textoSms = $("#texto").val();
        var existeUsuario;
        $.ajax({
            type: "GET",
            url: "/Sms/SmsEnviar", 
            contentType: "application/json; charset=utf-8", 
            dataType: "json",
            data: {
                Texto: textoSms,
                Telefono: telefonoSms
            },
            async: false,
            success: function (data) {
                if (data.success) {

                    existeUsuario = true;
                    alertify.success('Ok: ');
                }
                else {
                    existeUsuario = false;
                    //alertify.error('Cancel');
                    swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    });
                }
            },
            error: function (data) {
                //alertify('Error.' + data.error.message);
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error.message,
                    footer: '<a href>Why do I have this issue?</a>'
                });
            }
        });

    } else {
        alertify
            .alert("This is an alert dialog.", function () {
                alertify.message('OK');
            });
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    }

   
    return existeUsuario;
}
