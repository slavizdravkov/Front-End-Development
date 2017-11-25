$(document).ready(function () {
    let baseUrl = "https://judgetests.firebaseio.com/schedule/";
    let stopId = "depot";
    let stopName = "";
    let busInfoContainer = $(".info");

    $("#depart").on("click", function () {
        getStop(stopId);
    });

    $("#arrive").on("click", function () {
        busInfoContainer.text(`Arriving at ${stopName}`);
        $("#arrive").attr("disabled", "disabled");
        $("#depart").removeAttr("disabled");
    });

    function getStop(stopId) {
        $.ajax({
            url: baseUrl + stopId + ".json",
            method: "GET",
            success: getData,
            error: handleError
        });
    }

    function getData(data) {
        stopName = data.name;
        stopId = data.next;
        busInfoContainer.text(`Next stop ${stopName}`);
        $("#arrive").removeAttr("disabled");
        $("#depart").attr("disabled", "disabled");
    }

    function handleError(error) {
        console.log(error);
    }
});
