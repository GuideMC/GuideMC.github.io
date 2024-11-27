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

- [打开 PCL 常见问题文档](https://shimo.im/docs/qKPttVvXKqPD8YDC)


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

2. 在左下角管理 → 设置或按下键盘上的 Ctrl 键 + , 键，在搜索框中输入 “git.path”，点击 “在 settings.json 中” 并设置 git.exe 路径（<Git 安装路径>\bin\git.exe），然后保存（Ctrl + S）

   - [在 settings.json 中写入此文本](#)
     ```json
     {
         "git.path": "<Git 安装路径>\\bin\\git.exe",
         "git.autofetch": true
     }
     ```

3. 在主界面按下 “F1” 键打开指令输入框，输入 “git clone” 并回车。

4. 打开 GitHub Fork 仓库，点击右上角 Code 后复制仓库的 Git 链接，在 VSCode 主界面按下 F1（对于部分笔记本应按 Fn + F1）打开指令输入框，输入“Git Clone”并回车。

5. 点击下方按钮，进入 PCL 文件夹，创建名称为 Help 的文件夹。

   - 打开文件夹

完成上述后，将第二步 clone 下仓库内 PCL2Help 文件夹剪切到 PCL 目录下并重命名文件夹 PCL2Help 为 Help 。

最后，点击左边栏 → 源代码管理 → 打开文件夹，选择 Help 文件夹即可。

在获取帮助库后，你就可以按照正常自定义帮助的方式对帮助库进行修改了。修改完成后，点击左侧的第三个按钮 "源代码管理" 或按下键盘上的 Ctrl 键 + Shift 键 + G 键，在上方输入你的修改内容，然后点击 "提交" 旁边的小三角，再点击 "提交和推送" ，你的更新就被推送到你的 Fork 仓库了。

在 Pull Request 前，你需要同步原仓库内的内容以保证你的仓库保持最新。打开你的 Fork 仓库主页，找到 "Sync fork" 按钮并点击，再点击 "Update branch"，你的仓库就同步了原仓库。经过了这些步骤之后，你就可以提交你的 Pull Request 了。

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
