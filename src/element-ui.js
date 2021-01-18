import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import {
  Row,
  Col,
  Input,
  Button,
  Select,
  Option,
  OptionGroup,
  Menu,
  Submenu,
  MenuItem,
  Message,
  Loading,
  Carousel,
  CarouselItem,
  Form,
  FormItem,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Loading.directive)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
