/**
 * Display sidebar
 */
function showSidebar() {
    var html = HtmlService.createHtmlOutputFromFile('html/sidebar')
        .setTitle('My custom sidebar')
        .setWidth(300);
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
        .showSidebar(html);
  }