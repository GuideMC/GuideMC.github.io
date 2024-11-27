# XAML 格式

## 前言

本篇简单介绍了在 PCL 中使用 XAML 进行自定义页面的相关语法。由于内容繁多，建议下载本篇代码参考学习。

- [下载本篇的代码](https://cdn.jsdelivr.net/gh//LTCatt/PCL2Help@latest/个性化/XAML%20格式.xaml)

## 纯文本

每个 `local:MyCard` 代表一张卡片，你可以添加、删除格式类似的 MyCard 来添加多个卡片。每个 `TextBlock` 代表一段文本，你可以在 `Text` 属性中书写任何你想写的内容，也可以自行添加更多的 `TextBlock`。

你可以通过添加、删除属性修改样式，例如上一行的 `FontSize` 就会将字号改为 11 号。

它还有许多可以调整的属性：上一行的 `Margin` 调整了边距，`Foreground` 则会让文字变色。

## 卡片、提示条

`local:MyHint` 代表提示条，它默认是警告样式。

将提示条的 `IsWarn` 属性改为 `False` 即可改为提示样式。使用左边的那堆字符可以在任意地方手动换行，如果需要使用等号、引号等特殊字符，可以自行百度 XAML 转义字符。

卡片（`local:MyCard`）的 `Title` 属性决定了它的标题。为卡片添加 `CanSwap` 属性让它可以被折叠，`True` 代表是，`False` 代表否。在此基础上，再使用 `IsSwaped` 属性调整它是否默认被折叠。

## 长宽属性、图片

任意项目都可以添加 `Width` 与 `Height` 属性来控制宽高。`HorizontalAlignment` 属性可以控制对齐：`Center` 代表居中，`Right` 代表居右，例如这段文本就被居右了。

`local:MyImage` 代表图片，你需要在它的 `Source` 属性中填写一个网址或文件路径，它会从该处获取图片并显示。通常需要使用 `Height` 限制它的高度。

![示例图片](https://www.baidu.com/img/flexible/logo/pc/result.png)

## 按钮

添加 `local:MyButton` 即可新建一个按钮。你需要限定它的尺寸与位置，并通过 `Padding` 属性进一步控制它的内边距。

这是一个按钮！一个按钮！

你可以修改 `ColorType` 属性来调整按钮配色：`Highlight` 代表当前主题色，`Red` 代表红色。`ToolTip` 属性还可以让你在鼠标悬浮在上面的时候显示提示文本。

把鼠标停在这里别动……

`local:MyTextButton` 是没有边框的 “纯文本按钮”，其作用与 `local:MyButton` 一致。

一个精简版的文本按钮

按钮可以做到很多事，具体将在 “事件” 部分介绍。

## 事件 1：打开网页、弹出窗口

将按钮的 `EventType` 属性设为 打开网页，然后在 `EventData` 属性中写入网址，即可通过点击按钮打开网页。

- [打开 Minecraft Wiki](https://zh.minecraft.wiki/)

或者将 `EventType` 属性改为 弹出窗口，然后在 `EventData` 属性中写入弹窗的标题与内容。

显示一个弹窗

`local:MyTextButton` 同样可以设置 `EventType` 与 `EventData` 让它具有特定功能。

- [点击打开知乎](https://www.zhihu.com/)

## 事件 2：启动游戏

将 `EventType` 设置为 启动游戏，`EventData` 设置为具体的游戏版本，即可通过点击按钮启动游戏。如果当前游戏文件夹没有该版本，则无法启动。

启动 Minecraft 1.12.2

在 `EventData` 后面添加一条竖线（|），竖线后填写服务器 IP，即可在启动该版本的同时自动进入服务器。

启动 1.20.1 并进入 Hypixel

在 `EventData` 中填写 `\current`，表示启动当前被选中的游戏版本，同样可以在后面填写服务器 IP。

启动当前选中版本并进入 Hypixel

## 事件 3：打开文件

将 `EventType` 设置为 打开文件，`EventData` 设置为文件路径，即可点击打开特定文件或启动程序。

打开记事本

如果能在 PCL 文件夹中找到该文件，则会优先打开 PCL 文件夹中的文件。当然，你可以使用例如 `C:\` 开头的绝对路径。

此外，PCL 会将文件中的 “花括号 path” 替换为 PCL 可执行文件所在文件夹（`{path}`），可以用于执行特定程序或加载图片。

打开 PCL 日志

就像为游戏指定服务器 IP 一样，你也可以在 `EventData` 的竖线后为程序添加启动参数。

定位游戏启动脚本

## 事件 4：其他事件类型

`EventType` 共有以下种类：

- 打开网页、启动游戏、打开文件：已在上方的卡片中介绍
  - [查看 PCL 源代码](https://github.com/Hex-Dragon/PCL2/blob/main/Plain%20Craft%20Launcher%202/FormMain.xaml.vb)
- 今日人品、清理垃圾、内存优化、安装整合包：触发对应功能
- 复制文本：将 `EventData` 中的内容复制到剪贴板
- 刷新主页：点击重新加载主页。如果主页文件为联网更新，这会重新下载主页内容
- 下载文件：在点击时要求选择文件保存位置，并且下载 `EventData` 的链接中的文件。`EventData` 中也能可选地指定文件名或目标文件夹，格式为：链接|文件名|文件夹
  - [下载百度的 Logo](https://www.baidu.com/img/flexible/logo/pc/result.png)
- 打开帮助：跳转到 `EventData` 对应的帮助文件（输入相对 Help 文件夹的路径）
  - [打开自定义帮助页面](帮助/自定义帮助.json)
- 切换页面：强制切换到 PCL 的某一页面（尝试切换到不太对头的页面会出现不可预知的 Bug）。`EventData` 为 页面种类|次要页面种类（PageType|PageSubType，例如 1|1）。点击上方的 查看 PCL 源代码 按钮，在 1000 行左右的位置即可查找到对应数值
  - 切换到下载页面
  - 切换到启动器设置

## StackPanel 横向布局

你需要使用 `StackPanel` 在一行里塞下多个按钮。你可以仅在这个教学卡片的基础上稍作调整，来实现自己的按钮布局。

### 第一行

- [打开 B 站](https://www.bilibili.com/)
- 进入 Hypixel
- 打开记事本

### 第二行

- 复制召唤命令
- 内存优化
- [下载百度的 Logo](https://www.baidu.com/img/flexible/logo/pc/result.png)

## 列表项 1：基础

你也可以使用列表项 `local:MyListItem` 来替代按钮，其使用方式与按钮类似。

- [百度](https://www.baidu.com/): 百度一下，你就知道！

`Logo` 属性为列表项的图标，指定的可以是链接也可以是文件路径；`Title` 是大标题，`Info` 是可选的小标题（详细信息）；`Type` 如果省略，该列表项则单纯只展示信息，仅当 `Type` 为 `Clickable` 才能触发点击效果。

## 列表项 2：图标

你可以为 `local:MyListItem` 设置图标，以下是一些示例：

- 草方块
- 草径
- 铁砧
- 红石块
- 红石灯（亮）
- 红石灯（灭）
- 鸡蛋
- 布料（Fabric 图标）
- 狐狸（NeoForge 图标）

使用时，将上方对应行的 `Source` 复制到 `MyListItem` 的 `Logo` 属性处即可。

- 清理垃圾: 使用内置的命令方块图片作为 Logo

## 主题色

你可以用类似 `{DynamicResource ColorBrush5}` 的格式使用 PCL 当前的主题颜色，修改末尾的数字编号以改变颜色浓度。

### 颜色浓度示例

- 浓度 1
- 浓度 2
- 浓度 3
- 浓度 4
- 浓度 5
- 浓度 6
- 浓度 7
- 浓度 8

除了字体颜色，你也可以将主题色用于背景色、边框颜色等颜色参数。例如这行字的颜色为浓度 2，背景为浓度 6。

## 替换标记

在花括号 `{}` 中写入特定内容，PCL 会在加载时对其进行替换。例如，`path` 会被替换为 PCL 可执行文件所在文件夹（`{path}`），用于在 `EventData` 中指定特定文件，或是加载图片。

> 以下特性于 PCL 2.6.5 (299) 加入，不适用于更早版本的 PCL。

你也可以使用替换标记来获取随机内容：`cave` 会被替换为一条随机的回声洞内容，`hint` 则是 “你知道吗” 的内容。

你知道吗：{hint}

## 进阶：Grid 布局

如果要实现更复杂的布局，则必须使用 Grid。Grid 可以让按钮们自动适应窗口宽度：随意拉伸 PCL 窗口，按钮大小会自动改变。

你可以上网查找 “WPF Grid” 的相关教程，这里仅给出一个例子，不作详细介绍。你可以仅在这个教学卡片的基础上稍作调整，来实现自己的按钮布局。

| 按钮 | 宽度 |
| ---- | ---- |
| 打开 B 站 | 1* |
| 进入 Hypixel | 1.6* (至少 200) |
| 打开记事本 | 150 |

## 进阶：图标按钮

以下特性于 PCL 2.6.5 (299) 加入，不适用于更早版本的 PCL。

MyIconTextButton 是一种带有自定义矢量图标的按钮变体，它同样支持 EventType 与 EventData 属性。通过设置 Logo 属性来控制它的图标，设置 LogoScale 属性还可以调整图标的缩放比例。

Logo 属性的内容是 SVG Path 的值，你需要使用 SVG 编辑器或者从图标资源网站（如 IconFont）查找它。不要自己写，写不懂的。此外，它还有两种 ColorType：Black（默认）和 Highlight。

如果只想要图标，不要文字，还可以使用 MyIconButton。它不能设置 Text 属性，只有一个图标可以按。它的 Theme 属性可以设置为 Color（默认）、White、Black、Red。

如果只想显示一个图标，不想让它是能按的按钮，可以使用 WPF 自带的 Path 等绘图控件，感兴趣的话可以自行搜索。想偷懒也可以把 MyIconButton 的 IsHitTestVisible 属性改为 False……

## 进阶：联网自定义主页

以下特性于 PCL 2.6.5 (299) 加入，不适用于更早版本的 PCL。

如果你在尝试制作联网更新的自定义主页，可以查看下方的 GitHub 讨论页。你可以根据其中的介绍为主页添加版本号检查以节省流量，也可以通过检查 Referer 和 User Agent 来确定对方的 PCL 版本。

[打开 GitHub 讨论页](https://github.com/Hex-Dragon/PCL2/discussions/2528)

## 通用属性

- Width、Height：设置宽度与高度
- ToolTip：设置鼠标指向时的提示文本
- Margin：调整外边距（格式为 左,上,右,下。例如 Margin="0,0,0,2" 即为 2 单位的下边距）
- HorizontalAlignment：设置横向对齐方式；居左：Left、居中：Center、居右：Right、拉伸（默认）：Stretch
- VerticalAlignment：设置纵向对齐方式；居上：Top、居中：Center、居下：Bottom、拉伸（默认）：Stretch
- IsHitTestVisible：该控件是否响应交互（点击、指向动画等）；True 为是（默认），False 为否

### TextBlock（纯文本）

- Text：设置显示的文本（如果要使用引号等特殊字符，自行百度 XAML 转义）
- TextWrapping：开启自动换行
- FontSize：设置字号
- FontWeight：设置为 Bold 时，文字加粗
- Foreground：调整前景颜色（十六进制字符串，例如 #FF010203 代表 ARGB 中的 255,1,2,3。前两位代表不透明度，FF 为全不透明，00 为全透明）

### local:MyImage（图片）

- Source：要显示的图片的网址，或 PCL 内置图片位置
- FallbackSource：当 Source 首次下载失败时，会从该备用地址加载图片
- LoadingSource：正在下载网络图片时显示的本地图片（不支持联网下载）；默认为 pack://application:,,,/images/Icons/NoIcon.png
- EnableCache：若图片是联网获取的，是否将图片保存到本地缓存，在 7 天内不再重新下载；True 为是（默认），False 为否

### local:MyCard（卡片）

- Title：设置显示的标题文本
- CanSwap：卡片是否可以折叠，True 为是，False 为否
- IsSwaped：卡片是否默认折叠，要求 CanSwap 必须为 True
- HorizontalAlignment：若使用，要求 CanSwap 必须为 False
- UseAnimation：是否在展开等高度改变时触发动画；True 为是（默认），False 为否
- SwapLogoRight：卡片折叠时的箭头是朝下还是朝右；True 为朝右，False 为朝下（默认）
- HasMouseAnimation：是否在鼠标指向时改变卡片颜色；True 为是（默认），False 为否

### local:MyHint（提示条）

- Text：设置显示的文本（&#xA; 代表换行）
- IsWarn：设置为 True 代表警告样式，False 代表提示样式

### local:MyButton（按钮）

- Text：设置显示的文本
- Padding：设置内边距，格式与 Margin 一致
- ColorType：设置颜色主题（Highlight 为当前启动器的主题颜色，Red 为红色，默认为黑色）
- EventType、EventData：触发特定事件

### local:MyTextButton（文本按钮）

- Text：设置显示的文本
- EventType、EventData：触发特定事件

### local:MyListItem（列表项）

- Logo：列表项的图标（所指定的可以是链接也可以是文件路径）
- Title：列表项的大标题
- Info：列表项的详细信息，它将会以灰色显示在大标题下方
- Type：若留空仅单纯展示信息，设置为 Clickable 触发相应活动

### local:MyIconTextButton（带图标的按钮）

- Text：设置显示的文本
- Logo：设置显示的图标
- LogoScale：设置图标的缩放，默认为 1
- ColorType：设置颜色主题（Highlight 为当前启动器的主题颜色，默认为黑色）
- EventType、EventData：触发特定事件

### local:MyIconButton（图标按钮）

- Logo：设置显示的图标
- LogoScale：设置图标的缩放，默认为 1
- Theme：设置颜色主题，Color（默认）为当前启动器的主题颜色，也可设置为 White、Black、Red
- EventType、EventData：触发特定事件
