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

#### [Sponge](https://spongepowered.org/) Vanilla(1.8-1.21)

海绵端, 使用SpongeAPI的一个MC纯净服务端核心, 可以加载Sponge的插件
SpongeVanilla 是在 Vanilla Minecraft 上实现的 Sponge API。
建议运行没有 Forge mods 的插件。

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

#### [Sponge](https://spongepowered.org/) Forge/Neo(1.8-1.21)

SpongeForge 是 Minecraft Forge 平台上 Sponge API 的实现。SpongeNeo 是 NeoForge 平台上 Sponge API 的实现。在 SpongeVanilla 的基础上加入了对 Forge mod 的支持。

#### [Mohist](https://mohistmc.com/)(1.7.10-1.20.1)

一个实现了 Bukkit、Spigot API 的 Minecraft Forge 服务器软件。使用此软件，您可以创建一个带有模组和插件的 Minecraft 服务器！

#### [Banner](https://mohistmc.com/)(1.19.4-1.20.1)

一个实现了 Bukkit 和 Spigot API 的 Minecraft Fabric 服务器软件。这个软件允许您创建一个使用 Fabric 模组和插件的 Minecraft 服务器。

#### [Youer](https://mohistmc.com/)

一个实现了 Bukkit 和 Spigot API 的 Minecraft NeoForge 服务器软件。这个软件允许您创建一个使用 NeoForge 模组和插件的 Minecraft 服务器。

#### [Arclight](https://github.com/IzzelAliz/Arclight)(1.14.4-1.21.3)

螺端, 高版本的Forge/Bukkit混合服务端,在常见的 mod 加载器上实现的 Bukkit 服务器。

#### [Catserver](https://catmc.org/)(1.12.2,1.16.5,1.18.2)

一个高性能的 Forge+Bukkit+Spigot 服务端核心。加入了大量原创优化和 Paper 端的优化, 修复了很多 Bug。

是[LoliServer](https://git.zerodream.net/ZeroDream/LoliServer)和[FoxServer](https://github.com/Luohuayu/FoxServer)的后续开发版本。

#### [Ketting](https://github.com/kettingpowered/Ketting-1-20-x)(1.20.x)

Ketting 是 Magma 在 1.20 版本的续作，将 CraftBukkit 和 Spigot 补丁与 Forge 补丁相结合，创建了一个可以同时运行 Forge 模组和 Bukkit 插件的服务器。同时还包含一些自制补丁。

#### [Magma](https://github.com/magmamaintained)（1.12.2,1.18.2,1.19.3,1.20.1)

Magma 是下一代混合 minecraft 服务器软件，基于 Forge 和 Spigot，这意味着它可以运行CraftBukkit/Spigot 插件和 Forge 模块。

Magma 1.18.2与原版BungeeCord 或其任何分支不兼容。这是由 Forge 引起的，而不是 Magma 的错误。如果不修改客户端，我们无法自行修复此问题。您可能能够使用名为Lightfall的 Waterfall 分支，但它也需要客户端模块才能工作，并且不受官方支持。

Magma 1.18.2与vanilla Velocity不兼容。这是由 Forge 引起的，而不是 Magma 的错误。如果不修改客户端和代理，我们无法自行修复此问题。

#### [Atom](https://github.com/josephworks/AtomMC)(1.12.2)

一个 Minecraft 1.12.2 版本的服务器核心，基于 MinecraftForge 和 CraftBukkit。部分代码取自 Spigot 及其衍生项目。
可以稳定地与 Bukkit 插件和 MinecraftForge 模块支持协同工作。尽可能实现最高性能。
现由 Josephworks 接手[原项目](https://gitlab.com/divinecode/atom/Atom)。

#### [Kettle](https://github.com/KettleFoundation/Kettle)(1.12.2)

Kettle 最初被认为是 Contigo 的一个分支，但经过几次迭代之后摆脱了 Contigo 的依赖，不再被视为它的分支，而是一个独立的混合服务器。

Kettle 依赖于自定义 Forge 和 Paper 版本，这意味着它可以运行基于 Craftbukkit/spigot 的插件和基于 forge 的模块。

我们希望消除 craftbukkit forge 服务器的所有问题。最终，我们设想提供无缝、低延迟的 Kettle 体验，并支持新的 1.12+ 版 Minecraft。

#### [Contigo](https://github.com/djoveryde/Contigo)(1.7.10)

Contigo 是 Thermos 的一个分支

#### [ThermosX](https://github.com/DireClanMC/ThermosX)(1.7.10)

ThermosX 是 Thermos 的一个分支

#### [Thermos](https://github.com/CyberdyneCC/Thermos)(1.7.10)

Thermos 是 KCauldron 的一个分支，是 Minecraft 1.7.10 的 CraftBukkit-Forge 服务器。具有降低延迟的优化，修复重复错误，更好的世界保护。不兼容Lilypad。

KCauldron 继承自 Cauldron，是 MCPC 以及 MCPC+ 的高版本移植。

#### [Uranium](https://github.com/UraniumMC/Uranium)(1.7.10)

基于 KCauldron 并进行了大量修复以及优化, 兼容 CraftBukkit/Spigot 插件以及 Forge。



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

