import path from 'path';
import { fileURLToPath } from 'url';

import Metalsmith from 'metalsmith';
import markdown from '@metalsmith/markdown';
import permalinks from '@metalsmith/permalinks';
import tojson from 'metalsmith-to-json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
    
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