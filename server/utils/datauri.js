import DataUriParser from 'datauri/parser.js';

import path from 'path';

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    const formatted = parser.format(extName, file.buffer);
    console.log("Formatted Data URI object: ", formatted);
    return formatted.content;
}

export default getDataUri;