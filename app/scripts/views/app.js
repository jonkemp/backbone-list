var app = app || {};

app.AppView = Backbone.View.extend({

  el: '.container',

  template: _.template( $('#hello-template').html() ),

  initialize: function(){
    this.render();

    //var Items = new app.ItemList;

    //this.listenTo(Items, 'add', this.updateListview);

    //Items.add([item1, item2]);
  },

  render: function() {
    this.$el.html( this.template );

    return this;
  },

  updateListview: function(item) {

    var itemView = new ItemView({
      model: item
    });

    $('ul').append( itemView.render().el );
  }

});