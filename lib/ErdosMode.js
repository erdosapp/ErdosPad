var ErdosMode;

ErdosMode = {
  TOKENS: {
    "heading": /#/,
    "currency": /\$/,
    "eq": /\=/,
    "output": /\=>/,
    "operator": /[\/\+\-\*]/,
    "ol": /\-/,
    "num": /\d/
  },
  startState: function() {
    return {
      inNum: false
    };
  },
  token: function(stream, state) {
    var regex, res, token, _ref;
    res = 'unknown';
    if (state.inNum) {
      stream.eat(this.TOKENS["num"]);
      res = 'num';
      return res;
    }
    _ref = this.TOKENS;
    for (token in _ref) {
      regex = _ref[token];
      if (stream.peek().match(regex)) {
        res = token;
        stream.next();
        return res;
        break;
      }
    }
    if (res === 'num') {
      state.inNum = true;
      stream.eat(this.TOKENS["num"]);
      return res;
    }
    if (res === 'eq') {
      if (stream.peek().match(this.TOKENS['output'])) {
        res = 'output';
        stream.next();
        return res;
      }
    }
    stream.next();
    return res;
  }
};

module.exports = ErdosMode;
