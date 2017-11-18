function createBook(selector, titleName, authorName, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, titleName, authorName, isbn) {
            let container = $(selector);
            let book = $("<div>")
                .attr("id", `book${id}`)
                .css("border", "2px solid white");
            let title = $("<p>")
                .addClass("title")
                .text(titleName);

            let author = $("<p>")
                .addClass("author")
                .text(authorName);

            let bookIsbn = $("<p>")
                .addClass("isbn")
                .text(isbn);

            let btnSelect = $("<button>").text("Select");
            let btnDeselect = $("<button>").text("Deselect");

            title.appendTo(book);
            author.appendTo(book);
            bookIsbn.appendTo(book);
            btnSelect.appendTo(book);
            btnDeselect.appendTo(book);

            container.append(book);

            btnSelect.on('click', function () {
                book.css("border", "2px solid blue");
            });

            btnDeselect.on("click", function () {
                book.css("border", "2px solid white");
            })
        }
    }());

    bookGenerator(selector, titleName, authorName, isbn);
}
