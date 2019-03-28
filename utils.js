/**
 * Include file to a Template
 * @param {String} filename 
 * @return {String} Content
 * @tutorial https://developers.google.com/apps-script/guides/html/best-practices#separate_html_css_and_javascript
 */
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }