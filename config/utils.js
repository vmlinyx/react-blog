const path = require('path');
const fs = require('fs');
const globby = require('globby');
const mkdirp = require('mkdirp');
const tempPath = path.resolve(__dirname, '.temp');

mkdirp(tempPath);

const tempCache = new Map();
function writeTemp(file, content) {
  // cache write to avoid hitting the dist if it didn't change
  const cached = tempCache.get(file);
  if (cached !== content) {
    fs.writeFileSync(path.join(tempPath, file), content);
    tempCache.set(file, content);
  }
}

module.exports = async function prepare() {
  const options = await resolveOptions();

  // * 2. 动态生成路由
  const routesCode = await genRoutesFile(options);

  console.log('-> routesCode:', routesCode);

  // 3.
  // const dataCode = `export const siteData = ${JSON.stringify(
  //   options.siteData,
  //   null,
  //   2
  // )}`;
  // console.log('-> dataCode:', dataCode);
  writeTemp('routes.js', routesCode);
  return options;
};

async function genRoutesFile({ siteData: { pages }, sourceDir, pageFiles }) {
  function genRoute({ path: pagePath }, index) {
    const file = pageFiles[index];
    // const filePath = path.resolve(sourceDir, file);
    const filePath = './../../docs/' + file;
    // TODO 动态生成 React 组件 + 动态生成路由

    console.log('filePath->', filePath);

    /**
     * path: 前端路由
     * filePath: 文件路径
     * component: 后期在 Router.js 注入
     */
    const code = `
    {
      title: '${fileToTitle(file)}',
      path: '/pages/${fileToComponentName(file)}',
      filePath: ${JSON.stringify(filePath)}
    }`;
    return code;
  }

  return `export const routes = [${pages.map(genRoute).join(',')}\n]`;
}

async function resolveOptions() {
  const sourceDir = path.resolve(__dirname, '../docs');
  const configPath = path.resolve(sourceDir, 'config.js');
  const siteConfig = fs.existsSync(configPath) ? require(configPath) : {};
  const base = siteConfig.base || '/';

  console.log(`-> sourceDir: `, sourceDir);
  console.log(`-> configPath: `, configPath);
  console.log(`-> siteConfig: `, siteConfig);

  const options = {
    siteConfig,
    sourceDir,
    outDir: path.resolve(siteConfig.dest),
    publicPath: base,
    pageFiles: sort(await globby(['**/*.md'], { cwd: sourceDir })),
    pagesData: null,
    themePath: null,
    notFoundPath: null,
    useDefaultTheme: true,
  };

  console.log(`-> pageFiles: `, options.pageFiles);

  const pagesData = options.pageFiles.map((file) => {
    const data = {
      path: fileToPath(file),
    };

    // // extract yaml frontmatter
    // const content = fs.readFileSync(path.resolve(sourceDir, file), 'utf-8');
    // const frontmatter = yaml.loadFront(content);
    // // infer title
    // const title = inferTitle(frontmatter);
    // if (title) {
    //   data.title = title;
    // }
    // const headers = extractHeaders(frontmatter.__content, ['h2', 'h3']);
    // if (headers.length) {
    //   data.headers = headers;
    // }
    // delete frontmatter.__content;
    // if (Object.keys(frontmatter).length) {
    //   data.frontmatter = frontmatter;
    // }
    return data;
  });

  options.siteData = {
    title: siteConfig.title || '',
    description: siteConfig.description || '',
    base: siteConfig.base || '/',
    pages: pagesData,
    themeConfig: siteConfig.themeConfig || {},
  };

  console.log('-> siteData:', options.siteData);

  return options;
}

// helper function

function sort(arr) {
  return arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

const indexRE = /\breadme\.md$/i;
const extRE = /\.md$/;

function fileToPath(file) {
  if (isIndexFile(file)) {
    // README.md -> /
    // foo/README.md -> /foo/
    return '/' + file.replace(indexRE, '');
  } else {
    // foo.md -> /foo.html
    // foo/bar.md -> /foo/bar.html
    return `/${file.replace(extRE, '').replace(/\\/g, '/')}.html`;
  }
}
function isIndexFile(file) {
  return indexRE.test(file);
}

function fileToTitle(file) {
  return file.replace(extRE, '');
}

function fileToComponentName(file) {
  let normalizedName = file.replace(/\/|\\/g, '-').replace(extRE, '');
  if (isIndexFile(file)) {
    normalizedName = normalizedName.replace(/readme$/i, 'index');
  }
  const pagePrefix = /\.md$/.test(file) ? `page-` : ``;
  return `${pagePrefix}${normalizedName}`;
}
