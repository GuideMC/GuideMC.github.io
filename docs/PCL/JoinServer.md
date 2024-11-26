# 如何加入服务器？

1. 点击启动游戏按钮，然后单击 "多人游戏"。

![启动游戏](https://i0.hdslb.com/bfs/article/5b8c21a0c000dbe259a878370df19148565437509.png)

2. 如果选择 "直接连接" 按钮，则输入服务器地址（即 IP），然后点击 "加入服务器"。

![多人游戏直接连接](https://i0.hdslb.com/bfs/article/db756a18373d86a9315379a29eae15cc565437509.png)

3. 如果选择 "添加服务器" 按钮，则输入服务器名称、服务器地址（即 IP），然后点击 "完成"，并双击加入该服务器，方便以后快速进入。服务器名称用于区分不同的服务器，不影响实际连接效果，也可以保留默认。

![多人游戏添加服务器](https://i0.hdslb.com/bfs/article/1cf1ee43e844f3a838e721f25f300cd8565437509.png)

上文所说服务器地址，即服务器 IP，服主一般会公布在论坛、群公告等位置。其常见格式如下：
- ✔  mc.hypixel.net
- ✔  mc.example.com:25565
- ✔  233.233.233.233:12345
- ❌  http://mc.hypixel.net

# 多人游戏已被禁用，请检查你的 Microsoft 账户设置

## 正版账户

如果你是 Microsoft 家庭中的一员，请进入 Microsoft 家庭设置查看家庭管理者，并用家庭管理者的账号更改年龄。

解决方法：点击下方按钮进入 Microsoft 账户信息设置，并更改个人资料中的年龄，使其大于 18 周岁。再进入 Xbox 隐私和在线安全，选择 Xbox 与 Windows 10 设备在线安全，把 “您可以加入多人游戏” 设置为 “允许”。
- [Microsoft 账户信息设置](https://account.microsoft.com/profile)
- [Xbox 隐私和在线安全](https://www.xbox.com/zh-CN/user/settings/privacy-and-safety)
- [Microsoft 家庭设置](https://account.microsoft.com/family/home)

## 离线账户

原因：目前离线账户无法使用 1.16.4 和 1.16.5 的多人游戏功能。

解决方法：请逐一尝试以下方法。
1. 使用正版登录或第三方登录进入游戏。
2. 尝试在启动游戏时断开网络连接。
3. 安装下方的 “离线多人修正” 或 “Offline Multiplayer” 模组。
- [离线多人修正 | MultiOfflineFix](https://www.mcmod.cn/download/10643.html)
## 连接超时

原因：连接超时。

解决方法：请逐一尝试和排查以下情况。

## Connection timed out: no further information

原因：连接超时。

解决方法：请逐一尝试和排查以下情况。
1. 服务器已关闭或未正确开启。
2. 确认服务器地址拼写正确（尽量复制粘贴）。
3. 确认网络连接正常且网络环境良好，使用加速器或 VPN 后再次尝试连接服务器。
4. 尝试修改 DNS 服务器地址并刷新 DNS 缓存后再次尝试连接服务器。
5. 尝试关闭 Microsoft Defender 公用网络防火墙后再次尝试连接服务器。
6. 如问题仍未解决，请尝试在相关论坛及群聊中上传截图并寻求帮助。

## 未知的主机 Unknown host 或 Cannot assign requested address: no further information

原因：无法访问目标地址。

解决方法：确认服务器地址拼写正确（尽量复制粘贴），或者确认服务器已开启。

## Can't resolve hostname

原因：解析服务器地址失败。

解决方法：确认服务器地址拼写正确（尽量复制粘贴）。

# 常见错误及解决方法

## Can't resolve hostname

原因：解析服务器地址失败。

解决方法：确认服务器地址拼写正确（尽量复制粘贴）。

## 您的主机中的软件中止了一个已建立的连接

原因：网络状况不佳。

解决方法：确认网络连接正常且网络环境良好，请在尝试使用加速器或 VPN 后再次尝试连接服务器。

## 登入失败、Failed to login 或 Bad login

原因：离线玩家尝试登录正版服务器。

解决方法：使用正版登录后再次尝试重新进入服务器。

## Invalid characters in username

原因：用户名包含中文或特殊字符。

解决方法：修改您的游戏用户名，确保仅含英文字母、数字及下划线。

## Outdated server 或 Outdated client

原因：您的 Minecraft 版本与服务器不匹配。

解决方法：切换 Minecraft 版本为服务器兼容的版本，再重新尝试连接。

## You are not white-listed on this server

原因：不在服务器白名单内。

解决方法：联系服主添加白名单。

## You are banned from this server

原因：被服务器封禁。

解决方法：若你认为这是误封，联系服主。

## Internal server error

原因：服务器内部错误。
## Internal server error

原因：服务器内部错误。

解决方法：尝试重连。如果经常出现，可以联系服主解决。

## End of Stream

原因：客户端 Mod 出错，或频繁加入服务器。

解决方法：尝试重连；禁用部分 Mod，并检查问题是否仍然存在。

## Server closed

原因：服务器已关闭。

解决方法：联系服主开启服务器。

## Server is full

原因：服务器已满。

解决方法：等待服务器有玩家退出，再次尝试连接。

## Internal Exception: io.netty.handler.timeout.ReadTimeoutException

原因：客户端无法读取服务器传输的数据包（数据包过大）或服务器状态不佳。

解决方法：联系服主。通常重启服务器可以解决该问题。

## java.lang.IllegalArgumentException: Packet too big

原因：客户端无法读取服务器传输的数据包，因为数据包过大。你有可能被禁人塔、禁人书等造成的大量数据阻塞在服务器外。

解决方法：使用离线登录，更换游戏 ID，如果问题消失，则代表你受到了禁人塔或禁人书的限制。该原因造成的问题暂时无解。

## Internal Exception: io.netty.handler.codec.DecoderException: java.lang.IndexOutOfBoundsException

原因：Mod 导致错误。

解决方法：逐个禁用 Mod，并检查问题是否仍然存在。
