import HyperExpress from 'hyper-express';
import LiveDirectory from 'live-directory';
const Server = new HyperExpress.Server();

// Create a LiveDirectory instance to virtualize directory with our assets
// Specify the "path" of the directory we want to consume using this instance as the first argument
const LiveAssets = new LiveDirectory('./build/*', {
    // Optional: Configure filters to ignore or include certain files, names, extensions etc etc.
    filter: {
        keep: {
            // Something like below can be used to only serve images, css, js, json files aka. most common web assets ONLY
            extensions: ['html', 'css', 'js', 'json', 'png', 'jpg', 'jpeg']
        },
        ignore: (path) => {
            // You can define a function to perform any kind of matching on the path of each file being considered by LiveDirectory
            // For example, the below is a simple dot-file ignore match which will prevent any files starting with a dot from being loaded into live-directory
            return path.startsWith('.');
        },
    },

    // Optional: You can customize how LiveDirectory caches content under the hood
    cache: {
        // The parameters below can be tuned to control the total size of the cache and the type of files which will be cached based on file size
        // For example, the below configuration (default) should cache most <1 MB assets but will not cache any larger assets that may use a lot of memory
        // In the scenario that LiveDirectory encounters an uncached file, It will s
        max_file_count: 250, // Files will only be cached up to 250 MB of memory usage
        max_file_size: 1024 * 1024, // All files under 1 MB will be cached
    },
});

// Create static serve route to serve frontend assets
Server.get('/*', (request, response) => {
    // Strip away '/assets' from the request path to get asset relative path
    // Lookup LiveFile instance from our LiveDirectory instance.
    // const path = request.path.replace('/', '');
    const file = LiveAssets.get(request.path);
    
    // Return a 404 if no asset/file exists on the derived path
    if (file === undefined) return response.status(404).send();

    const fileParts = file.path.split(".");
    const extension = fileParts[fileParts.length - 1];

    // Retrieve the file content and serve it depending on the type of content available for this file
    const content = file.content;
    if (content instanceof Buffer) {
        // Set appropriate mime-type and serve file content Buffer as response body (This means that the file content was cached in memory)
        return response.type(extension).send(content);
    } else {
        // Set the type and stream the content as the response body (This means that the file content was NOT cached in memory)
        return response.type(extension).stream(content);
    }
});

// Some examples of how the above route will map & serve requests:
// [GET /assets/images/logo.png] >> [/var/www/website/files/images/logo.png]
// [GET /assets/js/index.js] >> [/var/www/website/files/js/index.js]
