(BAN)hexo-theme-nameless  
================

Seen once, remember more. :clap:　  

![Priview](http://ozep0l2jz.bkt.clouddn.com/1510661538.jpg)  

             
关于主题：
----------------
- ~本主题不适合新手使用，使用前请确保具有前端基础.~
- ~Twitter风格的banner.~
- ~全站Pjax. 上方的加载条仿写了[NProgress](https://github.com/rstacruz/nprogress).~
- 支持自适应，安卓移动端体验较差，~~后续随缘优化~~ **应该不会更新了**.
- ~已内置[Disqus评论系统](https://disqus.com)，需在站点根目录下的`_config.yml`设置`disqus_shortname`.~
- ~兼容问题还没测试过... 如有问题请提[issues](https://github.com/LonelyLiaR/hexo-theme-nameless/issues). ~ 
- **18.07.13 应该不会更新了. ~因为接下来会有一个可以代替nameless的nameless.**~ 
- **[Nameless, 这是你从来没有玩过的全新版本！](https://github.com/LonelyLiaR/nameless)**

           
               
Version
----------------
v1.0  

            
             
Quick Start  
----------------
**Install**  

``` bash
$ git clone https://github.com/LonelyLiaR/hexo-theme-nameless themes/nameless
```

             
**Deploy**

修改站点根目录下的`_config.yml`中的`theme`值为`nameless`.  

             
**Update**  

``` bash
cd theme/nameless  
git pull
```

             
配置
----------------
**主题配置**  

主题配置文件在主题目录下的`_config.yml`，请根据自己需要修改使用。  

```
# 导航. 显示名对应主题目录下的languages配置. value为跳转url.
nav:
  home: '/'
  archives: '/archives'
  tags: '/tags'
  links: '/links'
  about: '/about'

# 标签. key为标签路由, value为标签名.
# 由于本人不喜欢路由里出现中文, 但标签名又得有中文.
tags:
  example: 例子

# 社交网络. 显示名对应主题目录下的languages配置. value为跳转url.
socials:
  github: https://github.com/LonelyLiaR
  twitter: https://twitter.com/LonelyLiaR8523
  zhihu: https://www.zhihu.com/people/loleon-8523
  cloudmusic: http://music.163.com/#/user/home?id=64860394
  weibo: http://weibo.com/lonelyliar8523

# 友链. key为代号.
# value中: nickname为昵称; desc为概述; url为友链地址;
# banner(横幅)和avatar(头像)均为Boolean值, true时显示自主设置的图片, false时显示默认样式.
# 自主设置的banner和avatar需在站点根目录下的links文件夹下的index文件夹里面新建一个文件夹
# 存放一张banner.png和avatar.png. 新建的文件夹名与key一样.
# 如下面的例子, key为example, 所以在站点根目录下的links文件夹下的index文件夹里新建
# 一个example文件, 并放入banner.png和avatar.png就完成自主设置了.
friends:
  example: { nickname: 'nickname', desc: 'desc', url: 'https://www.google.com/', banner: false, avatar: false }

# 显示的icon. favicon为网页图标. appleicon为iOS系统上的Safari设为桌面程序是显示的图标.
favicon: /favicon.ico
appleicon: /apple.ico
```

             
             
**博客与个人的信息, 头像和banner图的配置**  

博客与个人的信息请在站点根目录下的`_config.yml`中修改.  
头像和banner图请在主题目录下的`source/images`中替换`avatar.png`和`banner.png`即可.

             
             
**标签, 友链和关于页面的配置**  

请在站点根目录下的`source`文件夹中新建文件夹`tags`、`links`、`about`.  
并在各个文件夹中新建一个`index.md`, 设置`layout`属性为该文件夹的名字.  
关于页的内容请在`about`文件夹下的`index.md`中进行编写.

             
             
**语言配置**  

现只支持两种语言. 简体中文与英文. 默认为英文.  
如需切换请修改站点根目录下的`_config.yml`中`language`的值.  
语言配置文件在主题目录下的`languages`的文件夹内，请根据自己需要修改使用。
