var app = app || {};

app.ItemView = Backbone.View.extend({
  tagName: 'li',

  render: function(){
    $(this.el).html(this.model.get('text'));

    return this;
  }
});