function includeLocalCSS(fileName) {
  document.write(`<link href='css/vendor/${fileName}' rel="stylesheet">`);
}

function includeLocalJS(fileName) {
  document.write(
    `<script type='text/javascript' src='js/vendor/${fileName}'><\/script>`
  );
}
