$(document).ready(function () {
    (function () {

        // ReSharper disable once InconsistentNaming
        var ShapeModel = Backbone.Model.extend({
            initialize: function () {
                console.log('Creating Shape');
            },
            asString: function () {
                return JSON.stringify(this.toJSON());
            }
        });

        // ReSharper disable once InconsistentNaming
        var RectangleModel = ShapeModel.extend({});

        var rectangleView = Backbone.View.extend({
            tagName: 'div',
            className: 'rectangle',
            events: {
                'click': 'move'
            },
            render: function () {
                this.setDimensions();
                this.setPosition();
                this.setColor();
                return this;
            },
            setDimensions: function () {
                this.$el.css({
                    width: this.model.get('width') + 'px',
                    height: this.model.get('height') + 'px'
                });
            },
            setPosition: function () {
                var position = this.model.get('position');
                this.$el.css({
                    left: position.x,
                    right: position.y
                });
            },
            setColor: function () {
                this.$el.css('background-color', this.model.get('color'));
            },
            move: function () {
                this.$el.css('left', this.$el.position().left + 10);
            }
        });

        var rectangleModels = [
            new RectangleModel({
                width: 100,
                height: 100,
                position: {
                    x: 200,
                    y: 0
                },
                color: '#ff0000'
            }),
             new RectangleModel({
                 width: 100,
                 height: 100,
                 position: {
                     x: 400,
                     y: 300
                 },
                 color: '#00ff00'
             }),
              new RectangleModel({
                  width: 100,
                  height: 100,
                  position: {
                      x: 600,
                      y: 100
                  },
                  color: '#0000ff'
              })
        ];

        _(rectangleModels).each(function (model) {
            console.log(model.asString());
            console.log(model instanceof ShapeModel);
            $('#canvas').append(new rectangleView({ model: model }).render().el);
        });
    })();
});