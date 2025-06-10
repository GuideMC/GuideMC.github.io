# 服务端核心

这里收录了几乎所有出现过的服务端核心，以及一些仍在开发中的项目。
Java & Bedrock 原版核心可从 [Minecraft Wiki](https://zh.minecraft.wiki/) 处下载。

## Java 端核心

适用于 Minecraft Java 版服务器。

### 纯净端

不支持任何插件 / 模组。

#### [NanoLimbo](https://github.com/Nan1t/NanoLimbo) (1.7 - *)

NanoLimbo 是轻量级的 limbo 核心，支持多版本，使用 Java 和 Netty 编写。  
可用作离线模式的授权服务器或群组中的后备服务器，在主服务器宕机时让玩家保持网络连接。  
支持 BungeeCord 和 Velocity 转发，支持 BungeeGuard 握手格式。  
不会保存或缓存任何无用数据，使用固定线程池，不会为每个玩家生成线程。  
无法放置建筑，可以通过聊天或顶栏发送公告。

#### [Limbo](https://github.com/LOOHP/Limbo) (1.17.1 - *)

Limbo 是适用于服务器中 AFK 或大厅的轻量级解决方案。  
可以把 .schem 加载为默认世界，并且支持玩家皮肤。  
还支持 API，允许创建插件并更改 Limbo 的行为。

#### [Dripleaf](https://github.com/NoahvdAa/Dripleaf) (1.17.1)

Dripleaf 是一款轻量级的 Limbo 核心，用作队列服务器或崩溃时的后备服务器。

#### [TyphoonLimbo](https://github.com/TyphoonMC/TyphoonLimbo) (1.7 - 1.13)

TyphoonLimbo 是使用 Go 编写的轻量级 Limbo，已停止维护。

#### [Minestom](https://github.com/Minestom/Minestom) (1.21.3 - *)

Minestom 是 Cleanstone 的续作，是一个开源库，可以使用它创建自己的服务器。  
默认不包含任何功能，但是有一个完整的 API 用于实现任何目标。

#### [MCHPRS](https://github.com/MCHPR/MCHPRS) (1.21.4)

Minecraft High-Performance Redstone Server 是为红石构建的创造服务器。  
每个 512x512 区块都在单独的线程上运行，从而减少延迟、提高并发性。  
由于是针对计算红石的使用而定制的，因此原版中的许多功能都不存在。

#### [DockyardMC](https://github.com/DockyardMC/Dockyard) (1.21.4)

DockyardMC 是开源、快速且轻量级的服务器协议实现，使用 Kotlin 编写，无需 Mojang 的任何代码。  
它专注于简化开发，与 PaperMC 不同，具有非常易于使用且现代的 API。

#### [Obsidian](https://github.com/ObsidianMC/Obsidian) (1.21.4)

Obsidian 是服务器协议的 C# .NET 实现。

#### [Zeppelin](https://github.com/ZeppelinMC/Zeppelin)/[Dynamite](https://github.com/ZeppelinMC/Dynamite) (1.21.4)

Zeppelin/Dynamite 是 Go 编写的高度优化的服务器协议实现。  
快速、高效、可靠，具有插件 API 和干净的代码。

#### [Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) (1.21.4)

Pumpkin 是用 Rust 构建的核心，可提供快速、高效且可自定义的体验。  
它优先考虑性能和玩家的享受，同时遵循游戏的核心机制。

#### [Valence](https://github.com/valence-rs/valence)/[Feather](https://github.com/feather-rs/feather) (1.21.4) (1.16.5)

Valence/Feather 是用 Rust 构建的核心，建立在 Bevy ECS 之上。  
通过编写游戏逻辑并利用 Bevy 强大的插件系统，可以模块化构建各种功能。

#### [Jet](https://github.com/Hypejet/Jet) (1.21.4)

Jet 是全新的核心，旨在实现多线程、用户友好并拥有现代 API。  
没有重新实现任何原始功能，因此非常适合简单的迷你游戏服务器。

#### [flying-squid](https://github.com/PrismarineJS/flying-squid) (1.8 - *)

flying-squid 是用 JavaScript API 构建的核心。

#### [Krypton](https://github.com/KryptonMC/Krypton) (1.19)

Krypton 是从头编写的核心，不含 Mojang 代码。

#### [Bamboo](https://gitlab.com/macmv/bamboo) (1.8 - 1.18.2)

Bamboo 是安全、快速且有保障的核心，针对迷你游戏进行了优化。

#### [MotorMC](https://github.com/garet90/MotorMC) (1.18)

MotorMC 是用 C 语言编写的核心，超快、多线程、异步。  
旨在处理单个世界中的众多玩家，同时仍提供尽可能接近原版 Minecraft 的体验。

#### [Starfield](https://github.com/StarfieldMC/Starfield) (1.16.5)

Starfield 是用 C 编写的高性能核心。跨平台，内存使用率低，且体积相对较小。

#### [PyMine](https://github.com/py-mine/PyMine-Server) (1.16.5)

PyMine 是基于 Python 的核心。

#### [GoLangMc](https://github.com/GoLangMc/minecraft-server) (1.15.2)

GoLangMc 是用 Go 编写的核心。

#### [MineCase](https://github.com/dotnetGame/MineCase) (1.15.2)

MineCase 是跨平台、分布式的核心，使用 .NET Core 编写，基于 orleans 框架。  
它通过 Actor 模型将各个模块分离开来，从而构建一个高效的分布式系统。  
不同的区块由不同的服务器管理，所有的玩家都可以在同一个世界进行游戏。

#### [Cleanstone](https://github.com/CleanstoneMC/Cleanstone) (1.12.2 - 1.14)

Cleanstone 是一个多线程核心，使用 Java11 运行，支持多个版本。  
计划从头开始正确构建一个可扩展的服务器，而没有过时代码和单线程特性。

#### [Sugarcane](https://gitlab.com/macmv/sugarcane-go) (1.8 - 1.14)

Sugarcane 是专为迷你游戏构建的核心。它使用服务器和代理系统，因此客户端可以轻松地在服务器之间切换。

#### [Cuberite](https://cuberite.org/) (1.8 - 1.12.2)

Cuberite 是一个用 C++ 编写的轻量级、快速且可扩展的服务端，支持多平台。  
可安装支持 CuberiteAPI 的插件，性能较好。  
同时支持 1.8-1.12.2 的客户端加入。  
由于不依赖任何 Mojang 的源码，因此缺少很多原版内容，但这也使得它非常轻量。

#### [Basin](https://github.com/basinserver/basin) (1.10.2 - 1.11.2)

Basin 是用 C 编写的高性能核心。  
可通过 JNI 兼容 Spigot API 插件，具有易于修改，丰富的插件 API。

#### [RedstoneInside](https://github.com/xTachyon/RedstoneInside) (1.11.1)

RedstoneInside 是用 C++ 编写的核心。

#### [Composition](https://github.com/garentyler/composition) (1.9.4)

Composition 是用 Rust 编写的核心，目标是优化速度。

#### [McEx](https://github.com/McEx/McEx) (1.9.2)

McEx 是用 Elixir 和 Rust 编写的核心。  
所有网络和逻辑均在 Elixir 中实现，而低级区块数据处理则在 Rust 中完成。

#### [Mineserver](https://github.com/fador/mineserver) (1.8.9)

Mineserver 是用 C++ 编写的核心。

#### [MCpp](https://www.mcpp.dev/) (1.8.8)

MCpp 是一个用 C++ 编写的核心。目标是接近原版的游戏体验，且性能优于参考实现。  
目标是在世界生成、实体 AI 和网络扩展方面获得显著更高的性能。

#### [Hematite](https://github.com/PistonDevelopers/hematite_server) (1.8.3)

Hematite 是用 Rust 编写的核心。

#### [Netherrack](https://github.com/Techern-archived/Netherrack) (1.8)

Netherrack 是使用 Rust 编写的核心。

#### [SharpMC](https://github.com/SharpMC/SharpMC) (1.8)

SharpMC 是用 C# 编写的核心，目标是创建 Spigot/Bukkit/Sponge 的替代品。

#### [BurningPig](https://github.com/JoeDoyle23/BurningPig) (1.6.4 - 1.7.2)

BurningPig 是用 Node.js 编写的核心。

#### [PartyCraft](https://github.com/ddevault/PartyCraft) (1.6.2)

PartyCraft 是基于 Craft.Net 的核心。

#### [Spout](https://github.com/SpoutDev/Spout) (1.5 - 1.7)

Spout 不依赖任何 Mojang 的源码，且官方支持 Bukkit。  
可以仅在服务端安装Spout Mod，为客户端提供额外内容而无需客户端安装Mod。

#### [mc-erl](https://github.com/clonejo/mc-erl) (1.4.6 - 1.4.7)

mc-erl 是用 Erlang 编写的核心。

#### [jsmc](https://github.com/deoxxa/jsmc) (1.4.6)

jsmc 是非常灵活、非常易于破解、性能适中的核心。用 JavaScript 编写，可在 node.js 下运行。

### 模组端

某些非官方服务端软件允许你运行带模组的游戏。这些模组与运行它们的服务端软件并不受 Mojang Studios 的维护。

#### [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/) (1.1 - *)

Forge 是目前的主流 API。  
更新速度很快，版本支持度极高，从远古版本到最新版本均有支持。

#### [NeoForge](https://neoforged.net/) (1.20.1 - *)

NeoForge 是免费、开源、面向社区的修改 API。是 Minecraft Forge 的一个分支。

### [Cleanroom](https://github.com/CleanroomMC/Cleanroom) (1.12.2)

Cleanroom 致力于继续维护 1.12.2 的 Forge 模组社区。开发将侧重于对 Minecraft 原版以及 Forge 进行漏洞修复与增加功能。  
与 Forge 尽量减少 Patch （以便版本迁移）的理念不同， Cleanroom 会为了功能而进行大量的覆写与重构。  
目前已经实现在 Java 21 + LWJGL3 下运行游戏，并内置输入法支持与原始输入，并支持多语言排版。

#### [Fabric](https://fabricmc.net/) (1.14 - *)

Fabric 是一款模块化、轻量级模组加载器。  
除支持 1.14+ 的正式版本外， Fabric API 也跟进最新快照版本开发，还支持 20w14∞ 及之后的愚人节版本。

#### [Quilt](https://quiltmc.org/en/) (1.14 - *)

Quilt 是一个开源的、社区驱动的模组工具链。  
专注于速度、易用性和模块化，旨在提供具有开放生态系统的时尚现代模组工具链。

#### [Fukkit](https://github.com/FukkitMC/Fukkit)

Fukkit 是实现了 Bukkit + Fabric API 支持的核心，现已停更归档。

### 混合端

某些服务端软件允许你同时运行带有插件和模组的游戏。模组、插件与运行它们的服务端软件并不受 Mojang Studios 的维护。

#### [Mohist/Banner/Youer](https://mohistmc.com/) (1.7.10-1.20.1) (1.19.4-1.20.1)

Mohist 是实现了 Bukkit 和 Spigot API 的 Forge 核心。  
Banner 是实现了 Bukkit 和 Spigot API 的 Fabric 核心。  
Youer 是实现了 Bukkit 和 Spigot API 的 NeoForge 核心。  
基于 Paper ，因此可以使用基于 Bukkit、Spigot 和 Paper API 开发的插件，也自带 Paper 的漏洞修复和优化。  
还支持控制台信息国际化，可选择 Mod 语言，内置插件管理器等功能。

#### [Arclight](https://github.com/IzzelAliz/Arclight) (1.14.4-1.21.3)

Arclight 是一款「在 Forge 上使用 Mixin 实现的 Bukkit 服务端」，提供了高版本的 BukkitAPI+ForgeAPI 支持。  

#### [Catserver](https://catmc.org/) (1.12.2,1.16.5,1.18.2)

Catserver 是一个高性能的 Forge + Bukkit + Spigot 核心。加入了大量原创优化和 Paper 端的优化, 并修复了很多 Bug。  
是[LoliServer](https://git.zerodream.net/ZeroDream/LoliServer)和[FoxServer](https://github.com/Luohuayu/FoxServer)的后续开发版本。

#### [Catroom](https://github.com/NovaEngineering-Source/CatRoom) (1.12.2)

CatRoom 是基于 CatServer 的 Cleanroom + Bukkit + Spigot 核心。  
用 Cleanroom 取代 Forge，利用现代 Java 功能，增强模块兼容性，内置 Forge-Bukkit 权限桥，优化插件性能。

#### [Sponge](https://spongepowered.org/) Forge/Neo (1.8-1.21)

Sponge Forge/Neo 是 Forge/NeoForge 平台上 Sponge API 的实现。在 SpongeVanilla 的基础上加入了对 Forge/NeoForge 的支持。  
性能、稳定性和社区支持相对较好。可以安装支持 SpongeAPI 的插件，插件生态与模组兼容性较差，但插件对模组兼容性极佳。

#### [Ketting](https://kettingpowered.org/) (1.20.x)

Ketting 是 Magma 在 1.20 版本的续作，将 CraftBukkit 和 Spigot 补丁与 Forge 补丁相结合，同时还包含一些自制补丁。  
它是由 Magma 的前开发人员之一 JustRed23 创建的。由于原始代码库存在许多问题，他们决定从头开始重写整个项目，使其更稳定且更易于使用。

#### [Magma](https://github.com/magmamaintained) (1.12.2,1.18.2,1.19.3,1.20.1)

Magma 是基于 Forge 和 Spigot 的核心，这意味着它可以运行 CraftBukkit/Spigot 插件和 Forge Mod。  
与 BungeeCord、Velocity 或其任何分支不兼容。可能可以使用 Lightfall 这一 Waterfall 分支。

#### [Atom](https://github.com/josephworks/AtomMC) (1.12.2)

Atom 是基于 Forge 和 CraftBukkit 的核心。部分代码取自 Spigot 及其衍生项目。  
可以稳定地与 Bukkit 插件和 Forge Mod 协同工作。尽可能实现最高性能。  
[原项目](https://gitlab.com/divinecode/atom/Atom)已停止开发，现由 Josephworks 接手。

#### [Kettle](https://github.com/KettleFoundation/Kettle) (1.12.2)

Kettle 是基于 Forge 和 Paper 的核心，可以运行基于 CraftBukkit/Spigot 的插件和基于 Forge 的 Mod。  
最初被认为是 Contigo 的一个分支，但经过几次迭代之后摆脱了 Contigo 的依赖，不再被视为它的分支，而是一个独立的混合核心。  

#### [Contigo](https://github.com/djoveryde/Contigo)/[Phoenix](https://github.com/djoveryde/Phoenix)/[ThermosX](https://github.com/DireClanMC/ThermosX) (1.7.10)

Contigo/Phoenix/ThermosX 是基于 Thermos 的核心，进行了优化并修复了一些 Bug。

#### [Thermos](https://github.com/CyberdyneCC/Thermos)&KCauldron (1.7.10)

Thermos 是基于 KCauldron 的核心，不兼容 Lilypad。  
进行了一些降低延迟的优化，修复了一些 Bug ，以及具有更好的世界保护。  
KCauldron 继承自 Cauldron ，是 MCPC(+) 的高版本后继者。

#### [Uranium](https://github.com/UraniumMC/Uranium) (1.7.10)

Uranium 是基于 KCauldron 的 Bukkit + Forge 核心。  
其整合了部分 Thermos 对服务端的修复，同时进行了一些输入书与笔虚体问题的 BUG 修复。  
其最大的特点是强制使用 UTF-8 编码作为配置文件编码和通过 UraniumPlus Mod 令 1.7.10 客户端支持 Title 和 Actionbar。

### 插件端

某些非官方服务端软件允许你在游戏中原生地运行插件。这些插件与运行它们的服务端软件并不受 Mojang Studios 的维护。

#### [Bukkit](https://bukkit.org/) (All)

Bukkit 是一个由社区开发的开源工具，用于减轻开发服务器插件的负担。  
CraftBukkit 是 Minecraft 的核心，可以安装支持 BukkitAPI 的插件。  
由于 Mojang EULA 和 DMCA 的要求， CraftBukkit 不直接提供。  
只能通过 [BuildTools](https://hub.spigotmc.org/jenkins/job/BuildTools/) 手动构建或从[第三方](https://getbukkit.org/download/craftbukkit)下载。

#### [Spigot](https://spigotmc.org) (1.4.6 - *)

Spigot 是 CraftBukkit 的续作。其正受到活跃的维护，且为插件开发者提供了更多的功能与服务器修复和配置。  
可以安装支持 BukkitAPI 和 SpigotAPI 的插件，性能与稳定性相对较好。
Spigot 不直接提供，只能通过 [BuildTools](https://hub.spigotmc.org/jenkins/job/BuildTools/) 手动构建或从[第三方](https://getbukkit.org/download/spigot)下载。

#### [Paper](https://papermc.io/software/paper) (1.8.8 - 1.20.1)

Paper 是基于 Spigot 的核心，旨在大幅提高性能并提供更高级的功能和 API。  
包含大量改进和优化，从而显著提升了性能。其中包括异步区块加载，以及对轻量引擎、漏斗、实体等的重大优化。  
Paper 扩展并改进了 Bukkit 和 Spigot API ，以便您和您的开发人员可以轻松获得更多特性和功能。

#### [Purpur](https://purpurmc.org/) (1.14 - *)

Purpur 是基于 Paper 的核心。它支持为 Bukkit、Spigot 和 Paper API 设计的插件。  
专注于提供尽可能多的可配置性，以允许服务器所有者根据自己的喜好定制服务器。

#### [Pufferfish](https://github.com/pufferfish-gg/Pufferfish) (+) (1.17.1 - *)

Pufferfish 是基于 Paper 的高度优化的核心，专为需要最高性能、稳定性和“企业”功能的大型服务器而设计。  
包含 Airplane 的优化，同时具有更好的实体性能，和更快的地图渲染。  
部分异步处理，详细跟踪错误，完全兼容 Paper 插件。  
Pufferfish Plus 是 Pufferfish 的改进版本，包括企业支持和附加异步功能，例如异步实体跟踪器和异步寻路系统。

#### [Patina](https://github.com/PatinaMC/Patina) (1.16.5 - *)

Patina 是基于 Paper 的核心，注重性能。

#### [Leaves](https://leavesmc.org/software/leaves) (1.19 - *)

Leaves 是基于 Paper 的核心，旨在修复被破坏的原版特性。  
包含大量改进和优化，从而显著提高了性能。这包括异步区块加载，以及对光照引擎、漏斗、实体等的重要改进。

#### [Folia](https://papermc.io/software/folia) (1.19.4 - 1.20.6)

Folia 是基于 Paper 的核心，它为服务器添加了区域化多线程。  
Folia 旨在解决服务器在单线程上运行导致性能问题的持续瓶颈问题。

#### [Lumina](https://leavesmc.org/software/lumina) (1.19 - *)

Lumina 是基于 Folia 的核心，旨在遵循原版生电特性的同时引入区域化多线程。  
致力于修复原版被破坏的特性，同时移植了大多数的 Carpet 特性。  
更适合大型的，玩家分散的，对插件要求较低的服务器，例如聚落式生电服务器。

#### [Luminol](https://github.com/LuminolMC/Luminol) (1.20.2 - *)

Luminol 是基于 Folia 的核心，具有对单线程区域性能的优化、可配置的原版特性和更多的 API 支持。  

#### [LightingLuminol](https://github.com/LuminolMC/LightingLuminol) (1.20.4 - 1.21.3)

LightingLuminol 是基于 Luminol 的核心，具有对单线程区域性能的优化、可配置的原版特性和更多的 API 支持。  
此外，目标是在 Folia 上运行更多 Bukkit 插件。

#### [Sugarcane](https://github.com/SugarcaneMC/Sugarcane) (1.17.1 - 1.19.2)

Sugarcane 是基于 Airplane 的核心，注重稳定性和性能并进行了高度优化。  
还融入了 Paper、Tuinity、Purpur、Yatopia 的优化。

#### [Yatopia](https://github.com/YatopiaMC/Yatopia) (1.15.2 -1.17)

Yatopia 是基于 Tuninity 的核心，具有许多独特的优化。  
还融入了 Akarin、EMC、Lithium、Origami、Airplane、Cadmium、Tic-Tacs 的优化。

#### [Airplane](https://github.com/TECHNOVE/Airplane) (1.16 - 1.17)

Airplane 是基于 Paper 的核心，稳定、优化，与 Paper 和 Tuinity 插件兼容。  
与 Tuinity 和 Paper 相比，漏斗性能提高 30%。  
减少远距离实体行为，减少 GC 时间频率，进行快速光线追踪从而提高性能。

#### [Tuinity](https://github.com/Tuinity/Tuinity) (1.13.2 - 1.17.1)

Tuinity 是基于 Paper 的核心（已并入 Paper），旨在提高高玩家数量下的服务器性能。  
重写了光照引擎, 加入了大量对实体, 多线程等等方面的优化。

#### [Sponge](https://spongepowered.org/) Vanilla (1.8 - *)

SpongeVanilla 是在原版上实现的 Sponge API ，性能与稳定性相对较好。  
可以安装支持 SpongeAPI 的插件，社区支持友好，但插件生态较差。

#### [Lantern](https://github.com/LanternPowered/Lantern) (1.16)

Lantern 是开源的、兼容 SpongeAPI 的核心。

#### [Empirecraft](https://github.com/starlis/empirecraft) (1.9 - 1.20.4)

EmpireCraft 是基于 Paper 的核心，被 Empire 服务器使用，包含许多 Empire 服务器的游戏玩法变化。

#### [Origami](https://github.com/Minebench/Origami) (1.14 - 1.16)

Origami 是基于 Paper 的核心。还基于 Tuinity 和 Empirecraft，被 Minebench.de 使用。

#### [Torch/Akarin](https://github.com/Akarin-project/Akarin/) (1.8.8 - 1.15.2)

Akarin 是基于 Paper 的核心，原名 Torch ，来自”新维度”。  
可以配置更多游戏机制，支持多线程，性能极佳，兼容性强。

#### [TacoSpigot](https://github.com/TacoSpigot/TacoSpigot) (1.8.8 - 1.13.2)

TacoSpigot 是基于 Paper 的不受支持且无人维护的核心，是一个多线程服务端。  
目前 Paper 已经包含大多数 TacoSpigot 补丁。

#### [Vefland](https://github.com/LegacyGamerHD/VefLand-1.12.2) (1.12.2)

Vefland 是基于 Torch 的核心，重构并加入了多线程优化。

#### [Hose](https://github.com/softpak/HOSE) (1.8.8 - 1.11.2)

Hose 是基于 Spigot 的核心，加入了多线程优化。

#### [Glowstone](https://glowstone.net/) (1.8.9-1.12.2)

Glowstone 是一个轻量级的开源服务端，可以安装 Bukkit、Spigot、Paper 和 Glowstone API 插件。  
使用每个世界线程模型，并且仅在 Bukkit API 需要时执行同步，性能较好。  
稳定性不好，且由于不依赖任何 Mojang 的源码，因此缺少很多原版内容。

#### Libigot (1.5 - 1.6)

Libigot 是基于 Spigot 的核心。提供可扩展的 API ，并提供 Spigot 所不具备的性能改进。

## Bedrock 端核心

适用于 Minecraft Bedrock 版服务器。

### [Cloudburst/Nukkit(X)](https://cloudburstmc.org/) (All)

Cloudburst/Nukkit(X) 是 Bedrock Edition 的核心。与其他核心相比，它用 Ja​​va 编写，速度更快，更稳定。  
此外，还具有友好结构，可以轻松地编写 Cloudburst/Nukkit(X) 插件。

### [PocketMine-MP](https://pmmp.io/) (All)

PocketMine-MP 是高度可定制的基岩版服务端，使用 PHP 构建。  
具有强大的插件 API、丰富的生态系统和庞大的开发者社区，支持多世界。

### [WaterdogPE](https://github.com/WaterdogPE/WaterdogPE)

WaterdogPE 是一个强大、高效且可扩展的 Bedrock 代理。  
使用 CloudburstMC 协议和网络库作为快速协议更新和轻松维护的坚实基础。

### [MiNET](https://github.com/NiclasOlofsson/MiNET)

MiNET 是用 C# 编写的 Pocket Edition 服务端。

## 代理端

某些非官方软件允许你在同一个代理之后串联多个服务器。这样你可以在不离开游戏的同时切换服务器。

### [BungeeCord](https://ci.md-5.net/job/BungeeCord/) (1.8 - *)

Bungeecord 是一种允许你切换服务器的简单代理核心。  
[Leymooo BungeeCord](https://github.com/Leymooo/BungeeCord) 在原版基础上增加了 AntiBot 保护功能。
[Hexagon BungeeCord](https://github.com/HexagonMC/BungeeCord) 重新实现了 1.7.10 以及对应 Forge 支持。同时使用 Sponge 时不再需要 SpongePls。

### [Waterfall](https://papermc.io/software/waterfall) (1.8 - 1.21)

Waterfall 是基于 Bungeecord 的核心，提供对于 Forge 更好的支持，以及更佳的性能。  
在 BungeeCord 的基础上增加了很多新特性, 进行了大量优化。  
已达到使用寿命，不再得到维护或支持。

### [Lightfall](https://github.com/ArclightPowered/lightfall) (1.18-1.20)

Lightfall 是基于 Waterfall 的核心，提供高版本对于 Forge 更好的支持。

### [Travertine](https://github.com/PaperMC/Travertine) (1.7.10 - 1.16.5)

Travertine 是基于 Waterfall 的核心，旨在支持比上游支持的版本更旧的客户端版本。

### [Velocity](https://papermc.io/software/velocity) (1.8 - *)

Velocity 是一款现代的高性能代理。它在设计时充分考虑了性能和稳定性，是 Waterfall 的完全替代品，拥有自己的插件生态系统。  
Velocity 是目前最好的代理软件。Velocity 的设计充分考虑了性能和可扩展性，比 BungeeCord 快得多，也稳定得多。

### [Flamecord](https://www.flamecord.com/) (1.7 - *)

FlameCord 是基于 Waterfall 的核心，专注于服务器安全，付费。  
防止使用崩溃漏洞、机器人和其他类型的 DDoS 攻击应用层进行黑客攻击。  
还可以修复错误、提高性能并为您的服务器添加新功能。

### [Gate](https://github.com/minekube/gate) (1.8 - *)

Gate 是一个可扩展、高性能且并行的代理核心，具有可扩展性、灵活性和出色的服务器版本支持。  
无需 Java ，几乎可以在任何地方或容器中运行 Gate 的微型可执行文件。

### [Waterdog](https://github.com/WaterdogPE/Waterdog) (1.7 - 1.17.4)

Waterdog 为 Bedrock 协议以及现有的 Java 协议提供原生支持。  
它能够通过 TCP 使用 ProtocolSupport PE 封装协议，也可以为传统的下游 Bedrock 服务器使用原生 RakNet Bedrock 协议。  
支持 Bedrock 客户端的在线和离线授权。下游服务器通常需要在离线模式下运行，并通过 Waterdog 确保授权安全。  
使用高性能且以 netty 为中心的 netty-raknet 库与 BungeeCord 通道模式实现近乎原生的集成。

### [Lilypad](https://www.lilypadmc.org/) (1.6.4 - 1.8)

LilyPad 允许您将多个 Bukkit 实例链接在一起，并以多种方式集成这些实例，且消耗的资源更少。

### [Nemysis](https://cloudburstmc.org/)

Nemisys 是一个 Bedrock 的代理核心是 Synapse 代理协议 (SPP) 的 Java 实现。
由 JSynLibServer 和 Nukkit RakNet 提供支持。

### [EZ4H](https://github.com/opZywl/EZ4H) (PE1.16.210 & PC1.12.2)

EZ4H​​ 是 Java 和 Bedrock 之间的桥梁 / 代理。

## 协议转换器

某些非官方软件允许你使用 Java 版或基岩版连接至同一服务器。

### [Geyser](https://github.com/GeyserMC/Geyser/)/[DragonProxy](https://github.com/DragonetMC/DragonProxy)/[Dragonet](https://github.com/DragonetMC/Dragonet-Legacy)

Geyser 是一个代理，弥补了 Bedrock Edition 和 Java Edition 服务器之间的差距。  
目标是让 Bedrock Edition 用户尽可能无缝地加入 Java Edition 服务器。  
从 Bedrock 客户端获取数据并将其转换为 Java 服务器可以理解的格式，反之亦然。  
充当 Bedrock 客户端和 Java 服务器之间的转换器。
