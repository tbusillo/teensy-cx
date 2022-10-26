export type AllowedArgs = string | { [key: string]: boolean | number | string }

export interface CxResult {
  res: string[]
}

const invalidPrototypes = new Set([
  null,
  undefined,
  NaN,
  Infinity,
  -0,
  0,
  0n,
  false,
  '',
  '',
  ``
])

const cx = (...classes: AllowedArgs[]): string => {
  const r: CxResult['res'] = []

  if (!Array.isArray) return ''

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

  return [...r].filter(Boolean).join(' ')
}

export default cx
