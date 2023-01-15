import {menu_item_type} from "./menu.interface";

const large_menu_data_ru:menu_item_type[] = [
    {alias: 'about', item: 'О нас', url: '/about'},
    {alias: 'news', item: 'Новости', url: '/news'},
    {alias: 'admissions', item: 'Форумы', url: '/forums'},
    {alias: 'docs', item: 'Документы', url: '/docs'},
    {alias: 'accreditation', item: 'Аккредитация', url: '/accreditation'},
    {alias: 'gallery', item: 'Галерея', url: '/gallery'},
    {alias: 'glory_board', item: 'Доска почета', url:'/glory_board'},
    {alias: 'template', item: 'Расписание', url: '/template'},
    {alias: 'notifications', item: 'Уведомление', url: '/notifications'},
    {alias: 'sitemap', item: 'Карта сайта', url: '/site-map'},
    {alias: 'Login', item: 'Вход в аккаунт', url: '/login'}
];

const large_menu_data_kg:menu_item_type[] = [
    {alias: 'about', item: 'Биз тууралуу', url: '/about'},
    {alias: 'news', item: 'Жанылыктар', url: '/news'},
    {alias: 'admissions', item: 'Форумдар', url: '/forums'},
    {alias: 'docs', item: 'Документтер', url: '/docs'},
    {alias: 'accreditation', item: 'Аккредитация', url: '/accreditation'},
    {alias: 'gallery', item: 'Галерея', url: '/gallery'},
    {alias: 'glory_board', item: 'Ардак тактасы', url:'/glory_board'},
    {alias: 'timetable', item: 'Расписание', url: '/timetable'},
    {alias: 'notifications', item: 'Кулактандыруулар', url: '/notifications'},
    {alias: 'sitemap', item: 'Тиркеме картасы', url: '/site-map'},
    {alias: 'Login', item: 'Аккаунтка кируу', url: '/login'}
];

export const large_menu = (len:string):menu_item_type[]=>{
    if(len == 'ru'){
        return large_menu_data_ru;
    }else if(len == 'kg'){
        return large_menu_data_kg;
    }else{
        return [];
    }
}