export interface Product {
    id: number;
    documentId:string;
    description:string;
    instantDelivery:boolean;
    title: string;
    category: string;
    price: number;
    img: {
        url: string;
    }
}