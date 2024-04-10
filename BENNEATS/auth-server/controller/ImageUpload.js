const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dcqzcpcvw',
    api_key: 416291649173876,
    api_secret: "xajInv6bzEQQEA8sCVaFdSuKN_0",

});

const imageUploadController  = async (req, res) => {
    try {
    const result =await cloudinary.uploader.upload(req.files.image.path) ;
        res.json({
            url:result.secure_url,
            public_id:result.public_id,
        });
    }catch (error) {
        console.log(error);
    }
};

module.exports = {imageUploadController};