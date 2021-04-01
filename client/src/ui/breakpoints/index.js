export const measures = {
  sm: 0,
  md: 400,
  lg: 768
}

export const rules = {
  sm: `(min-width: ${measures.sm}px)`,
  smOnly: `(max-width: ${measures.md - 1}px)`,
  md: `(min-width: ${measures.md}px)`,
  mdOnly: `(min-width: ${measures.md}px) and (max-width: ${measures.lg - 1}px)`,
  lg: `(min-width: ${measures.lg}px)`
}
