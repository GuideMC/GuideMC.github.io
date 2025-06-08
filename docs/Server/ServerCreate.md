# 二、服务端核心的安装与使用
由于篇幅原因，本节仅介绍上文中**非不推荐**核心的安装和使用方式，其他服务端的安装方式请自行查阅文档或自行探索。

## 安装 Java

### 确定操作系统架构
对于新手来说，下载了不适合与自己服务器/计算机的操作系统的 Java 是非常难过的，为了最大化利用计算机性能，一般情况下服主们都会为服务端设置最大内存，但因为支持 x86 架构（32位系统）的 Java 最大只能为服务端分配 1024MB 的内存，超出这个数值会导致无法开服。只有支持 x86_64 架构 (64位系统) 的 Java 才能支持更大的最大内存。
对于 Windows 操作系统（家用操作系统），请右击您桌面上的```计算机/此电脑``` (Win7,Win8,Win8.1,Win10) 图标，选择```属性```，查看操作系统为 32 位还是 64 位; 如果您没有看到以上图标，而是看到了```我的电脑``` (WinXP)，那么您的操作系统一般应为 32 位。
对于 Windows 操作系统（服务器），您可通过服务器管理器或是通过其他方式查看您的操作系统架构。

### 下载并安装 Java 8
对于 1.8+ 服务端，它们均需要 Java 8 或以上版本[^1]运行，因此您可前往 [Java 官方网站下载页](https://www.java.com/zh_CN/download/manual.jsp)[^2] 下载 Java 8 的运行环境 (JRE8) 以支持启动您的服务端。
如果您是 32 位的 Windows 操作系统，请选择 ```Windows``` 栏目下的 ```Windows 脱机``` 安装包; 如果您是 64 位的 Windows 操作系统，请选择 ```Windows``` 栏目下的 ```Windows 脱机（64位）```; 对于 Mac OS X 和 Linux 系统，请自行按照各自的档案类型下载对应的安装包。下载完成后，请自行打开文件进行安装操作。

### 下载并安装 Java 7
对于 1.7.10 或更低版本的服务端，您可能需要下载已不受支持的 Java 7 以运行。您需要前往 [Oracle官网](https://www.oracle.com/java/technologies/javase/javase7-archive-downloads.html) 下载已被归档的 Java 7。
您需要前往该网站下方的 ```Java SE Runtime Environment 7u80``` 下载Java运行环境，而非下载上方的 ```Java SE Development Kit 7u80``` Java 开发工具包。
如果您是 32 位的 Windows 操作系统，请选择 ```Windows x86``` 安装包; 如果您是 64 位的 Windows 操作系统，请选择 ```Windows x64```; 对于 Mac OS X 和 Linux 系统，请自行按照各自的档案类型下载对应的安装包。
您可能需要注册并登录 Oracle 账号以下载 Java 7。
下载完成后，请自行打开文件进行安装操作。

### 关于OpenJ9
有一种非官方的 JVM[^3] 实现，它的名字叫做 OpenJ9，其以```高性能，可拓展```著称，此处我们不介绍 OpenJ9 的详细安装方式，但有需要的服主可前往 [AdoptOpenJDK](https://adoptopenjdk.net/) 网站了解并下载 OpenJ9 JVM。

## 安装服务端

此处我们已假设您已正确安装 Java 运行环境 (JRE) 并已完成您所需要的服务端核心的下载。
为了方便和美观起见，您应当创建一个新的文件夹，并放入您的服务端核心，以此文件夹作为根目录开始您的开服旅程。

### 适用于 Vanilla, CraftBukkit, Spigot 的安装和使用教程
* 对于 Windows 用户，您可通过直接双击 ```minecraft_server_1.x.x.jar``` 运行服务端，当服务器完全就绪[^4]后即可通过默认的连接地址[^5]连接到服务器。
* 对于希望使用 CMD 控制台的 Windows 用户来说，您可通过 ```Shift+右键``` 在服务端根目录启动命令行，或是直接创建一个以 ```.bat``` 结尾的批处理文件，并写入以下内容。

```cmd
@echo off
java -Xmx1024M -jar minecraft_server_1.x.x.jar -nogui
pause
```
其中的 ```-Xmx1024M``` 用于指定最大内存，您可将 ```1024M``` 更换为您需要指定的最大内存，例如 ```-Xmx2048M```，```-Xmx4G```。
核心名称中的 ```1.x.x``` 代表你的服务器版本。
对于 Linux 用户，您可通过 ```cd``` 指令进入服务端根目录，或是直接在服务端根目录创建一个以 ```.sh``` 结尾的Linux shell文件，并写入以下内容。

```shell
java -Xmx1024M -jar ./minecraft_server_1.x.x.jar -nogui
```
其中，你应将 ```java``` 替换为 ```"您的Java JRE存放位置\bin\java.exe"```。
自 1.8 起，当你第一次启动服务端时，服务器会先在根目录生成一个```eula.txt```，随后服务器会自动关闭。
请打开 ```eula.txt```，届时您会看到这样的文字。

```yaml
#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://account.mojang.com/documents/minecraft_eula).
#Fri Jul 31 12:26:16 CST 2020
eula=false
```

请将其中的 ```eula=false``` 修改为 ```eula=true```[^6]，然后重新启动服务器。此时，服务器才会正式启动。
最后，您可通过在控制台[^7]内输入 ```stop``` 或在游戏内输入 ```/stop``` 关闭服务器。

### 适用于 Paper, Tuinity, Akarin 的安装和使用教程
基本同上，只需将核心名称替换为你的核心名称即可。但请注意，`Paper, Tuinity, Akarin`等衍生于 Paper 的核心第一次启动都需要下载 Vanilla 文件以完成打补丁操作，对于某些网络不稳定的地方，你可能会一直卡在 ```Downloading cache```上。对于这种问题，你可以通过上方提供的或其他渠道先下载对应版本的 Vanilla，然后将核心改名为```mojang_1.x.x.jar``` (1.x.x代表你的服务器版本)，放入 ```·\cache``` 文件夹内，开启服务器即可开始打补丁操作。

### 适用于 VanillaForge, VanillaFabric 的安装和使用教程
请先按照第一则教程安装并完全启动一次 Vanilla，随后关闭服务端。
打开 Forge 或 Fabric 的安装器，选择 ```install server```，并将目录选择至服务器根目录，点击 ```安装(Install)```，在自动下载 libraries (需保持网络畅通，不然可能会导致下载失败) 完成后，ForgeVanilla 或 FabricVanilla的核心便会出现在根目录上，此时将启动参数的 jar 指向新的核心，即可开始开服。

### 适用于 SpongeVanilla 的安装和使用教程
与第一则教程相同，只需将核心名称替换为你的核心名称即可。请注意 Forge 的版本必须于 SpongeVanilla 下载页上标注的 Forge 版本相同，否则可能会引发兼容性问题。

### 适用于 SpongeForge 的安装和使用教程
请先按照第三则教程安装并完全启动一次与 SpongeForge 下载页上标注的 Forge 版本相同的 VanillaForge，随后关闭服务端。
将 SpongeForge 的 jar 文件**直接拖入** ```.\mods``` 文件夹，之后启动服务器即可开服[^8]。

### 适用于 Thermos, Contigo 的安装和使用教程
请在下载这两种服务端核心时注意需要同时下载 ```libraries.zip```[^9]。
将您下载到的 ```libraries.zip``` 内的 ```libraries``` 文件夹(包括文件夹)解压至服务端根目录，然后按照第一则教程的启动方式启动服务器。

### 适用于 Uranium 的安装和使用教程
基本同上一则教程，前往下载核心时请下载结尾为 ```-server``` 的 jar，下载 libraries 时请下载 [#271构建打包的libraries](https://ci.uraniummc.cc/job/Uranium-dev/271/artifact/build/distributions/Uranium-1710-dev-5-B271-31d6587-libraries.zip)。
对于使用显示 Title 和 Actionbar 的功能，请自行前往[此处](https://github.com/UraniumMC/UraniumPlus/releases/tag/v1.1)下载 UraniumPlus，并将其作为 MOD 安装至客户端(```.minecraft\mods```)和服务端(```.\mods```)。

### 适用于 CatServer/Mohist/Magma/Arclight 的安装和使用教程
基本同第一则教程。运行所需的 Libraries 应当会自动被下载。
至此，你已经完成第二节的所有学习，并应已经启动过一次服务器并通过 ```stop``` 指令安全的关闭服务器。

[^1]: Minecraft使用的开发环境也是 Java 8, 且截止目前，Java 8仍然是 Oracle 公司指定的长期支持版本，因此使用 Java 8 十分稳定。
[^2]: 此处提供了繁体中文版的```下載適用於所有作業系統的 Java```界面，简体中文版的界面因不明原因长期无法连接。
[^3]: 指 Java 虚拟机，运行 Java 应用程序的中间人。
[^4]: 一般来说，服务端完全就绪的标志是一段以 ```Done!``` 开头的句子，但是有的服务端插件可能因为完全就绪后要发送检查更新报告等信息，这段话很容易被忽略，因此您可尝试通过试探性的输入一段存在或不存在的指令，如果控制台反馈了该指令的帮助或是提示类似于 ```Unknown Command. Type /help or ? for help.``` 的未知指令信息，那么大致可认定为服务端已就绪。
[^5]: 默认连接地址为 ```你的IP地址:25565``` ，通过本地连接可使用 ```localhost:25565```，如果您的服务商为您设置了指定端口访问或您只是想单纯不用 ```25565``` 这个端口，那么您可参见下一节设置服务端端口。
[^6]: ```true``` 和 ```false``` 是布尔值，他们分别代表`真`(是)和`假`(否)。设置 ```eula=true``` 即代表您同意 Minecraft 的最终用户许可协议 (EULA) 和 Minecraft 商业化使用条例，您可在[这里](https://account.mojang.com/documents/minecraft_eula)详细阅读 Minecraft EULA.
[^7]: 我们把那个能够执行指令，输出服务器后台信息的窗口叫作控制台
[^8]: 您可通过在控制台输入 ```/sponge plugins``` 查看是否有反馈以确认 Sponge 是否正常安装至 VanillaForge.
[^9]: 需要注意的是，Thermos 提供了两个版本的核心，分别对应着包含了稳定版本(文件名中包含```-1558```，代表 ```Forge1.7.10 - 10.13.4.1558```)和最新版本(文件名中包含```-1614```，代表 ```Forge1.7.10 - 10.13.4.1614```)的 Forge1.7.10。对于现在来说，我们只需直接选择使用 ```Forge1.7.10 - 10.13.4.1614``` 的最新版本即可。
Minecraft反代(跨服)服务端搭建从入门到精通（For BungeeCord & Velocity）
Hey，欢迎来到这里。

本文旨在通过一站式的教程，教会读者如何对目前市面上流行的反向代理服务端(跨服服务端)进行安装和配置。

本文介绍的服务端对象主要是 BungeeCord(以 Waterfall 为例) 和 Velocity

什么是反向代理?
反向代理在电脑网络中是代理服务器的一种。服务器根据客户端的请求，从其关系的一组或多组后端服务器上获取资源，然后再将这些资源返回给客户端，客户端只会得知反向代理的IP地址，而不知道在代理服务器后面的服务器集群的存在。(摘自 WikiPedia zh_CN 反向代理)

由上我们可知，反向代理(简称「反代」)允许服务器端代理来自客户端的请求，为客户端返回来自服务器的资源。这与正常意义上的「代理」其实正好相反——代理一般搭建在客户端上，由代理系统作中间人，接管客户端向服务器的请求并返回。「科学上网」就是典型的代理系统。

而在MC服务器中，这些反代服务器同样可以代理来自玩家的进服请求，然后将玩家指引到代理服务器下游的各种服务器中——这便是跨服。

有关跨服的常见误区
跨服端是一个MC游戏逻辑服务端，可以使用跨服端直接开服让玩家进服游戏

这是个常见的误区，但实际上跨服端仅仅只是一个反代软件，他能够指引玩家连接到下游的指定逻辑服务端，但本身不具有任何游玩功能

使用跨服端后玩家通过任一下游服务端的IP进行游戏便可进行跨服

很显然，只有通过跨服端进入下游服务端，前者才有办法将玩家转移到其他下游服务端中，因此玩家必须通过跨服端进入服务器才可以跨服

我需要向公网暴露跨服端和下游服务端的所有连接地址和端口

事实上，你只需要暴露跨服端的连接地址和端口，然后确保跨服端能够连接到下游服务端即可。一般情况下，没有必要向玩家暴露下游服务端的连接地址。只需保证跨服端能够连接到下游服务端，然后跨服端便会充当中间人，传递玩家与下游服务端之间的数据交换。

我需要为指定下游服务端游戏版本下载相对应的跨服端版本

事实上，自1.8起，主流跨服端均已完成多版本的向下兼容，即任一版本的跨服端核心均支持 1.8-最新版本 的下游服务端游戏版本连接。如果您需要旧版，请前往 BungeeCord 的构建站界面 按照提示下载适用于旧版 Minecraft 版本的单一版本支持的 BungeeCord

开始学习使用 Waterfall 跨服
Tips:请确保您已正确安装 Java，并已准备好一个或多个下游服务端等待连接到跨服端

什么是 Waterfall
Waterfall 是一个 BungeeCord 的分支，由 PaperMC 团队主导开发，其特点是拥有更友好的控制台输出和更个性化的配置选项。

为什么不使用原生 BungeeCord
由 SpigotMC 团队开发的 BungeeCord 在控制台输出和log输出上并不完美，而 Waterfall 恰好改善了这一部分的体验，因此在这里我们使用 Waterfall 作为示例。如果你仍想使用原生 BungeeCord 或其分支(如HexaCord)也无需担心，因为 Waterfall 并不会改变主要配置文件(config.yml)和主要文件架构，因此您仍可通过本文来了解您所使用的 BungeeCord 跨服端如何配置

下载并安装 Waterfall
前往 PaperMC 官网 下载Waterfall


如上图，点击 Waterfall 标签下最上方的黑色按钮以下载 Waterfall 当前的最新构建版本

下载完成后，编写启动脚本以启动 Waterfall 。Waterfall 所需的内存并不多，因此您可按需为 Waterfall 分配 512MB-1024MB 内存

对于使用 Bash/CMD 的 Windows 用户
:: on start.bat
@echo off
java -Dfile.encoding=UTF-8 -Xms512M -Xmx1024M -jar waterfall-384.jar
pause
对于使用 Shell 的 Linux 用户
# on start.sh
java -Dfile.encoding=UTF-8 -Xms512M -Xmx1024M -jar ./waterfall-384.jar
第一次启动服务端时会下载额外的模块(位于 modules 文件夹内)，下载完成后服务端便会启动。

当你看到Listening on /0.0.0.0:25577时即代表服务端已经完成了加载并开始正常工作了。因为我们需要配置服务端，因此输入end(不是stop)以关闭服务端。此时，你将可以看到 Waterfall 已经生成了一些文件。

配置 Waterfall
打开config.yml，您将可以看到 Waterfall(同样，也适用于 BungeeCord ) 的主要配置:

server_connect_timeout: 5000
remote_ping_cache: -1
forge_support: true
player_limit: -1
permissions:
  default:
  - bungeecord.command.server
  - bungeecord.command.list
  admin:
  - bungeecord.command.alert
  - bungeecord.command.end
  - bungeecord.command.ip
  - bungeecord.command.reload
timeout: 30000
log_commands: false
network_compression_threshold: 256
online_mode: true
disabled_commands:
- disabledcommandhere
servers:
  lobby:
    motd: '&1Just another Waterfall - Forced Host'
    address: localhost:25565
    restricted: false
listeners:
- query_port: 25577
  motd: '&1Another Bungee server'
  tab_list: GLOBAL_PING
  query_enabled: false
  proxy_protocol: false
  forced_hosts:
    pvp.md-5.net: pvp
  ping_passthrough: false
  priorities:
  - lobby
  bind_local_address: true
  host: 0.0.0.0:25577
  max_players: 1
  tab_size: 60
  force_default_server: false
ip_forward: false
remote_ping_timeout: 5000
prevent_proxy_connections: false
groups:
  md_5:
  - admin
connection_throttle: 4000
stats: 8a168dec-7286-4a06-9a30-c8f6ae359321
connection_throttle_limit: 3
log_pings: true
 
接下来介绍主要配置项目:

forge_support 代表是否启用对 Forge 的支持，默认值为true，即启用。启用后会为 Forge 客户端提供支持（尽管兼容性并不是很好，编者注）。

player_limit 代表整个 BungeeCord 实例能够接受的最大玩家数量，默认值为-1，即不限数量。调整为正整数即启用最大玩家数量限制。

premission 和 groups 由 BungeeCord 提供的简易权限管理设置。前者用以配置权限组内置的权限，default表示默认权限组；后者用以配置玩家所在的权限组。（这里的权限是指 BungeeCord 内置及其插件声明的权限，与下游服务器的权限完全无关，切勿混淆。正如 CraftBukkit 提供的 permission.yml 一样，这套简易的权限管理配置同样不受到欢迎，且难以配置。这里推荐安装 Luckperms 作为 BungeeCord 的权限组管理插件，编者注）。

log_commands 代表是否在控制台记录玩家输入的指令（同样，仅记录 BungeeCord 指令，与下游服务器无关，编者注）。默认值为false，即不记录。

log_pings 代表是否在控制台记录玩家客户端向 BungeeCord 发起 ping 请求的记录（这种记录一般是玩家尝试刷新服务器MOTD信息时出现的）。默认值为true，即记录。

online_mode 代表是否开启正版验证，开启正版验证时， BungeeCord 将仅接受经过 Mojang 正版验证服务器验证通过的玩家加入服务器，反之任何玩家都可进入服务器。默认值为true，即开启正版验证。（请注意，如果开启正版验证，那么请务必将所有下游服务器的正版验证关闭，否则玩家将无法连接至下游服务器（BungeeCord 将负责向下游服务器传递玩家的正版数据，如 UUID 等），编者注）。

ip_forward 代表是否启用 IP 追踪，默认值为 false，即不开启。开启后 BungeeCord 将会向下游服务端传递玩家的真实IP。如果不开启本项，那么下游服务端接收到的玩家 IP 将永远为 BungeeCord 服务端所在的 IP 地址。要想开启此项，您必须使用支持 ip_forward功能的服务端，并启用其配置中的设置（具体设置方法见下）。如果仅启用了此项而不配置下游服务端的是设置，那么玩家将无法连接到下游服务器。强烈建议所有人都启用此项以免出现某些 IP 问题。

listeners表示监听器设置，一个监听器对应一个监听端口，不同的监听端口可以允许不同的玩家加入设定的不同的服务器，且设置相互独立。一个 BungeeCord 实例可以设置多个监听器。BungeeCord 的默认配置文件只提供了一个监听器，如需添加多个监听器请自行按照 YAML 语法在listeners下重复添加。

listeners.query_enabled 代表是否开启 UDP 查询，开启后可籍由 UDP 协议监听该监听器的状态。默认值为false，即关闭查询。

listeners.query_port 代表查询端口，默认值为25577。

listeners.motd 代表当仅有一个默认服务器时，服务器将会显示给玩家的Motd。当listeners.ping_passthrough被开启时，此项无效。如果希望使用双行Motd，那么可以使用以下的格式（servers.[xxx].motd同）:

motd: |
    第一行MOTD
    第二行MOTD
 
listeners.tab_list 代表连接到服务器的玩家的 TAB 列表所显示的内容格式。他可以有三个值，分别是GLOBAL_PING（默认值）,GLOBAL和SERVER。当设置为第一种时， TAB 列表会显示所有连接到本 BungeeCord 实例的玩家和他们的 PING 值；当设置为第二种时，同上一种大致相同，但玩家的 PING 值不会更新；当设置为第三种时，只会显示玩家所在的下游服务器的玩家列表。

listeners.proxy_protocol 代表是否开启对 HAProxy 的支持，默认值为false，即关闭。开启后，BungeCord 将支持接收上游 HAProxy 籍由 ProxyProtocolV3 协议发送的玩家真实 IP，如不开启此项但在上游使用了 HAProxy 服务端，那么 BungeeCord 接收到的玩家 IP 地址将衡为 HAProxy 的所在地址。如果您不理解此项在说什么，请不要随意开启本项。

listeners.forced_hosts 代表端口转发设置，默认值为一个仅包含一个键为pvp.md-5.net，值为pvp的 Map （即pvp.md-5.net: pvp）。这意味着所有通过pvp.md-5.net域名连接到 BungeeCord 的玩家将不会再被连接到默认下游服务器（对于默认下游服务器的配置请见listeners.priorities项），而将会被重定向至服务器名为pvp的服务器（关于服务器名的配置请见servers项）。这要求您预先将名为pvp.md-5.net的子域先解析至 BungeeCord 所在的地址。

listeners.ping_passthrough是否开启 ping 穿透，默认值为false，即不开启。开启后，BungeeCord 将直接传递默认下游服务器的 ping（如motd，在线玩家数）信息到客户端，而不是显示 BungeeCord 设置的此类信息。

listeners.priorities 优先级设置，默认值为一个仅有lobby 服务器的列表，可以按照格式依次向下添加多个已在servers项中配置的服务器名，优先级由上到下逐级递减）。这代表玩家连接到 BungeeCord 后将会被转发到的服务器的顺序：第一个是首选服务器，如果因为某些原因使玩家无法连接到该服务器（如服务器已关闭，版本与玩家客户端版本不匹配），那么将尝试将玩家转发到下一个服务器，以此类推。如果所有服务器都无法连接，那么玩家将会收到一个服务器当前不可用的提示。（此项不一定必须全部对应servers内的下游服务端名称，如果您有一个登录服，那么此处应当只填写您的登录服名称，这样当您的登录服离线时，玩家将不能进入服务器，而不是绕过登录服的登录系统前往其他下游服务器）

listeners.bind_local_address 代表是否显式显示 BungeeCord 正在监听的 IP 地址，默认值为true。除非的服务器拥有多个 IP 地址，否则这并没有什么实际用处。如果没有特殊需求，最好不要改变此项。

listeners.host 代表该监听器监听的 IP 地址和端口，默认值为0.0.0.0:25577，即监听来自所有 IP 地址的来自25577端口的连接。0.0.0.0代表监听所有 IP 地址，如果您将其设置为非0.0.0.0的 IP 地址，则代表只监听来自于该 IP 地址的连接。一般情况下，您只需要修改25577为希望玩家连接的端口号，或保持不变。

listeners.max_players 代表玩家客户端将会显示的最大玩家数，默认值为1。此项只作为装饰，并未真实的最大玩家数设置，即使将此项设置为0，玩家仍可以进入服务器。要想设置真正的最大玩家数，请见player_limit项。
listeners.tab_size 代表将会显示在 TAB 列表上的最大玩家数量，默认值为60.

listeners.force_default_server 代表当每次玩家进入服务器时，是否强制将玩家发送到默认服务器中，默认值为false，即关闭。设置为false则代表玩家进入服务器时将会发送到玩家上一次下线时的服务器。如果您有一个登录服，亦或者使用了一个由单个大厅服务器管理的登录插件，请务必将此处设置为true以免玩家下次登录时直接绕过登录系统。此项与listeners.forced_hosts相冲突，如果您希望使用后者提供的重定向功能，那么请将此项设置为false。

prevent_proxy_connections 代表是否向 Mojang 发送玩家 IP 数据以阻止 使用了代理的玩家进入服务器。默认值为false，即不开启

connection_throttle 和 connection_throttle_limit 为 BungeeCord 自带的简易反压测策略，他们分别代表断开时间和断开次数，默认值分别为4000和3。这意味着单个 IP 一旦在 4000 毫秒内连接了 BungeeCord 3 次，那么它必须等待 4000 毫秒后才能再次连接。

servers 代表下游服务端设置，只有在此处设置过的下游服务器才可被连接。它包括一个名为lobby的默认下游服务端，您可以按照这种格式继续向下添加更多的下游服务器。（如果修改了lobby的名称，请千万不要忘记修改上方listeners.priorities的优先级设置以免因不存在一个名为lobby的下游服务端而无法连接。其中：

server.[XXX]代表服务器名称，可为任意值，但必须是唯一的；
server.[xxx].motd代表当有多个默认服务器时，被匹配到可以连接的首选服务器将会显示给玩家的Motd。同样当listeners.ping_passthrough被开启时，此项无效。如果希望使用双行Motd，请参见上方listeners.motd的注释。
server.[xxx].address代表目标下游服务器的 IP 地址和端口，请填写 BungeeCord 所在的网络环境能够连接到的地址（包括本地地址和内网地址），无需保证玩家可以连接。
server.[xxx].restricted 代表权限控制，默认值为false。当设置为true时，只有拥有bungeecord.server.[xxx]权限时，玩家才能进入此服务器。
配置下游服务端
如果您正在使用 Vanilla 服务端：

前往server.properties将server-ip项设置为 BungeeCord 所在的 IP 地址（如果 BungeeCord 和 下游服务端位于同一个网络环境，那么可以使用127.0.0.1），将network-compression-threshold项设置为-1（此项将交由 BungeeCord 管理）
如果您启用了 BungeeCord 的ip_forward，那么您需要安装 VanillaCore，并依照其介绍为 Vanila 服务端注入补丁，注入完成后，使用修改后的 Vanilla 服务端即可支持 ip_forward
如果您正在使用 CraftBukkit 服务端：

前往server.properties将server-ip项设置为 BungeeCord 所在的 IP 地址（如果 BungeeCord 和 下游服务端位于同一个网络环境，那么可以使用127.0.0.1），将network-compression-threshold项设置为-1（此项将交由 BungeeCord 管理）
前往bukkit.yml，将connection-throttle设置为-1（以免 BungeeCord 连接到下游服务端时因尝试多次而连接失败）
您不能启用 BungeeCord 的ip_forward，因为 CraftBukkit 不支持 ip_forward
如果您正在使用 Spigot 及其分支服务端（包括但不限于 Paper，Tuinity，Akarin，Thermos，Contigo，Uranium，CatServer，Mohist，Magma，Arclight）：

前往server.properties将server-ip项设置为 BungeeCord 所在的 IP 地址（如果 BungeeCord 和 下游服务端位于同一个网络环境，那么可以使用127.0.0.1），然后将network-compression-threshold项设置为-1（此项将交由 BungeeCord 管理）
前往bukkit.yml，将connection-throttle设置为-1（以免 BungeeCord 连接到下游服务端时因尝试多次而连接失败）
如果您启用了 BungeeCord 的ip_forward，那么请前往spigot.yml，将settings.bungeecord设置为true。如果您找不到该项，那么请确认您的 Spigot 版本是否高于 1.7 #5版本，如您的 Spigot 版本低于该版本，则您不应启用ip_forward项
如果您正在使用 Sponge（SpongeVanilla，SpongeForge） 及其分支服务端：

前往server.properties将server-ip项设置为 BungeeCord 所在的 IP 地址（如果 BungeeCord 和 下游服务端位于同一个网络环境，那么可以使用127.0.0.1），然后将network-compression-threshold项设置为-1（此项将交由 BungeeCord 管理）
如果您正在使用 SpongeForge，那么请开启 BungeeCord 中的forge_support以接收 Forge 数据包
如果您启用了 BungeeCord 的ip_forward，那么请前往config/sponge/global.conf，将modules.bungeecord和bungeecord.ip-forwarding设置为true。
如果您正在使用 VanillaFabric（或所谓carpet服务端）：

前往server.properties将server-ip项设置为 BungeeCord 所在的 IP 地址（如果 BungeeCord 和 下游服务端位于同一个网络环境，那么可以使用127.0.0.1），然后将network-compression-threshold项设置为-1（此项将交由 BungeeCord 管理）
如果您启用了 BungeeCord 的ip_forward，那么您需要安装 FabricProxy 模组以支持ip_forward。
如果您完成了以上的所有配置，那么恭喜您，您的 Waterfall 已经部署完毕，可以进行跨服工作了。

额外的配置
对于 Waterfall，其在waterfall.yml上显示了很多有用的额外配置，您可以前往该文件内自行探索。

如何跨服
使用/server 服务器名指令即可传送到指定的服务器；

使用/send 玩家名 服务器名指令可以将指定在线玩家发送至指定的服务器；

请注意，不要忘记在权限管理系统中给予玩家bungeecord.command.server权限，给予有权限的管理员bungeecord.command.send权限以允许这些玩家使用上述指令。

其他 BungeeCord 指令请自行探索。

为 Waterfall 安装插件
您可以前往 SpigotMC 为 Waterfall 下载插件，并将插件放入plugins文件夹，并重启服务器，即可完成插件安装

至此，您已经完成了使用 Waterfall 进行跨服的全部学习。

开始学习使用 Velocity 跨服
Tips:请确保您已正确安装 Java，并已准备好一个或多个下游服务端等待连接到跨服端

什么是 Velocity
Velocity 是一个新生的，高性能的，现代的下一代 Minecraft 服务器反向代理解决方案（The modern, next-generation Minecraft server proxy.），它不仅能为高版本服务端提供更高效，更安全的传输协议，也能为低版本服务端提供 BungeeCord 的原始传输协议。截止至目前， Velocity 支持对 1.7.2-最新版本 服务端的转发。

什么样的服务器推荐使用 Velocity
以下服务端类型因为支持使用 Velocity 的modern转发协议，因此推荐使用 Velocity 进行跨服：

1.13+（含） 的 Paper（需要构建版本高于1.13 Build377）（及其非Forge Mod支持的分支） 服务端
任意版本，安装了FabricProxy Mod 的 VanilaFabric 服务端
以下服务端类型虽然只能使用 Velocity的 legacy 转发协议，但因为其有效的解决了某些 Forge 的跨服 Mod 信息不同步问题，因此推荐使用 Velocity 进行跨服：

1.7.2-1.12.2 的 VanillaForge 或 SpongeForge 服务端
什么样的服务器不推荐使用 Velocity
以下服务端类型虽然支持 Velocity，但仅能使用其 legacy 转发协议，因此不如使用 BungeeCord 进行跨服：

任意版本的 Vanilla 服务端
任意版本的 Spigot 服务端
任意版本的 SpongeVanilla 服务端
任何安装了 ProtocolSupport 插件的服务端
以下服务端类型完全不支持 Velocity，因此不推荐使用 Velocity 进行跨服：

1.7.2-（不含） 的任何服务端
1.13+（含） 的 任何 含 Forge 支持 的服务端
任何 Bukkit + Forge 的服务端
以下操作只有 zz 才做的出来，因此不推荐使用 Velocity：

在一个代理后面又套了一个代理的套娃服务端链路
下载并安装 Velocity
（以下部分内容修改自 Velocity Decumentation 的 Getting Started 篇章）

前往 Velocity 官网 下载 Velocity。

选择 Stable 以下载稳定版本的 Velocity，选择 Development 以下载开发版本的 Velocity。

截止至目前，Stable 版的 Velocity 版本为 1.1.0 ，因此本教程也将使用此版本作为例子。

下载完成后，编写启动脚本以启动 Velocity。

对于使用 Bash/CMD 的 Windows 用户
:: on start.bat
@echo off
java -Xms512M -Xmx512M -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -jar velocity-1.1.0.jar
pause
对于使用 Shell 的 Linux 用户
# on start.sh
#!/bin/sh
 
java -Xms1G -Xmx1G -XX:+UseG1GC -XX:G1HeapRegionSize=4M -XX:+UnlockExperimentalVMOptions -XX:+ParallelRefProcEnabled -XX:+AlwaysPreTouch -XX:MaxInlineLevel=15 -jar velocity*.jar
请注意，Velocity 需要 Java 8 及以上版本才能运行，如果您的服务器上安装的是 Java 7 或更久版本，请先额外安装一个 Java 8 以继续使用 Velocity。

当你看到Done (x.xxs)!时即代表服务端已经完成了加载并开始正常工作了。因为我们需要配置服务端，因此输入shutdown（当然，也支持end）以关闭服务端。此时，你将可以看到 Velocity 已经生成了一些文件。

配置 Velocity
打开velocity.toml，您将可以看到 Velocity 的主要配置:

# 配置文件版本，请勿修改此项。
config-version = "1.0"
# 本代理服务端应映射到的端口。默认的，我们将会接受来自任意 IP 地址的，端口为 25577 的连接。
bind = "0.0.0.0:25577"
# MOTD 设置。此项将会在当玩家添加您的服务器到客户端的服务器列表中时显示。
# 允许使用旧版颜色代码和 JSON。
motd = "&3A Velocity Server"
# 我们应该向玩家的客户端 显示 多少最大玩家数? 
# （Velocity 不支持 真正的 设置最大玩家上限）
# （此项同 BungeeCord 的 listeners.max_players 项，译者注）
# （因此，您最好在每个下游服务端设置最大玩家上限以免服务器被撑爆，译者注）
show-max-players = 500
# 我们是否应该向 Mojang 验证玩家是否已注册? 默认的，此项为开。
# （此项同 BungeeCord 的 online-mode 项，译者注）
# （同 BungeeCord 一样，您应该将此处设置为 false 以允许离线玩家进入您的服务器，译者注）
online-mode = true
# 如果试图加入本代理服务端的客户端的 ISP/AS 发送了与 Mojang 的认证服务器不同的 IP 地址，
# 那么该玩家将会被踢出。这将阻止某些使用代理的连接，但实际上这并不能完全阻止此类连接。
# （此项同 BungeeCord 的 prevent_proxy_connections 项，译者注）
prevent-client-proxy-connections = false
# 我们应该将玩家的 IP 地址和其他数据转发到下游服务端吗?
# 可用的选项:
# - "none":        不转发任何数据。所有连接到本代理服务端的玩家都
#                  将以离线模式的 UUID 作为标识连接到下游服务器
# - "legacy":      以一种 BungeeCord 兼容的格式转发玩家的 IP 地址和 UUID。
#                  如果你的服务器正在运行 1.12 或更低版本，请使用此项设置。
# - "bungeeguard": 以一种 BungeeGuard 插件兼容的格式转发玩家的 IP 地址和 UUID。
#                  如果你正在运行 1.12 或更低版本，且无法为服务器主机设置
#                  网络等级的防火墙（比如面板服），请使用此项。
#                  （BungeeGuard 是一个 BungeeCord 插件，旨在通过加密等方式
#                  为 BungeeCord 提供一套安全的连接模式，译者注）
# - "modern":      使用 Velocity 的原生转发系统在玩家登录过程中转发 IP 地址
#                  和 UUID。仅适用于 Minecraft 1.13 或更高版本。
player-info-forwarding-mode = "NONE"
# 如果你正在使用 modern 或者 BungeeGuard 的 IP 转发模式, 请在这里配写入一个独一无二的字符串。
forwarding-secret = "eHFu8eOmUhoJ"
# 是否广播您的服务器支持 Forge。 如果您
# 正在运行 Mod 服务端，我们建议打开此项。
# 
# 如果您的服务器群组始终包含至少一个 Mod，建议以 ping-passthrough = "mods"
# 代替以便您的服务器在服务器列表中更好的被显示.
announce-forge = false
# 如果启用 (默认不启用) 并且本代理服务端正运行正版模式, 如果有人尝试以同一个账号
# 重复连接到此服务器，那么 Velocity 将会踢出在服务器内的玩家以便令新玩家进入。
kick-existing-players = false
# Velocity 是否应该将玩家服务器列表的 PING 请求传递给下游服务端?
# 可用的选项:
# - "disabled":    不传递请求。 velocity.toml 和 server-icon.png
#                  将会初始化玩家服务器列表 PING 响应请求。
# - "mods":        仅传递后端服务器的 Mod 列表作为响应。
#                  在您 try 列表(或 forced host 列表)中的第一个服务器的 Mod 列表将会被使用。
#                  如果无法连接到任何一个的后端服务器，则 Velocity 将不会显示 Mod 信息。
#                  （try 列表指下方的 servers.try 列表，forced host 列表指下方的 forced-hosts 列表，译者注）
# - "description": 传递后端服务器的描述（如最大玩家数，MOTD，译者注）和 Mod 列表。
#                  在您 try 列表(或 forced host 列表)中的第一个服务器的 Mod 列表将会被使用。
#                  （try 列表指下方的 servers.try 列表，forced host 列表指下方的 forced-hosts 列表，译者注）
# - "all":         传递后端服务器的所有信息作为本代理端的响应，如果无法连接到任何一个
#                  的后端服务器，则 Velocity 将使用本配置文件中的相应设置作为响应
ping-passthrough = "DISABLED"
 
[servers]
    #（此项作用同 BungeeCord 的 servers 项，译者注）
    # 在此处配置你的下游服务器信息. 每一个键代表一个
    # 服务器名称，其对应的值代表该服务器的连接地址
    lobby = "127.0.0.1:30066"
    minigames = "127.0.0.1:30068"
    # 当玩家被踢出服务器，或尝试登录到服务器的时候，我们应当以什么顺序尝试连接服务器。
    #（此项作用同 BungeeCord 的 listeners.priorities 项，译者注）
    #（如果希望写入第二个尝试服务器，则可以使用类似于
    # try = ["lobby","server2"]
    # 这样的格式，以此类推。译者注）
    try = ["lobby"]
    factions = "127.0.0.1:30067"
 
[forced-hosts]
    #（此项作用同 BungeeCord 的 listeners.forced-hosts 项，译者注）
    "minigames.example.com" = ["minigames"]
    "lobby.example.com" = ["lobby"]
    "factions.example.com" = ["factions"]
 
[advanced]
    # 在此处为连接超时（Connection Timeout）指定自定义时间. 默认值为 5 秒.
    connection-timeout = 5000
    # 为 Velocity 启用 BungeeCord 自定义消息信道支持.
    bungee-plugin-message-channel = true
    # 在此处为读取超时（Read Timeout）制定自定义时间。默认值为 30 秒
    read-timeout = 30000
    #（此项同 BungeeCord 的 listeners.proxy_protocol 项，译者注）
    # 启用对 HAProxy 的兼容
    proxy-protocol = false
    # 为本代理端启用 TCP fast open 支持。需要本代理端运行在 Linux 系统上
    tcp-fast-open = false
    #（此项同 BungeeCord 的 listeners.log_pings 项，译者注）
    # 在代理端上显示来自于客户端的 PING 请求
    show-ping-requests = false
    # 默认情况下，Velocity 将尝试适当地处理用户连接意外丢失但服务器的连接而没有显式断开的情况，
    # 方法是尝试使用户退回，但读取超时（Read Timeouts）除外。
    # 而 BungeeCord 的处理方法为将断开与用户的连接。因此您可以通过禁用此设置以使用 BungeeCord 的行为。
    failover-on-unexpected-server-disconnect = true
    # 应该进行多大强度的（数据包）压缩 (从 0 至 9). 默认值为 -1 ，这意味着将使用压缩等级 6。
    compression-level = -1
    # 向 1.13+ 客户端声明代理端指令。（这将允许客户端接收到代理端的指令补全等信息，译者注）
    announce-proxy-commands = true
    #（此项同 BungeeCord 的 listeners.log_commands 项，译者注）
    # 启用记录代理端的指令使用
    log-command-executions = false
    # （此项同 BungeeCord 的 network_compression_threshold 项，译者注）
    # 一个 Minecraft 数据包将满足多大的大小才会被压缩。设置为 0 将压缩所有数据包，
    # 设置为 -1 将会完全禁用所有数据包压缩。
    # （一般情况下，压缩数据包将减少网络带宽的占用，但将增加 CPU 负担）
    compression-threshold = 256
    # （此项同 BungeeCord 的 connection_throttle 项，译者注）
    # 客户端允许在多少毫秒以后才能再次连接到本代理端?
    # 默认值为 3 秒。设置为 0 以关闭此项设置。
    login-ratelimit = 3000
 
[query]
    # 如果查询被启用，那么查询协议应当监听哪一个端口?
    port = 25577
    # 默认情况下，插件是否应该被展示在查询响应结果中?
    show-plugins = false
    # 这是一个将会被反馈给查询服务的 map 名
    map = "Velocity"
    # 是否应该开启对 GameSpy 4 查询的响应?
    enabled = false
 
[metrics]
    # 一个用于代表本代理端的独一无二的，匿名的 ID
    id = "80b242d9-5f58-4302-ba6d-62c3b16263f4"
    log-failure = false
    # 使用信息是否应该反馈给 Bstats (https://bstats.org).
    # bStats collects some basic information, like how many people use Velocity and their
    # player count. We recommend keeping bStats enabled, but if you're not comfortable with
    # this, you can turn this setting off. There is no performance penalty associated with
    # having metrics enabled, and data sent to bStats can't identify your server.
    enabled = true
 
# 允许使用旧版颜色代码和 JSON。
[messages]
    generic-connection-error = "&c在连接时发生了一个内部错误."
    already-connected = "&c你已经连接到此代理服务器了!"
    online-mode-only = "&c此服务器仅接受正版玩家进入.\n\n&7你修改了你的用户名了吗? 退出 Minectaft ，然后重新登录，再试一次。"
    # Prefix when the player is disconnected from a server.
    #   First argument '%s': the server name
    disconnect-prefix = "&c无法连接至 %s: "
    no-available-servers = "&c当前无可用服务器连接."
    # Prefix when the player gets kicked from a server.
    #   First argument '%s': the server name
    kick-prefix = "&c从 %s 被踢出: "
    moved-to-new-server-prefix = "&c你被踢出的服务器: "
 
 
（配置文件释义见上注释）

您可以注意到，该配置文件的主要架构和上面的 Waterfall 完全不同，这是因为 Velocity 使用了一种叫做 TOML 的配置文件格式，您可以选择先行学习这种文件格式的配置方式，也可以按照文件内的固定格式“照葫芦画瓢”。关于详尽的 Velocity 配置项解释您可见于 Velocity Decumentation。

特殊的，Velocity 提供了一些「Special」的数据格式，他们的用途大致如下:

Velocity 同时支持以 & 为开头的样式代码格式和 JSON 样式格式。同时，在 Minecraft 1.16+ 服务器，Velocity还支持形如 &#rrggbb 的 RGB 颜色样式格式和 JSON 消息反序列化。
Velocity 使用形如 IP地址/域名:端口 的字符串作为网络地址的表示。比如，127.0.0.1:25577 和 server01.example.com:25565 都是可被接受的合法地址。
配置下游服务端
如果您希望使用 Velocity 的 modern 转发模式，请先将 velocity.toml 中的 player-info-forwarding 设置为 modern。

如果您希望使用 Velocity 的 legacy 转发模式，则请参照上文中 Waterfall 配置下游服务端的方式配置下游服务端。

如果您希望使用 Velocity 的 bungeeguard 转发模式，则请参照 BungeeGuard 插件的配置教程配置您的下游服务端

如果您正在使用 Paper（需要构建版本高于1.13 Build377）（及其非Forge Mod支持的分支） 服务端:

前往server.properties将server-ip项设置为 BungeeCord 所在的 IP 地址（如果 BungeeCord 和 下游服务端位于同一个网络环境，那么可以使用127.0.0.1），然后将network-compression-threshold项设置为-1（此项将交由 Velocity 管理）
如果您将 player-info-forwarding-mode 设置为了 modern ，则请前往 paper.yml，将 settings.velocity-support.enabled 设置为true，将 settings.velocity-support.secret 设置为您在 velocity.toml 中 forwarding-secret 项设置的密钥；将 settings.velocity-support.online-mode 设置为您在 velocity.toml 中设置的 online-mode 值。
将 spigot.yml 中的 settings.bungeecord 项设为 false（默认如此，如果您正在从 BungeeCord 切换到 Velocity，则可能需要修改此项）
如果您正在使用 VanillaFabric 服务端:

前往server.properties将server-ip项设置为 BungeeCord 所在的 IP 地址（如果 BungeeCord 和 下游服务端位于同一个网络环境，那么可以使用127.0.0.1），然后将network-compression-threshold项设置为-1（此项将交由 Velocity 管理）
如果您将 player-info-forwarding-mode 设置为了 modern ，那么您需要安装 FabricProxy 模组以支持 modern 模式的转发协议。
如果您完成了以上的所有配置，那么恭喜您，您的 Velocity 已经部署完毕，可以进行跨服工作了。

如何跨服
使用/server 服务器名指令即可传送到指定的服务器；

请注意，不要忘记在权限管理系统中给予玩家velocity.command.server权限以允许这些玩家使用上述指令。

请注意，Velocity 没有内置的权限管理系统，因此，我们依然推荐您使用 Luckperms 作为您 Velocity 的权限管理系统

其他 Velocity 指令可见于Velocity Decumentation

为 Velocity 安装插件
您可以前往 Velocity Forums 为 Velocity 下载插件，并将插件放入plugins文件夹，并重启服务器，即可完成插件安装

至此，您已经完成了本文的全部阅读。

最后
这个教程终于被我写完了，其实以前写过一个 BungeeCord 的教程，但不是很完整，因此一直想弥补这么一个遗憾，如今终于完成了我的愿望。

本文全文超 1.5w 字，全篇使用 Markdown 代码完成，同时受 CC BY-NC-SA 4.0 国际 协议保护。

本文撰写仓促，难免有所纰漏，因此欢迎各位大佬指出错误，以便本人及时修改。