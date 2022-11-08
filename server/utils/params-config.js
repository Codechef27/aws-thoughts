const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];


    const imageParams = {
        Bucket: 'user-images-5e8ff81d-45cf-4094-9844-47ffc1fc7002',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
        ACL: 'public-read', // allow read access to the files. 
    };

    return imageParams;
};

module.exports = params;