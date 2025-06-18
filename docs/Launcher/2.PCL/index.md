# PCL (Plain Craft Launcher)

PCL (Plain Craft Launcher) 是由开发者**龙腾猫跃**制作的一款广受欢迎的 Minecraft 启动器。它以其强大的功能和出色的用户体验而闻名。

## 核心特性

**极速下载**：高速下载游戏本体、Mod、整合包等资源。  
**功能全面**：轻松安装和管理 Mod 与整合包。  
**界面出色**：简洁美观、高度可自定义的界面，并拥有流畅精细的动画效果。

## 下载启动器

您可以在爱发电的官方页面下载[最新正式版](https://afdian.com/p/0164034c016c11ebafcb52540025c377)。

## 系统要求

::: details 跨平台兼容性
PCL 的底层框架仅为 Windows 设计，目前没有兼容 macOS 或 Linux 的计划。
:::

**操作系统**：Windows 7 或更高版本。  
**运行环境**：需要 **.NET Framework 4.6.2** 或更高版本。

> Windows 10 及以上系统通常已内置，无需手动安装。  
> 若启动器无法打开，请尝试手动安装 [.NET Framework 4.6.2](https://dotnet.microsoft.com/zh-cn/download/dotnet-framework/thank-you/net462-offline-installer)。如果安装失败，请尝试使用[修复工具](https://support.microsoft.com/zh-cn/topic/microsoft-net-framework-%E4%BF%AE%E5%A4%8D%E5%B7%A5%E5%85%B7%E5%8F%AF%E7%94%A8-942a01e3-5b8b-7abb-c166-c34a2f4b612a)。

## 赞助支持

如果您喜欢 PCL，可以通过[在爱发电上赞助](https://afdian.com/@LTCat)来支持开发者，您的支持是项目持续发展的动力。
赞助后您将获得带有主题功能的**快照版** PCL 和加入官方交流群。

## PCL Community Edition (PCL-CE)

[PCL-CE](https://github.com/PCL-Community/PCL2-CE) 是由社区开发者基于官方代码二次开发的**社区分支版本**。  
它在官方版的基础上，增加了一些实验性功能和改进。

**独立开发**：功能和更新路线与官方版不同步。  
**独立存储**：用户数据独立存储在文件中，与官方版不互通。  
**版本号独立**：版本号与官方版不对应，但会在发布说明中注明其基于的官方版本号。

> **重要须知**  
> **非官方开发**：社区版并非由龙腾猫跃本人开发和管理，与官方无关。  
> **风险自负**：使用社区版可能存在不稳定性，一切风险由您自行承担。

### 环境要求

**2.9.3 及以上版本**：需要 **.NET Framework 4.8**。  
**2.10.0 及以上版本**：需要 **Windows 10 (1607) 或更高版本** 以及 **.NET Framework 4.8.1**。

### 新增功能

- Quilt 加载器
- 资源收藏夹、资源管理、资源包和光影包下载
- 识别剪贴板中的资源链接
- 音乐播放系统媒体控件 (SMTC) 及 Lyricify Lite 歌词兼容
- Yggdrasil Connect 支持
- 自动安装 Fabric/Forge 等修改核心
- 基础的联机支持

::: details 隐藏启动提示
在配置项中添加 UiLauncherCEHint 字段，字段值为 False (文本型)。
> 旧版：在注册表 `HKEY_CURRENT_USER\Software\LTCat\PCL` 中添加字符串值：`UiLauncherCEHint`，并设为 `False`。
:::

### 社区与支持

**PCL-CE 用户群**：`1028074835`  
**PCL-CE 开发群**：`599620549`  
**PCL 报错崩溃交流群**：`978054335`
