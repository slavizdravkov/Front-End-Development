$(document).ready(function () {
    let baseUrl = "https://judgetests.firebaseio.com/businfo/";
    let submitBtn = $("#submit");
    let stopIdInput = $("#stopId");
    let stopNameContainer = $("#stopName");
    let busesList = $("#buses");

    submitBtn.on("click", function () {
        let stopId = stopIdInput.val();

        if (!stopId) {
            return;
        }

        $.ajax({
            url: baseUrl + stopId + '.json',
            method: "GET",
            success: function (data) {
                let stopName = data.name;
                let buses = data.buses;

                busesList.empty();
                stopNameContainer.text(stopName);
                for (let key in buses) {
                    $(`<li>Bus ${key} arrives in ${buses[key]}</li>`)
                        .appendTo(busesList);
                }

                stopIdInput.val('');
            },
            error: function () {
                stopNameContainer.text("Error");
                busesList.empty();
            }
        })
    })
});
