const removeHashFromUrl = function(url) {
    if(url.indexOf('#') === -1){
      return url;
    }
    return url.substring(0, url.indexOf('#'));
}
module.exports = { removeHashFromUrl };