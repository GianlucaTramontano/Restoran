export interface TeamMember {
    id: number;
    fullName: string;
    designation: string;
    imageUrl: string;
    socialLinks: SocialLink[];
}

export interface SocialLink {
    id: number;
    url: string;
    icon: string;
}