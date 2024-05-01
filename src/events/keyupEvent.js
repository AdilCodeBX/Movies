import dom from '../dom.js';
import filterImagesHandler from '../handlers/filterImagesHandler.js';
const KeyupEvent = () => {
    dom.input.addEventListener('keyup', () => {
        const value = dom.input.value;
        filterImagesHandler(value);
    });
};

export default KeyupEvent;
