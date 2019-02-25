import './html-equal.js';

const test = QUnit.test;

function makeHTMLTemplate(imgObject) {
    const html = `<li><h2>${imgObject.title}</h2><img src="${imgObject.src}"></li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
};

test('make html fro template using interpolation', function(assert) {
    //arrange
    const imgObject = {
        title: 'UniWhal',
        src: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
    }
    const html = `<li><h2>${imgObject.title}</h2><img src="${imgObject.src}"></li>`;

    //act 
    const dom = makeHTMLTemplate(imgObject);
    //assert
    assert.htmlEqual(dom, 
        '<li><h2>UniWhal</h2><img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></li>'
    );
});