/** Ambient module declarations for non-TS imports. */

declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.css'
