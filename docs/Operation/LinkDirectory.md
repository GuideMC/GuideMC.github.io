# 利用软连接共享不同版本目录

## 这是用来干什么的

开启版本隔离后，某些玩家可能会觉得，不同版本的资源包，光影，存档互相隔离不方便，下面提供了一种可行的解决方案。

## Windows

> 本方法适用于 Windows Vista 及以后版本的 Windows 操作系统。

假设有两个版本分别为 A 与 B ，希望将其存档互通，

1. 找到两个版本的存档文件夹，目录分别为 *`~/.minecraft/versions/A/saves`* 与  *`~/.minecraft/versions/B/saves`*；
2. 将B存档文件夹中的文件全部移至A存档文件夹，并删除B存档文件夹；
3. 打开命令提示符（CMD）输入：

```shell
mklink /J "~/.minecraft/versions/B/saves" "~/.minecraft/versions/A/saves"
```

这将建立一个由 A 存档目录指向 B 存档目录的软链接；

此时无论打开 A 还是 B 版本，都可看见互通的存档。

材质、光影、Mod 文件夹的同步以此类推。
