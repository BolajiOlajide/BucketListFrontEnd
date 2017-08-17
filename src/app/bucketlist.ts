// create an interface for making the Bucketlists strongly typed.
// follow the naming convention of interfaces having an "I" prefix before the name
// of the interface.


import { IItem } from "app/item";

export interface IBucketlist {
    id: number;
    name: string;
    items: IItem[];
    date_created: any;
    date_modified: any;
}
