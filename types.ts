 export interface Rating {
    }

    export interface Subscription {
    }

    export interface Petsdeli {
        uid: string;
    }

    export interface Accentuate {
        ribbonText1: string;
        ribbonColor: string;
        subTitle: string;
        mainTitle: string;
    }

    export interface Metadata {
        rating: Rating;
        subscription: Subscription;
        petsdeli: Petsdeli;
        accentuate: Accentuate;
    }

    export interface Image {
        alt?: any;
        src: string;
    }

    export interface PriceV2 {
        currencyCode: string;
        amount: string;
    }

    export interface Variant {
        availableForSale: boolean;
        image: Image;
        weight: number;
        id: number;
        title: string;
        sku: string;
        priceV2: PriceV2;
        weightUnit: string;
    }

    export interface Image2 {
        alt?: any;
        src: string;
    }

    export interface Product {
        metadata: Metadata;
        handle: string;
        productType: string;
        variants: Variant[];
        _updatedAt: number;
        createdAt: Date;
        image: Image2;
        availableForSale: boolean;
        sk: string;
        pk: string;
        id: number;
        tags: string[];
        title: string;
    }
