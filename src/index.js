import makeHTMLTemplate from './template.js';
import images from '../images/images.js';
// const imageArray = JSON.parse(images);


const imageList = document.getElementById('image-list');
// Grab array of objects
// forEach through list
images.forEach(imageObject => {
    const dom = makeHTMLTemplate(imageObject);
    console.log(dom.src);
    imageList.appendChild(dom);
});
    //Create html template 
    //append to imageList Node
