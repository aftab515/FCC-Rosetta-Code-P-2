function longestString(strings) {
  const maxLength = strings.reduce(
    (maxLength, string) => Math.max(maxLength, string.length),
    0);
  return strings.filter((string) => string.length == maxLength)
}