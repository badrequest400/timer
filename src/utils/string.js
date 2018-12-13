
// TODO regex is broken

export const capitalise = str =>
  `${str.slice(0,1).toUpperCase()}${str.slice(1)}`

export const camelToTitle = str => {
  const [ match, lower, ...rest ] = /([a-z]*)(([A-Z][a-z0-9]+)+)/.match(str);
  return [ capitalise(lower), ...rest ].join(' ');
}
