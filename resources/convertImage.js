var Jimp = require("jimp");

function convertImage(path) {
    Jimp.read(path)
        .then(oldImage => {
            new Jimp(oldImage.bitmap.width,oldImage.bitmap.height,0x00000000,(err,newImage) => {
                for (var x = 0;x<oldImage.bitmap.width;x++) {
                    for (var y = 0;y<oldImage.bitmap.height;y++) {
                        var color = oldImage.getPixelColor(x,y);
                        if (color != 0xFF00FFFF) {
                            newImage.setPixelColor(color, x,y);
                        }
                    }
                }
                
                var newName = path.substr(0,path.lastIndexOf("."))+".png";

                newImage.write(newName);
            })
            
        })
        .catch(err => {
            console.error("Something went wrong");
            console.error(err);
        })
}

export default {
    convertImage: convertImage
}