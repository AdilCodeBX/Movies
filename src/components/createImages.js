/**
 * Create a flight element.
 *
 * @param {object} flight - Flight object.
 * @returns {HTMLElement} - Flight element.
 */
const createImages = (image) => {
    // image box
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');
    imageBox.id = image.id;

    // image

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    // title
    const title = document.createElement('h6');
    title.innerText = image.title;

    imageBox.append(img, title);

    return imageBox;
};

export default createImages;
