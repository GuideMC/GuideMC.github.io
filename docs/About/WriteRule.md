# 文档编写规范

> 在参与编辑本文档前，请首先阅读以下内容

## 编写规范

### 文本与排版规范

:::tip 排版提示
请参考该项目：[中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-Hans.md)
:::

- 请使用书面性语言描述，避免口语化表达
- 文章内容规范化
  - 正确使用专有名词大小写
  - 考虑不同受众，不同文章应有不同的详略程度
- 使用中性语言叙述
  - 避免褒贬性的评价
- 格式化文本内容
  - 在中文与英文 / 数字 / 代码块之间使用空格格式化，在段落中间的链接也需要增加空格
  - 正确使用符号，在中文之间使用中文括号，英文之间使用英文括号并带有空格
- 按层级规范使用标题，请勿跨层级使用

### 图片规范

- 为方便中国大陆地区用户访问，请使用在中国大陆地区具有正常连通性的图床
  - 为防止失效，所有资源均应在 `docs/assets` 中保存一份副本
- 图片宽 / 高均应小于 1024 像素，加快加载速度的同时避免显示比例不正常
- 文件名应符合命名规范，并简要描述用途
- 不应含有非默认的外观 / 选项设置，避免产生不必要的误导
- 如一张图片中涉及多个操作，请使用矩形框出各步骤并按先后顺序标注序号

### 命名规范

- 务必使用大驼峰命名法
  - 所有单词首字母大写
- 对文章命名时应规范化并尽量简短
- 适用于不同启动器的相同内容务必命名相同

## 如何参与贡献

1. 对本仓库进行 Fork
2. 在您 Fork 后的仓库内进行更改
3. 进行 Pull Request 至 `main` 分支
    - 如果修改构建代码，请 Pull Request 至 `dev` 分支

### 参与贡献 - VSCode

#### 获取 VSCode 并更改语言

Visual Studio Code，简称 VSCode，是一款由微软开发的开源跨平台编辑器。你可以通过下面的按钮获取 VSCode 的 Windows 版本。

- [点击下载 VSCode](https://code.visualstudio.com/docs/?dv=win)
- [访问官网](https://code.visualstudio.com)

VSCode 安装后默认的语言为英语。你可以通过点击以下按钮查看 VSCode 设置语言为中文的方法。以下内容均使用 VSCode 中文语言包内译文书写。

- [查看教程](https://blog.csdn.net/sinat_34104446/article/details/83033510)

#### 使用 VSCode 获取帮助库并提交

1. 即使你使用 VSCode，依旧需要安装 Git 工具。点击左侧的第三个按钮 "源代码管理"，按照 VSCode 的引导完成 Git 安装。

2. 在左下角管理 → 设置或按下键盘上的 Ctrl 键 + , 键，在搜索框中输入 “git.path”，点击 “在 settings.json 中” 并设置 git.exe 路径（<Git 安装路径>\bin\git.exe），然后保存（Ctrl + S）

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

### 参与贡献 - IntelliJ IDEA

#### 下载和配置 IntelliJ IDEA

IntelliJ IDEA 是主流的 Java 集成开发环境，适用于商业和开源开发。你可以通过点击下面的按钮来进行下载或访问其官方网站。由 JetBrains 开发的其他 IDE 或任何基于 IntelliJ IDEA 的 IDE (如 Android Studio)同样适用于该教程。

- [下载 IntelliJ IDEA](https://www.jetbrains.com/zh-cn/idea/download/?section=windows)
- [访问 IntelliJ IDEA 官网](https://www.jetbrains.com/zh-cn/idea/)

#### 在 IntelliJ IDEA 中设置并使用 Git 版本控制

如果要在 IntelliJ IDEA 中使用 Git 工具，你需要按照以下步骤进行相关设置：

1. 安装 Git Integration 插件。首先打开 IntelliJ IDEA，然后依次点击 “File” → “Settings” → “Plugins” ，在出现的搜索框内输入 “Git Integration” ，找到插件并进行安装。

2. 生成 SSH 公钥和私钥。打开 “Terminal”，并输入 `ssh-keygen -t rsa -C “你的邮箱”` 以生成 SSH 公钥和私钥，然后打开生成的 id_rsa.pub 文件，并复制文件中的内容。

3. 将 SSH 公钥添加到 GitHub。点击下面的 “访问设置” 按钮，然后在 GitHub 设置页面点击 “SSH and GPG keys”，接着点击 “New SSH Key”，最后在 “Key” 区域粘贴步骤2中复制的 SSH 公钥，并为其添加标题。

   - [访问 GitHub 设置](https://github.com/settings/keys)

4. 在 “Terminal” 中设置 Git 用户信息，需确保 Git 邮箱和 SSH 公钥使用的是相同的邮箱。如果只对当前库设置用户信息，“--global” 参数可以省略。

     ```bash
     git config --global user.name '你的名称'
     ```

     ```bash
     git config --global user.email '你的邮箱'
     ```

#### 利用 Git 获取代码库

1. 克隆仓库到本地。打开 “Terminal”，输入 `git clone https://github.com/LTCatt/PCL2Help.git` ，此操作会在本地创建一个名为 “PCL2Help” 的文件夹，并将代码仓库的内容下载到这个文件夹。

2. 使用 IntelliJ IDEA 进行编写。首先，在 “Terminal” 中输入 `cd PCL2Help` 切换到代码仓库目录，然后打开 IntelliJ IDEA，选择打开已有的项目，选择刚刚下载的 “PCL2Help” 文件夹，编写代码并保存更改。

3. 将更改提交到 GitHub。在 “Terminal” 中，运行以下三个命令，将新更改添加到暂存区，然后提交并推送到远程仓库。

     ```bash
     git add .
     ```

     ```bash
     git commit -m '提交信息'
     ```

     ```bash
     git push
     ```

在 GitHub 源代码仓库页面创建新的 Pull Request。点击下方的 “新建 Pull Request” 按钮，填写标题和描述，然后提交。在创建 Pull Request 之前，请确保你的分支与源仓库是同步的。

- [新建合并请求](https://github.com/LTCatt/PCL2Help/compare)

若需同步源仓库和你的分支，打开你的 Fork 仓库页面，点击 “Fetch upstream”，然后点击 “Fetch and merge”。

### 参与贡献 - GitHub Desktop

#### 使用 GitHub Desktop 获取帮助库

在开始前，请先根据下文中的 “第 1 部分：安装和身份验证” 完成对 GitHub Desktop 的安装与登录。

- [GitHub Desktop 使用入门](https://docs.github.com/zh/desktop/overview/getting-started-with-github-desktop#part-1-installing-and-authenticating)

点击下方按钮，进入 PCL 文件夹，创建名称为 Help 的文件夹。

打开你 Clone 的仓库的本地文件夹，在文件浏览器中，开启 “显示隐藏的项目” 选项以选中 .git 文件夹。此后，将整个 PCL2Help 内的内容剪切到 PCL/Help 文件夹下。

> 在剪切后 .git 文件夹必须位于 PCL\Help，而不能在 PCL\Help\PCL2Help 子文件夹中

使用你喜爱的编辑器编辑文件，并保存。

在 GitHub Desktop 仓库界面左侧栏，找到你修改的文件，并在文件左侧的方框中选中(仅选中一个文件，如要选中多个文件，请在 “Commit to main” 按钮上方的文本框输入消息)。在右侧的文件预览中确认无误后，单击 “Commit to main” (位于左侧栏的下方)

在所有文件均提交完毕后，按下 “Ctrl+P” 以推送至 GitHub。

在窗口标题栏下方，选中 “Current branch”，再在子栏底部选择 “Choose a branch to merge into master” 以新建拉取请求。选中 master 分支，并单击子窗口下方的蓝色按钮确认。
