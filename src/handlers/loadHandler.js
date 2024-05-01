import data from '../data.js';
import dom from '../dom.js';
import createImages from '../components/createImages.js';

const loadHandler = () => {
    data.images.forEach((image) => {
        const imageBox = createImages(image);
        dom.images.append(imageBox);
    });
};

export default loadHandler;
