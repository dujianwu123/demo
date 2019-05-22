# demo

> demo练习

##一、初始化项目
> npm install fastclick --save 解决移动端click事件300ms的延迟

> 使用 --  fastClick.attach(document.body) 绑定在body上

> reast.css 清除默认样式

> border.css 解决1pxborder 如在下边框用1px边框，例如class="border-bottom"即可

> 配置styles_alias 别名 'styles_alias': resolve('src/assets/styles')

> 配置sass 用lang="scss"  npm i node-sass sass-loader --save-dev

##二、放大镜的计算公式

> mark/small-box = big-box/big-img 所以算出大的图片等于900pxx900px

> 20/(smallBox.width-mark.width) = x/(bigImg.width-bigBox.width)  已知20是mark的移动距离，x就是大图的移动距离为60，即大图的移动距离是mark的3倍