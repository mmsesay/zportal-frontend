
const withImages = require('next-images')
// module.exports = withImages()

const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')

// module.exports = withCSS(withImages({
//     webpack(config){
//         return config
//     }
// }))

module.exports = withPlugins(
    [
        withImages,
        withCSS 
    ]
)

// module.exports = withImages() 
