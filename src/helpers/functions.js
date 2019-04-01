export function textEllipsis(text, maxLength) {
  if (text.length > maxLength) {
    if (text.substring(0, maxLength).split(' ').some(word => word.length > (2 / 3) * maxLength)) {
      return `${text.substring(0, (2 / 3) * maxLength)}...`;
    }
    return `${text.substring(0, maxLength - 3)}...`;
  }
  return text;
}
