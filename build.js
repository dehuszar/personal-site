import path from 'path';
import { fileURLToPath } from 'url';

import Metalsmith from 'metalsmith';
import markdown from '@metalsmith/markdown';
import collections from '@metalsmith/collections';
import layouts from '@metalsmith/layouts';
import assets from 'metalsmith-static-files';
import postcss from '@metalsmith/postcss';
import permalinks from '@metalsmith/permalinks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prod = process.env.NODE_ENV === 'production';
    
Metalsmith(__dirname)         // __dirname defined by node.js:
  .source('./src/content')            // source directory
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
		education: {
			pattern: 'cv/education/*.md',
			sortBy: 'school',
			reverse: true
		},
		experience: {
			pattern: 'cv/experience/*.md',
			sortBy: 'startYear',
			reverse: true
		},
		skills: {
			pattern: 'cv/skills/*.md',
			sortBy: 'title',
		},
		tools: {
			pattern: 'cv/tools/*.md',
			sortBy: 'title',
		},
	}))
	.use(
		assets( {
			source: 'src/assets/',
			destination: 'assets/'
		} )
	)
	// .use() 
  .use(markdown())            // transpile all md into html
	.use(
		layouts({
			patterns: '**/*.njk',
			directory: 'src/layouts',
		})
	)
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });
