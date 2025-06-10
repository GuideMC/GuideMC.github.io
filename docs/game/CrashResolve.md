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
