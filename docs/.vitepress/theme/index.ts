import DefaultTheme from 'vitepress/theme'
import "../../../src/styles/index.css"
import type{Theme} from 'vitepress'
import {LumoUI} from '../../../src/index'
export default{
  extends:DefaultTheme,
  enhanceApp({app}){
    app.use(LumoUI)
  }
}