const fs = require('fs');

function arrangeFiles(path,dest) {
    if (dest.indexOf("/") != -1)
        dest = dest.replace(/\\/g,"/");
    if (dest[dest.length-1] != "/")
        dest = dest + "/";
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            if (file.toLowerCase().substring(file.length-4,file.length) != ".bmp")
                return;
            var lo = file.substr(0,file.lastIndexOf(".")).split("_");

            var fileType = lo.splice(lo.length-1,1)[0].toLowerCase();
            var fileName = lo.splice(lo.length-1,1)[0].toLowerCase();
            var binName = lo.splice(0,1)[0];
            
            var path = lo.join("/").toLowerCase();
            
            
            

            console.log(file + " = "+ dest+path+"/"+fileName+"."+fileType);
        });
    });
}

export default {
    arrangeFiles: arrangeFiles
}