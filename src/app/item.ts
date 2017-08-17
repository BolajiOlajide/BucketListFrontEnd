// create an interface for making the Item strongly typed.
// follow the naming convention of interfaces having an "I" prefix before the name
// of the interface.

export interface IItem {
    id: number;
    name: string;
    done: boolean;
    dateCreated: Date;
    dateModified: Date;
}
