import multer from "multer";

let storageConfiguration = multer.diskStorage({
    destination:(req , file , cb) =>{
        cb(null , 'public/images/')
    },
    filename:(req , file , cb) =>{
        let name = Date.now() + "-" + file.originalname;
        cb(null , name);
    },
});

export const uploadFile = multer({storage : storageConfiguration});