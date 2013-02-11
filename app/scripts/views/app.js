var app = app || {};

app.AppView = Backbone.View.extend({

  initialize: function(){

    this.listenTo( window.app.Items, 'add', this.updateListview );

  },

  updateListview: function(item) {

    var itemView = new app.ItemView({
      model: item
    });

    $('#items').append( itemView.render().el );
  }
});