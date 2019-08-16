/**
 * This is the entry file for `npm run dist`
 */

/**
 * build for `dist/antd-mobile.css`
 * Note: Just import style. The pattern is different in `v0.9`. The difference is `(style\/)?`
 */
// 自动导入 components 里所有组件的 style/index.tsx? 文件
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);
req.keys().forEach((mod) => {
  req(mod);
});

// webpack 编译的入口文件
/**
 * build for `dist/antd-mobile.js`
 */
module.exports = require('./components/index');
