
HMCL 允许服务器管理员借助服务端自动更新整合包来实现自动分发整合包更新，这将大大方便有需要频繁更新游戏客户端 Mod、配置等信息的服务器管理员。
HMCL 需要服务器管理员额外提供一个 HTTP 服务器（只需要能提供静态文件服务，比如 Apache 和 Nginx 皆可）来提供检查整合包更新并允许 HMCL 下载更新文件。

## 第一步：导出整合包
在 HMCL 中右键做好的客户端版本，选择`导出整合包`：



选择导出为`服务器自动更新整合包`：



填写整合包信息，整合包下载链接前缀如何填写请看下文



选择需要包含在整合包内的文件后将产生整合包压缩文件

## 第二步：导入整合包

接着创建一个全新的空文件夹，将启动器复制进去



运行启动器，并导入刚才导出的整合包，导入完成后，这个文件夹（这里叫“新整合包”）可以打包发给玩家。

## 第三步，部署整合包更新服务器
你可以借助 Apache、Nginx 等支持静态文件的 HTTP 服务器软件提供文件。首先，决定好整合包下载链接前缀，比如我希望 HMCL 从远程服务器的 http://www.site.com/modpack 目录下存放整合包的更新信息，则在之前导出整合包的整合包下载前缀中填写 http://www.site.com/modpack。



上图为导出的服务器自动更新整合包压缩文件的内容，你需要将这个整合包解压到 http://www.site.com/modpack 下。也就是说，从 http://www.site.com/modpack/server-manifest.json 这个链接下载下来的文件必须和上图中整合包压缩文件中的 server-manifest.json 文件一致，并且，http://www.site.com/modpack/overrides 是一个文件夹，里面存放了整合包文件，比如：



整合包压缩文件 test.zip/overrides/mods/Advancement_Book-1.12-1.0.3.jar 文件必须可以从 http://www.site.com/modpack/overrides/mods/Advancement_Book-1.12-1.0.3.jar 该目录下载下来，且文件内容一致。那么至此更新服务器就部署完成了。

## 第四步，更新整合包

如果你需要更新整合包，那么将新的整合包经过第一步导出新的整合包压缩文件，并解压到类似 http://www.site.com/modpack 文件夹下即可完成新整合包的部署。


## 备注

> 文章原作者：[hy黑影](https://www.mcbbs.net/home.php?mod=space&uid=3051111)
> 转载：Zkitfly
> 部分内容进行了稍作打磨
> 本教程转载至[https://www.mcbbs.net/thread-1103864-1-1.html?action=printable](https://www.mcbbs.net/thread-1103864-1-1.html?action=printable)

## **前言**

- 我自己开设的服务器有很多不同的子服，每个子服的客户端版本呢都不相同，我又希望能整合到一个客户端里面；找了一圈发现那些辅助更新程序只能更新单个客户端版本，而且界面不太美观；甚至一度想自己开发启动器.........
- 这篇帖子的灵感来自于 **HMCL** 启动器的一个功能 **导出服务器自动更新整合包**，我觉得可以利用这个功能来代替一些自动更新的辅助程序。
- 整个功能的实现需要：**一台有公网IP的服务器、一个客户端整合包、HMCL启动器**；如果你都没有，那就换成RMB10元
- 本篇教程默认读者为 萌新，即**没有接触过HTTP服务器，网络应用开发，不懂linux系统，惧怕控制台程序**

## **教程**

### **第一步-租服务器（▲如果你有公网IP的服务器，请跳过这一步）**

- 百度搜索 [腾讯云学生机](https://cloud.tencent.com/act/campus?from=11821) 或 [阿里云学生机](https://promotion.aliyun.com/ntms/act/campus2018.html)
- 可以看到有10元/月 的套餐，如果是阿里云的话选**轻量型应用服务器**，腾讯云就只有一个套餐
- 系统请选择**CentOS 8.0 64位**，其他保持默认即可
- 再次确认是否是十元，是的话直接购买；不是的话可能是你已经买过学生套餐
- 第一次购买可能需要**实名认证**，按照提示操作即可，不需要担心安全问题，都是可靠的大公司

### 第二步-安装宝塔面板——CentOS 8.0系统

- 以腾讯云举例，阿里云同理

- 打开控制台面板，找到刚才租的学生机

  

- 选择重置密码

  

- 点击右侧**登入**按钮，按照说明填写你刚刚重置的密码；之后应该会看到类似这样的提示

  

- **不要慌，冷静。如果下面的部分教程失效请去[宝塔面板官网](https://www.bt.cn/)，点击Linux->立即安装**

  

- 回到控制台面板，我们需要开放一些通道让面板通过，选择**安全组**

  

- 点击**修改规则**，再点击**添加规则**

- 图1：

  

- 图2：

  

- **按照图中所写添加，想要安全的话按照图1，懒的话按照图2**

- 回到那个黑黑的界面里输入 `yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh` ，按下回车

- 这时会刷一大片大的英文，等他停下来的时候仔细看，最后一行在问你要不要安装（就是最后显示y/n），输入y并按下回车

- 耐心等待五分钟左右，直到出现这个字样

  

- 复制**外网面板地址**，在打开的页面中，用户名输入username后面的内容，密码输入password后面的内容

- 点击登入，到此为止面板按照完成

### **第三步-搭建HTTP静态文件服务器**

- 打开刚刚的宝塔面板，一般都会有提示安装套件，选择**nginx套装**安装

- 等待安装完成后，选择**网站**，点击**添加网站**

  

- 在弹出的页面填写网站IP，就是地址栏里面的那个；比如：我的是 https://233.88.233.44:8888/site ,那么我就填233.88.233.44

- 另外，**租vps的同学请找服务商索要ip地址和开放的端口**，比如我要到的是123.21.123.21:6666，那我就把这个填上去

  

- **其他保持不变，到此为止你已经搭建好了HTTP静态文件服务器✔**

### **第四步-制作整合包**

- 使用HMCL打开你的MC客户端

- 选择你的游戏版本，点击**导出整合包**

  

- 选择**服务器自动更新整合包**

- 填写相关信息：

  

- 整合包下载链接前缀：比如我刚刚在【[第三步-搭建HTTP静态文件服务器](###第三步-搭建HTTP静态文件服务器)】宝塔里填的是233.88.233.44，我希望能有版本区分，这个版本代号是a；那么我就填https://233.88.233.44/a， **vps注意，端口号也要写▲**

- 版本号写1.0 ，以后更新就写2.0以此类推

- 点击**下一步**，导出完成

### **第五步-上传整合包**

- 打开宝塔面板，选择**文件**，找到相应的目录，在相应IP目录下新建文件夹；比如我刚刚写的版本代号是a，那我就新建a这个文件夹

  

- 在新建的文件夹里上传刚刚导出的整合包，并解压；成功后如下图

  
 
- 要是更新整合包，请在解压时将该【a】这个文件夹内的文件覆盖处理


### **第六步-分发整合包**

- **大公告成，现在可以把刚刚导出的这个整合包上传分享给玩家了！**

### **第七步-检测整合包**

- **为了防止一些手滑现象导致整合包可能会出现一些问题，你可以在分发整合包前先测试一下要准备分发的整合包**

## **后续**

- 以后每次更新客户端只要重复[**第四步**](###第四步-制作整合包)**和**[**第五步**](###第五步-上传整合包)，**玩家重启客户端后就会自动接收更新**
- 版本号要记得更新
- 默认的更新方式不会删除玩家自己加入的模组，但会下载玩家删除的模组
- 更新覆盖的是整合包导出时的所有数据
- **每次更新会从整合包提供的链接下载 server-manifest.json 来校验玩家本地的整合包。若校验到整合包里没有匹配这个名字的文件或整合包里这个文件匹配名字但哈希值不匹配，就会下载该文件，不会下载匹配名字且哈希值匹配的文件**
- 出网带宽1MB我觉得够用了，除非你想让玩家自己下载全部内容（就是将整合包分发给他人前删除所有模组，玩家启动时就会开始下载回来，这样的好处是可见的整合包大小变小了）

> 本文由 buggzd 编写。

> 阅读本文前，请先阅读HMCL官方文章：https://hmcl.huangyuhui.net/help/launcher/serverpack.html
# 前置知识
阅读本文你需要具有以下知识储备：
1. 掌握基础本的linux命令操作，比如cd，ls等指令。
2. 拥有一个linux服务器（好像不算知识）

# Nginx安装
这里很基础（但是坑比较多）略过，可以看以下参考文档。
> https://zhuanlan.zhihu.com/p/515069497
# 新建静态资源文件夹
我为了省事直接在/根目录下新建了一个` MinecraftClientStatic `文件夹，以后需要作为静态资源的文件都丢这里面。
命令：
```bash
# 到更目录
cd /
# 新建文件夹
mkdir MinecraftClientStatic
# 防止nginx无法访问，配置文件夹访问权限
chmod 777 MinecraftClientStatic
# 进入文件夹
cd MinecraftClientStatic
# 新建一个测试用的文件
touch helloMC.html
# 给文件权限
chmod 777 helloMC.html
# 编辑html内容
vim helloMC.html
```
这里为了测试静态资源是否配置成功，需要新建一个helloMC.html的静态测试文件。可以在这个文件内随意写两行字。
例如：
```html
<!-- helloMC.html -->
<h1>hello static!</h1>
```
也可以整点炫的(可选)：
```html
<!-- helloMC.html -->
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>MC客户端静态资源</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
		<style>
			@font-face{
				font-family:'calligraffittiregular';
				src:url("fonts/calligraffitti-regular-webfont.ttf")
			}
			
			* {
				margin: 0;
				padding: 0;
			}
			
			body {
				overflow: hidden;
			}
			
			#content{
				position: absolute;
				color: white;
				top: 30%;
				left: 50%;
				margin-left: -121px;
			}
			
			p{
				font-family: calligraffittiregular
			}
			
		</style>
	</head>

	<body>
		<div id="content">
			<p style="font-size:  40px;font-weight: 1000;">MinecraftClientStatic</p>
		</div>
		<canvas id="hacker" style="width:100%;height:100%;">请使用最新的浏览器</canvas>
	</body>

</html>
<script type="text/javascript">
	window.onload = function() {
		var color_array = ['#00FF00','#00FF99','#00FFCC','#00FFFF','#00BBFF','#0066FF','#0000FF','#5500FF','#7700FF','#9900FF','#CC00FF','#FF00FF'];
		var i=0;
		var color;
		function changColor() {
			color = color_array[i];
			console.log(i++);
			console.log(color);
			if(i>color_array.length-1){
				i=0;
			}
			setTimeout(changColor, 2000);
		}
	
		var hacker = document.getElementById("hacker");
		var width = hacker.width = screen.width;
		var height = hacker.height = screen.height;
		var ctx = hacker.getContext('2d');
		var num = Math.ceil(width / 12);
		var y = Array(num).join(0).split('');
		var draw = function() {
			ctx.fillStyle = 'rgba(0,0,0,.05)';
			ctx.fillRect(0, 0, width, height);
			ctx.fillStyle = color;
			ctx.font = '12px Microsoft YaHei';
			y.map(function(y1,i){
				var text = String.fromCharCode(65 + Math.random() * 62);
				var x = i * 12;  
				var y1 = y[i];
				ctx.fillText(text, x, y1);
				y[i] = ( y1 > Math.random() * 10 * height ? 0 : parseInt(y[i]) + 12 );
			})
		}

		Run();

		function Run() {
			changColor();
			Game_Interval = setInterval(draw, 50);
		}
	}
</script>
```
# 分配次级域名(可选)
> 如果你没有域名，那么这里可以跳过，后面需要域名的地方直接使用服务器ip地址

**假设我们的域名是buggzd.com**

在域名解析新建一个记录，取名为minecraft，然后加上服务器ip。
![image.png]
这是我们就有了一个子域名minecraft.buggzd.com
添加完成后可以使用cmd去ping一下这个域名(minecraft.buggzd.com),如果返回了正确的ip地址就是已经分配成功了。
# 配置nginx.conf
查找nginx配置文件目录：（如果这里没有nginx指令，那么说明你nginx安装没有成功）
```shell
 $ nginx -t
 $ nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
```
这里`/etc/nginx/nginx.conf`就是Nginx的配置文件
然后cd到nginx配置目录。
```bash
cd /etc/nginx
# 编写配置文件
vim nginx.conf
```
因为之前配置过博客逆向代理，`nginx.conf`会带有之前的配置记录，不能把他们搞乱。所以**理清层级关系很重要！**
```nginx.conf
# 这是nginx.conf的层级目录
# 每个nginx.conf配置文件都只有一个http块，所以如果之前配置过nginx
# 就只需要粘贴server块里的内容，把server块放到http块内部。
 http {    
    server { ... }
    server { ... }
    server { ... }
    }
```
需要填写的配置：
```nginx.conf
 http {    
    server {       
       # 需要监听的端口号，可以不动
       listen 80;       
       # 这里需要把localhost改为上面分配好的域名
       server_name  minecraft.buggzd.com;      
       location  /{            
       # root后面是对应的静态资源文件夹的位置
            root /MinecraftClientStatic;     
       # 这里是默认加载的首页html，这里放的是刚刚新建的测试文件
       # 它是从root目录文件夹内开始查找的，所以不要写/MinecraftClientStatic/helloMC.html
            index helloMC.html;    
       }
 }  
```
> Q:上面的配置干了什么事？
> A:比如你访问http://minecraft.buggzd.com/test.png时，nginx会访问本地的/MinecraftClientStatic/test.png 然后返回。

当正确编写完`nginx.conf` ，需要让nginx重新加载一下配置文件。
```shell
nginx -s reload
```
然后直接访问刚刚配置的域名(minecraft.buggzd.com)，默认会跳转到编写好的`helloMC.html`,你也可以在域名后加/helloMC.html  (minecraft.buggzd.com/helloMC.html)
![image.png]
当页面出现`helloMC.html`的文本内容时，说明已经配置成功了！
放张图片到静态资源文件夹试试。
![image.png]
访问成功，没问题！

# 导出整合包
![image.png]
选择服务器自动更新整合包
![image.png]
**整合包下载链接前缀**：填静态资源服务器的地址。
我们需要先去静态资源文件夹下新建一个modepack文件夹（也就是/MinecraftClientStatic/modepack）
```shell
cd /MinecraftClientStatic
mkdir modepack
```
然后整合包下载链接前缀这里填写`http://minecraft.buggzd.com/modepack`
![image.png]
# 上传整合包到静态资源服务器
假设我们刚刚打包的整合包名称为`client1.0.zip`
我们把`client1.0.zip`通过ftp上传到服务器中，然后使用解压命令将这个整合包解压到`/MinecraftClientStatic/modepack`文件夹中。
```shell
# 假设我们把client1.0.zip上传到了/home/ftp文件夹中
# 把 /home/ftp/client1.0.zip 解压到 /minecraftClientStatic/modepack
unzip /home/ftp/client1.0.zip -d /minecraftClientStatic/modepack
```
解压完以后我们查看一下
```shell
ls /minecraftClientStatic/modepack
```
服务器返回：

<font color="blue">overrides</font> server-manifest.json

其中overrides是一个文件夹，server-manifest.json是整合包配置文件。
# 客户端初始化
第一次使用客户端需要在一个空文件夹（例如newClientPackage）中放一个hmcl启动器，打开hmcl导入刚刚做好的`client1.0.zip`整合包。
然后就可以把这个文件夹（newClientPackage）打包成一个zip发给玩家了，以后玩家每次打开hmcl登录时，hmcl就会自动向静态资源服务器中查询整合包配置信息，当发现更新时会自动下载。
当缺少mod时会自动下载静态资源服务器上的mod
![image.png]
# 更新客户端
目前HMCL版本更新的步骤是这样的：
1. hmcl对比本地的mod和服务器的mod**名称**，发现服务器上存在本地不存在的mod，把不存在的mod下载。
2. 对比名称相同的mod，当对比的mod存在**名称相同时**，对比其**MD5哈希值**，如果哈希值不匹配则重新下载服务器上的mod。
3. 在获得更新的时候对比一次本地的文件，如果以前版本的模组在新的版本没有了，hmcl会自动将本地的这个模组删除
4. 在不通过远端服务器更新的资源都不会被下次更新删除，换句话说就是如果是玩家自己魔改整合包，往里面放的mod是不会被删除的。

当想要添加新的mod，添加mod后需要重新导出整合包(例如client2.0.zip)，导出的整合包版本号增加，然后重新上传整合包到静态资源服务器。
```shell
cd /minecraftClientStatic
# 建议直接删除该目录然后重新新建
rm modepack -R
# 重新新建modepack文件夹
mkdir modepack
# 解压新的客户端整合包
unzip /home/ftp/client2.0.zip -d /minecraftClientStatic/modepack
```
玩家打开hmcl点击启动后，HMCL就会检测到版本更新，自动更新mod。

> 参考资料：
> nginx配置文件结构：https://blog.csdn.net/pibuliao8626/article/details/110449349
> 使用nginx如何部署静态资源：https://www.muzhuangnet.com/show/86630.html
> Nginx 作为静态资源服务器：https://zhuanlan.zhihu.com/p/514547633
> nginx配置静态静态资源服务器：https://cloud.tencent.com/developer/article/2028983?from=15425
> HMCL官方文章：https://hmcl.huangyuhui.net/help/launcher/serverpack.html
> 使用Gitee作为静态资源服务器：https://www.kdocs.cn/l/ck0hwms5llq8
> Nginx配置静态资源服务器：https://buggzd.github.io/2023/01/11/Nginx%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BD%BF%E7%94%A8/
