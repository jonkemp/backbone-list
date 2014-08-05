/* global Backbone */
'use strict';

var app = app || {};

app.ItemView = Backbone.View.extend({
    tagName: 'li',

    render: function(){
        this.$el.html( this.model.get('name') );

        return this;
    }
});
