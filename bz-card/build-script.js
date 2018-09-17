const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/bz-card/runtime.js',
        './dist/bz-card/polyfills.js',       
        './dist/bz-card/scripts.js',
        './dist/bz-card/main.js',
    ]
    
    await fs.ensureDir('elements');
    
    await concat(files, './dist/bz-card/card.bundle.js');
    console.info('Elements created successfully!');

})()