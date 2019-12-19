/*这个node脚本用于自动生成项目中对于 commit 的配置
1.首先检查是否有package.json文件
2.然后执行安装
npm install --save-dev husky @commitlint/cli @commitlint/config-angular 
3.写commit 配置文件
4.更新package.json字段
*/

const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');
const _ = {};
_.isFile = function(filePath){
  return fs.existsSync(filePath) && fs.statSync(filePath).isFile()
};
console.log(`准备在${__dirname}目录下配置commit规范`);
const pkgPath = path.join(__dirname,'package.json')
if(_.isFile(pkgPath)){
  execSync(`npm install --save-dev husky @commitlint/cli @commitlint/config-angular`);
  execSync(`echo "module.exports = {extends: ['@commitlint/config-angular']};" > commitlint.config.js`);
  const pkgJSON = JSON.parse(fs.readFileSync(pkgPath,{encoding:'utf8'}));
  if(!pkgJSON.husky){
    pkgJSON.husky = {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
      }
    }
  }else{
    if(pkgJSON.husky && pkgJSON.husky.hooks){
      pkgJSON.husky.hooks['commit-msg'] = "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
  
  fs.writeFileSync(pkgPath,JSON.stringify(pkgJSON,'',2))

  console.log('commit 规范配置完毕')
}else{
  console.log(`当前目录${__dirname}不存在package.json。`)
  process.exit(1);
}
