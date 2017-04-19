chrome.browserAction.onClicked.addListener(function(tab) {
    //Your code below...
    var tabUrl = tab.url;
    var splitUrl = tabUrl.split('/');
    var temp_str = splitUrl[2] + ".ezproxy.auckland.ac.nz";
    splitUrl[2] = temp_str;
    var joinedUrl = splitUrl.join("/");
    chrome.extension.getBackgroundPage().console.log("redirected to the UoA ezproxy domain! happy researching 🙃");
    //Update the url here.
    chrome.tabs.update(tab.id, {url: joinedUrl});
});
