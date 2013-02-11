var app = app || {};

app.AppView = Backbone.View.extend({

  el: '.container',

  events: {
    'submit form': 'addItem'
  },

  initialize: function(){
    this.input = this.$('#item-text');

    this.listenTo( window.app.Items, 'add', this.updateListview );
  },

  updateListview: function(item) {

    var itemView = new app.ItemView({
      model: item
    });

    $('#items').append( itemView.render().el );
  },

  addItem: function() {
    app.Items.add({name: this.input.val()});
    this.input.val('');

    return false;
  }
});