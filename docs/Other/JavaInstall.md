# Java 安装指南

## Windows

1. 访问 [Oracle Java 下载页面](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) 或 [Adoptium](https://adoptium.net/) (OpenJDK)。
2. 下载适用于 Windows 的 JDK 安装程序（.exe 文件）。
3. 运行安装程序并按照屏幕上的说明进行操作。
4. 设置 JAVA_HOME 环境变量：
    * 打开“系统属性”（可以搜索“环境变量”）。
    * 点击“环境变量”按钮。
    * 在“系统变量”下，点击“新建”。
    * 变量名输入 `JAVA_HOME`。
    * 变量值输入 JDK 的安装路径（例如 `C:\Program Files\Java\jdk-17`）。
    * 将 `%JAVA_HOME%\bin` 添加到 Path 环境变量中。
5. 打开新的命令提示符或 PowerShell 窗口，然后键入 `java -version` 和 `javac -version` 来验证安装。

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

## Linux (基于 Debian/Ubuntu)

1. 更新软件包列表：

    ```bash
    sudo apt update
    ```

2. 安装 OpenJDK：

    ```bash
    sudo apt install default-jdk
    ```

3. 验证安装：

    ```bash
    java -version
    javac -version
    ```

4. `JAVA_HOME` 通常会自动设置在 `/usr/lib/jvm/default-java`。

## Linux (基于 RHEL/CentOS/Fedora)

1. 更新软件包列表：

    ```bash
    sudo yum update
    # 或者对于 Fedora
    sudo dnf update
    ```

2. 安装 OpenJDK：

    ```bash
    sudo yum install java-17-openjdk-devel
    # 或者对于 Fedora
    sudo dnf install java-17-openjdk-devel
    ```

3. 验证安装：

    ```bash
    java -version
    javac -version
    ```
