View = require('space-pen').View

class Line extends View
  @content: ->
    @li outlet: 'line', =>
    	@pre outlet: "txt", =>

  initialize: (content, height) ->
  	@txt.text(content.toSting())
  	@line.height(height)

module.exports = Line
