import {homeRouter} from './modules/home'
import HomeComponent from './component/home'

export const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/books',
        component: HomeComponent,
        children: [...homeRouter]
    }
]