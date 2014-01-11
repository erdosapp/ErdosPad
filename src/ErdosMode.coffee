ErdosMode =
  TOKENS:
    "heading":  /#/  
    "currency": /\$/  
    "eq":       /\=/ 
    "output":   /\=>/
    "operator": /[\/\+\-\*]/
    "ol":       /\-/ 
    "num":      /\d/ 

  startState: ->
    inNum: false

  token: (stream, state) ->
    res = 'unknown'

    if state.inNum
      stream.eat(@TOKENS["num"])
      res = 'num'
      return res

    for token, regex of @TOKENS
      if stream.peek().match(regex)
        res = token
        stream.next()
        return res
        break

    if res == 'num'
      state.inNum = true
      stream.eat(@TOKENS["num"])
      return res

    if res == 'eq'
      if stream.peek().match(@TOKENS['output'])
        res = 'output'
        stream.next()
        return res
   
    stream.next()
    return res

module.exports = ErdosMode
