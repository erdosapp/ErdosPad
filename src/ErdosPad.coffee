jquery     = require('jquery')(window)
Sidebar    = require('./Sidebar')
ErdosMode  = require('./ErdosMode')
CodeMirror = require('code-mirror')
View = require('space-pen').View

class ErdosPad extends View
  @content: ->
    @div =>
      @textarea outlet: 'textarea', =>

  initialize: (elem, settings) ->
    sidebar = new Sidebar()
    
    defaultSettings =
      theme: 'spacegrey'
      content: undefined

    $.extend settings, defaultSettings

    if settings.content
      @textarea.val(settings.content)

    CodeMirror.defineMode "erdos", -> ErdosMode

    editor = CodeMirror.fromTextArea @textarea[0],
      lineNumbers: true
      lineWrapping: true

      # onUpdate: =>         
        # parser = erdos.mathParser()
# 
        # for i in [0 ... editor.lineCount()]
        #   val = ''
        #   try
        #     val = parser.eval(editor.getLine(i))
        #     val ?= ''
        #   catch e
        #     console.error e.message
# 
        #   # Push out result to sidebar here
        #   sidebar.addResult(i, val)
# 
    editor.refresh()
        
    @editor  = editor
    @sidebar = sidebar
    @.append(@sidebar)
    
    if elem
      elem.append(@)
    else
      $('body').append(@) 

    @.addClass("theme-#{settings.theme}")

module.exports   = ErdosPad
window?.ErdosPad = ErdosPad
