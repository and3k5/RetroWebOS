function extract(source,destination,callback) {
    if (typeof(source) !== "string")
        throw "Source must be string";
    if (typeof(destination) !== "string")
        throw "Destination must be string";
    exec("call ..\lib\resourcesextract\ResourcesExtract-x86.exe /Source "+source+" /DestFolder "+destination+" /ExtractIcons 1 /ExtractCursors 1 /ExtractBitmaps 1 /ExtractHTML 1 /ExtractManifests 1 /ExtractAnimatedIcons 1 /ExtractAnimatedCursors 1 /ExtractAVI 1 /ExtractTypeLib 1 /ExtractBinary 1 /FileExistMode 1 /OpenDestFolder 0",
        (err, stdout, stderr) => { 
            if (err) {
                throw err;
            }
            callback();
        });
}

export default {
    extract: extract
}