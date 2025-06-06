# Scripts 说明

这个目录包含了项目的构建和发布脚本。

## 📦 Release 构建脚本

### 使用方法

```bash
# 执行完整的release构建
pnpm run release

# 或者分步执行
pnpm run release:build   # 仅构建项目
pnpm run release:copy    # 仅复制构建产物
```

### 脚本说明

#### `release.js`
主release脚本，执行完整的构建和打包流程：

1. 清理旧的release目录
2. 构建 `vod-ai-outline-logic` 和 `vod-ai-outline-ui`
3. 复制构建产物到release目录
4. 生成版本信息文件

#### `copy-release.js`
复制构建产物的脚本：

1. 复制两个包的构建产物（dist目录）
2. 复制包的配置文件（package.json、README.md）
3. 复制demo项目（排除node_modules）
4. 复制项目根目录的重要文件
5. 生成release说明文件

### 输出结构

执行完成后，会在项目根目录生成 `release/` 目录：

```
release/
├── vod-ai-outline-logic/           # Logic包构建产物
│   ├── index.js                    # UMD格式
│   ├── index.mjs                   # ES Module格式
│   ├── package.json
│   └── README.md
├── vod-ai-outline-ui/              # UI包构建产物
│   ├── index.umd.js                # UMD格式JavaScript
│   ├── index.es.js                 # ES Module格式
│   ├── style.css                   # 样式文件
│   ├── package.json
│   └── README.md
├── vod-ai-outline-demo/            # 演示项目
│   ├── index.html
│   ├── server.js
│   ├── package.json
│   └── ...
├── version.json                    # 版本信息
├── RELEASE_NOTES.md               # Release说明
├── README.md                      # 项目说明
└── package.json                   # 项目配置
```

### 注意事项

1. 确保在项目根目录执行命令
2. 执行前会自动清理旧的release目录
3. 构建失败时脚本会自动退出
4. release目录已添加到.gitignore中 