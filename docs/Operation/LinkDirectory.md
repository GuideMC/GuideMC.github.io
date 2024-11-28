# 利用软连接在不同版本之间共享目录

为了解决开启版本隔离后，不同版本的资源包 / 光影等互相隔离的问题，我们可以利用软链接把这些目录在不同版本之间进行共享，从而解决这个问题。

:::warn
请先对软连接有所了解，再使用此命令
:::

## Windows

> 本方法适用于 Windows Vista 以后版本

假设有两个版本分别为版本 A 与版本 B，希望共享它们的存档

1. 找到它们的存档文件夹，分别为 `~/versions/A/saves` 与 `~/versions/B/saves`
2. 将 `B/saves` 中的文件全部移至 `A/saves` 中，并删除 `B/saves`
3. 打开命令提示符输入以下命令即可完成软链接：

```shell
mklink /J "~/.minecraft/versions/B/saves" "~/.minecraft/versions/A/saves"
```

如需互通其它文件夹，请依照上述步骤自行操作
