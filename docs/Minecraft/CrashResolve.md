# 常见游戏崩溃问题

:::tip 提示
使用右侧的文章大纲来快速定位您所遇到的问题
:::

## 常见单人游戏崩溃问题

### 安装 Mod 后游戏报错/无法启动

造成游戏报错的原因有很多, 比如 Mod 之间不兼容, Fabric API 的版本过高, 缺少前置 Mod 等等。

1. 新版本的 HMCL 拥有错误分析功能, 可以根据HMCL的提示来排查原因。

2. 也可以使用二分法来解决——每次加入 / 删除一半的 Mod , 挨个排除, 直到找到导致游戏报错的 Mod 为止。

3. 如果你的能力很优秀, 也可以直接查看游戏日志来找出问题的原因。

4. 如果无法理解日志内容, 那么请将 `\.minecraft\crash-reports` 和 `\.minecraft\logs` 文件夹打包发给其他人寻求帮助。

### Java 配置错误

::: warning
请在排查问题前，前往 BakaXL 本体设置 - Java 虚拟机与内存 ，打开 `让 BakaXL 自动决定 Java 版本` 选项。

除非您知道您在做什么，否则强烈不建议手动选择 Java 版本。
:::

### 使用 Forge 时

由于 `Forge` 的兼容性问题，**请务必确保打开了自动选择 Java 选项** 。若仍然崩溃，请尝试从 BakaXL 本体设置 获取来自 Mojang 官方的 Java 8。您也可以点击[此链接](https://cdn.azul.com/zulu/bin/zulu8.58.0.13-ca-jre8.0.312-win_x64.msi)下载来自 Azul Zulu 的 Java 8u312 安装包并安装。

#### 全版本游戏通用的崩溃问题

::: warning 警告
在系统使用 Unicode UTF-8 的情况下使用中文目录存储 / 启动游戏必定会导致游戏崩溃。

关于如何找到 Unicode 选项请参照: [将 Windows10 设置为 UTF8 编码格式 - CSDN](https://blog.csdn.net/xt_v2012/article/details/93784751)
将选项 `Beta 版: 使用 Unicode UTF-8 提供全球语言支持 (U)` 旁的复选框取消勾选后重新启动即可关闭 Unicode UTF-8 

若出现重启后检查依旧仍在使用 Unicode UTF-8 模式请参考: 
[地區設定 勾選 “Beta 版：使用 Unicode UTF-8 提供全球語言支援” 後重開機依舊無法更改回來 - Microsoft Q&A](https://answers.microsoft.com/zh-hant/windows/forum/all/%E5%9C%B0%E5%8D%80%E8%A8%AD%E5%AE%9A/e596c312-1eda-41c2-a85e-f41a1f5ced9e) 一文中独立顾问 “A Big 蓝鲸” 提供的方法。
:::

1. .minecraft 目录中存在中文字符有可能导致游戏崩溃，如果发生了崩溃情况请尝试移出中文路径；

>为了解决问题同时不影响该目录下其他应用程序的日常使用
>
>请将 <kbd><em>BakaXL.exe</em></kbd>，<kbd><em>BakaXL</em> 文件夹</kbd>，<kbd><em>.minecraft</em> 文件夹</kbd>
>
>移动至不含有中文字符的同一目录下

### 安装 Forge 错误

当您在安装 `Forge` 时，可能会遇到一个看似无法解决的 `BLF-402` 问题

此问题出现时一般还伴随着核心安装出现问题，安装后的原版核心或导入的整合包**无法在版本列表中找到**

若您的核心 **安装速度飞起** 但是安装后无法在版本列表中找到，请 **一并参照以下方法解决**

### 显卡驱动过旧 / 未安装

在这之前，您需要了解您电脑所使用显卡的厂商。

::: tip 提示
笔记本用户通常可以直接跳过此节。
:::

1. 按下 `Win` + `R` 调出 `运行` 窗口；
2. 在运行窗口中输入 `dxdiag` ，并点击 `确定` ；
3. 在弹出的窗口中点击 `显示` ，在 `制造商` 一列将会显示您的显卡制造商。

#### 笔记本用户

请前往您的笔记本制造商的官方网站获取对应的驱动程序软件。

#### Intel 核芯显卡

请下载 [**英特尔™驱动程序和支持助理**](https://dsadata.intel.com/installer) 来更新显卡驱动。

#### AMD 显卡 / 处理器

前往 [**AMD 驱动程序与支持**](https://www.amd.com/zh-hans/support) 页面根据您的显卡 / 处理器型号下载最新的驱动程序 。

#### NVIDIA 显卡

请前往 [**NVIDIA 驱动程序**](https://www.nvidia.cn/geforce/drivers/) 页面根据显卡型号和需要下载最新的显卡驱动。

### 分配内存过大 (过小)

1. 前往 `本体设置` 并选择 `Java 虚拟机与内存`；
2. 点击 `内存设置`；
3. 确保 `自动设置内存` 为 `开`。

::: warning 警告
当您选择手动分配内存时，请确保分配的内存没有超过您目前可用的最大内存。
:::

::: tip 提示
Mod 越多（或材质包分辨率更大，能见度更远）时你需要分配更多的内存，但是不要超出你的可用内存。
:::

### 注意事项

电脑蓝屏、死机重启等情况下，游戏存档可能会损坏。如遇存档损坏可参考此教程的方案进行修复。但请注意，使用此方法会使得该世界回退至进入游戏前的存档。

#### 操作步骤

1. 点击对应版本的 “版本设置” → “存档文件夹” 后打开 saves 文件夹。

2. 进入损坏存档，删除 “level.dat” 文件。

3. 找到 “level.dat_old”，并右键重命名，将后缀 “_old” 部分删除，完成后再次进入世界即可。

## 常见多人游戏崩溃问题

### 多人游戏已被禁用，请检查你的 Microsoft 账户设置

#### 正版账户

如果你是 Microsoft 家庭中的一员，请进入 Microsoft 家庭设置查看家庭管理者，并用家庭管理者的账号更改年龄。

解决方法：点击下方按钮进入 Microsoft 账户信息设置，并更改个人资料中的年龄，使其大于 18 周岁。再进入 Xbox 隐私和在线安全，选择 Xbox 与 Windows 10 设备在线安全，把 “您可以加入多人游戏” 设置为 “允许”。

- [Microsoft 账户信息设置](https://account.microsoft.com/profile)
- [Xbox 隐私和在线安全](https://www.xbox.com/zh-CN/user/settings/privacy-and-safety)
- [Microsoft 家庭设置](https://account.microsoft.com/family/home)

#### 离线账户

原因：目前离线账户无法使用 1.16.4 和 1.16.5 的多人游戏功能。

解决方法：请逐一尝试以下方法。

1. 使用正版登录或第三方登录进入游戏。
2. 尝试在启动游戏时断开网络连接。
3. 安装下方的 “离线多人修正” 或 “Offline Multiplayer” 模组。
    - [离线多人修正 | MultiOfflineFix](https://www.mcmod.cn/download/10643.html)

### 连接超时

原因：连接超时。

解决方法：请逐一尝试和排查以下情况。

### Connection timed out: no further information

原因：连接超时。

解决方法：请逐一尝试和排查以下情况。

1. 服务器已关闭或未正确开启。
2. 确认服务器地址拼写正确（尽量复制粘贴）。
3. 确认网络连接正常且网络环境良好，使用加速器或 VPN 后再次尝试连接服务器。
4. 尝试修改 DNS 服务器地址并刷新 DNS 缓存后再次尝试连接服务器。
5. 尝试关闭 Microsoft Defender 公用网络防火墙后再次尝试连接服务器。

### 未知的主机 Unknown host 或 Cannot assign requested address: no further information

原因：无法访问目标地址。

解决方法：确认服务器地址拼写正确（尽量复制粘贴），或者确认服务器已开启。

### Can't resolve hostname

原因：解析服务器地址失败。

解决方法：确认服务器地址拼写正确（尽量复制粘贴）。

### 您的主机中的软件中止了一个已建立的连接

原因：网络状况不佳。

解决方法：确认网络连接正常且网络环境良好，请在尝试使用加速器或 VPN 后再次尝试连接服务器。

### 登入失败、Failed to login 或 Bad login

原因：离线玩家尝试登录正版服务器。

解决方法：使用正版登录后再次尝试重新进入服务器。

### Invalid characters in username

原因：用户名包含中文或特殊字符。

解决方法：修改您的游戏用户名，确保仅含英文字母、数字及下划线。

### Outdated server 或 Outdated client

原因：您的 Minecraft 版本与服务器不匹配。

解决方法：切换 Minecraft 版本为服务器兼容的版本，再重新尝试连接。

### Internal server error

原因：服务器内部错误。

解决方法：尝试重连。如果经常出现，可以联系服主解决。

### End of Stream

原因：客户端 Mod 出错，或频繁加入服务器。

解决方法：尝试重连；禁用部分 Mod，并检查问题是否仍然存在。

### Internal Exception: io.netty.handler.timeout.ReadTimeoutException

原因：客户端无法读取服务器传输的数据包（数据包过大）或服务器状态不佳。

解决方法：联系服主。通常重启服务器可以解决该问题。

### java.lang.IllegalArgumentException: Packet too big

原因：客户端无法读取服务器传输的数据包，因为数据包过大。你有可能被禁人塔、禁人书等造成的大量数据阻塞在服务器外。

解决方法：使用离线登录，更换游戏 ID，如果问题消失，则代表你受到了禁人塔或禁人书的限制。该原因造成的问题暂时无解。

### Internal Exception: io.netty.handler.codec.DecoderException: java.lang.IndexOutOfBoundsException

原因：Mod 导致错误。

解决方法：逐个禁用 Mod，并检查问题是否仍然存在。
