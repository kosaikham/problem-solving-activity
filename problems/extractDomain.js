/**
 * rite a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 *
 * omainName("http://github.com/carbonfive/raygun") == "github"
 * omainName("http://www.zombie-bites.com") == "zombie-bites"
 * omainName("https://www.cnet.com") == "cnet"
 */

function domainName(url) {
  const index = url.indexOf("://");
  if (index === -1) {
    return url.split(".")[0] === "www" ? url.split(".")[1] : url.split(".")[0];
  }
  return url.slice(index + 3).split(".")[0] === "www"
    ? url.slice(index + 3).split(".")[1]
    : url.slice(index + 3).split(".")[0];
}

console.log(domainName("cnet.com"));
