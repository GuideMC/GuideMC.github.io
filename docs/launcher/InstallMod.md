# Mod 安装指南

Mod 加载器是为 Minecraft 安装 Mod 的必要前置条件，要想安装 Mod，必须先安装 Mod 加载器。目前主流的 Mod 加载器有 Forge、NeoForge、Fabric 和 Quilt 等，而它们不能同时被安装在同一个版本中。

Forge 几乎支持所有 Minecraft 正式版本，而 Fabric 和 Quilt 只支持 1.14 及以上的正式版本。总体上，Forge 支持的 Mod 比其他 Mod 加载器更多，但一部分 Mod 只支持 Fabric 或 Quilt。

有一些 Mod 仅支持其中一种加载器，因此，你需要尝试搜索其它加载器中有没有类似的 Mod 可以当作替代品。Quilt 兼容一部分 Fabric 的 Mod，但是 Fabric 不兼容 Quilt 的 Mod；Forge 与 Fabric 不兼容；Liteloader 与 Forge 兼容。

## 启动器特定安装方法

以下是各个启动器的具体安装方法，请根据您使用的启动器选择对应内容：

::: details BakaXL

### 安装 Mod 加载器（Forge）

1. 点击 "下载" 按钮，在 "自动下载" 页面中点击 "正式版"，选择想要安装的 Minecraft 版本。
2. 等待加载完成后，点击 "Forge"，选择合适的 Forge 版本，点击 "开始安装" 按钮。

### 安装 Mod 加载器（NeoForge）

1. 点击 "下载" 按钮，在 "自动下载" 页面中点击 "正式版"，选择想要安装的 Minecraft 版本。
2. 等待加载完成后，点击 "NeoForge"，选择合适的 NeoForge 版本，点击 "开始安装" 按钮。

### 安装 Mod 加载器（Fabric）

1. 点击 "下载" 按钮，在 "自动下载" 页面中点击 "正式版"，选择想要安装的 Minecraft 版本。
2. 点击 "Fabric"，选择合适的 Fabric 版本。
3. 点击 "Fabric API"，选择合适的 Fabric API 版本，点击 "开始安装" 按钮。

### 下载并安装 Mod

#### 从笨蛋广场安装

您可以前往笨蛋广场，点击右上角的搜索框并输入关键字来进行 Mod 的查找，或在 BakaXL 主界面点击切换核心按钮，转到核心详细设置，点击 "模组 (Mods)"，点击 "打开模组文件夹"，然后将 Mod 文件添加进去。

#### 从本地文件安装

将 Mod 文件复制到 `.minecraft\Mods` 文件夹中即可（没有这个文件夹就自己新建一个）。若开启了版本隔离，文件夹路径为 `.minecraft\version\<版本名称>\Mods`。

:::

::: details HMCL

### 安装 Mod 加载器

1. 选择想要安装的 Minecraft 版本。
2. 等待加载完成后，点击对应的 Mod 加载器（Forge/NeoForge/Fabric），选择合适的版本，点击 "开始安装" 按钮。

### 下载并安装 Mod

#### 内置下载

HMCL 内置了 CurseForge 和 Modrinth 下载源的搜索和下载功能，目前已支持中文搜索。

1. 点击 "下载" 按钮，选择左侧菜单 "资源" 分类下的 "Mod" 选项。
2. 搜索并选择需要的 Mod，下载对应版本。

#### 手动安装

将 Mod 文件拖入 HMCL 窗口进行安装，或者在 "游戏管理页面—模组管理" 页面点击添加模组。

:::

::: details PCL

### 安装 Mod 加载器

1. 点击 "下载" 按钮，在 "自动下载" 页面中点击 "正式版"，选择想要安装的 Minecraft 版本。
2. 等待加载完成后，点击对应的 Mod 加载器，选择合适的版本，点击 "开始安装" 按钮。

### 下载并安装 Mod

1. 点击 "下载" 按钮，并选择左侧菜单 "资源" 分类下的 "Mod" 选项。
2. 在页面中通过选择或输入您所需 Mod 的名称进行搜索。
3. 选择 Mod 并下载对应版本。

#### 手动安装

将 Mod 文件拖入 PCL 窗口进行安装即可。

:::

## 安装 Fabric

本指南仅适用于官方的 Minecraft Launcher。 对于第三方启动器，应该参考它们的文档。

1. 下载 Fabric 安装器
可以从 Fabric 网站 下载 Fabric 安装器。

如果使用 Windows，下载 .exe 版本 （Download For Windows），因为不需要你的系统已安装 Java， 而是使用官方启动器附带的 Java。

对于 macOS 和 Linux，您应该下载 .jar 版本。 有时，此步骤之前需要安装 Java。
2. 运行 Fabric 安装器
WARNING

在运行安装器之前，请先关闭 Minecraft 和 Minecraft Launcher。

打开安装器后，应该会看到这样的屏幕：

高亮 "Install" 的 Fabric 安装器

要安装 Fabric，只需从下拉列表中选择您的游戏版本，然后单击 Install。

重要

确保选中“Create Profile”。
3. 搞定！
安装器完成后，可以打开 Minecraft Launcher，从左下角的下拉列表中选择 Fabric 配置文件，然后按下 Play！

选中了 Fabric 配置的 Minecraft Launcher

现在安装好了 Fabric，就可以向你的游戏添加模组了！ 更多信息请查看寻找可信的模组指南。

如果在遵循本指南时遇到任何问题，可以在 Fabric Discord 的 #player-support 频道中寻求帮助

## 手动安装 Mod

### 获取 Mod 文件

在从网站下载 Mod 时，玩家需要注意下载的 Mod 是否与自己的游戏版本以及 Mod 加载器匹配。下载完成的 Mod 文件的扩展名一般为 .jar（用于老旧加载器 LiteLoader 的 Mod 扩展名为 .litemod）

玩家可以访问发布 Mod 资源的网站并通过网页链接下载 Mod 文件，如 CurseForge、Modrinth。

### 安装方法

1. 将 Mod 文件复制到游戏的 mods 文件夹中
2. 如果开启了版本隔离，文件夹路径为 `.minecraft/versions/版本名称/mods`
3. 如果未开启版本隔离，文件夹路径为 `.minecraft/mods`

## Mod 更新注意事项

:::warning 注意
请在依照本文操作前仔细阅读注意事项和启动器警告弹窗，以避免游戏崩溃或存档损坏！

新版本 Mod 可能不兼容老版本的存档或者其他 Mod，这可能导致游戏崩溃，甚至存档损坏！

除非整合包作者要求你更新，否则不要私自更新整合包里的 Mod！

在更新 Mod 前，请先备份存档，并检查它的更新日志！
:::

## 常见问题

### Fabric 模组菜单

如果您使用 Fabric 作为模组加载器，请安装 Mod Menu 模组，否则将不会在游戏内显示 Mod 按钮。

### 前置模组

许多 Mod 需要前置模组才能正常运行：

- Fabric 模组通常需要 Fabric API
- 一些 Mod 可能需要特定的库模组作为前置

请在安装 Mod 时注意查看其依赖关系，并安装所需的前置模组。