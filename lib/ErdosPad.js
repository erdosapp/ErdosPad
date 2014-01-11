var CodeMirror, ErdosMode, ErdosPad, Sidebar, View, jquery, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

jquery = require('jquery')(window);

Sidebar = require('./Sidebar');

ErdosMode = require('./ErdosMode');

CodeMirror = require('code-mirror');

View = require('space-pen').View;

ErdosPad = (function(_super) {
  __extends(ErdosPad, _super);

  function ErdosPad() {
    _ref = ErdosPad.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  ErdosPad.content = function() {
    var _this = this;
    return this.div(function() {
      return _this.textarea({
        outlet: 'textarea'
      }, function() {});
    });
  };

  ErdosPad.prototype.initialize = function(elem, settings) {
    var defaultSettings, editor, sidebar;
    sidebar = new Sidebar();
    defaultSettings = {
      theme: 'spacegrey',
      content: void 0
    };
    $.extend(settings, defaultSettings);
    if (settings.content) {
      this.textarea.val(settings.content);
    }
    CodeMirror.defineMode("erdos", function() {
      return ErdosMode;
    });
    editor = CodeMirror.fromTextArea(this.textarea[0], {
      lineNumbers: true,
      lineWrapping: true
    });
    editor.refresh();
    this.editor = editor;
    this.sidebar = sidebar;
    this.append(this.sidebar);
    if (elem) {
      elem.append(this);
    } else {
      $('body').append(this);
    }
    return this.addClass("theme-" + settings.theme);
  };

  return ErdosPad;

})(View);

module.exports = ErdosPad;

if (typeof window !== "undefined" && window !== null) {
  window.ErdosPad = ErdosPad;
}
