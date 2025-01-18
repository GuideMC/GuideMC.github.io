# 服务端核心

这里收录了几乎所有出现过的服务端核心

## Java端核心

适用于Minecraft Java版服务器的开服, 游戏联机。

### 纯净端

[链接](https://minecraft.fandom.com/wiki/Minecraft_Wiki): 官方提供的原版服务端, 包含mc的所有版本, 包括快照版和预览版, 估计没人用这核心, 也不推荐作为开服使用。  
不支持除了原生 Minecraft 外的任何特性内容  
Mojang 官方支持  
自带原生 GUI 控制台窗口  
相对比其他服务端来说，性能较差

#### [Cuberite](https://cuberite.org/) (1.8-1.12.2)

适用于 Minecraft 的轻量级、快速且可扩展的游戏服务器，适用于多平台。  
Android™️ 跨平台支持  
可以 安装支持 CuberiteAPI 的插件  
稳定性不好  
性能较好  
缺少很多原版内容  
同时支持 1.8-1.12.2  
支持跨版本运行，1.8-1.12.2 的客户端均能加入到你的 Cuberite 服务器中

#### Spout (1.5-1.7)

而在这里面，spoutcraft又是比较特殊的一个mod. 比起modpack，它更像是一个API，跟forge类似的一种东西——然而跟forge不同的是，spout能够被用来做mod的那部分API离完成永远遥遥无期（毕竟没有non-premium用户的关注和支持），这导致spout在实际上能提供的内容极其有限。

不过spout在多人游戏上有着一个非常大的优势：官方支持bukkit。不仅如此，如果在服务端安装了spout的mod，客户端不需要事先进行针对性配置——也就是说，使用同一个spoutcraft客户端你可以玩服务器提供的任何mod.

SpoutAPI之所以工程量浩大迟迟无法完工，就是因为像bukkit一样，spout不是一个基于Notch-code的mod. Forge的开发者能够通过反编译官方版的minecraft，在其基础上增加各种各样的hook，然后统一提供一个接口给mod开发者。这样的开发没什么后顾之忧，并且可以步步为营加一个算一个随时可以发布。然而对于SpoutAPI，他要做的基本是把整个mc重新写一遍。有什么地方不对或者没完成，整个spout都没法发布。

所以forge的发布可以超勤快，而且还可以嫌sdk的工作太慢自己出fml，而spout却一直拖到连1.4都要发布了，才更新1.3.2推荐版。
也是同样的原因，spout可以从头到尾稳定地支持bukkit且没有版本兼容问题，而mcpc到现在也没把1.3.2的forge给port出来。
————————————————————————————————————
其实说起来，spout也并不是只有正版玩家可用，你甚至不需要破解就能使用spout.
spoutlauncher在启动时无论你是否成功登陆，都会将整个spoutcraft的客户端更新下载下来，你只需要以某种方式启动这个客户端就行了。

#### Phoenix

### 模组端

#### [Forge](https://files.minecraftforge.net) (1.2.5 - 1.20.1)

Forge是一个免费开源的API, 通过注入原版服务端, 允许在你的服务器中加载各种mod, 用来扩展服务器玩法。  
基于 Vanilla  
可以 安装支持 ForgeAPI 的模组  
稳定性较好  
性能较差  
可插拔性强，易于更新

#### [Fabric](https://fabricmc.net) (1.7.10 - 1.20.1)

一个轻量级的mod API, 适合用于mc 1.14.4以上的高版本, 包含快照版本, 兼容性比Forge好。  
基于 Vanilla  
可以 安装支持 FabricAPI 的模组  
稳定性较好  
性能相对较好  
可插拔性强，易于更新

#### [Fukkit](https://github.com/FukkitMC/Fukkit)

### 插件端

#### [Sponge](https://spongepowered.org/) Vanilla (1.8-1.21)

海绵端, 使用SpongeAPI的一个MC纯净服务端核心, 可以加载Sponge的插件  
SpongeVanilla 是在 Vanilla Minecraft 上实现的 Sponge API。  
可以 安装支持 Sponge 的插件  
性能相对很好  
更新较快  
稳定性很好  
社区支持友好  
插件生态较差

#### [CraftBukkit](https://bukkit.org/)

CraftBukkit是Minecraft原版修改核心, CraftBukkit保留了一些有用的可配置性和优化功能, 例如异步块加载, 修复了一些原版服务端的bug。现已并入Spigot。  
缺点: 是只能加载bukkit插件, 并且不能加载mod。  
基于 Vanilla 二次开发  
可以 安装支持 BukkitAPI 的插件  
性能较差

#### [Spigot](https://spigotmc.org)

水龙头，使用最多的服务端核心之一。基于CraftBukkit的Minecraft原版修改核心, 可提供其他性能优化, 配置选项和功能, 同时兼容Spigot系插件并与Vanilla Minecraft游戏机制保持一致。  
基于 CraftBukkit  
可以 安装支持 BukkitAPI,SpigotAPI 的插件  
稳定性好  
性能较好

#### [Paper](https://papermc.io) (1.8.x - 1.20.1)

Paper端, 下一代的Minecraft服务端核心, 兼容Spigot, Bukkit插件, 修复了大量mc的bug, 并提供了更高, 更出色的性能  
优点: 强劲的性能和大量的优化, 修复了一些MC的bug  
缺点: 修复了一些原版的特性, 如刷沙, 不适合生电服  
基于 Spigot  
可以 安装支持 BukkitAPI,SpigotAPI,PaperAPI 的插件  
部分自带原生 GUI 控制台窗口  
稳定性较好  
性能好  
更新迅速  
提供了更多的优化和服务端个性化选项  
构建、使用方便  
搭载了较为先进的 Aikar's Timings® 性能分析系统

### [Folia](https://papermc.io/software/folia) (1.19.4-1.20.6)

Paper 的一个新分支，它为服务器添加了区域化多线程。

### [Purpur](https://purpurmc.org/)

### [Pufferfish](https://github.com/pufferfish-gg/Pufferfish)

#### [Akarin/Torch](https://github.com/Akarin-project/Akarin/)

一个来自"新维度" 的功能强大的服务端核心, 多线程优化, 稳定, 快速, 兼容性强, 个人感觉比Paper优化好。  
基于 Paper/Tuinity  
可以 安装基于 BukkitAPI,SpigotAPI,PaperAPI，可能可以安装基于 TuinityAPI 的插件  
不可以 安装基于任何 API 的模组  
性能极佳  
支持多线程  
更新不快  
不太稳定

#### [TacoSpigot](https://github.com/TacoSpigot/TacoSpigot) (1.8.8 - 1.13.2)

(请使用Paper)  
一个基于Paper的多线程服务端, 对Paper进一步优化, 并修复了一些bug。

#### [Cleanstone](https://github.com/CleanstoneMC/Cleanstone) (1.12.2 - 1.14)

一个多线程服务端, 支持多个mc版本的协议(Java版1.12.2 - 1.14和基岩版的服务器列表ping), 支持Java11  
这个核心还是半成品, 目前没有实现物品掉落, AI, nbt支持等mc机制。

#### [Hose](https://github.com/softpak/HOSE) (1.11.2)

一个1.11.2版本的多线程服务端核心, 基于Spigot, 支持Java8。

#### [Sugarcane](https://github.com/SugarcaneMC/Sugarcane)

#### [Airplane](https://github.com/TECHNOVE/Airplane)

#### [Patina](https://github.com/PatinaMC/Patina)

#### [Yatopia](https://github.com/YatopiaMC/Yatopia)

基于Tuninity的一个优化核心, 结合了许多Paper分支和优化mod的代码  
融入了大量Akarin, EMC, Origami, Airplane, Lithium, Cadmium, Tic-Tacs和Yatopia独有的优化  
本核心也是Tuinity的后身，肯定比楼上的核心适用很多  
优点：稳定性比paper稳定，也比Tuinity稳定，而且关服速度变快了许多

#### [Tuinity](https://github.com/Tuinity/Tuinity)

一个高版本纯净端核心, 基于Paper  
修复了一些mc的bug, 重写了mc的光照引擎, 加入了大量对实体, 多线程等等方面的优化  
作者已停止维护此核心并加入了PaperMC团队, Tuinity已和Paper合并。  
基于 Paper  
优化paper核心的人数增加不会卡服问题  
可以 安装基于 BukkitAPI,SpigotAPI,PaperAPI,TuinityAPI 的插件  
不可以 安装基于任何 API 的模组  
性能极佳  
更新较快  
较为稳定

#### [Vefland](https://github.com/LegacyGamerHD/VefLand-1.12.2) (1.12.2)

基于Spigot的多线程核心, 前身是TorchSpigot。  
重构并优化了mc的大量代码, 加入了多线程优化。

#### [Glowstone](https://glowstone.net/) (1.8.9-1.12.2)

一个轻量级的、从头开始的开源 Minecraft服务器，用 Java 编写，支持为 Bukkit API 及其主要分支 Spigot 和 Paper 编写的插件。  
该项目的主要目标是提供 Bukkit API 和 Minecraft 服务器的轻量级实现，其中不需要精确的 vanilla 功能或需要比官方软件可以提供的更高的性能。Glowstone 使用每个世界线程模型，并且仅在 Bukkit API 需要时执行同步。  
可以 安装支持 BukkitAPI,SpigotAPI,PaperAPI,GlowstoneAPI 的插件  
稳定性不好  
性能较好  
缺少很多原版内容

### 混合端

#### [Sponge](https://spongepowered.org/) Forge/Neo (1.8-1.21)

SpongeForge 是 Minecraft Forge 平台上 Sponge API 的实现。SpongeNeo 是 NeoForge 平台上 Sponge API 的实现。在 SpongeVanilla 的基础上加入了对 Forge mod 的支持。  
基于 ForgeAPI  
可以 安装支持 SpongeAPI 的插件  
可以 安装支持 ForgeAPI 的模组  
性能相对很好  
更新较快  
稳定性很好  
社区支持友好  
插件生态较差  
对模组兼容性较差，但插件对模组兼容性极佳

#### [Mohist](https://mohistmc.com/) (1.7.10-1.20.1)

一个实现了 Bukkit、Spigot API 的 Minecraft Forge 服务器软件。使用此软件，您可以创建一个带有模组和插件的 Minecraft 服务器！  
本体基于 Paper，而不是 Spigot，这意味着不仅可以享受 Paper 带来的漏洞修复和优化，还可以让你轻松使用基于 PaperAPI 开发的插件。  
Mohist 还支持控制台信息国际化，可选择服务端 Mod 语言，内置插件管理器等等非常实用的功能。

#### [Banner](https://mohistmc.com/) (1.19.4-1.20.1)

一个实现了 Bukkit 和 Spigot API 的 Minecraft Fabric 服务器软件。这个软件允许您创建一个使用 Fabric 模组和插件的 Minecraft 服务器。

#### [Youer](https://mohistmc.com/)

一个实现了 Bukkit 和 Spigot API 的 Minecraft NeoForge 服务器软件。这个软件允许您创建一个使用 NeoForge 模组和插件的 Minecraft 服务器。

#### [Arclight](https://github.com/IzzelAliz/Arclight) (1.14.4-1.21.3)

Arclight 是一款「在 Forge 上使用 Mixin 实现的 Bukkit 服务端」，提供了 1.14.4 和 1.15.2 两个高版本的 BukkitAPI+ForgeAPI 支持

#### [Catserver](https://catmc.org/) (1.12.2,1.16.5,1.18.2)

一个高性能的 Forge+Bukkit+Spigot 服务端核心。加入了大量原创优化和 Paper 端的优化, 修复了很多 Bug。  
是[LoliServer](https://git.zerodream.net/ZeroDream/LoliServer)和[FoxServer](https://github.com/Luohuayu/FoxServer)的后续开发版本。

#### [Ketting](https://github.com/kettingpowered/Ketting-1-20-x) (1.20.x)

Ketting 是 Magma 在 1.20 版本的续作，将 CraftBukkit 和 Spigot 补丁与 Forge 补丁相结合，创建了一个可以同时运行 Forge 模组和 Bukkit 插件的服务器。同时还包含一些自制补丁。

#### [Magma](https://github.com/magmamaintained) (1.12.2,1.18.2,1.19.3,1.20.1)

Magma 是下一代混合 minecraft 服务器软件，基于 Forge 和 Spigot，这意味着它可以运行CraftBukkit/Spigot 插件和 Forge 模块。  
Magma 1.18.2与原版BungeeCord 或其任何分支不兼容。这是由 Forge 引起的，而不是 Magma 的错误。如果不修改客户端，我们无法自行修复此问题。您可能能够使用名为Lightfall的 Waterfall 分支，但它也需要客户端模块才能工作，并且不受官方支持。  
Magma 1.18.2与vanilla Velocity不兼容。这是由 Forge 引起的，而不是 Magma 的错误。如果不修改客户端和代理，我们无法自行修复此问题。

#### [Atom](https://github.com/josephworks/AtomMC) (1.12.2)

一个 Minecraft 1.12.2 版本的服务器核心，基于 MinecraftForge 和 CraftBukkit。部分代码取自 Spigot 及其衍生项目。  
可以稳定地与 Bukkit 插件和 MinecraftForge 模块支持协同工作。尽可能实现最高性能。  
现由 Josephworks 接手[原项目](https://gitlab.com/divinecode/atom/Atom)。

#### [Kettle](https://github.com/KettleFoundation/Kettle) (1.12.2)

Kettle 最初被认为是 Contigo 的一个分支，但经过几次迭代之后摆脱了 Contigo 的依赖，不再被视为它的分支，而是一个独立的混合服务器。  
Kettle 依赖于自定义 Forge 和 Paper 版本，这意味着它可以运行基于 Craftbukkit/spigot 的插件和基于 forge 的模块。  
我们希望消除 craftbukkit forge 服务器的所有问题。最终，我们设想提供无缝、低延迟的 Kettle 体验，并支持新的 1.12+ 版 Minecraft。

#### [Contigo](https://github.com/djoveryde/Contigo) (1.7.10)

Contigo 是 Thermos 的一个分支

#### [ThermosX](https://github.com/DireClanMC/ThermosX) (1.7.10)

ThermosX 是 Thermos 的一个分支

#### [Thermos](https://github.com/CyberdyneCC/Thermos) (1.7.10)

Thermos 是 KCauldron 的一个分支，是 Minecraft 1.7.10 的 CraftBukkit-Forge 服务器。具有降低延迟的优化，修复重复错误，更好的世界保护。不兼容Lilypad。  
KCauldron 继承自 Cauldron，是 MCPC 以及 MCPC+ 的高版本移植。

#### [Uranium](https://github.com/UraniumMC/Uranium) (1.7.10)

Uranium 是一款基于 KCauldron 的 BukkitAPI+ForgeAPI 服务端，其整合了部分Thermos对服务端的修复，同时进行了一些输入书与笔虚体问题的BUG修复。其最大的特点是强制使用 UTF-8 编码作为配置文件编码和通过 UraniumPlus Mod 令 1.7.10 客户端支持 Title 和 Actionbar。

## 代理端

允许你将多个mc服务器连在一起, 玩家可以在服务器之间无缝传送。

### [BungeeCord](https://ci.md-5.net/job/BungeeCord/) (1.8.x - 1.19)

### [Leymooo BungeeCord](http://www.rubukkit.org/threads/137038) (1.8.x - 1.18.x)

BungeeCord的分支, 增加了反假人压测功能, 自带验证码验证和掉落检测。

### [Waterfall](https://papermc.io/downloads#Waterfall)

在BungeeCord的基础上增加了很多新特性, 进行了大量优化, 对Forge的支持, 增强了稳定性等等

### [Lightfall](https://github.com/ArclightPowered/lightfall) (1.18-1.20)

Waterfall 的一个分支，具有现代 Forge 支持。

### [Travertine](https://papermc.io/legacy#Travertine) (1.7.10 - 1.16.5)

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

### [LOOHP's Limbo](https://www.spigotmc.org/resources/82468) (1.20.1)

一个Limbo服务端核心, 适合玩家挂机或用做服务器大厅,  
可以加载schem格式的世界文件

### [NanoLimbo](https://www.spigotmc.org/resources/86198) (1.7.x - 1.20.x)

轻量级, 高性能的Limbo服务端, 节省服务器资源  
兼容BungeeCord和Velocity的群组架构。  
这个服务端核心的大小就2MB左右, 好耶\o/

### [TyphoonLimbo](https://github.com/TyphoonMC/TyphoonLimbo) (已弃坑) (1.7.x - 1.15.x)

一个轻量级的Limbo核心, 使用go语言编写,  
允许自定义玩家加入消息, bossbar, actionbar等配置

### [Dripleaf](https://github.com/NoahvdAa/Dripleaf) (1.17.1)

一个正在开发中的轻量级Limbo核心, 用于排队服务器或崩溃时的备份服务器  
⚠️此核心仍在早期开发中, 不推荐在生产环境中使用⚠️

## Bedrock

### [Nukkit(X)](https://cloudburstmc.org/articles/)

### [PocketMine](https://pmmp.io/)
