Line  = require('./Line')
View  = require('space-pen').View

class Sidebar extends View
  @content: ->
    @div =>

  lines: undefined

  initialize: () ->
    @lines = []

  add: (line, val) ->
    if @lines[line] 
      return @update(line, val)

    height =  $(".CodeMirror-gutter-text pre:nth-child(#{i + 1})").height()
    @lines[line] = new Line(val)
    line = @lines[line]

    @list.append(line)

  update: (num, val) ->
    line = @lines[num]
    line.update(val)

module.exports = Sidebar
