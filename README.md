# Flow2Act project page

Flow2Act: Learning to Act through Geometrically Grounded Motion Anticipation

静态项目页，仿照 [RynnWorld-Latent](https://github.com/alibaba-damo-academy/RynnWorld-Latent.github.io) 的蓝紫渐变标题、亮/暗主题、玻璃面板及圆角视频区。保留模板来源署名；没有沿用对方的作者、机构、科研内容或素材。

页面包含项目 demo、论文摘要、三条贡献、Task 1–9 真机录像对比和三张仿真结果表。真机视频共用一个播放进度条，左侧是 π₀.₅（Stack Blocks 为 GR00T），右侧是 Flow2Act 的成功录像。两侧保留原速，较短的一侧结束后停在最后一帧。

## 本地预览

在本目录执行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

浏览器打开 <http://127.0.0.1:8000>。也可直接打开 `index.html`。

## 文件

- `index.html`：页面结构与项目内容。
- `assets/css/style.css`：页面样式和移动端适配。
- `assets/js/main.js`：自动/亮色/暗色主题切换，保存用户偏好。
- `assets/videos/Flow2Act-demo.mp4`：H.264/AAC 网页播放版本，支持 faststart。
- `assets/images/demo-poster.jpg`：从新版 demo 第 3 秒提取的封面。
- `assets/videos/real-world/`：9 组真机对比 MP4 及封面。

实验表格取自论文 PDF 的 Table 12（LIBERO）、Table 13（LIBERO-Plus）和 Table 3（RoboTwin 2.0）。

原始视频：`/Users/ricardo/Documents/AI/CVPR2027-FlowForcing/可视化图/Flow2Act-demo.m4v`。原文件保留在原目录，网页使用压缩后的 MP4，不依赖这个绝对路径。

## 更新视频

在本目录执行以下命令。`-y` 会替换当前网页视频：

```sh
ffmpeg -y -i '/Users/ricardo/Documents/AI/CVPR2027-FlowForcing/可视化图/Flow2Act-demo.m4v' \
  -map 0:v:0 -map '0:a?' -c:v libx264 -preset fast -crf 23 \
  -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart -map_metadata -1 \
  assets/videos/Flow2Act-demo.mp4
```

## GitHub Pages

将此目录内容上传到自己的 `Flow2Act.github.io` 仓库，进入 **Settings → Pages → Deploy from a branch**，选择实际使用的分支与 `/(root)`。页面使用相对资源路径，支持 GitHub Pages 项目子路径。没有自动创建远端仓库或发布。

这是项目仓库名时，默认访问路径通常为 `https://<GitHub用户名>.github.io/Flow2Act.github.io/`，不自动获得 `https://Flow2Act.github.io/` 独立域名。
