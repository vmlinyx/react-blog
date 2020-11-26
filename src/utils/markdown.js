import Markdown from 'markdown-it';

const md = new Markdown();

export default function render(rawData) {
  // TODO 配置
  return md.render(rawData);
}
