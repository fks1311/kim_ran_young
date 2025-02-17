export default function decodedHTML(str) {
  return str.replace(/%20/g, " ");
}
