var options = {
    url: "https://raw.githubusercontent.com/KyleMit/libraries/gh-pages/libraries/people.json",
    getValue: "name",
    list: {
        match: {
            enabled: true
        }
    }
};




$("#countries").easyAutocomplete(options);

$(".easy-autocomplete-container").on("show.eac", function(e) {
    var inputId = this.id.replace('eac-container-', '');
    var isFocused = $("#" + inputId).is(":focus");
    if (!isFocused) {
        e.stopImmediatePropagation();
    }
});

$(".easy-autocomplete-container").each(function() {
    $._data(this, 'events')["show"].reverse();
});