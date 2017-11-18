function domDynamicForm(selector) {
    let container = $(selector).addClass('items-control');

    let addContainer = $("<div>").addClass("add-controls");
    let addLabel = $("<label>")
        .text("Enter text: ")
        .append($("<input>"))
        .appendTo(addContainer);
    let addBtn = $("<a>")
        .addClass("button")
        .text("Add")
        .css("display", "inline-block")
        .appendTo(addContainer);

    let searchContainer = $("<div>").addClass("search-control");
    let searchLabel = $("<label>")
        .text("Search: ")
        .append($("<input>"))
        .appendTo(searchContainer);

    let resultContainer = $("<div>").addClass("result-controls");
    let liContainer = $("<ul>")
        .addClass("items-list")
        .appendTo(resultContainer);

    container.append(addContainer);
    container.append(searchContainer);
    container.append(resultContainer);

    addBtn.on("click", function () {
        let addInputText = addLabel.find("input").val();
        let liItem = $("<li>")
            .addClass("list-item")
            .appendTo(liContainer);
        let removeBtn = $("<a>")
            .addClass("button")
            .text("X")
            .appendTo(liItem);
        let strong = $("<strong>")
            .text(addInputText)
            .appendTo(liItem);

        removeBtn.on("click", function () {
            $(this).parent().remove();
        })
    })
}
