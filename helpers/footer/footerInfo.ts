
export enum lenType{
    ru='ru',
    kg='kg'
}

const footerMenuRu = [
        {item: 'item1', url: '/#'},
        {item: 'item2', url: '/#'},
        {item: 'item3', url: '/#'},
        {item: 'icon', url: '/#'},
        {item: 'item5', url: '/#'},
        {item: 'item6', url: '/#'},
        {item: 'item7', url: '/#'},
    ]

const footerMenuKg = [
        {item: 'icon1', url: '/#'},
        {item: 'item2', url: '/#'},
        {item: 'item3', url: '/#'},
        {item: 'icon', url: '/#'},
        {item: 'item5', url: '/#'},
        {item: 'item6', url: '/#'},
        {item: 'item7', url: '/#'},
    ]

const footerIcons = [
    {icon: 'google', url: '/#'},
    {icon: 'telegram', url: '/#'},
    {icon: 'whatsapp', url: '/#'},
    {icon: 'tiktok', url: '/#'},
    {icon: 'facebook', url: '/#'},
    {icon: 'instagram', url: '/#'},
    {icon: 'twogis', url: '/#'}
]

export const footerInfo = (len: string)=>{
    switch (len){
        case 'ru':
            return {
                menu: footerMenuRu,
                icons: footerIcons,
                location: 'Кыргызстын, обл. Джалал-Абад, р. Аксы, село. Кызыл-Туу',
                organizationName: '№18 Э. Арстанбаев'
            }
            break;
        case 'kg':
            return {
                menu: footerMenuKg,
                icons: footerIcons,
                location: 'Кыргызстын, обл. Жалал-Абад, р. Аксы, айыл. Кызыл-Туу',
                organizationName: '№18 Э. Арстанбаев'
            }
            break;
        default:
            return {};
    }
}