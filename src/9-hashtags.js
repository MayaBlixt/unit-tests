export const hashtags = (text) => {
  const hashtags = text.split(' ').filter(v => v.startsWith('#'))
  return hashtags
}