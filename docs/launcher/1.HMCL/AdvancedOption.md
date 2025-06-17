# HMCL 高级配置选项

HMCL 提供了丰富的高级配置选项，包括 JVM 参数和环境变量，用于自定义启动器的行为和调试。本文档将详细介绍这些选项的使用方法。

## 🚀 快速开始

### 常用配置示例

```bash
# 指定启动器字体
java -Dhmcl.font.override="Microsoft YaHei" -jar HMCL.jar

# 自定义数据文件夹路径
java -Dhmcl.home="D:/Games/HMCL" -jar HMCL.jar

# 使用自定义下载源
java -Dhmcl.bmclapi.override="https://download.mcbbs.net" -jar HMCL.jar

# 组合多个参数
java -Dhmcl.home="D:/Games/HMCL" -Dhmcl.font.override="微软雅黑" -jar HMCL.jar
```

## 📖 使用方法

### JVM 参数使用方法

#### 方法一：命令行直接添加

```bash
java -Dhmcl.home="D:/Games/HMCL" -jar HMCL.jar
```

#### 方法二：创建启动脚本

**Windows 用户** - 创建 `start-hmcl.cmd` 文件：

```batch
@echo off
java -Dhmcl.font.override="Microsoft YaHei" -Dhmcl.home="D:/Games/HMCL" -jar HMCL.jar
pause
```

**Linux/macOS 用户** - 创建 `start-hmcl.sh` 文件：

```bash
#!/bin/bash
java -Dhmcl.font.override="Noto Sans CJK SC" -Dhmcl.home="~/Games/HMCL" -jar HMCL.jar
```

记得为脚本文件添加执行权限：

```bash
chmod +x start-hmcl.sh
```

#### 使用注意事项

- 可以同时使用多个参数，用空格分隔
- 包含空格的参数值需要用引号包裹
- 确保 JVM 参数位于 `-jar HMCL.jar` 之前
- 路径建议使用绝对路径避免问题

### 环境变量使用方法

#### Windows 设置环境变量

1. 右键点击"此电脑"，选择"属性"
2. 点击"高级系统设置"
3. 点击"环境变量"
4. 在"用户变量"中点击"新建"
5. 输入变量名和变量值
6. 点击"确定"保存

示例设置：

```text
变量名: HMCL_JAVA_HOME
变量值: C:\Program Files\Java\jdk-17

变量名: HMCL_FONT
变量值: Microsoft YaHei
```

#### Linux/macOS 设置环境变量

编辑你的 Shell 配置文件（如 `~/.bashrc`、`~/.zshrc`）：

```bash
# 添加以下内容
export HMCL_JAVA_HOME="/usr/lib/jvm/java-17-openjdk"
export HMCL_JAVA_OPTS="-XX:MinHeapFreeRatio=5 -XX:MaxHeapFreeRatio=15"
export HMCL_FONT="Noto Sans CJK SC"
```

重新加载配置：

```bash
source ~/.bashrc  # 或 source ~/.zshrc
```

#### 环境变量使用注意事项

- 设置后需要重启 HMCL 才能生效
- JVM 参数优先级高于环境变量
- Windows 用户使用分号（;）分隔多个路径
- Linux/macOS 用户使用冒号（:）分隔多个路径

## ⚙️ JVM 参数详解

JVM 参数用于在启动 HMCL 时直接配置启动器行为。这些参数需要在启动命令中添加。

### 路径和存储配置

| 参数 | 用途 | 示例 |
|------|------|------|
| `-Dhmcl.home=<path>` | 覆盖 HMCL 全局数据文件夹路径 | `-Dhmcl.home="D:/Games/HMCL"` |
| `-Dhmcl.dir=<path>` | 覆盖工作路径下的 .hmcl 文件夹路径 | `-Dhmcl.dir="E:/MC/.hmcl"` |

### 界面和显示配置

| 参数 | 用途 | 示例 |
|------|------|------|
| `-Dhmcl.font.override=<font family>` | 指定启动器使用的字体 | `-Dhmcl.font.override="微软雅黑"` |
| `-Dhmcl.native.encoding=<encoding>` | 指定系统原生编码 | `-Dhmcl.native.encoding="UTF-8"` |

### 网络和下载配置

| 参数 | 用途 | 默认值 |
|------|------|--------|
| `-Dhmcl.bmclapi.override=<url>` | 自定义 BMCLAPI 下载源地址 | `https://bmclapi2.bangbang93.com` |
| `-Dhmcl.update_source.override=<url>` | 自定义 HMCL 更新源地址 | - |
| `-Dhmcl.openjfx.repo=<url>` | 自定义 OpenJFX Maven 仓库地址 | `https://repo1.maven.org/maven2` |
| `-Dhmcl.discoapi.override=<url>` | 自定义 DiscoAPI 地址 | `https://api.foojay.io/disco/v3.0` |

#### 网络配置使用示例

```bash
# 使用 BMCL API 下载源
java -Dhmcl.bmclapi.override="https://bmclapi2.bangbang93.com" -jar HMCL.jar

# 使用 MCBBS 下载源
java -Dhmcl.bmclapi.override="https://download.mcbbs.net" -jar HMCL.jar
```

### 认证和 API 配置

| 参数 | 用途 | 说明 |
|------|------|------|
| `-Dhmcl.microsoft.auth.id=<App ID>` | 自定义 Microsoft OAuth 应用 ID | 用于自定义登录应用 |
| `-Dhmcl.microsoft.auth.secret=<App Secret>` | 自定义 Microsoft OAuth 应用密钥 | 与上述 ID 配套使用 |
| `-Dhmcl.curseforge.apikey=<key>` | 自定义 CurseForge API 密钥 | 用于 CurseForge 模组下载 |
| `-Dhmcl.authlibinjector.location=<path>` | 指定本地 authlib-injector 路径 | 避免从网络下载 |

### 系统和调试配置

| 参数 | 用途 | 可选值 |
|------|------|--------|
| `-Dhmcl.version.override=<version>` | 手动指定启动器版本号 | 任意版本号 |
| `-Dhmcl.self_integrity_check.disable=true` | 禁用启动器更新完整性检查 | `true`/`false` |
| `-Dhmcl.native.backend=<type>` | 指定本地后端类型 | `auto`/`jna`/`none` |
| `-Dhmcl.hardware.fastfetch=<boolean>` | 使用 fastfetch 获取设备信息 | `true`/`false` |

#### native.backend 详细说明

- **`auto`**：自动选择（Windows 7+ 使用 JNA，其他系统不使用）
- **`jna`**：强制使用 JNA（如果 JNA 不可用会抛出异常）
- **`none`**：禁用 JNA

## 🌍 环境变量详解

环境变量提供了另一种配置 HMCL 的方式，适合需要持久化配置的场景。

| 变量名 | 用途 | 默认值 | 示例 |
|--------|------|--------|------|
| `HMCL_JAVA_OPTS` | 自定义 HMCLauncher JVM 启动参数 | `-XX:MinHeapFreeRatio=5 -XX:MaxHeapFreeRatio=15` | `-Xmx2G -XX:+UseG1GC` |
| `HMCL_JAVA_HOME` | 自定义 HMCLauncher 使用的 Java 路径 | 系统默认 Java | `C:\Program Files\Java\jdk-17` |
| `HMCL_FONT` | 指定启动器使用的字体 | 系统默认字体 | `Microsoft YaHei` |
| `HMCL_JRES` | 添加 HMCL 使用的 Java 路径 | - | 支持多个路径，用分隔符分隔 |

### 环境变量优先级

当同时设置了 JVM 参数和环境变量时，优先级如下：

1. **JVM 参数**（最高优先级）
2. **环境变量**
3. **默认配置**（最低优先级）

## 💡 常见问题

### Q: 如何同时使用多个 JVM 参数？

A: 在命令行中用空格分隔多个参数：

```bash
java -Dhmcl.home="D:/Games/HMCL" -Dhmcl.font.override="微软雅黑" -Dhmcl.bmclapi.override="https://download.mcbbs.net" -jar HMCL.jar
```

### Q: 为什么设置了环境变量但没有生效？

A: 请检查以下几点：

1. 是否重启了 HMCL
2. 环境变量名称是否正确（区分大小写）
3. 是否有同名的 JVM 参数覆盖了环境变量
4. Windows 用户是否重启了命令提示符/PowerShell

### Q: 如何确认我的配置是否生效？

A: 可以通过以下方式验证：

- 查看 HMCL 数据目录是否按预期位置创建
- 检查启动器界面字体是否改变
- 在 HMCL 设置中查看 Java 路径是否正确
- 查看下载是否使用了指定的源

### Q: 字体设置不生效怎么办？

A: 请确认：

1. 字体名称拼写正确（区分大小写）
2. 系统中确实安装了该字体
3. 使用字体的确切名称（可在系统字体设置中查看）

常见字体名称：

- Windows：`Microsoft YaHei`、`SimSun`、`SimHei`
- Linux：`Noto Sans CJK SC`、`WenQuanYi Micro Hei`
- macOS：`PingFang SC`、`Heiti SC`

### Q: 启动器无法启动或出现错误怎么办？

A: 排查步骤：

1. 检查路径是否存在且有读写权限
2. 验证网络地址是否可访问
3. 确认 Java 版本是否兼容
4. 逐个移除参数进行测试
5. 查看错误日志获取详细信息

### Q: 如何重置所有配置？

A: 可以通过以下方式重置：

1. 删除 HMCL 数据目录中的配置文件
2. 清除相关环境变量
3. 使用默认参数启动 HMCL

### Q: 代理设置如何配置？

A: HMCL 支持系统代理，也可以通过 JVM 参数设置：

```bash
java -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=8080 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=8080 -jar HMCL.jar
```

如果需要身份验证：

```bash
java -Dhttp.proxyUser=username -Dhttp.proxyPassword=password -jar HMCL.jar
```
