import fs from "fs";
import path from "path";

const docsDirectory = path.normalize(path.join(process.cwd(), "docs"));
const mdDirectory = path.normalize(path.join(process.cwd(), "docs/md"));

function doGetAllPostFiles(filePath) {
  let allFilePaths = [];
  if (fs.existsSync(filePath)) {
    const files = fs.readdirSync(filePath);
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let currentFilePath = filePath + "/" + file;
      let stats = fs.lstatSync(currentFilePath);
      if (stats.isDirectory()) {
        allFilePaths = allFilePaths.concat(doGetAllPostFiles(currentFilePath));
      } else {
        allFilePaths.push(path.normalize(currentFilePath));
      }
    }
  }
  return allFilePaths;
}

export function getAllPostFiles() {
  var filePaths = doGetAllPostFiles(mdDirectory);
  var filesStruct = filePaths.map((filePath) => {
    var subPath = filePath
      .substr(docsDirectory.length)
      .replace(/\.md$/, "")
      .replace(/(^\\)|(^\/)/, "");
    return subPath.split(/\\|\//);
  });
  return filesStruct;
}
