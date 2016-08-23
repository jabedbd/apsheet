var page = new tabris.Page({
  title: "Appsheet",
  topLevel: true
});



var webview = new tabris.WebView({
  layoutData: {left: 0, top: 0, right: 0, bottom: 0}
}).appendTo(page);

function loadUrl() {
  webview.set("url", "http://pacificict.net/googleapp");
}

loadUrl();
page.open();
