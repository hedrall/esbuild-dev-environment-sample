import * as fs from 'fs';
import * as path from 'path';
// @ts-ignore
import dayjs from 'dayjs';
import { build, BuildOptions } from 'esbuild';

// 環境変数を確認
const NODE_ENV = process.env.NODE_ENV ?? 'development';
const isDev = NODE_ENV === 'development';
const watch = process.env.WATCH === 'true' || false;
const metafile = process.env.META_FILE === 'true' || false;

// webpackのdefine pluginと同じ
const define: BuildOptions['define'] = {
  // コード上の `process.env.NODE_ENV` を `development` などで置き換える
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
};

// ビルド処理
build({
  define,
  // Reactのメインファイル
  entryPoints: [path.resolve(__dirname, 'src/index.tsx')],
  bundle: true,
  // ビルドされたバンドルの出力先
  outfile: 'public/index.js',
  minify: !!process.env.MIN || !isDev,
  sourcemap: true,
  platform: 'browser',
  target: ['chrome58'],
  treeShaking: true,
  watch: watch && {
    // watchモードで起動したい場合は、再ビルドのcallbackを渡す
    onRebuild(err, result) {
      console.log(`${dayjs().format('HH:mm:ss')}: 再ビルド完了`);
    },
  },
  metafile
}).then(result => {
  console.log(`ビルド完了`);

  if (metafile) {
    fs.writeFileSync('meta.json', JSON.stringify(result.metafile, null, '  '));
  }
}).catch(() => process.exit(1));
