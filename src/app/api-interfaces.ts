export interface RestaurantListItem {
    "id": number,
    "name": string,
    "address1": string,
    "address2": string,
    "latitude": number,
    "longitude": number
}

export interface MenuItem {
    "id": number,
    "category": string,
    "name": string,
    "topping": string[],
    "price": number,
    "rank": number
}

export interface Order {
    orderId: number;
    totalPrice: number;
    orderedAt: string;
    estimatedDelivery: string;
    status: string;
}

export interface CartItem {
    menuItemId: number;
    quantity: number;
}