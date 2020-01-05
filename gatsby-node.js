const chapterTemplate = path.resolve('src/templates/chapter.js')


function replacePath(pagePath) {
    return pagePath === `/` ? pagePath : pagePath.replace(/\/$/, ``)
}