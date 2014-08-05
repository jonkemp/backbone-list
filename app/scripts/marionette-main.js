/* global $, app, AppView, ItemList */
'use strict';

app.on('start', function(options) {
    var items = new ItemList();
    var appView = new AppView({ collection: items });

    app.main.show(appView);
});

$(function(){
    app.start();
});
