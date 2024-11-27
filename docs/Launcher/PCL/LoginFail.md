## 该帮助页面还需要根据规范重新整理格式，优化排版与文案。如果你感兴趣也可以来帮帮忙！

### 图片备份
- [图片备份1](https://github.com/WTP016-CN/Image_for_PCL2Help/tree/MSA-Login)
- [图片备份2](https://github.com/Dongyifengs/PCLCDN)

### 问题出现分类讨论
1. 一直卡在正在加载的界面。
2. 可以正常打开登录页面，但是登录时弹出 "发生错误，请重试" 的窗口，或弹出 "哎呀，出错了" 的提示。

### 第一种问题解决方案
1. 在任务栏上找到对应网络状态的图标，右键点击此图标后，点击 "网络和 Internet 设置"。
   ![网络和 Internet 设置](https://i0.hdslb.com/bfs/new_dyn/5b1b2b6a21c158cbc15eb93cfb687c0e558830935.png@.webp)
2. Win10: 转到 "状态" 页面并点击 "更改适配器设置"。  
   Win11: 点击 "高级网络设置" 后点击下方的 "更多网络适配器选项"。
   ![更改适配器设置](https://i0.hdslb.com/bfs/article/e288e246fe5d2bf9a1ab6334e900b215565437509.png)
   ![更多网络适配器选项](https://i0.hdslb.com/bfs/article/49160edf12a0dda275aeb0e92943f606565437509.png)
3. 右键点击您目前正在连接的网络（一般为 "以太网" 或 "WLAN"），点击属性。
   ![网络属性](https://i0.hdslb.com/bfs/article/429bb4224a7b2bcf72175dd348b583a7565437509.png)
   ![网络设置](https://i0.hdslb.com/bfs/new_dyn/0f7ffd50c89b150ae54a4641bf351c29558830935.png@.webp)
4. 双击 "Internet 协议版本 4 (TCP/IPv4)"，点击使用下面的 DNS 服务器地址，在 "首选 DNS 服务器" 内填写 "223.5.5.5"，在 "备用 DNS 服务器" 内填写 "223.6.6.6" 并保存。
   ![DNS 设置](https://i0.hdslb.com/bfs/article/632b250960430074f87fe4b5977c9b23565437509.png)
5. 按住键盘上的 Windows 键 + R 键，输入 "ipconfig /flushdns" 以刷新 DNS 缓存，接着再次进入 PCL 启动游戏即可正常登录。

### 第二种问题解决方案
1. 打开手机的移动热点功能，电脑连接热点。
2. 按下键盘上的 Windows + R 键，打开运行界面，输入 services.msc 打开服务管理程序。
   ![服务管理程序](https://i0.hdslb.com/bfs/article/f8150609ad06388d29711a5702e7324e565437509.png)
3. 找到 "Microsoft (R) 诊断中心标准收集器服务"，右键点击属性，改成手动，开启服务。
   ![Microsoft (R) 诊断中心标准收集器服务](https://i0.hdslb.com/bfs/article/8a80550abd6323810eb96ecaf6a85270565437509.png)
4. 在任务栏上找到对应网络状态的图标，右键点击此图标后，点击 "网络和 Internet 设置"。
   ![网络和 Internet 设置](https://i0.hdslb.com/bfs/article/30ab861f842066f36639b3cf26dd57ae565437509.png)
5. Win10: 转到 "状态" 页面并点击 "更改适配器设置"。  
   Win11: 点击 "高级网络设置" 后点击下方的 "更多网络适配器选项"。
   ![更改适配器设置](https://i0.hdslb.com/bfs/article/e288e246fe5d2bf9a1ab6334e900b215565437509.png)
   ![更多网络适配器选项](https://i0.hdslb.com/bfs/article/49160edf12a0dda275aeb0e92943f606565437509.png)
6. 右键点击您目前正在连接的网络（一般为 "以太网" 或 "WLAN"），点击属性。
   ![网络属性](https://i0.hdslb.com/bfs/article/429bb4224a7b2bcf72175dd348b583a7565437509.png)
7. 双击 "Internet 协议版本 4 (TCP/IPv4)"，点击使用下面的 DNS 服务器地址，在 "首选 DNS 服务器" 内填写 "223.5.5.5"，在 "备用 DNS 服务器" 内填写 "223.6.6.6" 并保存。
   ![DNS 设置](https://i0.hdslb.com/bfs/article/632b250960430074f87fe4b5977c9b23565437509.png)
8. 按住键盘上的 Windows 键 + R 键，输入 "ipconfig /flushdns" 以刷新 DNS 缓存，接着再次进入 PCL 启动游戏即可正常登录。
   ![刷新 DNS 缓存](https://i0.hdslb.com/bfs/article/632b250960430074f87fe4b5977c9b23565437509.png)

