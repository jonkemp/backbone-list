/* global Marionette, ItemView */
'use strict';

var AppView = Marionette.CompositeView.extend({

    template: '#app-template',

    childView: ItemView,

    childViewContainer: '#items',

    ui: {
        input: '#item-text'
    },

    events: {
        'submit form': 'addItem'
    },

    addItem: function(event) {
        event.preventDefault();
        this.collection.add({name: this.ui.input.val()});
        this.ui.input.val('');
    }
});
