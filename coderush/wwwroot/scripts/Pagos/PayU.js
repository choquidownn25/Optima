
var url = "http=//sandbox.api.payulatam.com/payments-api/4.0/service";
var language = "es";
var command = "SUBMIT_TRANSACTION";
var apiLogin = "pRRXKOl8ikMmt9u";
var apiKey = "4Vj8eK4rloUd272L48hsrarnUA";
var accountId = "512326";
var referenceCode = "TestPayU";
var description = "payment test";
var signature = "7ee7cf808ce6a39b17481c54f2c57acc";
var notifyUrl = "c";
var TX_VALUE = 20000;
var TX_TAX = "3193";
var TX_TAX_RETURN_BASE = "16806";
var currency = "COP";

var merchantBuyerId = "1";
var fullName = "First name and second buyer  nam";
var emailAddress = "buyer_test@test.com";
var contactPhone = "7563126";
var dniNumber = "5415668464654"; //Cedula del cliente
var street1 = "calle 100";
var street2 = "5555487";
var city = "Medellin";

var state = "Antioquia";
var country = CO;
var postalCode = "000000";
var phone = "7563126";
//Tarjeta de credito
var number = "4097440000000004";
var securityCode = "321";
var expirationDate = "2014/12";
var name = "REJECTED";


var INSTALLMENTS_NUMBER = 1; //Cedula del cliente
var type = "AUTHORIZATION_AND_CAPTURE";
var paymentMethod = "VISA";
var paymentCountry = "CO";
var deviceSessionId = "vghs6tvkcle931686k1900o6e1";
var ipAddress = "127.0.0.1";
var cookie = "pt1t38347bs6jc9ruv2ecpv7o2";
var userAgent = "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0";

var data = {
    "language": "es",
    "command": "SUBMIT_TRANSACTION",
    "merchant": { "apiKey": "4Vj8eK4rloUd272L48hsrarnUA", "apiLogin": "pRRXKOl8ikMmt9u" },
    "transaction": {
        "order": {
            "accountId": "512321",
            "referenceCode": "TestPayU",
            "description": "payment test",
            "language": "es",
            "signature": "7ee7cf808ce6a39b17481c54f2c57acc",
            "notifyUrl": "http://www.tes.com/confirmation",
            "additionalValues": {
                "TX_VALUE": { "value": 20000, "currency": "COP" },
                "TX_TAX": { "value": 3193, "currency": "COP" },
                "TX_TAX_RETURN_BASE": { "value": 16806, "currency": "COP" }
            },
            "buyer": {
                "merchantBuyerId": "1",
                "fullName": "First name and second buyer  name",
                "emailAddress": "buyer_test@test.com",
                "contactPhone": "7563126",
                "dniNumber": "5415668464654",
                "shippingAddress": {
                    "street1": "calle 100",
                    "street2": "5555487",
                    "city": "Medellin",
                    "state": "Antioquia",
                    "country": "CO",
                    "postalCode": "000000",
                    "phone": "7563126"
                }
            },
            "shippingAddress": {
                "street1": "calle 100",
                "street2": "5555487",
                "city": "Medellin",
                "state": "Antioquia",
                "country": "CO",
                "postalCode": "0000000",
                "phone": "7563126"
            }
        },
        "payer": {
            "merchantPayerId": "1",
            "fullName": "First name and second payer name",
            "emailAddress": "payer_test@test.com",
            "contactPhone": "7563126",
            "dniNumber": "5415668464654",
            "billingAddress": {
                "street1": "calle 93",
                "street2": "125544",
                "city": "Bogota",
                "state": "Bogota DC",
                "country": "CO",
                "postalCode": "000000",
                "phone": "7563126"
            }
        },
        "creditCard": {
            "number": "4097440000000004",
            "securityCode": "321",
            "expirationDate": "2014/12",
            "name": "REJECTED"
        },
        "extraParameters": { "INSTALLMENTS_NUMBER": 1 },
        "type": "AUTHORIZATION_AND_CAPTURE",
        "paymentMethod": "VISA",
        "paymentCountry": "CO",
        "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
        "ipAddress": "127.0.0.1",
        "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
        "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
    },
    "test": false
};

function PagoporValidar() {
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .then(function (response) {
            if (response.ok) {
                response.blob().then(function (miBlob) {
                    sweetAlert("Congratulations!!", "You Uploaded A Valid File", "success");
                    ValidarExisteContactoPago(miBlob);
                });
            } else {
                sweetAlert("File Shouldn't Be Empty!!", "Respuesta de red Fail", "error");
                console.log('Respuesta de red OK.');
            }
        })
        .catch(function (error) {
            sweetAlert("Hubo un problema con la petición Fetch!!", "Respuesta de red Fail", error.message);
            console.log('Hubo un problema con la petición Fetch:' + error.message);

        });

        
}




function ValidarExisteContactoPago(miBlob) {

    if ($miBlob.val() !== null ) {
 
        var existeUsuario;
        $.ajax({
            type: "GET",
            url: "/Pago/IndexTC",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: {
                IdUsuario: miBlob.IdUsuario.val(),
                Nombre: miBlob.Nombre.val(),
                TipoDocumento: miBlob.TipoDocumento.val(),
                emailAddress: miBlob.emailAddress.val(),
                MerchantBuyerId: miBlob.emailAddress.val(),
                ContactPhone: miBlob.ContactPhone.val(),
                DniNumber: miBlob.ContactPhone.val(),
                Direccion: miBlob.Direccion.val()
            },
            async: false,
            success: function (data, status) {
                

                existeUsuario = true;
                console.log('Data received: ');
                console.log(result);

                if (status === "success") {

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
            error: function (data, status) {
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
