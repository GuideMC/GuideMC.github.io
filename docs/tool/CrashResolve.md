# 常见游戏崩溃问题

::: tip 提示
使用右侧的文章大纲来快速定位您所遇到的问题。
:::

## 如何分析崩溃报告

游戏崩溃的原因多种多样，例如 Mod 不兼容、Fabric API 版本过高或缺少前置 Mod 等。以下是一些排查思路：

1. **启动器诊断**：部分启动器提供错误分析功能，可辅助排查。
2. **二分排查法**：通过逐次增减一半数量的 Mod 来定位问题 Mod。
3. **日志分析**：有经验的用户可直接查阅游戏日志（位于 `\.minecraft\logs`）或崩溃报告（位于 `\.minecraft\crash-reports`）来定位问题。
4. **寻求帮助**：若无法自行解决，请将 `\.minecraft\crash-reports` 和 `\.minecraft\logs` 文件夹打包后，提供给他人寻求帮助。

## 常见单人游戏崩溃问题

本节将介绍单人游戏中常见的崩溃原因及解决方法。

### 路径与环境问题

::: warning 警告：中文路径与 Unicode UTF-8

1. **中文路径**：游戏路径（包括 `.minecraft` 目录）中包含中文字符可能导致游戏崩溃。建议将游戏本体及启动器迁移至纯英文路径下。
   > 为避免影响其他程序，可将启动器、其数据目录及 `.minecraft` 文件夹一并移动到新的纯英文目录下。

2. **Unicode UTF-8 Beta 版**：Windows 系统设置中的“Beta 版: 使用 Unicode UTF-8 提供全球语言支持”选项可能导致部分 Java 程序（包括 Minecraft）出现兼容性问题而崩溃。
   - **检查与关闭**：请前往“控制面板” > “时钟和区域” > “区域”，切换到“管理”选项卡，点击“更改系统区域设置”，取消勾选“Beta 版: 使用 Unicode UTF-8 提供全球语言支持(U)”复选框，然后重启计算机。
   - **疑难解答**：若重启后该选项仍被勾选，可参考 Microsoft Q&A 社区中关于此问题的[解决方案](https://answers.microsoft.com/zh-hant/windows/forum/all/%E5%9C%B0%E5%8D%80%E8%A8%AD%E5%AE%9A/e596c312-1eda-41c2-a85e-f41a1f5ced9e)（查找用户“A Big 蓝鲸”的答复）。

:::

### Java 配置错误

::: warning 警告
在排查问题前，请前往启动器设置中的 Java 相关选项，启用自动选择 Java 版本（若有此选项）。

除非您清楚了解相关操作，否则强烈不建议手动选择 Java 版本。
:::

### 内存分配问题

1. 前往启动器设置，选择 Java 虚拟机与内存相关选项。
2. 找到内存设置选项。
3. 确保启用自动设置内存（若有此选项）。

::: warning 警告
若选择手动分配内存，请确保所分配的内存未超过当前可用的最大内存。
:::

::: tip 提示
Mod 越多、材质包分辨率越高或游戏视距越远，通常需要分配更多内存，但切勿超出可用内存上限。
:::

### Forge 相关问题

由于 `Forge` 的兼容性问题，**请务必确保启动器自动选择 Java 版本（若有此选项）**。若问题依旧，请尝试通过启动器获取或手动安装 Java 8（例如来自 Mojang 官方或 Adoptium/Azul Zulu 等提供商的版本）。您也可以点击[此链接](https://cdn.azul.com/zulu/bin/zulu8.58.0.13-ca-jre8.0.312-win_x64.msi)下载并安装来自 Azul Zulu 的 Java 8u312。

#### Forge 安装错误

安装 `Forge` 时，可能会遇到 `BLF-402` 等错误代码 (部分启动器可能提示此代码)。

此类问题通常伴随核心安装失败，导致安装后的原版核心或导入的整合包**无法在版本列表中找到**。

若核心**安装速度异常快**但版本列表中未显示，请**一并参照以下方法解决**。

### 显卡驱动问题

显卡驱动版本过旧或未正确安装，是导致游戏无法启动或崩溃的常见原因之一。在排查前，您需要了解电脑所用显卡的制造商。

::: tip 提示
笔记本用户通常可跳过此节，因为驱动程序多由笔记本制造商提供和管理。但若遇到问题，更新驱动也是一个排查方向。
:::

1. 按下 `Win` + `R` 组合键，打开“运行”窗口。
2. 在“运行”窗口中输入 `dxdiag`，并点击“确定”。
3. 在弹出的窗口中切换到“显示”选项卡，即可在“制造商”一栏查看显卡制造商信息。

#### 笔记本用户

请前往您的笔记本制造商官方网站，获取对应的驱动程序。

#### Intel 核芯显卡

请下载并运行 [**英特尔™驱动程序和支持助理**](https://dsadata.intel.com/installer) 来更新显卡驱动。

#### AMD 显卡 / 处理器

请访问 [**AMD 驱动程序与支持**](https://www.amd.com/zh-hans/support) 页面，根据您的显卡/处理器型号下载最新的驱动程序。

#### NVIDIA 显卡

请访问 [**NVIDIA 驱动程序**](https://www.nvidia.cn/geforce/drivers) 页面，根据您的显卡型号下载最新的驱动程序。

### 存档损坏与恢复

电脑蓝屏、死机重启等意外情况可能导致游戏存档损坏。若遇存档损坏，可参考本教程进行修复。请注意，此方法会将游戏世界回退至进入前的状态。

#### 操作步骤

1. 通过启动器或手动导航，打开游戏实例对应的 `saves` 文件夹。
2. 进入损坏的存档文件夹，删除 `level.dat` 文件。
3. 找到 `level.dat_old` 文件，右键重命名，移除后缀 `_old`，然后重新进入游戏世界即可。

## 常见多人游戏崩溃问题

### “多人游戏已被禁用，请检查你的 Microsoft 账户设置”

#### 正版账户

**原因**：Microsoft 账户的年龄设置或家庭组策略限制。

**解决方法**：

1. 若您是 Microsoft 家庭组的成员，请联系家庭管理员检查并修改年龄设置。
2. 登录 [Microsoft 账户信息设置](https://account.microsoft.com/profile)，修改个人资料中的年龄，确保大于 18 周岁。
3. 访问 [Xbox 隐私和在线安全](https://www.xbox.com/zh-CN/user/settings/privacy-and-safety)，选择“Xbox 与 Windows 10 设备在线安全”，将“您可以加入多人游戏”选项设置为“允许”。
4. 如有需要，可访问 [Microsoft 家庭设置](https://account.microsoft.com/family/home) 进行相关调整。

#### 离线账户

**原因**：离线账户在某些游戏版本或服务器设置下可能无法使用多人游戏功能。

**解决方法**：请尝试以下方法：

1. 尝试使用正版账户登录。
2. 尝试在启动游戏时断开网络连接。
3. 安装 “离线多人修正 (MultiOfflineFix)” 模组。可从 [MCMOD百科](https://www.mcmod.cn/download/10643.html) 下载。

### “连接超时 (Connection timed out)”

**原因**：连接超时。

**解决方法**：请逐一尝试和排查以下情况：

1. 确认服务器已开启且运行正常。
2. 确认服务器地址拼写正确（建议复制粘贴）。
3. 检查网络连接是否稳定，并尝试使用网络加速器或 VPN 后重新连接。
4. 尝试修改 DNS 服务器地址并刷新 DNS 缓存后重新连接。
5. 尝试暂时关闭防火墙（如 Windows Defender 防火墙）后重新连接。

### “连接超时：无更多信息 (Connection timed out: no further information)”

**原因**：连接超时，具体原因未知。

**解决方法**：同上“连接超时 (Connection timed out)”的解决方法。

### “未知的主机 (Unknown host)” 或 “无法分配请求的地址：无更多信息 (Cannot assign requested address: no further information)”

**原因**：无法访问目标服务器地址。

**解决方法**：

1. 确认服务器地址拼写正确（建议复制粘贴）。
2. 确认服务器已开启且运行正常。

### “无法解析主机名 (Can't resolve hostname)”

**原因**：解析服务器地址失败。

**解决方法**：确认服务器地址拼写正确（建议复制粘贴）。

### “您的主机中的软件中止了一个已建立的连接”

**原因**：网络状况不佳或连接不稳定。

**解决方法**：

1. 确认网络连接正常且稳定。
2. 尝试使用网络加速器或 VPN 后重新连接。

### “登入失败 (Failed to login)” 或 “无效登录 (Bad login)”

**原因**：离线账户尝试登录需要正版验证的服务器。

**解决方法**：请使用正版账户登录后重试。

### “用户名中包含无效字符 (Invalid characters in username)”

**原因**：游戏用户名包含中文字符或特殊符号。

**解决方法**：修改游戏用户名，确保仅包含英文字母、数字及下划线。

### “服务器版本过旧 (Outdated server)” 或 “客户端版本过旧 (Outdated client)”

**原因**：您的 Minecraft 客户端版本与服务器版本不兼容。

**解决方法**：请将 Minecraft 客户端切换至与服务器兼容的版本后重试。

### “服务器内部错误 (Internal server error)”

**原因**：服务器端发生未知错误。

**解决方法**：

1. 尝试重新连接。
2. 若问题频繁出现，请联系服务器管理员解决。

### “数据流末端 (End of Stream)”

**原因**：客户端 Mod 冲突或过于频繁地加入服务器。

**解决方法**：

1. 尝试重新连接。
2. 逐个禁用 Mod进行排查，定位问题 Mod。

### “Internal Exception: io.netty.handler.timeout.ReadTimeoutException”

**原因**：客户端无法在规定时间内读取到服务器传输的数据包（可能由于数据包过大或服务器响应缓慢）。

**解决方法**：请联系服务器管理员。通常重启服务器可以解决此问题。

### “java.lang.IllegalArgumentException: Packet too big”

**原因**：客户端接收到的数据包过大，无法处理。可能由于服务器上的某些特殊结构（如禁人塔、禁人书等）导致大量数据发送。

**解决方法**：

1. 尝试使用离线模式登录并更换游戏 ID。
2. 若更换 ID 后问题消失，则表明可能受到了禁人塔或禁人书等机制的影响。此类问题目前可能没有完美的客户端解决方案。

### “Internal Exception: io.netty.handler.codec.DecoderException: java.lang.IndexOutOfBoundsException”

**原因**：Mod 兼容性问题或 Mod 自身错误导致的数据包解码失败。

**解决方法**：逐个禁用 Mod 进行排查，定位并移除或更新问题 Mod。

### "Ticking Tile Entity" 或 "Ticking Block Entity" 报错

**原因**：方块实体（TileEntity/BlockEntity）在 tick 过程中发生错误，常见于植物魔法的魔力池等特殊方块。这类报错通常由于 Mod 兼容性问题或者小地图类 Mod 引起。

**解决方法**：

#### 方法一：使用 Neruina 模组（推荐）

1. 下载并安装 [**Neruina 模组**](https://www.mcmod.cn/class/10051.html)。
2. 该模组能自动阻止 Ticking Entity 和 Ticking Block Entity 造成的崩溃。
3. 安装后直接进入存档即可生效。

#### 方法二：启用 Forge 自带的错误移除功能

##### 低版本 Minecraft (1.12.2 等)

1. 找到游戏目录下的 `config` 文件夹。
2. 打开 `forge.cfg` 配置文件。
3. 找到 `removeErroringTileEntities` 选项，将其值设置为 `true`。
4. 如果是实体报错，可以将 `removeErroringEntities` 也设置为 `true`。
5. 保存文件并重新启动游戏。

::: tip 提示
启用这些选项后，当有方块实体或实体报错时，它们会被直接删除。虽然无法根本解决问题，但可以避免游戏崩溃。
:::

##### 高版本 Minecraft

1. 前往游戏目录下的 `saves/你的存档/serverconfig` 文件夹。
2. 用文本编辑器打开 `forge-server.toml` 文件。
3. 找到 `removeErroringEntities` 选项，将其后面的 `false` 改为 `true`。
4. 保存文件并重新启动游戏。

::: warning 注意
此方法属于临时解决方案。成功进入存档后，立即关闭存档并将配置改回 `false`，避免 Forge 误删其他方块或实体。
:::

#### 方法三：使用 NBT Explorer 手动移除问题方块/实体

如果上述方法无效，可以使用外部工具手动移除导致崩溃的方块或实体：

1. **备份存档**（重要！）
2. 下载并安装 [**NBT Explorer**](https://github.com/jaquadro/NBTExplorer/releases)
3. 从崩溃日志中找到问题方块/实体的坐标信息
4. 使用 NBT Explorer 导航到对应的区域文件（.mca 文件）
5. 找到并删除对应的问题方块或实体
6. 保存文件后重新进入游戏

::: details 详细操作步骤

**定位问题位置**：

- 在崩溃日志中找到类似 `Entity's Block location: World: (x,y,z), Chunk: (...), Region: (a,b)` 的信息
- Region 坐标对应存档中的 `r.a.b.mca` 文件
- 使用 NBT Explorer 的坐标计算器或在线计算器确定具体位置

**删除问题对象**：

- 对于方块：建议使用 MCEdit 或 Amulet 等世界编辑器
- 对于实体：使用 NBT Explorer 打开对应区域文件，找到实体列表并删除问题实体

:::

#### 方法四：检查 Mod 兼容性

如果频繁出现此类报错，建议：

1. 检查是否为 OptiFine 导致的渲染问题
2. 逐个禁用 Mod 进行排查，特别关注优化类 Mod 和小地图 Mod
3. 更新相关 Mod 到最新版本

### "Failed to create player model for default" 或 "No model for layer midnight-hats"

**原因**：MidnightLib 模组与 Cull Leaves (树叶渲染优化) 模组之间存在兼容性冲突。这个问题在 1.19.2 Forge 版本中较为常见，但隐藏较深，需要仔细排查才能发现。

**解决方法**：

1. **推荐解决方案**：删除 `Cull Leaves` (树叶渲染优化) 模组。
2. **替代方案**：可以使用 `CullLessLeaves Reforged` (更好的树叶渲染优化重铸版) 模组来替代 Cull Leaves，该模组与 MidnightLib 兼容。
3. **备选方案**：如果必须保留 Cull Leaves，可以考虑移除 MidnightLib 及其依赖的模组（如各种帽子模组等）。

::: tip 提示
由于某些模组会内置 MidnightLib 作为前置模组，可能不容易第一时间发现 MidnightLib 的存在。因此推荐优先删除 Cull Leaves 模组来解决冲突。
:::

::: warning 注意
这个问题的崩溃报告中可能会显示 `java.lang.NullPointerException` 等误导性信息，真正的错误信息通常在运行日志 (`latest.log`) 中，表现为 `java.lang.IllegalArgumentException: No model for layer midnight-hats:xxx#main`。
:::

## 崩溃报告

崩溃报告是解决游戏或服务器问题的重要部分， 包含大量关于崩溃的信息，可以帮助你找到崩溃的原因。

### 寻找崩溃报告

崩溃报告存储在游戏目录中的 `crash-reports` 文件夹中。 如果是服务器，则存储在服务器目录中的 `crash-reports` 文件夹中。

对于第三方启动器，你应该参考其文档，了解在哪里可以找到崩溃报告。

以下位置能找到崩溃报告：

| Windows                             | macOS                               | Linux                               |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `%appdata%\\.minecraft\\crash-reports` | `~/Library/Application Support/minecraft/crash-reports` | `~/.minecraft/crash-reports`        |

### 阅读崩溃报告

崩溃报告的篇幅很长，读起来可能十分费解， 然而包含大量关于崩溃的信息，可以帮助你找到崩溃的原因。

#### 崩溃报告的各部分

崩溃报告由几个部分组成，每个部分用标题分隔：

- `---- Minecraft Crash Report ----`，报告的摘要。 该部分包含导致崩溃的主要错误原因、发生时间和相关堆栈跟踪。 这是崩溃报告中最重要的部分，因为堆栈跟踪通常会提及到导致崩溃的模组。
- `-- Last Reload --`，这部分不太有用，除非崩溃发生在资源重载过程中（F3+T）。 该部分将包含上次重载的发生时间，以及重载过程中出现的任何错误的相关堆栈跟踪。 这些错误通常是由资源包引起的，可以忽略，除非是这些资源包导致的游戏出现问题。
- `-- System Details --`，本部分包含有关系统的信息，如操作系统、Java 版本和分配给游戏的内存量。 该部分有助于确定你使用的 Java 版本是否正确，以及是否为游戏分配了足够的内存。
    在此部分中，Fabric 将插入一些自定义内容，其标题为 `Fabric Mods:`，后面是所有已安装模组的列表。 该部分有助于判断模组之间是否可能已发生冲突。

#### 分解崩溃报告

既然已经知道崩溃报告的每个部分是什么，就可以开始分解崩溃报告并找出崩溃原因。

利用上面链接的崩溃示例，我们可以分析崩溃报告并找到崩溃原因，包括导致崩溃的模组。

在这个情形中，`---- Minecraft Crash Report ----` 部分中的堆栈跟踪最重要，因为包含导致崩溃的主要错误。

堆栈跟踪中提到了大量模组，因此很难指出原因，不过，首先要做的是查找导致崩溃的模组。

在这里，导致崩溃的模组是 `snownee`，因为它是堆栈跟踪中提到的第一个模组。

不过，提到的模组有很多，可能意味着模组之间存在一些兼容性问题，导致崩溃的模组可能并不是出错的模组。 在这种情况下，最好向模组作者报告崩溃情况，让他们调查崩溃原因。

#### Mixin 崩溃

::: info
Mixin 是一种修改游戏而无需修改游戏的源代码的方式。 许多模组都用了 mixin，这对于开发者来说是非常强大的工具。
:::

当有 mixin 崩溃时，通常会在堆栈跟踪中提到该 mixin 类以及该 mixin 类修改的类。

方法 mixin 会在堆栈跟踪中包含 `mod-id$handlerName`，其中 `mod-id` 是模组的 ID，`handlerName` 是 mixin 处理器的名称。

```text
... net.minecraft.class_2248.method_3821$$$mod-id$handlerName() ...
```

你可以使用此信息找到导致崩溃的模组，并向模组作者报告崩溃情况。

### 如何处理崩溃报告

处理崩溃报告的最佳方法是将其上传到在线粘贴板网站，然后将链接分享给模组作者，可以是在他们的问题追踪器，或通过某种联系方式（Discord 等）。

这可以让模组作者调查崩溃、复现崩溃并解决导致崩溃的问题。

常用的崩溃报告粘贴网站有：

- [GitHub Gist](https://gist.github.com/)
- [mclo.gs](https://mclo.gs/)
- [Pastebin](https://pastebin.com/)

把游戏内的 选项 -- 视频设置 -- 其他 -- 显示 GL 错误 关了

光影包下载地址：https://modrinth.com/shaders
https://www.curseforge.com/minecraft/search?class=shaders
https://wiki.shaderlabs.org/wiki/Shaderpacks 

我想远程控制你电脑看看，远程控制软件：https://newdl.todesk.com/windows/ToDesk_Lite.exe
https://sunlogin.oray.com/download
我想远程控制你电脑看看，远程控制软件：https://dw.oray.com/sunlogin/windows/SunloginSOS_1.2.1.61234_x64.exe
HMCL 的游戏崩溃问题加这个群：666546887
PCL 的游戏崩溃问题加这个群：978054335

截图教程：https://zhuanlan.zhihu.com/p/92074446
win10 打开控制面板教程 https://jingyan.baidu.com/article/6525d4b1534377ac7d2e94d5.html
win11 打开控制面板教程 https://jingyan.baidu.com/article/4d58d5410afceadcd5e9c043.html
win10 显示桌面此电脑教程 https://jingyan.baidu.com/article/574c52196e0c496c8d9dc1df.html
win11 显示桌面此电脑教程 https://jingyan.baidu.com/article/2c8c281da996ab4109252a41.html
win11 设置系统环境变量教程 https://jingyan.baidu.com/article/90bc8fc84b05b3b753640cdc.html
win11 打开事件查看器教程 https://jingyan.baidu.com/article/4b52d7020b6052bd5c774bbe.html

联机教程：https://bilibili.com/search?keyword=Minecraft%E8%81%94%E6%9C%BA
装联机模组，在开放局域网的时候把「在线模式」关掉 https://www.mcmod.cn/class/2754.html
1.16.5 修复多人联机模组：https://cdn.crashmc.com/https://github.com/MCTeamPotato/MultiOfflineFix/releases/download/1.0.3/MultiOfflineFix-forge-1.0.3+1.16.4.jar
1.16.5 修复多人联机模组：https://cdn.crashmc.com/https://github.com/MCTeamPotato/MultiOfflineFix/releases/download/1.0.3/MultiOfflineFix-fabric-1.0.3+1.16.4.jar
游戏用户名只能用英文字母、数字、下划线
先去 Minecraft 官网 https://www.minecraft.net/zh-hans/login 登录一遍，然后在 HMCL 里把微软账号移除再重新添加
你先登录一下 Minecraft 官网 https://www.minecraft.net/zh-hans/login 然后截个图看看
有条件就开个 VPN https://ikuuu.pw/
开梯子教程 https://img.kookapp.cn/attachments/2024-06/02/665c7f6f15925.docx
梯子有问题就私聊这个人：292592776
把梯子软件的「主页」和「配置」截个图看看
https://sakuracat-b.com/user/#/register?code=zIGOSFTP
复制链接到浏览器地址栏里再访问，不要搜索，也不要直接在 QQ 里点
HMCL 会自动下载整合包需要的模组，所以如果你需要去掉整合包里的模组，需要在 HMCL 的模组管理界面禁用，而不是直接去 mods 文件夹里删
模组文件名前面至少带一个英文字母

把服务端文件夹下的 server.properties 里的 max-tick-time 后面的数字改成 -1
把服务端文件夹下的 server.properties 里的 online-mode 后面改成 false
把服务端文件夹下的 server.properties 里的 enforce-secure-profile 后面改成 false

在游戏文件夹里的 config 文件夹里找到 forge.cfg ，用记事本或者其他代码编辑器打开，把里面的 allowEmissiveItems 后面从 true 改成 false，改完后保存，启动游戏 https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
在游戏文件夹里的 config 文件夹里找到 forge.cfg ，用记事本或者其他代码编辑器打开，把里面的 removeErroringEntities 和 removeErroringTileEntities 后面从 false 改成 true，改完后保存，启动游戏 https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
在游戏文件夹里的 config 文件夹里找到 splash.properties ，用记事本或者其他代码编辑器打开，把里面的 enabled 这一项后面的 true 改成 false，改完后保存并启动游戏 https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
在游戏文件夹里的 config 文件夹里找到 fml.toml ，用记事本或者其他代码编辑器打开，把里面的所有 true 都改成 false，改完后保存并启动游戏即可 https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
在游戏文件夹里的 config 文件夹里找到 fml.toml ，用记事本或者其他代码编辑器打开，把里面的 splashscreen 这一项后面的 true 改成 false，改完后保存并启动游戏 https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
在游戏文件夹里的 config 文件夹里找到 fml.toml ，用记事本或者其他代码编辑器打开，把里面的 earlyWindowControl 这一项后面的 true 改成 false，改完后保存并启动游戏 https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
在游戏文件夹里的 config 文件夹里找到 loliasm.cfg ，用记事本或者其他代码编辑器打开，把里面的 crashReportImprovements 后面从 true 改成 false，改完后保存并启动游戏，游戏崩溃之后再发一次崩溃报告 https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
把游戏文件夹里的 config 文件夹里的 fml.toml 文件删了 https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png

你试一下在启动器的游戏设置里的「JVM 参数头」里加 -XX:TieredStopAtLevel=3 （参数最前面的横杠不要漏掉）
你试一下在游戏设置里的「Java 虚拟机参数」里加 -XX:TieredStopAtLevel=3 （参数最前面的横杠不要漏掉） https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
你看一下系统里的「事件查看器」里的「Windows 日志」--「应用程序」里有没有显示「错误」的项目
在系统里的「事件查看器」里的「Windows 日志」--「应用程序」里，窗口最大化之后截个图看看
按照这个压缩包里的视频教程调一下游戏文件夹的权限：https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/%E8%B0%83%E6%9D%83%E9%99%90%E6%95%99%E7%A8%8B.zip
你之前有没有调过这个界面的虚拟内存大小 https://img.kookapp.cn/assets/2023-02/pkbmErhMJh0be0gk.png
在桌面右键此电脑 -- 属性，然后截个图看看
在桌面右键此电脑 -- 属性 -- 高级系统设置，然后按图里的顺序改成「自动管理所有驱动器分页文件大小」，改完后点三个「确定」（不要点右上角的叉）然后重启电脑 https://img.kookapp.cn/assets/2023-03/bGbLMNRnws1020j1.png
按win键+R， 输入：regedit 打开注册表编辑器，找到：HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Memory Management 下面有一个键：PagefileOnOsVolume，将 PagefileOnOsVolume 的值由默认的 1 改为 0，保存，重启
下载运行这个程序 https://img.kookapp.cn/attachments/2025-02/12/67acc25dc5f06.bat ，然后在桌面右键此电脑 -- 属性 -- 高级系统设置，然后按图里的样子把虚拟内存换到其他剩余容量大于 80GB 的盘里（初始大小 1024，最大值 65535），改完之后点一下「设置」，然后点三个「确定」（不要点右上角的叉），最后重启电脑 https://img.kookapp.cn/attachments/2024-03/18/7UFIGwSSXv0zy0gc.png
你先装这个软件 https://cdn.crashmc.com/https://github.com/ip7z/7zip/releases/download/24.08/7z2408-x64.exe ，然后在「工具」里点「基准测试」，把左侧「已通过」下面的数字改到最大，然后先让它运行个半小时看看会不会报错 https://img.kookapp.cn/assets/2024-10/05/D93QR1c7JV0b702a.png
你先装这个软件 https://cdn.crashmc.com/https://github.com/ip7z/7zip/releases/download/24.08/7z2408-x64.exe ，然后在游戏文件夹里的 mods 文件夹里全选所有模组文件，右键，测试压缩包
你试一下在系统环境变量里新建一个键是 JAVA_TOOL_OPTIONS，值是 -Djavax.net.ssl.trustStoreType=WINDOWS-ROOT 的环境变量，然后重启电脑
你试一下在系统环境变量里新建一个键是 JAVA_TOOL_OPTIONS，值是 -Djava.net.preferIPv4Stack=true 的环境变量，然后重启电脑

你按教程里的步骤截个 CPU 型号的图看看 https://jingyan.baidu.com/article/e73e26c0e8ed3465acb6a701.html
你按教程里的步骤截个磁盘管理的图看看 https://jingyan.baidu.com/article/19020a0a102f75529d28420f.html
你按教程里的步骤截个显卡型号的图看看 https://jingyan.baidu.com/article/9080802219bcfcbc91c80fe0.html
下载安装这个 AMD 显卡驱动，选「AMD Software: Adrenalin Edition」这一条下载：
下载安装这个 AMD 显卡驱动，选「Catalyst Software Suite」这一条下载：
下载安装这个 NVIDIA 显卡驱动：https://cn.download.nvidia.com/Windows/566.14/566.14-notebook-win10-win11-64bit-international-dch-whql.exe
下载这个软件，下载之后运行，然后截个图看看 https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/GPU-Z.2.60.0.exe
 https://www.techpowerup.com/download/techpowerup-gpu-z/ 
笔记本电脑使用独立显卡启动 Minecraft 教程：https://blog.beanbang.cn/2017/07/10/gui-config-for-minecraft/
右键桌面空白处，在 NVIDIA 控制面板里按图里顺序改成「高性能 NVIDIA 处理器」，然后点下面的「应用」，最后重启电脑 https://img.kookapp.cn/assets/2023-06/LHqkHeKbD90pr0aw.png
右键桌面空白处，在「可交换显示卡」里选「可切换显示卡全局设置」，然后把右边改成「最大化性能」
在系统的控制面板里的「系统和安全」--「电源选项」里选「高性能」，然后点它右边的「更改计划设置」--「更改高级电源设置」里应该有个「可切换动态显示卡」，把里面改成「最大化性能」，最后重启电脑
AMD 独显开启教程：https://zhuanlan.zhihu.com/p/548563759
下载安装这个 AMD 显卡驱动：https://www.amd.com/en/support/kb/release-notes/rn-rad-win-22-5-1 https://img.kookapp.cn/assets/2023-06/VoQjjMQlTg0x905x.png
Intel 显卡驱动列表：https://www.intel.com/content/www/us/en/support/articles/000090440/graphics.html
AMD 显卡驱动列表：https://www.amd.com/zh-hans/support
NVIDIA 显卡驱动列表：https://www.nvidia.com/download/index.aspx
装这个 1.7.10 Intel 显卡兼容模组：https://cdn.crashmc.com/https://github.com/makamys/Neodymium/releases/download/0.2.5/neodymium-1.7.10-0.2.5.jar
在启动器的「版本管理」里的「高级设置」里把「使用系统 OpenAL」关了
按照图里的顺序把「使用 OpenGL 软渲染器」打开 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-01/dODEb69kiV0gg09h.png
32 位 Java 开不了软渲染器
在启动器的游戏设置里的高级设置里把渲染器选成软渲染器 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-03/j9n8YaA5Ik0m20dk.png
你试一下在启动器的游戏设置里的高级设置里把渲染器选成软渲染器，如果能好，就是显卡驱动问题 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-03/j9n8YaA5Ik0m20dk.png
在启动器的游戏设置里的高级设置里把渲染器选成默认
先开一个浏览器全屏，然后切回启动器启动游戏，在还没弹出窗口的时候迅速切回浏览器，等差不多感觉游戏窗口出来了之后再切回游戏，大概试个五次左右能成功启动游戏
一看到这种 JVM 崩溃我就怀疑是内存条问题 

把 HMCL 放在除了「桌面」「下载」「文稿」之外的有权限的地方

把 HMCL 换成这里下载的版本 https://zkitefly.github.io/HMCL-Snapshot-Update/prs
在启动器的设置里，按图里的顺序去掉上面的勾，并且把下载源改成「官方」，改完之后重启启动器 https://img.kookapp.cn/assets/2023-08/rcKqsL83iv0m907d.png
在启动器的设置里，按图里的顺序去掉上面的勾，并且把下载源改成「BMCLAPI」，改完之后重启启动器 https://img.kookapp.cn/assets/2023-08/rcKqsL83iv0m907d.png
在启动器的账户列表里把皮肤调成「默认」 https://img.kookapp.cn/assets/2023-01/NZ2j1VGORa0dv0bn.png

你找到游戏文件夹下的 optionsof.txt，然后用记事本打开，找到 ofRenderRegions: 开头的一行，把后面的 true 改成 false
在游戏里的 选项 -- 视频设置 -- 性能 里把「区域渲染」关了

在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dsodium.checks.issue899=false （参数最前面的横杠不要漏掉），然后启动游戏 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png

在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dfml.earlyprogresswindow=false （参数最前面的横杠不要漏掉），然后启动游戏 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false -Dforge.logging.marker.networking=ACCEPT -Dforge.logging.marker.classloading=ACCEPT -Dforge.logging.marker.launchplugin=ACCEPT -Dforge.logging.marker.classdump=ACCEPT -Dforge.logging.marker.axform=ACCEPT -Dforge.logging.marker.eventbus=ACCEPT -Dforge.logging.marker.distxform=ACCEPT -Dforge.logging.marker.scan=ACCEPT -Dforge.logging.marker.registries=ACCEPT -Dforge.logging.marker.registrydump=ACCEPT -Dforge.logging.marker.splash=ACCEPT -Dforge.logging.marker.resource.cache=ACCEPT -Dforge.logging.mojang.level=ALL -Dforge.logging.classtransformer.level=ALL -Dforge.logging.console.level=ALL -Dforge.logging.file.level=ALL -Dforge.logging.debugFile.level=ALL ，然后启动游戏，崩溃之后再导出游戏崩溃信息再发一次 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false -Dlegacy.debugClassLoading=true -Dlegacy.debugClassLoadingFiner=true （参数最前面的横杠不要漏掉），然后启动游戏，崩溃之后再导出游戏崩溃信息（不是点「日志」按钮）https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false -Dforge.logging.marker.axform=ACCEPT（参数最前面的横杠不要漏掉），然后启动游戏，崩溃之后再导出游戏崩溃信息再发一次 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false （参数最前面的横杠不要漏掉），然后启动游戏，崩溃之后再导出游戏崩溃信息再发一次 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false （参数最前面的横杠不要漏掉），然后启动游戏，出现问题之后把游戏文件夹里的 logs 文件夹里的 debug.log 文件发一下 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlegacy.debugClassLoading=true -Dlegacy.debugClassLoadingFiner=true -Dlegacy.debugClassLoadingSave=true -Dlog4j2.formatMsgNoLookups=false （参数最前面的横杠不要漏掉），然后启动游戏，崩溃之后把游戏文件夹里的 CLASSLOADER_TEMP 文件夹打包发出来 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false -Dforge.logging.classtransformer.level=trace （参数最前面的横杠不要漏掉），启动游戏，崩溃后发一下新的游戏崩溃信息 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false -Dforge.logging.classtransformer.level=trace -Dforge.logging.marker.classdump=ACCEPT -Djava.io.tmpdir=.\.tmp （参数最前面的横杠不要漏掉），启动游戏，崩溃后把游戏文件夹下的 .tmp 文件夹里的 classDump 开头的文件夹打包发上来 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dmixin.debug.export=true （参数最前面的横杠不要漏掉），启动游戏，崩溃后把游戏文件夹下的 .mixin.out 文件夹打成压缩包发出来 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
要看和哪个 mod 冲突，需要在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dmixin.dumpTargetOnFailure=true （参数最前面的横杠不要漏掉），启动游戏，崩溃后把游戏文件夹下的 .mixin.out 文件夹打包发过来，同时也把我说的存在冲突的那个 mod 发过来 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false -Dmixin.debug.verbose=true （参数最前面的横杠不要漏掉），启动游戏，崩溃后发一下新的游戏崩溃信息 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false -Dfml.debugExit=true （参数最前面的横杠不要漏掉），启动游戏，崩溃后发一下新的游戏崩溃信息 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
先下载这个文件，把它放到游戏文件夹里的 config 文件夹里 https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/log4j2.xml ，然后在 HMCL 的「游戏特定设置」（不是全局游戏设置）里的「Java 虚拟机参数」里加 -Dlog4j2.formatMsgNoLookups=false -Dlog4j.configurationFile=config/log4j2.xml （参数最前面的横杠不要漏掉）然后启动游戏，在出现问题之后，先退出游戏，然后把游戏文件夹里的 logs 文件夹里的 debug.log 文件发一下 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png

在游戏设置里的「Java 虚拟机参数」里加 -Dfile.encoding=GB18030 -Dsun.stdout.encoding=GB18030 -Dsun.stderr.encoding=GB18030 （参数最前面的横杠不要漏掉），启动游戏 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置里（不是全局游戏设置），删掉所有 Java 虚拟机参数 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置里（不是全局游戏设置），关闭自动分配内存，手动在右边框里输入 8192MB 内存，并删掉所有 Java 虚拟机参数，然后在 Java 虚拟机参数里加 -Xms256M https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-07/DAVItvJ3Z90mc093.png https://img.kookapp.cn/assets/2023-06/B9zltUBaco08d03p.png
在游戏特定设置里（不是全局游戏设置），关闭自动分配内存，手动在右边框里输入 8192MB 内存 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png
在游戏特定设置里（不是全局游戏设置），关闭自动分配内存，手动在右边框里输入 4096MB 内存 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png
在游戏特定设置里（不是全局游戏设置），关闭自动分配内存，手动在右边框里输入 2048MB 内存 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png
在游戏特定设置里（不是全局游戏设置），关闭自动分配内存，手动在右边框里输入 1536MB 内存 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png

正确打开游戏文件夹的方法：https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
把游戏文件夹里的 options.txt 文件删了 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
开游戏的时候不要开全屏，把游戏文件夹里的 options.txt 文件删了 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
把 I18nUpdateMod 模组在 HMCL 的模组管理界面禁用掉，然后把游戏文件夹里的 resourcepacks 文件夹里的所有文件移出去 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
把 I18nUpdateMod 模组在 HMCL 的模组管理界面禁用掉，然后去 http://downloader1.meitangdehulu.com:22943/ 手动下载汉化包，下载之后把它放到游戏文件夹里的 resourcepacks 文件夹里 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png

不要用 HMCL 启动由 PCL 安装的游戏版本
不要用 HMCL 修改由 PCL 安装的游戏版本，你现在改坏了，只能把它删掉重新安装了
游戏版本被改坏了，只能重新安装游戏了
不要随意修改游戏的 forge 版本，你现在改坏了，只能把它删掉重新安装了
在 HMCL 的自动安装界面里重新安装 Forge
在 HMCL 的自动安装界面里重新安装 NeoForge
在启动器的游戏设置里，把「本地库路径」改成「预设」
在启动器的 游戏特定设置 -- 高级设置 里，把「本地库路径」改成「预设」https://img.kookapp.cn/assets/2023-06/hGFkoc6R7U10d0m6.png https://img.kookapp.cn/assets/2023-06/tLOPmiuFKC10f0m0.png https://img.kookapp.cn/assets/2023-07/Y6UbrlQtSb10d0mx.png
在启动器的 游戏特定设置 -- 高级设置 里，把「本地库路径」改成「默认」https://img.kookapp.cn/assets/2023-06/hGFkoc6R7U10d0m6.png https://img.kookapp.cn/assets/2023-06/tLOPmiuFKC10f0m0.png https://img.kookapp.cn/assets/2023-07/Y6UbrlQtSb10d0mx.png
在启动器里按图里的顺序把「版本隔离」调成「各版本独立」：https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2024-01/EA7LkGayo70mc0do.png 

1.20.1+
先把游戏文件夹里的 config 文件夹里的 fml.toml 文件删了，然后装这个模组 https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/NightConfigFixesPlus-1.0.jar
1.19.4-
装这个模组 https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/NightConfigFixesPlus-1.0.jar
装这个 Cyanide 模组 https://www.mcmod.cn/class/11907.html ，然后启动游戏，在游戏崩溃之后发新的游戏崩溃信息
https://modrinth.com/mod/feature-recycler/versions
装这个 Neruina 模组 https://www.mcmod.cn/class/10051.html
装这个 JarInJarPrinter 模组 https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/jarinjarprinter-1.0-SNAPSHOT.jar ，然后在游戏崩溃之后发新的游戏崩溃信息
装这个 JarInJarPrinter 模组 https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/jarinjarprinter-1.0-SNAPSHOT.jar ，然后在启动器的游戏设置里的 JVM 参数头里加 -Dforge.logging.marker.scan=ACCEPT （参数最前面的横杠不要漏掉），启动游戏，在游戏崩溃之后发新的游戏崩溃信息
装这个修复模组 https://cdn.crashmc.com/https://github.com/majongMC/Datapack-Load-Error-Fix/releases/download/1.18.2-forge/datapackloaderrorfix-1.18.2-182.1.0.jar
在游戏文件夹里的 config 文件夹里的 Chocolate 文件夹里新建一个 snowCastles 文件夹
装这个模组 https://maven.minecraftforge.net/net/minecraftforge/lex/legacyjavafixer/1.0/legacyjavafixer-1.0.jar
把 Pixelmon 模组换成这个 https://mediafilez.forgecdn.net/files/4348/446/Pixelmon-1.12.2-8.4.3-universal.jar
把 fabric-api 模组换成这个 https://cdn.modrinth.com/data/P7dR8mSH/versions/iS2jNAxk/fabric-api-0.100.8%2B1.21.jar

装 MixinBooter 模组：https://www.mcmod.cn/class/4010.html
CurseForge 下载模组教程：https://img.kookapp.cn/assets/2023-07/B0IqBCj37c0tr0ap.png 点完 Download File 按钮之后什么都不需要点，等待五秒之后浏览器就会弹出下载框
照这个图片把 MCheli 模组解压出来 https://i.mcmod.cn/editor/upload/20230725/1690270000_651646_muGn.webp
把这个文件替换掉原来的 https://img.kookapp.cn/attachments/2023-05/27/6471f3bfd25ff.json
把 Xaeros_Minimap_24.5.0_Forge_1.18.2.jar 模组换成这个 https://mediafilez.forgecdn.net/files/5685/648/Xaeros_Minimap_24.4.0_Forge_1.18.2.jar
把 DragonAPI 模组换成这个 https://mediafilez.forgecdn.net/files/4722/480/DragonAPI%201.7.10%20V33b.jar
把 RotaryCraft 模组换成这个 https://mediafilez.forgecdn.net/files/4721/191/RotaryCraft%201.7.10%20V33a.jar
把 ElectriCraft 模组换成这个 https://mediafilez.forgecdn.net/files/4721/198/ElectriCraft%201.7.10%20V33a.jar
把 ReactorCraft 模组换成这个 https://mediafilez.forgecdn.net/files/4721/203/ReactorCraft%201.7.10%20V33a.jar
把 AOBD 模组换成这个 https://mediafilez.forgecdn.net/files/2305/237/AOBD-2.9.2.jar
把 LootTweaks 模组换成这个 https://mediafilez.forgecdn.net/files/4721/196/LootTweaks%201.7.10%20V33a.jar
在 HMCL 的模组管理界面把 IMBlocker 模组禁用
在 HMCL 的模组管理界面里把 serializationisbad 模组禁用
在 HMCL 的模组管理界面里把 LibLoader 模组禁用
在 HMCL 的模组管理界面里把 gml 模组和 eatinganimation 模组禁用
https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/serializationisbad.json 下载这个文件，然后用它替换掉游戏文件夹里的 config 文件夹里的 serializationisbad.json 文件 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
https://gitee.com/zekerzhayard/HMCL-KOOK-Resources/releases/download/2024.2.5/libraries.zip 下载这个压缩包，然后解压并替换游戏文件夹里的 libraries 文件夹里原来的文件夹 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
https://mcef-download.cinemamod.com/java-cef-builds/d5e3cece98755ff1e5af39261e6a486a5d9adb5d/windows_amd64.tar.gz 下载这个压缩包，然后解压到游戏文件夹里的 mods 文件夹里的 mcef-libraires 文件夹里 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
下载这个模组，然后放进游戏文件夹里的 mods 文件夹里 https://cdn.crashmc.com/https://github.com/djpadbit/Sound-Physics/releases/download/1.0.10-1/Sound-Physics-1.12.2-1.0.10-1.jar
下载这个模组，然后放进游戏文件夹里的 mods 文件夹里 https://optifine.net/adloadx?f=OptiFine_1.12.2_HD_U_G5.jar
先把游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里的所有 CodeChickenLib 模组删掉，然后手动下载这个模组，放进游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里面  https://chickenbones.net/maven/codechicken/CodeChickenLib/1.7.10-1.1.3.140/CodeChickenLib-1.7.10-1.1.3.140-universal.jar 
先把游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里的所有 ForgeMultipart 模组删掉，然后手动下载这个模组，放进游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里面 https://mediafilez.forgecdn.net/files/2242/993/ForgeMultipart-1.7.10-1.2.0.345-universal.jar
先把游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里的所有 Baubles 模组删掉，然后手动下载这个模组，放进游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里面 https://mediafilez.forgecdn.net/files/2224/857/Baubles-1.7.10-1.0.1.10.jar
先把游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里的所有 bspkrsCore 模组删掉，然后手动下载这个模组，放进游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里面 https://mediafilez.forgecdn.net/files/2227/503/%5B1.7.10%5DbspkrsCore-universal-6.16.jar
先把游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里的所有 RedGearCore 模组删掉，然后手动下载这个模组，放进游戏文件夹里的 mods 文件夹里的 1.7.10 文件夹里面 https://mediafilez.forgecdn.net/files/2260/966/RedGearCore-1.7.10-2.2.2.jar

在 HMCL 的自动安装界面里把 Forge 版本换成 54.0.34
1.21 的 Forge 和 OptiFine 只能二选一
在启动器里的自动安装界面里把 OptiFine 去掉 https://img.kookapp.cn/attachments/2023-05/19/3fLwoleY2Q0mq0e4.png
先把在启动器里的自动安装界面装的 OptiFine 去掉，然后下载这个 OptiFine  https://optifine.net/adloadx?f=preview_OptiFine_1.8.9_HD_U_M6_pre2.jar ，然后把它放进游戏文件夹里的 mods 文件夹里 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/attachments/2023-05/19/3fLwoleY2Q0mq0e4.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
先把在启动器里的自动安装界面装的 OptiFine 去掉，然后下载这个 OptiFine https://optifine.net/adloadx?f=preview_OptiFine_1.12.2_HD_U_G6_pre1.jar ，然后把它放进游戏文件夹里的 mods 文件夹里 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/attachments/2023-05/19/3fLwoleY2Q0mq0e4.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
先把在启动器里的自动安装界面装的 OptiFine 去掉，然后下载这个 OptiFine https://optifine.net/adloadx?f=preview_OptiFine_1.21.4_HD_U_J4_pre2.jar ，然后把它放进游戏文件夹里的 mods 文件夹里 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/attachments/2023-05/19/3fLwoleY2Q0mq0e4.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
在启动器里的自动安装界面里把 LiteLoader 去掉 https://img.kookapp.cn/assets/2023-09/WhZqe8gxGl0ma0dp.png

把 HMCL 换成这里下载的版本 https://hmcl-snapshot-update.netlify.app/
把 HMCL 换成这里下载的版本 https://zkitefly.github.io/HMCL-Snapshot-Update/
把 HMCL 换成这里下载的版本，点第一个下载 https://zkitefly.github.io/HMCL-Snapshot-Update/prs
把 HMCL 换成这个版本 https://cdn.crashmc.com/https://github.com/HMCL-dev/HMCL/releases/download/release-3.6.11/HMCL-3.6.11.exe
先下载运行这个程序 https://johann.loefflmann.net/downloads/jarfix.exe ，运行之后点「确定」，然后把 HMCL 换成这个版本 https://cdn.crashmc.com/https://github.com/HMCL-dev/HMCL/releases/download/release-3.5.10/HMCL-3.5.10.jar
把 HMCL 换成这个版本 https://cdn.crashmc.com/https://github.com/HMCL-dev/HMCL/releases/download/v3.6.11.268/HMCL-3.6.11.268.exe
先下载运行这个程序 https://johann.loefflmann.net/downloads/jarfix.exe ，运行之后点「确定」，然后把 HMCL 换成这个版本 https://cdn.crashmc.com/https://github.com/HMCL-dev/HMCL/releases/download/v3.5.9.261/HMCL-3.5.9.261.jar
http://download.windowsupdate.com/msdownload/update/software/updt/2011/02/windows6.1-kb2483139-x64-zh-cn_2c1884b4fdf6c8e91986369d88bbcaae01c6f187.exe
在 控制面板 -- 时钟和区域 -- 区域 -- 管理 -- 更改系统区域设置 里面截个图看看
在 控制面板 -- 时钟和区域 -- 区域 -- 管理 -- 更改系统区域设置 里面上面选「中文（简体，中国）」，并且把下面那个勾去掉 https://img.kookapp.cn/assets/2023-03/zsLRF3LrcD0we0hj.png

先退出游戏，然后发一下游戏文件夹里的 logs 文件夹里的 fml-client-latest.log 文件
先退出游戏，然后发一下游戏文件夹里的 logs 文件夹里的 latest.log 文件 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
发一下游戏文件夹里的 crash-reports 文件夹里的最新文件 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-03/t5TMrzrjWD0990co.png
先退出游戏，然后在崩溃界面点左下角「导出游戏崩溃信息」（不要点「日志」），然后把导出的压缩包整个发上来 https://img.kookapp.cn/assets/2023-01/Bw9D08fUJ10m60e7.png

你这个重启游戏，如果还崩溃，发一下新的游戏崩溃信息，我要比较两次崩溃的报错
把「查看日志」打开再启动游戏 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-06/mxJBSKy89i0mc0dp.png
游戏界面未响应很难看得出来是什么原因，这种方法基本只能看运气：把「查看日志」打开再启动游戏，如果日志界面一直在滚动，那就说明没卡住，只需要一直等着就行了；如果卡住了不滚动，那就先不要退出游戏，点日志界面右下角的「导出」和「导出游戏运行栈」，然后把导出的两个文件发出来 https://img.kookapp.cn/assets/2023-04/SuAn2sjIow0md0b6.png https://img.kookapp.cn/assets/2023-06/06kkZoEmeP0m2061.png https://img.kookapp.cn/assets/2023-06/mxJBSKy89i0mc0dp.png
导出游戏运行栈不兼容就下载这个工具 https://cdn.crashmc.com/https://github.com/burningtnt/JStack-Minecraft/releases/download/V9/JStack.Minecraft.v9.zip 下载好之后全部解压，然后当游戏未响应的时候运行其中的 Run_Windows.bat，等到弹出的黑色窗口中显示 Finish 的时候，把之后弹出的文件预览窗口中选中的文件发上来
文件如果上传失败就用这个传 https://www.wenshushu.cn/ ，传完之后把分享链接发出来
出现问题后不要退出启动器，在启动器的 设置 -- 通用 中导出启动器日志，然后点 KOOK 聊天栏右侧的加号，把导出的文件发出来 https://img.kookapp.cn/assets/2023-01/oHQeKnzwWj0md0dr.png
出现问题后不要退出启动器，在启动器的 设置 -- 通用 中导出启动器日志，然后把导出的文件发出来 https://img.kookapp.cn/assets/2023-01/oHQeKnzwWj0md0dr.png
HMCL
游戏崩溃后在崩溃界面点左下角「导出游戏崩溃信息」（不要点「日志」），然后点 KOOK 聊天栏右侧的加号，把导出的压缩包整个发上来 https://img.kookapp.cn/assets/2023-01/Bw9D08fUJ10m60e7.png
游戏崩溃后在崩溃界面点左下角「导出游戏崩溃信息」（不要点「日志」），然后把导出的压缩包整个发上来 https://img.kookapp.cn/assets/2023-01/Bw9D08fUJ10m60e7.png
游戏崩溃后在崩溃界面点左下角「导出游戏崩溃信息」，然后把导出的压缩包整个上传到 https://www.wenshushu.cn/ ，传完之后把分享链接发出来 https://img.kookapp.cn/assets/2023-01/Bw9D08fUJ10m60e7.png
PCL
游戏崩溃后在崩溃界面点右下角「导出错误报告」，然后点 KOOK 聊天栏右侧的加号，把导出的压缩包整个发上来 https://img.kookapp.cn/assets/2023-03/CqLof1HzCe0g405l.png
游戏崩溃后在崩溃界面点右下角「导出错误报告」，然后把导出的压缩包整个发上来 https://img.kookapp.cn/assets/2023-03/CqLof1HzCe0g405l.png
游戏崩溃后在崩溃界面点右下角「导出错误报告」，然后把导出的压缩包整个上传到 https://www.wenshushu.cn/ ，传完之后把分享链接发出来 https://img.kookapp.cn/assets/2023-03/CqLof1HzCe0g405l.png
