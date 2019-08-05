const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;
//获取要发布的包版本号
const publishVersion = JSON.parse(fs.readFileSync(path.resolve(__dirname,'./lerna.json'))).version;
var npmTag = 'latest';
if(~publishVersion.indexOf('-')) {
  npmTag = publishVersion.split('-').reverse().join('-');
}
const publishCmd = `npm publish --tag ${npmTag}`;
const pkgsDir = path.resolve(__dirname,'packages');
//获取支持头条小程序要发布的包
const publishTtPkgNames = getPublishPackages();
publishTtPkgs();
function getPublishPackages(){
  debugger;
  const npmList = [];
  const packages = fs.readdirSync(pkgsDir);
  packages.forEach(item => {
    if(!item.startsWith('.') && item !== 'cml-tt-project'){
      let pkgJsonPath = path.join(pkgsDir,item,'package.json');
      let result = JSON.parse(fs.readFileSync(pkgJsonPath,{encoding:'utf-8'}));
      if(result.name){
        npmList.push(result.name)
      }else{
        throw new Error(`${item}中的package.json文件没有定义name字段`)
      }
    }
  });
  return npmList;

}
//发布除了cml-tt-project之外的npm包，首先将各个子包的依赖替换，然后执行发布；
function publishTtPkgs(){
  const packages = fs.readdirSync(pkgsDir);
  packages.forEach((item) => {
    if(!item.startsWith('.')){
      if(item !== 'cml-tt-project'){
        let subPath = path.join(pkgsDir,item);
        let subPkgPathJSON = path.join(pkgsDir,item,'package.json');
        //更新要发布的子包中的依赖
        updatePkgJson(subPkgPathJSON);
        console.log(`publish ${item}@${publishVersion}`);
        execSync(`cd ${subPath}; ${publishCmd}`)
      }else{ //cml-tt-project只更新依赖不执行发布命令
        let subPkgPathJSON = path.join(pkgsDir,item,'package.json');
        //更新要发布的子包中的依赖
        updatePkgJson(subPkgPathJSON);
      }
    }
  })
}
function updatePkgJson(jsonPath){
  let result = JSON.parse(fs.readFileSync(jsonPath),{encoding:"utf-8"});
  result.version = publishVersion;
  let dependencies = result.dependencies;
  let devDependencies = result.devDependencies;
  dependencies && Object.keys(dependencies).forEach((key) => {
    if(publishTtPkgNames.includes(key)){
      dependencies[key] = publishVersion;
    }
  });
  devDependencies && Object.keys(devDependencies).forEach((key) => {
    if(publishTtPkgNames.includes(key)){
      devDependencies[key] = publishVersion;
    }
  });
  fs.writeFileSync(jsonPath, JSON.stringify(result,null,2),{encoding:'utf8'})
}