import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface MenuNavbarItem {
    id: number;
    selected: boolean;
    title: string;
    subtitle: string;
    icon: IconDefinition;
}

export interface MenuItem {
    id: number;
    imageUrl: string;
    description: string;
    title: string;
    price: string;
}