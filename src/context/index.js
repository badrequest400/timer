import { createContext } from 'react';

const Context = createContext({
  context: {},
  setContext: function (ctx) {
    this.context = ctx;
  }
});

export default Context;
