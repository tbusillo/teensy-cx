export type AllowedArgs = string | { [key: string]: boolean | number | string }

export type CxResult = string[]

const invalidPrototypes = new Set([
  null,
  undefined,
  NaN,
  Infinity,
  -0,
  0,
  false,
  '',
  '',
  ``
])

const cx = (...classes: AllowedArgs[]): string | undefined => {
  const r: CxResult = []
  const emptyString = ''

  if (!Array.isArray(classes)) {
    return emptyString
  }

  classes
    .filter(e => !invalidPrototypes.has(typeof e as any))
    .map(element => {
      if (typeof element === 'string') {
        r.push(element)
      } else if (typeof element === 'object') {
        for (const key in element) {
          if (element[key]) {
            r.push(key)
          }
        }
      }
      return
    })
  if (!r || r.length === 0) {
    return emptyString
  }
  return [...r].filter(Boolean).join(' ') || emptyString
}

export default cx
