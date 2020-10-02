export const hackerSpeak = (words) => {

  if (words.charAt(1) === words.charAt(1).toUpperCase()) {

    const chars = {
      'A': '4',
      'E': '3',
      'I': '1',
      'O': '0',
      'S': '5'
    };
    return words.replace(/[AEIOS]/g, m => chars[m])
  }
  // should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5"
  const charsSmall = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5'
  };
  return words.replace(/[aeios]/g, m => charsSmall[m])



}