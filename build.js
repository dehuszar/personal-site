const Metalsmith  = require('metalsmith');
const markdown    = require('@metalsmith/markdown');
const permalinks    = require('@metalsmith/permalinks');
const tojson = require('metalsmith-to-json');
    
Metalsmith(__dirname)         // __dirname defined by node.js:
  .source('./content')            // source directory
  .destination('./dist/data')     // destination directory
  .clean(true)                // clean destination before
  .use(markdown())            // transpile all md into html
  .use(tojson({
    outputPath : '',
    createIndexes : true,
    indexPaths : ['posts', 'music', 'cv', 'pages'],
    onlyOutputIndex : true
  }))
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });