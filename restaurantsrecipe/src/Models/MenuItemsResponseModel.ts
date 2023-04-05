interface MenuItems {
    sys: MenuItemsSys;
    total: number;
    skip: number;
    limit: number;
    items: MenuItemsItem[];
    includes: MenuItemsIncludes;
  }
  
  interface MenuItemsIncludes {
    Asset: MenuItemsAsset[];
  }
  
  interface MenuItemsAsset {
    metadata: MenuItemsMetadata;
    sys: MenuItemsSys4;
    fields: MenuItemsFields2;
  }
  
  interface MenuItemsFields2 {
    title: string;
    description: string;
    file: MenuItemsFile;
  }
  
  interface MenuItemsFile {
    url: string;
    details: MenuItemsDetails;
    fileName: string;
    contentType: string;
  }
  
  interface MenuItemsDetails {
    size: number;
    image: Image;
  }
  
  interface MenuItemsImage {
    width: number;
    height: number;
  }
  
  interface MenuItemsSys4 {
    space: MenuItemsSpace;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: MenuItemsSpace;
    revision: number;
    locale: string;
  }
  
  interface MenuItemsItem {
    metadata: Metadata;
    sys: MenuItemsSys3;
    fields: MenuItemsFields;
  }
  
  interface MenuItemsFields {
    title: string;
    bannerImage: MenuItemsSpace;
  }
  
  interface MenuItemsSys3 {
    space: MenuItemsSpace;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: MenuItemsSpace;
    revision: number;
    contentType: MenuItemsSpace;
    locale: string;
  }
  
  interface MenuItemsSpace {
    sys: MenuItemsSys2;
  }
  
  interface MenuItemsSys2 {
    type: string;
    linkType: string;
    id: string;
  }
  
  interface MenuItemsMetadata {
    tags: any[];
  }
  
  interface MenuItemsSys {
    type: string;
  }