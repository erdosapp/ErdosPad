var Line, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('space-pen').View;

Line = (function(_super) {
  __extends(Line, _super);

  function Line() {
    _ref = Line.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Line.content = function() {
    var _this = this;
    return this.li({
      outlet: 'line'
    }, function() {
      return _this.pre({
        outlet: "txt"
      }, function() {});
    });
  };

  Line.prototype.initialize = function(content, height) {
    this.txt.text(content.toSting());
    return this.line.height(height);
  };

  return Line;

})(View);

module.exports = Line;
