import path from 'path';
import { fileURLToPath } from 'url';

import Metalsmith from 'metalsmith';
import markdown from '@metalsmith/markdown';
import collections from '@metalsmith/collections';
import layouts from '@metalsmith/layouts';
import assets from 'metalsmith-static-files';
import postcss from '@metalsmith/postcss';
import permalinks from '@metalsmith/permalinks';
import tojson from 'metalsmith-to-json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prod = process.env.NODE_ENV === 'production';
    
Metalsmith(__dirname)         // __dirname defined by node.js:
  .source('./content')            // source directory
  // .destination('./dist/data')     // destination directory
	.destination('./build/')
  .clean(true)                // clean destination before
	.metadata({                 // add any variable you want & use them in layout-files
    sitename: "Samuel Allen Personal Site",
    siteurl: "https://samuel-allen.com/",
    description: "Just a guy who does stuff and things",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/"
  })
	.use(
		postcss({
			pattern: '**/*.css',
			plugins: {
				'autoprefixer': {browsers: ['last 2 versions']},
				'cssnano': prod ? {} : false
			},
			map: true
		} )
	)
	.use(collections({
		posts: {
			pattern: 'posts/**/*.md',
			sortBy: 'date',
			reverse: true
		},
		music: {
			pattern: 'music/**/*.md',
			sortBy: 'date',
			reverse: true
		},
		cv: {
			pattern: 'cv/**/*.md',
			sortBy: 'endYear',
			reverse: true
		},
	}))
	.use(
		assets( {
			source: 'src/assets/',
			destination: 'assets/'
		} )
	)
  .use(markdown())            // transpile all md into html
	.ignore('layouts')
	.use(
		layouts({
			patterns: '**/*.njk',
			directory: 'src/layouts',
		})
	)
	
  // .use(tojson({
  //   outputPath : '',
  //   createIndexes : true,
  //   indexPaths : ['posts', 'music', 'cv', 'pages'],
  //   onlyOutputIndex : true
  // }))
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });
