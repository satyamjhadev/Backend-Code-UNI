import path from 'path'

// Your code goes here
export function fileName(filepath){
 return path.basename(filepath);
    }
export function getExt(filepath){
        return path.extname(filepath); }



        export function changeExtension(filepath,newExt){
    return path.join(
        path.dirname(filepath),path.basename(filepath,path.extname(filepath))+newExt
    )
}
