/**
 * Application entry point
 */

import $ from 'jquery';

import GitHub from 'github-api';

import 'styles/index.scss';

// unauthenticated client
const github = new GitHub();
console.log(github);
/*let gist = gh.getGist(); // not a gist yet
gist.create({
    public: true,
    description: 'My first gist',
    files: {
        "file1.txt": {
            content: "Aren't gists great!"
        }
    }
}).then(function({data}) {
    // Promises!
    let createdGist = data;
    return gist.read();
}).then(function({data}) {
    let retrievedGist = data;
    // do interesting things
});*/

$(document).ready(function() {

});