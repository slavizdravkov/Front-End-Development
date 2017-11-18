function incrementCounter(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>')
        .addClass('counter')
        .val(0)
        .attr('disabled', true);
    let btnIncrement = $('<button>')
        .addClass('btn')
        .attr('id', 'incrementBtn')
        .text('Increment');
    let btnAdd = $('<button>')
        .addClass('btn')
        .attr('id', 'addBtn')
        .text('Add');
    let ulContainer = $('<ul>')
        .addClass('results');

    textArea.appendTo(fragment);
    btnIncrement.appendTo(fragment);
    btnAdd.appendTo(fragment);
    ulContainer.appendTo(fragment);

    container.append(fragment);

    btnIncrement.on('click', function () {
        let number = Number(textArea.val());
        number++;
        textArea.val(number);
    });

    btnAdd.on('click', function () {
       let liElement = $('<li>').text(textArea.val());
       ulContainer.append(liElement);
    });
}
