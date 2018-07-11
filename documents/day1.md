## 画面の作成


```
$ vue init nuxt-community/starter-template my-app
```

element.ui のインストールを行う。

https://element.eleme.io/#/en-US/component/quickstart

```
$ npm i element-ui -S
```

プラグインの作成

`plugins/element-ui.js`

```
import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.use(Element, { locale })
}
```

nuxt.config.js

```
module.exports = {
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '@/plugins/element-ui'
  ]
}
```

Github api 

https://developer.github.com/v3/auth/

```
$ npm i axios 

```
