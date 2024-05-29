# 快速安装

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```javascript
// main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Muui from 'mvhui'

const app = createApp(App)
app.use(Muui)
app.mount('#app')
```

### 按需导入

自动导入