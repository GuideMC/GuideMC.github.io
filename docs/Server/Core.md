# 服务端核心

这里收录了几乎所有出现过的服务端核心

## Java端核心

适用于Minecraft Java版服务器的开服, 游戏联机。

### 纯净端

版本: 1.2.5 - 1.20.1
链接: https://minecraft.fandom.com/wiki/Minecraft_Wiki
官方提供的原版服务端, 包含mc的所有版本, 包括快照版和预览版, 估计没人用这核心, 也不推荐作为开服使用。
优点: 拥有所有的原版机制
缺点: 不能加载mod和插件, 优化差

### 模组端

#### Forge

版本: 1.2.5 - 1.20.1
链接(官网): https://files.minecraftforge.net
Forge是一个免费开源的API, 通过注入原版服务端, 允许在你的服务器中加载各种mod, 用来扩展服务器玩法。
优点: 允许在原版基础上加各种mod
缺点: 不能加载插件, 没有优化

#### Fabric

版本: 1.7.10 - 1.20.1
链接(官网): https://fabricmc.net
一个轻量级的mod API, 适合用于mc 1.14.4以上的高版本, 包含快照版本, 兼容性比Forge好。
优点: 允许在原版基础上加各种mod, 支持快照版本
缺点: 不能直接加载插件

### 插件端

#### Bukkit
版本: 1.2.5 - 1.20.1
链接(官网): https://bukkit.org
Bukkit是一个免费开源的MC服务端核心, 可以加载bukkit插件来增强游戏体验。现已并入Spigot。
缺点: 只能加载bukkit插件, 并且不能加载mod。

#### CraftBukkit
版本: 1.0 - 1.20.1
链接(官网): https://bukkit.org
CraftBukkit是Minecraft原版修改核心, CraftBukkit保留了一些有用的可配置性和优化功能, 例如异步块加载, 修复了一些原版服务端的bug。现已并入Spigot。
缺点: 是只能加载bukkit插件, 并且不能加载mod。

#### Spigot
版本: 1.4.6 - 1.20.1
链接(官网): https://spigotmc.org
水龙头，使用最多的服务端核心之一。基于CraftBukkit的Minecraft原版修改核心, 可提供其他性能优化, 配置选项和功能, 同时兼容Spigot系插件并与Vanilla Minecraft游戏机制保持一致。
优点: 拥有原版游戏机制
缺点: 不能加载mod, 并且只能加载spigot插件。

#### Paper
版本: 1.8.x - 1.20.1
链接(官网): https://papermc.io
Paper端, 下一代的Minecraft服务端核心, 兼容Spigot, Bukkit插件, 修复了大量mc的bug, 并提供了更高, 更出色的性能
优点: 强劲的性能和大量的优化, 修复了一些MC的bug
缺点: 修复了一些原版的特性, 如刷沙, 不适合生电服

#### Sponge_Vanilla
版本: 1.8 - 1.20
链接(官网): https://www.spongepowered.org/
海绵端, 使用SpongeAPI的一个MC纯净服务端核心, 可以加载Sponge的插件
优点: 开放并拥有较好的性能
缺点: 不推荐新手服主用, 只能加载Sponge插件, 不能加载Spigot和Bukkit插件。

#### Akarin
版本: 1.12.2 - 1.16.5
链接:
一个来自"新维度" 的功能强大的服务端核心, 多线程优化, 稳定, 快速, 兼容性强, 个人感觉比Paper优化好。
优点: 多线程优化
缺点: 纯净端核心, 不能加mod, 高版本拥有较多bug, 开发团队较不活跃

#### Torch
版本: 1.12.2
链接(Github): https://github.com/TorchSpigot/Torch
Akarin端, Vefland端的前身, 基于Paper, 加入了多线程优化。

#### Vefland
版本: 1.12.2
链接(Github): https://github.com/LegacyGamerHD/VefLand-1.12.2
基于Spigot的多线程核心, 前身是TorchSpigot。
重构并优化了mc的大量代码, 加入了多线程优化。

#### TacoSpigot
版本: 1.8.8 - 1.13.2
链接(Github): https://github.com/TacoSpigot/TacoSpigot
(请使用Paper)
一个基于Paper的多线程服务端, 对Paper进一步优化, 并修复了一些bug。

#### Cleanstone
版本: 1.12.2 - 1.14
链接(Github): https://github.com/CleanstoneMC/Cleanstone
(请使用Minestom)
一个多线程服务端, 支持多个mc版本的协议(Java版1.12.2 - 1.14和基岩版的服务器列表ping), 支持Java11
这个核心还是半成品, 目前没有实现物品掉落, AI, nbt支持等mc机制。

#### Hose
版本: 1.11.2
链接(Github): https://github.com/softpak/HOSE
一个1.11.2版本的多线程服务端核心, 基于Spigot, 支持Java8。

#### Yatopia
版本: 1.15.2 - 1.17
链接(Github): https://github.com/YatopiaMC/Yatopia
基于Tuninity的一个优化核心, 结合了许多Paper分支和优化mod的代码
融入了大量Akarin, EMC, Origami, Airplane, Lithium, Cadmium, Tic-Tacs和Yatopia独有的优化

#### Tuinity
版本: 1.13.2 - 1.17.1
链接(Gtihub): https://github.com/Tuinity/Tuinity
(请使用Paper)
一个高版本纯净端核心, 基于Paper
修复了一些mc的bug, 重写了mc的光照引擎, 加入了大量对实体, 多线程等等方面的优化
作者已停止维护此核心并加入了PaperMC团队, Tuinity已和Paper合并。

### 混合端

#### Sponge_Forge

版本: 1.8.9-1.21.4
链接(官网): https://www.spongepowered.org/
使海绵端, 用SpongeAPI的Forge模组服核心, 在SpongeVanilla的基础上加入了对Forge mod的支持
优点: 可以加载各种mod来扩展玩法
缺点: 不推荐新手服主用, 只能加载Sponge插件, 不能加载Spigot和Bukkit插件。

#### Mohist
版本: 1.7.10 | 1.12.2 | 1.16.5 | 1.18.2 | 1.19
链接(官网): https://mohistmc.com/
墨端，由国人Mgazul开发, 一个混合了Paper, Bukkit, Spigot的Forge服务端核心, 允许使用mod和插件, 优化良好, 经常更新, 推荐使用。
优点: 对模组&插件兼容性强, 优化良好, 更新频繁
缺点: 1.16.5不支持nms等缺点

#### Catserver
版本: 1.12.2 | 1.16.5 | 1.18.2 | 1.19.4
链接(官网): https://catmc.org/
猫端, 由国人落花雨开发, 开源免费的1.12.2版本Forge+Bukkit+Spigot服务端, 加入了大量原创优化和Paper端的优化, 修复了很多bug。
同时也是1.16.5LoliServer, 1.18.2FoxServer的后续开发版本

#### Arclight
版本: 1.14.4 - 1.20.1
链接:
螺端, 高版本的Forge/Bukkit混合服务端,

#### Atom
版本: 1.12.2
链接(Github): https://github.com/josephworks/AtomMC
原子端, 原作者弃坑, 现由Josephworks维护, 一个兼容Forge mod和Bukkit&Spigot插件的服务端核心, 稳定, 拥有较高的性能。

#### KCauldron
版本: 1.7.10
KC端, 是MCPC+, Cauldron的后续版本

#### [Thermos](https://github.com/CyberdyneCC/Thermos)

版本: 1.7.10
Thermos 是 KCauldron 的一个分支，KCauldron 是 Minecraft 1.7.10 的 craftbukkit 锻造服务器。在 KCauldron 的 GitLab 因重大问题而停顿了一段时间后，Thermos 应运而生，以便 Minecraft 编码社区的活跃成员对其进行优化并及时提供修复。

我们希望消除 craftbukkit forge 服务器的所有问题。最终，我们设想了一种无缝、低延迟的 Thermos 体验。

相对于 KCauldron 的优势：

降低延迟的优化
更好的世界保护（Forge 内容不会绕过 Bukkit 插件！）
KCauldron 没有从 Spigot 获得很多补丁
修复重复错误
不兼容Lilypad

#### [ThermosX](https://github.com/DireClanMC/ThermosX)

版本: 1.7.10
Thermos的优化版, 进行了优化和bug修复。

#### Uranium
版本: 1.7.10
链接(官网): https://ci.uraniummc.cc/
铀(U)端, 在1.7.10时代非常流行, 基于KC端并进行了大量修复以及优化, 兼容bukkit, spigot插件以及1.7.10的forge mod。
优点: 修复了很多bug, 进行了优化并增加了一些新特性
缺点: 官网炸了, 貌似弃坑了

#### Contigo
版本: 1.7.10
链接(Github): https://github.com/djoveryde/Contigo
阿

#### Kettle
版本: 1.12.2 | 1.14.4
Contigo的优化版本,

#### Magma
版本:

#### Ketting



#### Sunset
版本:
阿

#### MITE
版本: 1.6.4
贝爷端,



#### Glowstone
版本:
阿

#### Cuberite
版本:
阿

#### Spout
版本: 1.5 | 1.6.2 | 1.7
链接: spoutcraft.org
作者已停止更新, 官网已挂, Github上的介绍是一个客户端mod(??), 类似一个API, 可以添加自定义方块, 物品, 玩法等等。

#### SpoutcraftPlus
版本:
阿

#### Phoenix

#### LoliServer
版本: 1.16.5
链接:

#### FoxServer
版本: 1.18.2
链接:

## 代理端/Proxy
允许你将多个mc服务器连在一起, 玩家可以在服务器之间无缝传送。


### BungeeCord
版本: 1.8.x - 1.19
链接(下载): https://ci.md-5.net/job/BungeeCord/
BC核心,


### BungeeCord汉化版
版本: 1.8.x - 1.17.x
链接(MCBBS): https://www.mcbbs.net/thread-955276-1-1.html
BC核心的汉化版

### Leymooo BungeeCord
版本: 1.8.x - 1.18.x
链接(Rubkkit): http://www.rubukkit.org/threads/137038
BungeeCord的分支, 增加了反假人压测功能, 自带验证码验证和掉落检测。

### Waterfall
版本: 1.8.x - 1.19
链接(下载): https://papermc.io/downloads#Waterfall
在BungeeCord的基础上增加了很多新特性, 进行了大量优化, 对Forge的支持, 增强了稳定性等等
优点: 比bc有更好的扩展性, 更稳定, 并能承载更多的玩家。
缺点: 暂时没有

### Travertine
版本: 1.7.10 - 1.16.5
链接(下载): https://papermc.io/legacy#Travertine
Waterfall的一个分支, 仅仅添加了对1.7.10协议的支持。

### Velocity
版本: 1.7.x - 1.19

### Flamecord
版本: 1.7.x - 1.19

### HexaCord
版本: 1.7.10

### gate
版本:

### Waterdog
版本:

### Geyser
版本: Java版1.19, 基岩版1.19.0



### Nemysis
版本:

### BedrockBackwards
版本:


### DragonProxy
版本:

### EZ4H
版本:

### Lilypad
版本:



## Limbo/幽冥域/MC边缘服务器 (我也不知道怎么翻译@_@)
一种非常轻量的高性能服务端核心, 支持容纳大量的玩家, 不会占用太多的服务器资源。用做服务器大厅, 登录服, 或者玩家挂机的地方。提供了API方便实现简单的功能


### LOOHP's Limbo
版本: 1.20.1
链接(Spigot): https://www.spigotmc.org/resources/82468
一个Limbo服务端核心, 适合玩家挂机或用做服务器大厅,
可以加载schem格式的世界文件

### NanoLimbo
版本: 1.7.x - 1.20.x
链接(Spigot): https://www.spigotmc.org/resources/86198
轻量级, 高性能的Limbo服务端, 节省服务器资源
兼容BungeeCord和Velocity的群组架构。
这个服务端核心的大小就2MB左右, 好耶\o/

### TyphoonLimbo (已弃坑)
版本: 1.7.x - 1.15.x
链接(Github): https://github.com/TyphoonMC/TyphoonLimbo
一个轻量级的Limbo核心, 使用go语言编写,
允许自定义玩家加入消息, bossbar, actionbar等配置

### Dripleaf
版本: 1.17.1
链接(Github): https://github.com/NoahvdAa/Dripleaf
一个正在开发中的轻量级Limbo核心, 用于排队服务器或崩溃时的备份服务器
⚠️此核心仍在早期开发中, 不推荐在生产环境中使用⚠️

