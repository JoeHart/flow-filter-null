// @flow strict

export default function filterNulls<T>(array: Array<?T>): Array<T> {
  return array.filter((item) => item != null).filter(Boolean);
}
