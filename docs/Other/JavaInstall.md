---
title: Java 安装指南
description: 在不同操作系统上安装和配置Java环境的详细指南
---

# Java 安装指南

## Windows

这个指南将会指引您在 Windows 上安装 Java 21。

Minecraft 启动器附带了自己的 Java 安装，因此这部分只在你想使用 Fabric 的 .jar 安装器，或者你想使用 Minecraft 服务器的 .jar 时有关。

1. **检查 Java 是否已经安装**
   要检查 Java 是否已安装，你首先必须打开命令提示符。

   你可以通过按下 Win+R 并在出现的对话框中输入 `cmd.exe` 来实现它。

   <!-- 图片：Windows运行对话框中的「cmd.exe」 -->

   打开命令提示符后，输入 `java -version` 并按下 Enter 键。

   如果命令成功运行，你会看到类似这样的内容。 如果命令运行失败，请继续进行下一步。

   <!-- 图片：命令提示符中输入了「java -version」 -->

   > **WARNING**
   >
   > 要使用 Minecraft 1.21，你需要安装至少 Java 21。 如果运行该命令后显示 Java 版本低于 21，你需要更新设备上现有 Java。

2. **下载 Java 21 安装程序**
   要安装 Java 21，你需要从 [Adoptium](https://adoptium.net/) 下载安装程序。

   你需要下载 Windows Installer (.msi) 版本：

   <!-- 图片：Adoptium 下载页面，使用了 Windows 安装程序 (.msi) -->

   如果你有 32 位操作系统，应该选择 `x86`；如果你有 64 位操作系统，则应该选择 `x64`。

   现代大多数电脑都运行 64 位操作系统。 如果你不确定，请尝试使用 64 位的下载。

3. **运行安装程序！**
   按照安装程序的步骤安装 Java 21。 当你到达这个页面时，你应该将以下功能设置为「整个功能将安装在本机硬盘上」：

   * Set `JAVA_HOME` environment variable - 这将加入到你的PATH中。
   * JavaSoft (Oracle) registry keys

   <!-- 图片：Java 21 安装程序，具有「Set JAVAHOME variable」和「JavaSoft (Oracle) registry keys」 -->

   完成后，你可以按 `下一步` 继续安装。

4. **验证是否已安装 Java 21**
   安装完成后，您可以打开命令提示符并输入 `java -version` 来验证 Java 21 是否已安装。

   如果命令成功执行，你可以看到类似前文所示的内容，Java 版本被显示出来：

   <!-- 图片：命令提示符中输入了「java -version」 -->

   如果遇到任何问题，你可以在 Fabric Discord 的 `#player-support` 频道中寻求帮助。

## macOS

1. 访问 [Oracle Java 下载页面](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) 或 [Adoptium](https://adoptium.net/)。
2. 下载适用于 macOS 的 JDK 安装程序（.dmg 文件）。
3. 打开 .dmg 文件并按照说明进行操作。
4. macOS 通常会自动设置 Java 路径。打开终端并键入 `java -version` 和 `javac -version` 来验证安装。
5. 如果需要手动设置 `JAVA_HOME`，可以在 `.zshrc` 或 `.bash_profile` 文件中添加以下行（取决于您的 shell）：

    ```bash
    export JAVA_HOME=$(/usr/libexec/java_home)
    export PATH=$JAVA_HOME/bin:$PATH
    ```

## Linux

这个指南将会指引您在 Linux 上安装 Java 21。

1. **检查 Java 是否已经安装**
   打开终端输入 `java -version` 并按下 回车。

   <!-- 图片：输入 "java -version" 的终端 -->

   > **WARNING**
   >
   > 要使用 Minecraft 1.21，你需要安装至少 Java 21。 如果运行该命令后显示 Java 版本低于 21，你需要更新设备上现有 Java。

2. **下载并安装 Java 21**
   我们推荐使用 OpenJDK 21，可以在大多数 Linux 发行版中可用。

   ### Arch Linux

   > **INFO**
   >
   > 更多在 Arch Linux 上安装 Java 的信息可以参考 Arch Linux 中文维基。

   您可以从官方仓库安装最新版 JRE：

   ```bash
   sudo pacman -S jre-openjdk
   ```

   如果您正在运行服务器不需要图形用户界面，您可以安装无头版本：

   ```bash
   sudo pacman -S jre-openjdk-headless
   ```

   如果您计划开发模组，您需要安装 JDK：

   ```bash
   sudo pacman -S jdk-openjdk
   ```

   ### Debian/Ubuntu

   您可以用以下命令使用 `apt` 安装 Java 21：

   ```bash
   sudo apt update
   sudo apt install openjdk-21-jdk
   ```

   ### Fedora

   您可以用以下命令使用 `dnf` 安装 Java 21：

   ```bash
   sudo dnf install java-21-openjdk
   ```

   如果不需要图形化界面，可以安装 headless 版本：

   ```bash
   sudo dnf install java-21-openjdk-headless
   ```

   如果您计划开发模组，您需要安装 JDK：

   ```bash
   sudo dnf install java-21-openjdk-devel
   ```

   ### 其他 Linux 发行版

   如果您的发行版未在上文列出，您可以从 [Adoptium](https://adoptium.net/) 下载最新版 JRE。

   如果您计划开发模组，您应该参考您的发行版的替代指南。

3. **验证是否已安装 Java 21**
   安装完成后，您可以打开终端并输入 `java -version` 来验证 Java 21 是否已安装。

   如果命令成功执行，你可以看到类似前文所示的内容，Java 版本被显示出来。
   <!-- 图片：命令提示符中输入了「java -version」 -->
