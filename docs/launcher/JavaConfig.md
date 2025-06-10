# Java 环境配置指南

Java 是运行 Minecraft 的必要环境。本指南将帮助您了解如何配置 Java 环境。

## Java 版本要求

### Minecraft 1.16 及之前的版本

- 推荐使用 Java 8
- 最低支持 Java 8

### Minecraft 1.17 及之后的版本

- 需要 Java 17 或更高版本
- 推荐使用 Java 17

## Java 获取方式

您可以从以下渠道获取 Java：

- [Oracle JDK](https://www.oracle.com/java/technologies/downloads/)
- [OpenJDK](https://jdk.java.net/)
- [Microsoft JDK](https://docs.microsoft.com/en-us/java/openjdk/)
- [中文 Java 镜像站](https://injdk.cn/)

## 启动器特定配置方法

以下是各个启动器的具体配置方法，请根据您使用的启动器选择对应内容：

::: details BakaXL

### Java 环境配置

#### 自动配置
建议直接打开设置内的「让 BakaXL 自动选择 Java 版本」，这样可免去手动设置。

#### 手动配置
如果您之前有安装过 Java，您可以在 `本体设置` > `Java 虚拟机与内存` > `Java 高级设置` 中以以下三种方式来指定 Java 路径：

1. 自动寻找 Java 位置；
2. 手动指定 Java 位置；
3. 更细致的自动寻找 Java 位置。

#### 获取 Java
如果您从未安装过 Java，您可以直接启动游戏，BakaXL 会为您自动下载并安装 Java。

您也可以在 `本体设置` > `Java 虚拟机与内存` 中找到 `获取 Java 8` 等按钮来获取对应版本的 Java 运行时。

:::

::: details HMCL

### Java 路径配置

#### 自动识别
HMCL 会根据注册表项、环境变量以及启动路径来寻找 JRE。如果找到了，就会在 "Java路径" 一栏显示出来。

#### 手动指定
如果无法自动识别，可以：

1. 展开 "Java路径" 条目
2. 选中 "自定义" 条目
3. 点击右侧的文件夹图标
4. 在弹出的对话框中选择 Java 可执行文件的路径

#### 自动选择合适的 Java
HMCL 可以在已添加的版本中找到最合适的 Java 版本，并在启动游戏时自动使用。

:::

::: details PCL

### Java 配置

#### 基本设置
1. 打开 PCL 设置
2. 找到 Java 相关选项
3. 设置 Java 路径或让启动器自动检测

#### 版本管理
PCL 可以自动检测系统中安装的 Java 版本，并为不同的 Minecraft 版本选择合适的 Java。

:::

## 内存分配建议

### 基础配置

- 2GB RAM：建议分配 1GB 给 Minecraft
- 4GB RAM：建议分配 2GB 给 Minecraft
- 8GB RAM 及以上：建议分配 4-6GB 给 Minecraft

### 大型整合包

对于包含大量 Mod 的整合包，可能需要分配更多内存：

- 小型整合包（50-100 个 Mod）：4-6GB
- 大型整合包（100-200 个 Mod）：6-8GB
- 超大型整合包（200+ 个 Mod）：8-12GB

## 常见问题

### 如何检查 Java 版本？

在命令行中输入：

```bash
java -version
```

### 内存不足错误

如果出现 OutOfMemoryError，请尝试：

1. 增加分配给 Minecraft 的内存
2. 检查是否有内存泄漏的 Mod
3. 减少不必要的 Mod

### Java 路径问题

如果启动器找不到 Java：

1. 检查 Java 是否正确安装
2. 手动指定 Java 路径
3. 确保 Java 版本与 Minecraft 版本兼容