const { postcss } = require("tailwindcss");

//craco.config.js
module.exports={
    style:{
        postcss:{
            plugins:[
                require('tailwindcss'),
                require('autoprefixer')
            ],
        },
    },
}