/* global Backbone */
'use strict';

var app = app || {};

var ItemList = Backbone.Collection.extend({

    model: app.Item

});

app.Items = new ItemList();
