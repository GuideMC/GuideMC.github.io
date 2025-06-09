# 离线模式下更换皮肤

**注意：**

> 1. 本文档仅适用于**V3.4.205及以上版本**,不支持 **V3.3.188稳定版本**, 请在 启动器设置→启动器更新 或 设置→通用→启动器更新 中选择 **测试版** 并升级到**V3.4.205及以上版本**  [HMCL下载页面](https://hmcl.huangyuhui.net/download/)
> 2. 使用 默认、Steve、Alex、本地皮肤图片文件: 多人联机下其他玩家无法看到您的皮肤  
> 使用 LittleSkin、Blessing Skin 服务器: 多人联机下和您使用 **相同方式** 的玩家可以看到您的皮肤, 其他玩家不可以
>
> 3. 本文档在v3.4.208参考编写，有可能会的短时性的失效！

打开HMCL, 进入 **账号列表** , 点击下图离线账号的【上传皮肤】红框处:

> 默认: 使用默认随机的皮肤显示
>
> Steve: 使用Steve (史蒂夫) 皮肤显示
>
> Alex: 使用Alex (艾利克斯) 皮肤显示
>
> [本地皮肤图片文件](#本地皮肤图片文件)、[LittleSkin](#littleskin)、[Blessing Skin 服务器](#blessing-skin-服务器): 请见下文↓

## 本地皮肤图片文件

点击 **本地皮肤图片文件** , 设置 **皮肤/披风**皮肤图片 路径, 点击 **确认**, 即可

## LittleSkin

> [!DANGER] ⚠️ 这并不能代替正版
> LittleSkin 登录并不能用于进入正版服务器。
>
> 请始终考虑购买正版的 Minecraft。
> [!TIP] 关于 LittleSkin
> [LittleSkin](https://littleskin.cn)   是一个历史悠久的 Minecraft 皮肤站，拥有庞大的皮肤库，并提供外置登录服务，被众多服务器使用。.
>
> 本文中有关 LittleSkin 的部分内容在 [新手指引 | LittleSkin 用户使用手册](https://manual.littlesk.in/newbee/) 中亦有详细说明。

首先您需要一个 LittleSkin 的账号, [注册](https://littleskin.cn/auth/register)并[登录](https://littleskin.cn/auth/login)

然后前往 [角色管理](https://littleskin.cn/user/player), 查看您的角色名, 如果没有, 请点击 **添加新角色** 进行添加

你可在 [我的衣柜](https://littleskin.cn/user/closet) 修改此账户名的皮肤与披风

在HMCL中创建的离线账户的 账户名 **必须**和角色名相等, 如果不相等, 请 **重新在HMCL中创建离线账户**

确认相等后, 点击 **LittleSkin** 即可同步在LittleSkin上此账户名的皮肤

## Blessing Skin 服务器

**Blessing Skin 服务器, 进入 **角色管理** , 查看角色名 , 确认 **角色名** 和 **HMCL中创建的离线账号角色名** 相同, 如果不相等, **请重新在HMCL中创建离线账户**

你可在 我的衣柜 修改此账户名的皮肤与披风

进入 **配置生成**, 按下图找到 `CustomSkinLoader` 中的网址, 复制到HMCL中即可同步在Blessing Skin 服务器上此账户名的皮肤

> 注意: **V3.4.205**需把链接末尾的 / 去掉, 这个BUG已经在**V3.4.206**修复

## 背景

使用 authlib-injector 认证的服主可以通过本教程提供的方法使 HMCL 默认在打开时弹窗要求创建对应认证服务器的账户。

## 方法

在 HMCL 启动器同级目录下创建 `authlib-injectors.json` 文件，此时文件夹目录结构如下图所示：

（注意，请确保打包后的整合包不包含 `hmcl.json` 文件，否则无法生效。该文件默认为隐藏状态，需开启隐藏文件显示）

`authlib-injectors.json` 文件的示例如下

```json
{
    "urls": [
        "https://example.yggdrasil.yushi.moe/"
    ]
}
```
