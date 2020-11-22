const markdown = require('markdown-it');
module.exports = function (src) {
  // TODO 增加更多插件支持，如代码高亮、链接处理
  const md = markdown({
    html: true,
    typographer: true,
  });
  const html = md.render(src, {});

  return `<span>${html}</span>`;
};
