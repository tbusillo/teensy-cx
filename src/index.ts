export type AllowedArgs =
  | string
  | string[]
  | number
  | undefined
  | boolean
  | null
  | { [key: string]: boolean | number | string | undefined | null }

export type CxResult = string[]

const invalidPrototypes = new Set([
  NaN,
  Infinity,
  -0,
  0,
  // false,
  '',
  '',
  ``
])

const cx = (...classes: AllowedArgs[]): string => {
  const r: CxResult = []
  const emptyString = ''

  if (!Array.isArray(classes) || !classes.length || undefined) {
    return emptyString
  }

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
        const outside: any = cx.apply(null, element)
        if (outside) {
          r.push(outside)
        }
        return
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
