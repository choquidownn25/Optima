function ValidarExisteContacto() {


    var tituloPush;
    var textoPush;
    if ($("#titulo").val() !== null || $("#texto").val() !== null) {
        tituloPush = $("#titulo").val();
        textoPush = $("#texto").val();
        var existeUsuario;
        $.ajax({
            type: "GET",
            url: "/api/Pusher",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: {
                Body: textoPush,
                Title: tituloPush
            },
            async: false,
            success: function (data) {
                if (data.success) {

                    existeUsuario = true;
                    alertify.success('Ok: ');
                }
                else {
                    existeUsuario = false;
                    alertify.error('Cancel');
                }
            },
            error: function (data) {
                alertify('Error.' + data.error.message);
            }
        });

    } else {
        alertify
            .alert("This is an alert dialog.", function () {
                alertify.message('OK');
            });
    }


    return existeUsuario;
}