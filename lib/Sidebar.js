var Line, Sidebar, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Line = require('./Line');

View = require('space-pen').View;

Sidebar = (function(_super) {
  __extends(Sidebar, _super);

  function Sidebar() {
    _ref = Sidebar.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Sidebar.content = function() {
    var _this = this;
    return this.div(function() {});
  };

  Sidebar.prototype.lines = void 0;

  Sidebar.prototype.initialize = function() {
    return this.lines = [];
  };

  Sidebar.prototype.add = function(line, val) {
    var height;
    if (this.lines[line]) {
      return this.update(line, val);
    }
    height = $(".CodeMirror-gutter-text pre:nth-child(" + (i + 1) + ")").height();
    this.lines[line] = new Line(val);
    line = this.lines[line];
    return this.list.append(line);
  };

  Sidebar.prototype.update = function(num, val) {
    var line;
    line = this.lines[num];
    return line.update(val);
  };

  return Sidebar;

})(View);

module.exports = Sidebar;
