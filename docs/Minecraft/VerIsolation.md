# 版本隔离

## 什么是版本隔离

顾名思义，版本隔离即为将版本隔离为独立的个体。

- 版本隔离实际操作为指定游戏目录，是游戏本身所具有的功能，开启后不会对游戏产生影响。
- 开启版本隔离后会把除 *`assets`*和*`libraries`* 等文件夹之外的内容放到指定的目录。
- 不开启版本隔离时游戏本体存储在 *`.minecraft`* 目录中。
- 开启版本隔离后游戏本体存储在 *`.minecraft/version/`*目录中。
  - （其中包括*`.minecraft`* 目录下 *`saves`*（游戏存档），*`mods`*（模组），*`resources`*（资源包），*`shaderpacks`*（光影包）等文件夹）。

因此，开启版本隔离后，你可以**启动多个含加载器的版本，且其模组，资源包，光影，存档，数据包等不影响其他版本**。

## 为什么需要版本隔离

当希望存在多个含加载器的不同版本时，由于不同版本的模组之间会存在冲突，因此需要开启版本隔离。

## 使用方式

```plaintext
.minecraft
|*asstes
|*libraries
|*versions
    \1.16.5-optifine
        |1.16.5-optifine.jar
        |*saves
        |*resourcepacks
        |*logs
        |*mods
        |*config
        ......
```
