export const cutLongText = (text: string, max: number): string => {
  if (text.length > max) {
    return text.slice(0, max) + '...'
  } else {
    return text
  }
}
