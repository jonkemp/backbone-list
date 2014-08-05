/* global Marionette, ItemView */
'use strict';

var AppView = Marionette.CompositeView.extend({

    template: '#app-template',

    childView: ItemView,

    childViewContainer: '#items',

    events: {
        'submit form': 'addItem'
    },

    addItem: function(event) {
        event.preventDefault();
        this.collection.add({name: this.$('#item-text').val()});
        this.$('#item-text').val('');
    }
});
