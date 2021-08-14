// copy file

const { files, utils } = require("@irim/cli-base");

async function copyFiles(source, target) {
  await files.copyDir({
    src: source,
    dist: target,
    exclude: /\.jsx?|\.tsx?/,
  });
}

(async () => {
  utils.print("info", "开始复制文件...");
  await copyFiles("src", "cjs");
  await copyFiles("src", "esm");

  utils.print("success", "文件复制完成!");
})();
