# 第三方登录配置

::: danger ⚠️ 这并不能代替正版
第三方登录并不能用于进入正版服务器。

请始终考虑购买正版的 Minecraft。
:::

::: tip 关于第三方验证服务
第三方验证服务（如 LittleSkin）是一个 Minecraft 皮肤站，提供外置登录服务，被一些服务器使用。
:::

## 使用场景

- 如果您想用于联机，那么联机加入者必须是正版或第三方登录，对房主则无要求。
- 如果您想在多人游戏中展示您的皮肤，请保证所有参与联机的成员均使用相同的第三方验证服务。

## 启动器特定配置方法

以下是各个启动器的具体配置方法，请根据您使用的启动器选择对应内容：

::: details BakaXL

### 设置方法

1. 前往第三方验证服务（如 LittleSkin）注册一个账号。
2. 进入控制面板，添加角色（游戏中的用户名）。
3. 在 BakaXL 中，前往 `本体设置` > `账户与档案` > `新增一个档案`。
4. 选择第三方登录（Authlib-Injector）。
5. 输入验证服务器地址和账号信息。

:::

::: details HMCL

### 离线模式下更换皮肤

#### 本地皮肤图片文件

点击 **本地皮肤图片文件**，设置 **皮肤/披风**皮肤图片路径，点击 **确认**，即可。

#### LittleSkin

1. 首先您需要一个 LittleSkin 的账号，[注册](https://littleskin.cn/auth/register)并[登录](https://littleskin.cn/auth/login)。
2. 前往 [角色管理](https://littleskin.cn/user/player)，查看您的角色名，如果没有，请点击 **添加新角色** 进行添加。
3. 在HMCL中创建的离线账户的账户名 **必须**和角色名相等。
4. 点击 **LittleSkin** 即可同步在LittleSkin上此账户名的皮肤。

:::

::: details PCL

### 设置方法

1. 前往第三方验证服务注册一个账号。
2. 进入控制面板，添加角色（游戏中的用户名）。
3. 打开 PCL，点击左下角的 "版本选择"。
4. 右键点击将要启动的游戏版本。
5. 点击左侧 "设置" 选项。
6. 在"服务器选项"中把登录方式设为 "第三方登录：Authlib Injector 或 LittleSkin"。
7. 点击下方 "设置为 LittleSkin" 按钮。
8. 返回主页并输入账号，点击 "启动游戏" 即可。

:::

## 常见第三方验证服务

### LittleSkin

- 网址：[https://littleskin.cn](https://littleskin.cn)
- API 地址：`https://littleskin.cn/api/yggdrasil`

### 其他皮肤站

大多数基于 Blessing Skin 的皮肤站都支持 Authlib-Injector 验证。

## 故障排除

### 无法登录

1. 检查用户名和密码是否正确
2. 确认验证服务器地址是否正确
3. 检查网络连接

### 皮肤不显示

1. 确保所有玩家使用相同的验证服务
2. 检查皮肤站的皮肤设置
3. 考虑安装 CustomSkinLoader 模组