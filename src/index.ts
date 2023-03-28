export type AllowedArgs =
  | string
  | string[]
  | number
  | { [key: string]: boolean | number | string | undefined | null }

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

  if (!Array.isArray(classes) || !classes.length) {
    return emptyString
  }
  console.log(classes)
  classes
    .filter(e => !invalidPrototypes.has(typeof e as any))
    .map(element => {
      if (!element) {
        return
      }
      const type = typeof element
      if (type === 'string' || type === 'number') {
        r.push(element.toString())
      }

      if (Array.isArray(element) && element.length) {
        cx(...element)
      }

      if (type === 'object') {
        Object.keys(element).map(key => {
          if (element[key as keyof typeof element]) {
            r.push(key)
          }
        })
      }
      return
    })
  if (!r || r.length === 0) {
    return emptyString
  }
  return [...r].filter(Boolean).join(' ').toString() || emptyString
}

export default cx
