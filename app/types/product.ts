export interface Product {
    id: number;
    documentId:string;
    title: string;
    category: string;
    price: number;
    img: {
        url: string;
    }
}