
$(document).ready(function () {

    var win = "none";
    var x = "<i class='fa fa-times fa-5x' aria-hidden='true'></i>";
    var o = "<i class='fa fa-genderless fa-5x' aria-hidden='true'></i>";
    var playerSymbol = x;
    var computadorSymbol = o;

    var square = function () {
        this.player = "none";
        this.symbol = "none";
    };


    var arr = [];

    for (var i = 0; i < 9; i++) {
        arr[i] = new square;
    }



    $("#reset").on("click", function () {
        RESET();
    });

    for (var j = 0; j < 9; j++) {
        var item = "#" + (j).toString();

        $(item).on("click", function () {

            var elem = $(this);
            var id = elem.attr('id');
            if ((arr[id].player != "humano") && (arr[id].player != "computador")) {
                arr[id].symbol = 'x';
                arr[id].player = "humano";
                elem.html(playerSymbol);
                compPlay();
                winner();
            }
        });
    }

    function didDraw() {
        var bool = true;
        for (var i = 0; i < 9; i++) {
            if (arr[i].player == "none") {
                bool = false;
            }
        }
        if (bool) {
            alert("empate");
            RESET();
        }

    }

    function compPlay() {

        if (arr[0].player == "humano" && arr[1].player == "humano" && arr[2].player == "none") {
            arr[2].symbol = '0';
            arr[2].player = "computador";
            $("#2").html(computadorSymbol);
        }
        else if (arr[2].player == "computador" && arr[1].player == "computador" && arr[0].player == "none") {
            arr[0].symbol = '0';
            arr[0].player = "computador";
            $("#0").html(computadorSymbol);
        }


        else if (arr[3].player == "humano" && arr[4].player == "humano" && arr[5].player == "none") {
            arr[5].symbol = '0';
            arr[5].player = "computador";
            $("#5").html(computadorSymbol);
        }
        else if (arr[4].player == "humano" && arr[5].player == "humano" && arr[3].player == "none") {
            arr[3].symbol = '0';
            arr[3].player = "computador";
            $("#3").html(computadorSymbol);
        }
        else if (arr[6].player == "humano" && arr[7].player == "humano" && arr[8].player == "none") {
            arr[8].symbol = '0';
            arr[8].player = "computador";
            $("#8").html(computadorSymbol);
        }
        else if (arr[4].player == "humano" && arr[8].player == "humano" && arr[0].player == "none") {
            arr[0].symbol = '0';
            arr[0].player = "computador";
            $("#0").html(computadorSymbol);
        }
        else if (arr[2].player == "humano" && arr[4].player == "humano" && arr[6].player == "none") {
            arr[6].symbol = '0';
            arr[6].player = "computador";
            $("#6").html(computadorSymbol);
        }
        else if (arr[0].player == "humano" && arr[4].player == "humano" && arr[8].player == "none") {
            arr[8].symbol = '0';
            arr[8].player = "computador";
            $("#8").html(computadorSymbol);
        }
        else if (arr[6].player == "humano" && arr[4].player == "humano" && arr[2].player == "none") {
            arr[2].symbol = '0';
            arr[2].player = "computador";
            $("#2").html(computadorSymbol);
        }
        else if (arr[7].player == "humano" && arr[4].player == "humano" && arr[1].player == "none") {
            arr[1].symbol = '0';
            arr[1].player = "computador";
            $("#1").html(computadorSymbol);
        }
        else if (arr[1].player == "humano" && arr[4].player == "humano" && arr[7].player == "none") {
            arr[7].symbol = '0';
            arr[7].player = "computador";
            $("#7").html(computadorSymbol);
        }

        else if (arr[2].player == "humano" && arr[5].player == "humano" && arr[8].player == "none") {
            arr[8].symbol = '0';
            arr[8].player = "computador";
            $("#8").html(computadorSymbol);
        }
        else if (arr[0].player == "humano" && arr[3].player == "humano" && arr[6].player == "none") {
            arr[6].symbol = '0';
            arr[6].player = "computador";
            $("#6").html(computadorSymbol);
        }
        else if (arr[6].player == "humano" && arr[3].player == "humano" && arr[0].player == "none") {
            arr[0].symbol = '0';
            arr[0].player = "computador";
            $("#0").html(computadorSymbol);
        }
        else if (arr[8].player == "humano" && arr[5].player == "humano" && arr[2].player == "none") {
            arr[2].symbol = '0';
            arr[2].player = "computador";
            $("#2").html(computadorSymbol);
        }
        else if (arr[8].player == "humano" && arr[7].player == "humano" && arr[6].player == "none") {
            arr[6].symbol = '0';
            arr[6].player = "computador";
            $("#6").html(computadorSymbol);
        }
        else if (arr[6].player == "humano" && arr[7].player == "humano" && arr[2].player == "none") {
            arr[2].symbol = '0';
            arr[2].player = "computador";
            $("#2").html(computadorSymbol);
        }
        else if (arr[0].player == "humano" && arr[6].player == "humano" && arr[3].player == "none") {
            arr[3].symbol = '0';
            arr[3].player = "computador";
            $("#3").html(computadorSymbol);
        }
        else if (arr[1].player == "humano" && arr[7].player == "humano" && arr[4].player == "none") {
            arr[4].symbol = '0';
            arr[4].player = "computador";
            $("#4").html(computadorSymbol);
        }
        else if (arr[2].player == "humano" && arr[8].player == "humano" && arr[5].player == "none") {
            arr[5].symbol = '0';
            arr[5].player = "computador";
            $("#5").html(computadorSymbol);
        }
        else if (arr[0].player == "humano" && arr[2].player == "humano" && arr[1].player == "none") {
            arr[1].symbol = '0';
            arr[1].player = "computador";
            $("#1").html(computadorSymbol);
        }
        else if (arr[3].player == "humano" && arr[5].player == "humano" && arr[4].player == "none") {
            arr[4].symbol = '0';
            arr[4].player = "computador";
            $("#4").html(computadorSymbol);
        }
        else if (arr[6].player == "humano" && arr[8].player == "humano" && arr[7].player == "none") {
            arr[7].symbol = '0';
            arr[7].player = "computador";
            $("#7").html(computadorSymbol);
        }
        else if (arr[0].player == "humano" && arr[8].player == "humano" && arr[4].player == "none") {
            arr[4].symbol = '0';
            arr[4].player = "computador";
            $("#4").html(computadorSymbol);
        }
        else {
            var bool = true;
            while (bool) {
                var random = Math.round(Math.random() * 9);
                var id = "#" + random;
                if (arr[random].player == "none") {
                    arr[random].symbol = '0';
                    arr[random].player = "computador";
                    $(id).html(computadorSymbol);
                    bool = false;
                }

            }


        }


    };
    function winner() {
        setTimeout(function () {

            if (arr[0].player == "humano" && arr[1].player == "humano" && arr[2].player == "humano") {
                win = "humano";
            }
            else if (arr[0].player == "computador" && arr[1].player == "computador" && arr[2].player == "computador") {
                win = "computador";
            }
            else if (arr[0].player == "humano" && arr[3].player == "humano" && arr[6].player == "humano") {
                win = "humano";
            }
            else if (arr[0].player == "computador" && arr[3].player == "computador" && arr[6].player == "computador") {
                win = "computador";
            }

            else if (arr[3].player == "humano" && arr[4].player == "humano" && arr[5].player == "humano") {
                win = "humano";
            }
            else if (arr[3].player == "computador" && arr[4].player == "computador" && arr[5].player == "computador") {
                win = "computador";
            }
            else if (arr[6].player == "humano" && arr[7].player == "humano" && arr[8].player == "humano") {
                win = "humano";
            }
            else if (arr[6].player == "computador" && arr[7].player == "computador" && arr[8].player == "computador") {
                win = "computador";
            }
            else if (arr[1].player == "humano" && arr[4].player == "humano" && arr[7].player == "humano") {
                win = "humano";
            }
            else if (arr[1].player == "computador" && arr[4].player == "computador" && arr[7].player == "computador") {
                win = "computador";
            }
            else if (arr[2].player == "humano" && arr[5].player == "humano" && arr[8].player == "humano") {
                win = "humano";
            }
            else if (arr[2].player == "computador" && arr[5].player == "computador" && arr[8].player == "computador") {
                win = "computador";
            }
            else if (arr[0].player == "humano" && arr[4].player == "humano" && arr[8].player == "humano") {
                win = "humano";
            }
            else if (arr[0].player == "computador" && arr[7].player == "computador" && arr[8].player == "computador") {
                win = "computador";
            }
            else if (arr[2].player == "humano" && arr[4].player == "humano" && arr[6].player == "humano") {
                win = "humano";
            }
            else if (arr[2].player == "computador" && arr[7].player == "computador" && arr[6].player == "computador") {
                win = "computador";
            }

            if (win != "none") {
                alert(win + " Gano");
                RESET();
            }
            didDraw();
        }, 2000);
    }
    function RESET() {
        win = "none";
        for (var i = 0; i < 9; i++) {
            arr[i] = new square;
            var item = "#" + (i).toString();
            $(item).html(" ");

        }
    }



    $("#x").on("click", function () {
        $(this).toggleClass("selected");
        $("#o").toggleClass("selected");
        playerSymbol = x;
        computadorSymbol = o;
        RESET();
    });
    $("#o").on("click", function () {
        $(this).toggleClass("selected");
        $("#x").toggleClass("selected");
        playerSymbol = o;
        computadorSymbol = x;

        RESET();
    });

});