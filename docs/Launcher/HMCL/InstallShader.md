---
title: 添加光影
description: 在 HMCL 中选择光影加载器和安装光影包的完整指南
---

# 选择光影加载器

目前提供光影功能的 Mod 有 OptiFine 和 Iris Shaders。其中 OptiFine 支持 Forge（可以通过 OptiFabric Mod 兼容 Fabric），Iris Shaders 支持 Fabric 和 Quilt。OptiFine 几乎支持所有的 Minecraft 版本，而 Iris Shaders 目前只支持 1.16 及更高版本。

## 获取光影包

你可以在许多相关资源网站找到光影包，诸如 CurseForge、Modrinth。你可以点击下面的按钮来快速跳转至这些网站：

- [CurseForge 光影下载](https://www.curseforge.com/minecraft/search?class=shaders)
- [Modrinth 光影下载](https://modrinth.com/shaders)

## 安装 OptiFine

若您需要在 Fabric 中加载 OptiFine，直接在自动安装页面选择你想要安装的 Fabric 版本即可， 会自动为你选择安装合适的 Fabric API 和 OptiFabric。

1. 如果你选择使用 OptiFine，进入 “自动安装” 页面，选择 Minecraft 版本后选择合适的 OptiFine 版本，点击 “开始安装” 按钮即可安装。

## 安装 Iris Shaders

如果你选择使用 Iris Shaders，在 Mod 下载界面搜索 “Iris Shaders” 即可。

## 导入并启用光影包

1. 在版本选择中选择需要安装光影的版本，点击 “版本设置”。
    **提示：若未找到 shaderpacks 文件夹，你可以手动创建一个。**
2. 点击 “版本文件夹”，在弹出的文件夹中找到并进入 shaderpacks 文件夹，将你要安装的光影包拖入该文件夹。启动游戏。

## OptiFine

**提示：OptiFine 会在你选择光影后直接开始加载此光影，请在选择前确认该光影是否为你想启用的光影以避免长时间的等待。**

进入游戏后顺次点击 “选项” → “视频设置” → “光影”，点击你想要应用的光影即可。

## Iris Shaders

**提示：如果你在世界中打开光影包页面，则在选择后可以先点击 “应用” 按钮来预览光影包效果后再点击 “完成”。**

进入游戏后顺次点击 “选项” → “视频设置” → “光影包”，选择你想要应用的光影后点击 “完成”。
## 安装 OptiFine

### 方式一: 全新安装

当你在安装新的游戏客户端时候，会看到有个 `OptiFine` 的选项。

![OptiFine_Install]

点开之后会看到有 3 个复选框，一般而言，`正式版` 会比 `测试版` 更加稳定。选择安装 `正式版` ，如果没有 `正式版` 那么再考虑 `测试版` 。

![OptiFine_Selection]

选择完合适的版本之后就可以点击右下角的`安装`继续进行安装。

### 方式二: 修改/升级已安装版本

在对应的游戏版本管理页面，点击 `自动安装` ，你会看到有个 `OptiFine` 的选项。

![OptiFine_AutoInstaller]

点开之后选择合适的版本然后等待安装完成即可。
目前，如果要在  `Fabric` 使用 `OptiFine` ，需要通过 **方式四** 安装。

### 方式三：官网安装

在[ OptiFine 官网](https://optifine.net/downloads)上下载合适版本的 OptiFine (下载完应为 `OptiFine_<游戏版本>_<OptiFine版本>.jar` ) 。

双击打开或者使用 `java -jar 文件名` 的方式打开，然后你就会看到这个界面。

![Path_Selection]

选择自己游戏的 `.minecraft 目录`（默认安装到 `\AppData\Roaming\.minecraft` 目录下），然后点击 `Install` 按钮，之后你在 HMCL 的版本列表中就可以找到含有 OptiFine 名字的客户端，启动即可。

如果未找到，请确认你是否已安装对应的版本的客户端，且 **命名为对应版本号** 的原本游戏客户端。

### 方式四：OptiFine 与 Mod 加载器共存

从[ OptiFine 官网](https://www.optifine.net/)上下载的 Jar 文件本身也可作为 Mod 被加载，可以用 Java 运行下载的文件并导出 Mod 版本。Mod 安装具体方法见 [ Mod 安装教程]

注意：

1. Fabric 和 OptiFine 本身并不能共存，必须同时安装[ OptiFabric ](https://www.curseforge.com/minecraft/mc-mods/optifabric) (一个 Fabric Mod ) 。
  OptiFabric 目前 1.17 仅支持 `OptiFine HD U G9` ，`Fabric` 最高支持的版本为 `0.11.7` 。

2. Forge 和 OptiFine 会出现不兼容的情况，但大多数情况下，Forge 和 OptiFine 是相互支持的。在[ OptiFine 官网下载页面 ](https://optifine.net/downloads)可以查看OptiFine与Forge的兼容情况，位置见下图的红框位置。

![OptiFine_Compatibility]

3. 若出现不兼容的情况，请使用[ OptiForge ](https://www.curseforge.com/minecraft/mc-mods/optiforge) (一个 Forge Mod ) 或者等待OptiFine兼容Forge解决。

## 安装Oculus（一个 Forge Mod）

在高版本的OptiFine中，OptiFine与mod的兼容性较差，以及对性能提升较小，所以可以安装Oculus，但Oculus与OptiFine不兼容，注意依赖关系，Oculus需要前置Rubidium

![Oculus]

相关链接：[ Oculus Curseforge ](https://www.curseforge.com/minecraft/mc-mods/oculus)，[ Oculus Modrinth ](https://modrinth.com/mod/oculus)，[ Rubidium Curseforge ](https://www.curseforge.com/minecraft/mc-mods/rubidium)，[ Rubidium Modrinth ](https://modrinth.com/mod/rubidium)

## 安装Iris Shaders（一个Fabric/Quilt Mod）

在Fabric中，也可以安装Iris Shaders来安装光影，注意依赖关系，Iris Shaders需要前置Sodium

![Iris]

相关链接：[ Iris Shaders官网 ](https://irisshaders.dev/)，[ Iris Shaders Modrinth ](https://modrinth.com/mod/iris)，[ Iris Shaders Curseforge（不再更新，请到官网或Modrinth下载最新版本） ](https://www.curseforge.com/minecraft/mc-mods/irisshaders)，[ Sodium Modrinth ](https://modrinth.com/mod/sodium)，[ Sodium Curseforge（不再更新，请在Modrinth下载） ](https://www.curseforge.com/minecraft/mc-mods/sodium)

## 安装光影包

一般光影是一个 Zip 格式的文件，将光影文件放入 `\.minecraft\shaderpacks` 文件夹中即可 (没有这个文件夹就自己新建一个) 。如果开了版本隔离，那么文件夹是 `\.minecraft\version\<客户端名称>\shaderpacks`。若你不知道游戏文件夹在哪，在HMCL中打开游戏文件夹。

![Game_Dir]

如果你不知道版本隔离是啥，也不会创建文件夹，那么请打开游戏，依次点击 `设置—视频设置—光影—光影包文件夹` ，在里面放入光影包，然后点击你要加载的光影，最后点击 `完成` 即可

![Shader_Settings]

**注意：光影对于电脑配置的要求比较高，如果开了光影之后出现游戏画面很卡的情况，请升级电脑配置、使用低配置光影或者关闭光影。**
