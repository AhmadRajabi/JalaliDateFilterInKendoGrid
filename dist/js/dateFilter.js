

var persianDateFilter = {

    ui: function(element) {

        var newId = function() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        };

        var el0 = $(element).attr('data-bind').indexOf("filters[0]") !== -1;
        var id = "el" + newId();
        var html = function(elid, index) {
            return "<span class='k-widget'><input type='text' id='" + elid + "' style='text-align:center;' class='k-input k-textbox' data-bind='value:filters[" + index + "].value' autocomplete='false'></span>";
        };

        if (el0) {

            $(element).replaceWith(html(id, 0));

            Calendar.setup({
                inputField: id,
                ifFormat: '%Y/%m/%d',
                dateType: 'jalali',
                weekNumbers: false,
                onUpdate: function(cal) {
                    $("#" + id).change();
                }
            });
        } else {

            $(element).replaceWith(html(id, 1));

            Calendar.setup({
                inputField: id,
                ifFormat: '%Y/%m/%d',
                dateType: 'jalali',
                weekNumbers: false,
                onUpdate: function(cal) {
                    $("#" + id).change();
                }
            });
        }
    }
};

