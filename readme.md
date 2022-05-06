# siroi-face 不那么聪明的人脸检测

对电脑摄像头采集到的视频流进行人脸检测，并进行裁剪。

## 引入

### 1. 本地引入

下载dist中`mian.js`进行引入

### 2. CDN引入

```html
<script scr='https://cdn.jsdelivr.net/gh/Gao-pw/siroi-face@latest/dist/main.js'></script>
```

## api

`SiroiFace.Face(video)` 类中包含如下方法

1. `init()`

   初始化，加载模型并启用摄像头

1. `draw()`

   人脸检测并进行裁剪，返回canvas对象

2. `createPicture()`

   将canvas对象转换为base64对象，可以进行页面加载，也可以将其传递到后端服务器进行识别等后续操作

## example

见`dist/index.html`

页面执行的功能是对视频流每隔1s进行一次人脸检测，并将人脸绘制到页面上

