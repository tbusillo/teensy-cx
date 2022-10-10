type AllowedArgs = string | false | { [key: string]: boolean | number | string }

interface CxResult {
  resultingClasses: string[]
}

const cx = (...classes: AllowedArgs[]) => {
  const resultingClasses: CxResult[] = []

  if (Array.isArray(classes)) {
    classes.forEach(element => {
      if (typeof element === 'string') {
        resultingClasses.push(element as any)
      } else if (typeof element === 'object') {
        for (const key in element) {
          if (element[key]) {
            resultingClasses.push(key as any)
          }
        }
      }
      return
    })
  }

  return [...resultingClasses].filter(Boolean).join(' ')
}

export default cx
