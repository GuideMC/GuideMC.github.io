# 概述
PCL 允许你自由修改帮助页面：你可以添加自己的帮助条目，或是隐藏内置的帮助条目。
如果你是服主或整合包作者，你可以将教程或是必要信息列入帮助中，为玩家提供便利。
此后，你还可以通过自定义主页功能，在主页添加一个打开特定帮助页面的按钮！
此外，你还可以添加让帮助条目之间互通的链接，也可以让它从主页或搜索结果中隐藏。
你甚至可以利用这些特性，在帮助页面中做一个文字游戏……

# 添加自定义帮助条目
## 1. 创建帮助文件夹
PCL 会从 PCL\Help 文件夹中读取自定义帮助条目，你需要在 PCL 文件夹中创建名为 Help 的文件夹，并把所有相关文件存放在其中。

## 2. 编辑 JSON 文件
每个帮助条目都是一个 JSON 文件。在加载帮助页面时，PCL 会查找帮助文件夹及其子文件夹中的所有扩展名为 .json 的文件，并作为帮助条目加载。
此外，查找时会忽略名称以英文句号开头的文件夹，例如 .git。
换而言之，你需要新建一个 JSON 文件来创建帮助条目。该文件的格式详见以下页面：
- [帮助/自定义帮助 - JSON 格式.json](#)

## 3. 编辑 XAML 文件
如果你的帮助条目不会触发事件（即第一类，IsEvent=False），你就需要创建一个与该 JSON 文件同名的 XAML 文件。
在你点击这个帮助条目的时候，PCL 会从该 XAML 文件中加载页面的实际内容。
XAML 文件的格式与自定义主页一致，你可以查看下述条目来了解详情：
- [个性化/XAML 格式.json](#)

## 4. 刷新帮助页面
在编辑完 JSON 与 XAML 文件后，你可以点击左边栏 帮助 项右侧的刷新按钮来快速重载所有帮助页面。
如果顺利的话，你就能找到你的帮助条目啦！

# 隐藏内置帮助条目
与读取自定义帮助条目时类似，PCL 会在帮助文件夹查找扩展名为 .helpignore 的文件，该文件可以用于隐藏 PCL 内置的帮助条目。
该文件的每行都是一条正则表达式，PCL 会对这些正则逐条进行匹配，如果某内置条目的相对路径符合该正则，那么该条目就会被忽略。
例如，这个帮助条目的路径为 帮助\自定义帮助.xaml，因此任何符合这一字符串的正则都可以隐藏这个条目。
此外，仅往文件中写入 \S* 就可以隐藏 PCL 的所有内置帮助，因为任何文件名都满足这条正则。

- [正则表达式教程](https://www.runoob.com/regexp/regexp-intro.html)

在读取 .helpignore 文件的内容时，空行、行首行尾空格以及每行的 # 符号之后的内容均会被忽略。
因此，你可以在 # 符号后书写注释。

---

作者：龙腾猫跃
# 概述
PCL 帮助库欢迎大家参与编辑！你可以参与完善帮助库，帮助更多人了解 PCL 与 Minecraft！
本文将指导你下载、修改 PCL 的内置帮助库，最后提交更改。
这里默认你已经了解如何修改、添加 PCL 的自定义帮助页面。如果你还不了解，可以先查看此教程：
- [帮助/自定义帮助.json](#)

# 获取帮助库
GitHub 目前在国内的访问不太通畅。如果遇到网络问题，请自行使用科学上网工具，然后为 Git 设置代理。

你需要先注册并登录 GitHub 账号。此后，点击下方 GitHub 存储库 ，然后点击页面右上角的 Fork 建立一个分支。

- [GitHub 存储库](https://github.com/LTCatt/PCL2Help)
- [如何为 Git 设置代理](https://www.jianshu.com/p/290152303598)

Fork 完成后，使用以下介绍的任意软件提交帮助。下方条目为使用 VSCode、Git 命令行与 GitHub Desktop 提交帮助的详细过程。
我们推荐使用 VSCode 进行操作。
- [帮助/提交帮助 - VSCode.json](#)
- [帮助/提交帮助 - Intellij Idea.json](#)
- [帮助/提交帮助 - GitHub Desktop.json](#)

# 编写规范
我们对 PCL 内置帮助库有格式与语法上的固定要求。
在开始编辑与提交前，请仔细阅读下文并逐条进行检查，这能让你的提交更快通过。
- [帮助/提交帮助 - 编写规范.json](#)

# 下一步的计划……
目前我们还需要补充 MC 游戏过程中常见问题的解决方法。
你可以添加上述的帮助项，或者继续修改、完善目前已有的页面。
非常感谢你的参与！

- [打开 PCL 常见问题文档](https://shimo.im/docs/qKPttVvXKqPD8YDC)

---

作者：龙腾猫跃、Not_Killer_233、XiaoFans

# 创建帮助条目
在创建新的帮助条目之前，请先确认：
1. 在帮助库中搜索你想创建的帮助条目关键词，是否尚未收录此内容？
2. 查看帮助库在 GitHub 上的 Pull Requests，是否没有其他人正在编辑此内容？
3. 你的条目需要适用于较多玩家，且有足够派上用场的可能。如果它面向的情景极少发生或者具有较强的时效性，那就不要添加它。
4. 如果要添加网页条目，它需要有帮助性质，且必须是中文网站。比起添加整个站点，仅添加其中的特定帖子会有用得多。

此外，你可以多多参考已有的、顶部未标注 “需要重新整理格式” 或 “需要优化排版” 的 XAML 文件。
这些页面经过了审核，可以作为模板使用。你可以复制这样的文件，并在其基础上加以修改。

# 选择帮助类别
在创建新的帮助条目时，请根据情况选择链接、弹窗或新帮助页面。
1. 尽量使用网络中已有的教程帖，添加一个链接即可。若无必要，不必从头到尾重新写一遍。
- [Minecraft/新手教程.json](#)
2. 如果教程内容可以用几句话说清，则只需使用第二类帮助，弹出窗口说明即可，无需添加 XAML 页面。
- [启动器/手动选择 Java 路径.json](#)
3. 仅在你确认网络中没有类似教程，且一个弹出窗口无法完全说明内容时，才去添加 XAML 页面。

# 帮助内容规范
1. 文档将被合并入 PCL 官方，因此请使用官方视角编写文档，而不是个人视角。例如不要出现 “龙猫” 等措辞。
2. 使用书面化的正式语言，避免出现口语化的表达。
    - ❌ 要修改这一堆帮助，你去提交 Pull Request 后还得等龙猫审核完才可以。
    - ✔ 要修改 PCL 的内置帮助库，在提交 Pull Request 后还需要等待审核。
3. 注意大小写。在中文与非中文的连接处、引号与引号外文字的连接处添加一个空格（双引号除外）。使用中文标点符号（例如括号）。
4. 使用 PCL、Minecraft、Mojang 作为标准称谓。不要使用 我的世界、MC、mj 等非标准称谓或缩写。
    - ❌ 进入pcl的设置页,如果没有安装64位java,最多就只能分配1G内存.
    - ✔ 进入 PCL 的设置页，如果没有安装 64 位 Java，最多就只能分配 1G 内存。
5. 使用客观详实的说明文文体，尽量避免时效性叙述与主观评价。
    - ❌ mj在今年4月更新了1.14，更新内容很多
    - ✔ Mojang 在 2019 年 4 月更新了 Java 版 1.14。
6. 考虑帮助的受众。如果面向新手，则应该写得尽量详细。如果面向高级用户，则应该省略部分基础内容。
    - ❌ 在编辑帮助库的帮助中教学 “点击 Sign In 按钮登录”：能编辑帮助库的人应当可以自主完成这些操作
    - ✔ 在如何安装 Mod 的帮助中教学 “右键，点击剪切”：不会安装 Mod 的人确实需要极为详细的教学
7. 避免使用评价性、剧情性的叙述，使用说明文文体。
    - ❌ 整合包里有许多好玩的 Mod，但下载之后如何安装却成了大家的一大疑惑，这篇教程会教会你如何安装。
    - ✔  在下载整合包后，还需要进行安装才能进行游戏，本教程介绍了整合包的安装方式。
8. 不要在 XAML 文件中使用嵌套的 MyCard。若有大量需要折叠的内容，请新建一个子帮助页面（例如本页）。

## 帮助图片规范
建议帮助编写者们添加图片时使用在中国大陆地区可访问且可快速访问的图床。以下是图片和图床选择注意事项。
1. 不建议用 GitHub 图床、SM.MS 等速度慢且对个别 DNS 污染严重地区支持极差的图床。
2. 应该尽量根据实际情况，为图片调整合适的分辨率，以优化用户体验和减少宽带消耗。
3. 在添加 PCL 截图时应使用龙猫蓝主题颜色，且不要使用自定义背景图片。
4. 请勿在图中添加影响阅读性的大型水印，您可以在图片右下/左下等位置添加水印以防止他人使用该图片。
5. 请勿使用 img1、1 等名字，请使用拼音或英文在图片名称中简要描述图片的用途。
    - ❌ img1.png
    - ✔ anzhuang_fabric.png
    - ✔ fabric_installer.png
6. 使用常见的图片格式，如 png、jpg、webp 等。
7. 如图片需要详细注释，可以在图片链接末尾以参数 "?comment=注释" 为格式添加。
8. 如一张图片中涉及多个操作，请使用矩形框出各步骤并用箭头顺次连接。
9. 如图片需要对应一段文字，请使用以下示例方案：
    - 在 PCL 中点击 "下载" 按钮，并选择左侧菜单 "资源" 分类下的 "Mod" 选项。
    - ![示例图片](https://i0.hdslb.com/bfs/new_dyn/4d570b53b5a7b5705a219a230f8ce305558830935.png@.webp)

以下为非官方的推荐列表。
<!-- 
- ZIMG: ZIMG 为 z0z0r4 的自建图床。
    - ![ZIMG Logo](https://img.z0z0r4.top/favicon.ico)
    - [打开网页](https://img.z0z0r4.top/)
-->

## 提交与审核
1. 打开 PCL，刷新并检查文档是否可正常查看，排版是否美观，按钮是否正常工作，文中是否存在错别字。
2. 在 Json 文件开头与 XAML 文件末尾留下作者信息。但如果你仅是修改已有文件中的个别措辞，没有大幅修改，则不建议将自己添加进作者名单。
3. 如果没有完全完成某页，或你认为它还有优化空间，请在 XAML 的开头处添加类似于下方的提示条，以让他人可以继续修改。
    - 该帮助页面还需要根据规范重新整理格式，优化排版与文案。如果你感兴趣也可以来帮帮忙！
在提交之后请耐心等待结果。如果没有通过，你可以继续进行修改，并在 Pull Request 页面重新要求 Code Review。
如果没有通过，且你 2 周没有任何新的操作，你的 Pull Request 会被删除。
如果已通过（Merged），你可以 QQ 私聊龙腾猫跃，提供你的 PCL 识别码，以获取活跃橙主题！

作者：龙腾猫跃、XiaoFans、z0z0r4

# 概述

帮助条目分为两类，第一类在点击后会在 PCL 中打开一个新的帮助子页面，第二类则会触发事件（通常用于打开网页或执行程序），下列两项分别为第一类和第二类帮助条目的示例。

- 打开帮助: 帮助/自定义帮助.json
- 打开帮助: 百科/Minecraft Wiki.json

每个帮助条目都由对应的 JSON 文件生成，且第一类与第二类的格式要求略有不同。

# JSON 格式详述

| 字段名           | 必须 | 类型        | 描述                                                                 |
|------------------|------|-------------|----------------------------------------------------------------------|
| Title            | 必须 | String      | 帮助条目的标题，以及第一类中点击进入后的子页面左上角的标题。对 PCL 内置帮助库，它应该为对问题非常简短的概括。 |
| Description      | 可选 | String      | 帮助条目标题下方的描述。对 PCL 内置帮助库，它应该为对问题的进一步的详细描述。 |
| Logo             | 可选 | String      | 帮助条目的图标，第一类默认为草方块（弹出窗口为草径），第二类默认为命令方块。支持填写图片网址或本地文件地址。对 PCL 内置帮助库，应当不包含此项，全部使用默认图标。 |
| ShowInSearch     | 可选 | Boolean     | 控制该条目能否被搜索到。默认为 true。 |
| Keywords         | 可选 | String      | 额外的搜索关键字。在搜索帮助时，输入它们也能够搜索到该条目。对 PCL 内置帮助库，它应只包含未出现在 Title 与 Description 中的关键字。 |
| Types            | 可选 | List[String] | 一个字符串列表，控制该项会出现在帮助页面的首页的哪些卡片中。指南卡片会默认展开。若不写，该项则不会出现在帮助页面的首页。将这项留空，同时将 ShowInSearch 设为 false，即可完全隐藏该条目。 |
| ShowInPublic     | 可选 | Boolean     | 默认为 true。若改为 false，该条目会 PCL 正式版中隐藏。对 PCL 内置帮助库，如果内容涉及内群（例如群服务器、隐藏主题等），则应设置为 false。 |
| ShowInSnapshot   | 可选 | Boolean     | 默认为 true。若改为 false，该条目会 PCL 快照版中隐藏。 |
| IsEvent          | 可选 | Boolean     | 若为 true，在点击后会执行特定事件，而不打开页面，即第二类。若为 false (默认)，在点击后会打开同名的 XAML 页面，即第一类。 |
| EventType        | 第一类不填，第二类必须 | String | 点击该条目时执行的事件类别。详见自定义主页。 |
| EventData        | 第一类不填，第二类可选 | String | 点击该条目时执行的事件的额外参数。详见自定义主页。 |

# 第一类 JSON 范例

```json
{
    "__Author__": "龙腾猫跃",
    "Title": "自定义帮助页面",
    "Description": "添加自己的帮助页面，或是隐藏 PCL 内置的帮助页面",
    "Keywords": "个性化修改xaml",
    "Types": ["个性化"]
}
```

# 第二类 JSON 范例

```json
{
    "__Author__": "NotKiller233、龙腾猫跃",
    "Title": "Minecraft Wiki",
    "Description": "包含原版游戏过程中所需大多数知识的中文百科",
    "Keywords": "我的世界wikipedia",
    "Types": ["百科"],
    "IsEvent": true,
    "EventType": "打开网页",
    "EventData": "https://zh.minecraft.wiki/"
}
```

# 提交帮助 - VSCode

## 获取 VSCode 并更改语言

Visual Studio Code，简称 VSCode，是一款由微软开发的开源跨平台编辑器。你可以通过下面的按钮获取 VSCode 的 Windows 版本。

- [点击下载 VSCode](https://code.visualstudio.com/docs/?dv=win)
- [访问官网](https://code.visualstudio.com)

VSCode 安装后默认的语言为英语。你可以通过点击以下按钮查看 VSCode 设置语言为中文的方法。以下内容均使用 VSCode 中文语言包内译文书写。

- [查看教程](https://blog.csdn.net/sinat_34104446/article/details/83033510)

## 使用 VSCode 获取帮助库并提交

1. 即使你使用 VSCode，依旧需要安装 Git 工具。点击左侧的第三个按钮 "源代码管理"，按照 VSCode 的引导完成 Git 安装。
   
   ![Git 安装](https://i0.hdslb.com/bfs/article/011fbf49c33bafad055fb9b09ded59e4565437509.png)

2. 在左下角管理 → 设置或按下键盘上的 Ctrl 键 + , 键，在搜索框中输入 “git.path”，点击 “在 settings.json 中” 并设置 git.exe 路径（<Git 安装路径>\bin\git.exe），然后保存（Ctrl + S）

   - [在 settings.json 中写入此文本](#)
     ```json
     {
         "git.path": "<Git 安装路径>\\bin\\git.exe",
         "git.autofetch": true
     }
     ```

   ![设置 git.path](https://i0.hdslb.com/bfs/article/065039878df4c60d12e46f686c09c8be565437509.png)
   ![设置 git.path](https://i0.hdslb.com/bfs/article/93b862d660e3bc984b69b5c539f899e8565437509.png)

3. 在主界面按下 “F1” 键打开指令输入框，输入 “git clone” 并回车。

4. 打开 GitHub Fork 仓库，点击右上角 Code 后复制仓库的 Git 链接，在 VSCode 主界面按下 F1（对于部分笔记本应按 Fn + F1）打开指令输入框，输入“Git Clone”并回车。

5. 点击下方按钮，进入 PCL 文件夹，创建名称为 Help 的文件夹。

   - 打开文件夹

完成上述后，将第二步 clone 下仓库内 PCL2Help 文件夹剪切到 PCL 目录下并重命名文件夹 PCL2Help 为 Help 。

最后，点击左边栏 → 源代码管理 → 打开文件夹，选择 Help 文件夹即可。

在获取帮助库后，你就可以按照正常自定义帮助的方式对帮助库进行修改了。修改完成后，点击左侧的第三个按钮 "源代码管理" 或按下键盘上的 Ctrl 键 + Shift 键 + G 键，在上方输入你的修改内容，然后点击 "提交" 旁边的小三角，再点击 "提交和推送" ，你的更新就被推送到你的 Fork 仓库了。

![提交和推送](https://i0.hdslb.com/bfs/article/3c0b5a42ba7a3d1dcabba91c6d9b5c5f565437509.png)

在 Pull Request 前，你需要同步原仓库内的内容以保证你的仓库保持最新。打开你的 Fork 仓库主页，找到 "Sync fork" 按钮并点击，再点击 "Update branch"，你的仓库就同步了原仓库。经过了这些步骤之后，你就可以提交你的 Pull Request 了。

![同步原仓库](https://i0.hdslb.com/bfs/new_dyn/5ee850721deea6f7c5bcc887b7582a52558830935.png@.webp)

## 作者

Not_Killer_233、龙腾猫跃、XiaoFans、林小槐、WTP016、Dong_Yi_feng、huangminzhe、wuyuncheng-26

# 提交帮助 - IntelliJ IDEA

## 下载和配置 IntelliJ IDEA

IntelliJ IDEA 是主流的 Java 集成开发环境，适用于商业和开源开发。你可以通过点击下面的按钮来进行下载或访问其官方网站。由 JetBrains 开发的其他 IDE 或任何基于 IntelliJ IDEA 的 IDE (如 Android Studio)同样适用于该教程。

- [下载 IntelliJ IDEA](https://www.jetbrains.com/zh-cn/idea/download/?section=windows)
- [访问 IntelliJ IDEA 官网](https://www.jetbrains.com/zh-cn/idea/)

## 在 IntelliJ IDEA 中设置并使用 Git 版本控制

如果要在 IntelliJ IDEA 中使用 Git 工具，你需要按照以下步骤进行相关设置：

1. 安装 Git Integration 插件。首先打开 IntelliJ IDEA，然后依次点击 “File” → “Settings” → “Plugins” ，在出现的搜索框内输入 “Git Integration” ，找到插件并进行安装。

2. 生成 SSH 公钥和私钥。打开 “Terminal”，并输入 `ssh-keygen -t rsa -C “你的邮箱”` 以生成 SSH 公钥和私钥，然后打开生成的 id_rsa.pub 文件，并复制文件中的内容。

3. 将 SSH 公钥添加到 GitHub。点击下面的 “访问设置” 按钮，然后在 GitHub 设置页面点击 “SSH and GPG keys”，接着点击 “New SSH Key”，最后在 “Key” 区域粘贴步骤2中复制的 SSH 公钥，并为其添加标题。

   - [访问 GitHub 设置](https://github.com/settings/keys)

4. 在 “Terminal” 中设置 Git 用户信息，需确保 Git 邮箱和 SSH 公钥使用的是相同的邮箱。如果只对当前库设置用户信息，“--global” 参数可以省略。

   - [设置 Git 用户名](#)
     ```bash
     git config --global user.name '你的名称'
     ```
   - [设置 Git 邮箱](#)
     ```bash
     git config --global user.email '你的邮箱'
     ```

## 利用 Git 获取代码库

1. 克隆仓库到本地。打开 “Terminal”，输入 `git clone https://github.com/LTCatt/PCL2Help.git` ，此操作会在本地创建一个名为 “PCL2Help” 的文件夹，并将代码仓库的内容下载到这个文件夹。

2. 使用 IntelliJ IDEA 进行编写。首先，在 “Terminal” 中输入 `cd PCL2Help` 切换到代码仓库目录，然后打开 IntelliJ IDEA，选择打开已有的项目，选择刚刚下载的 “PCL2Help” 文件夹，编写代码并保存更改。

3. 将更改提交到 GitHub。在 “Terminal” 中，运行以下三个命令，将新更改添加到暂存区，然后提交并推送到远程仓库。

   - [git add .](#)
     ```bash
     git add .
     ```
   - [git commit -m '提交信息'](#)
     ```bash
     git commit -m '提交信息'
     ```
   - [git push](#)
     ```bash
     git push
     ```

在 GitHub 源代码仓库页面创建新的 Pull Request。点击下方的 “新建 Pull Request” 按钮，填写标题和描述，然后提交。在创建 Pull Request 之前，请确保你的分支与源仓库是同步的。

- [新建合并请求](https://github.com/LTCatt/PCL2Help/compare)

若需同步源仓库和你的分支，打开你的 Fork 仓库页面，点击 “Fetch upstream”，然后点击 “Fetch and merge”。

# 提交帮助 - GitHub Desktop

## 使用 GitHub Desktop 获取帮助库

在开始前，请先根据下文中的 “第 1 部分：安装和身份验证” 完成对 GitHub Desktop 的安装与登录。

- [GitHub Desktop 使用入门](https://docs.github.com/zh/desktop/overview/getting-started-with-github-desktop#part-1-installing-and-authenticating)

点击下方按钮，进入 PCL 文件夹，创建名称为 Help 的文件夹。

- [打开文件夹](#)

打开你 Clone 的仓库的本地文件夹，在文件浏览器中，开启 “显示隐藏的项目” 选项以选中 .git 文件夹。此后，将整个 PCL2Help 内的内容剪切到 PCL/Help 文件夹下。

> 在剪切后 .git 文件夹必须位于 PCL\Help，而不能在 PCL\Help\PCL2Help 子文件夹中

使用你喜爱的编辑器编辑文件，并保存。

在 GitHub Desktop 仓库界面左侧栏，找到你修改的文件，并在文件左侧的方框中选中(仅选中一个文件，如要选中多个文件，请在 “Commit to main” 按钮上方的文本框输入消息)。在右侧的文件预览中确认无误后，单击 “Commit to main” (位于左侧栏的下方)

在所有文件均提交完毕后，按下 “Ctrl+P” 以推送至 GitHub。

在窗口标题栏下方，选中 “Current branch”，再在子栏底部选择 “Choose a branch to merge into master” 以新建拉取请求。选中 master 分支，并单击子窗口下方的蓝色按钮确认。
