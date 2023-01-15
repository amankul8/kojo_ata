import {menu_item_type} from "./menu.interface";

const short_menu_data_ru:menu_item_type[] = [
    {alias: 'about', item: 'О нас', url: '/about'},
    {alias: 'news', item: 'Новости', url: '/news'},
    {alias: 'admissions', item: 'Прием ученика', url: '/admissions'},
];


const short_menu_data_kg:menu_item_type[] = [
    {alias: 'about', item: 'Биз тууралуу', url: '/about'},
    {alias: 'news', item: 'Жанылыктар', url: '/news'},
    {alias: 'admissions', item: 'Форумдар', url: '/forums'},
];

export const short_menu = (len:string):menu_item_type[]=>{
    if(len == 'ru'){
        return short_menu_data_ru;
    }else if(len == 'kg'){
        return short_menu_data_kg;
    }else{
        return [];
    }
}

