/*
 * @Author: wuaixiaoyao 
 * @Date: 2020-09-22 13:30:59 
 * @Last Modified by: wuaixiaoyao
 * @Last Modified time: 2020-09-22 17:01:34
 */

// FileListPlugin 最终生成 fileList.md 文件
 class FileListPlugin {
   apply (compiler) {
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      let fileList = 'in this buld: \n \n'
      for (let filename in compilation.assets) {
        fileList += '- ' + filename  + ' by wuaixiaoyao\n'
      }
      console.log('fileList:', fileList);
      // 作为一个新文件 插入到webpack 构建中
      compilation.assets['fileList.md'] = {
        source: function () {
          return fileList;
        },
        size: function () {
          return fileList.length;
        }
      };
      callback();
    })
   }
 } 
 module.exports = FileListPlugin