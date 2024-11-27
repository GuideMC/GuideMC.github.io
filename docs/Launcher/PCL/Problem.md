## 我可以使用 PCL 制作整合包吗？
你目前所使用的是 PCL 正式版。正式版没有分发限制，因此你可以发给其他人或是用于制作整合包、服务器客户端，无需向作者申请授权。

## 自动安装整合包
将你的整合包重命名为 modpack.zip 或 modpack.mrpack，和 PCL 的 exe 文件放在同一文件夹下。如果这样做，打开 PCL 时，PCL 会自动安装这一整合包。

## 删除自己的账号信息
PCL 将你的账号、密码等重要信息加密存储在注册表中，而不是文件中。因此，你无需刻意删除你的账号信息，它们不会随着你的整合包被发放给其他人。

## 设置第三方登录、限制登录方式
[启动器/指定登录方式.json](启动器/指定登录方式.json)

## 自定义主页
你可以在 设置→个性化→主页 中自定义启动器的主页。你也可以将你的主页 XAML 文件上传到服务器，并通过 “联网更新” 选项实现主页的动态更新。

## 自定义帮助页面
[帮助/自定义帮助.json](帮助/自定义帮助.json)

## 关闭启动器更新与公告
你可以在 设置→启动器→系统 中修改启动器的更新方式与公告推送方式。
如果你能通过 QQ 群等方式通知到所有使用你的整合包的玩家，你可以完全关闭启动器更新。如果你无法通知到使用整合包的所有玩家，则请至少选择 “仅在有重大漏洞更新时显示提示”，以免有玩家因为无法收到重大漏洞更新而无法正常游戏。
启动器公告包含紧急漏洞通知、PCL 的活动通知、新功能投票等推送弹窗。如果你需要屏蔽 PCL 的活动通知，你可以降低公告推送等级。如果没有必要，则推荐设置为 “显示所有公告”。

## 修改启动时 “你知道吗?” 的内容
在 PCL 文件夹下新建一个名为 hints.txt 的文件，然后每一行写入一条信息，即可修改启动时 “你知道吗?” 的内容。PCL 读取该文件时会忽略空行。若写入后出现乱码，可以尝试将编码改为 UTF-8。

## 自带 Java
如果你想让整合包自带某个版本的 Java，可以直接将 Java 放在版本文件夹（versions/版本名）中，PCL 会自动搜索并优先选用放在版本文件夹里的 Java。

## 关闭 PCL 中不需要的功能
你可以在 设置→个性化→功能隐藏 中关闭你不需要的功能入口，例如下载、个性化设置等页面。
