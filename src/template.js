function makeHTMLTemplate(imgObject) {
    const html = `<li><h2>${imgObject.title}</h2><img src="${imgObject.url}"></li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
};

export default makeHTMLTemplate;