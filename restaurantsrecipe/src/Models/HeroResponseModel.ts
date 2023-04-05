interface HeroResponse {
    sys: Sys;
    total: number;
    skip: number;
    limit: number;
    items: HeroItems[];
    includes: Includes;
  }
  
  interface Includes {
    Asset: HeroAsset[];
  }
  
  interface HeroAsset {
    metadata: Metadata;
    sys: Sys4;
    fields: Fields2;
  }
  
  interface Fields2 {
    title: string;
    file: File;
  }
  
  interface File {
    url: string;
    details: Details;
    fileName: string;
    contentType: string;
  }
  
  interface Details {
    size: number;
    image: Image;
  }
  
  interface Image {
    width: number;
    height: number;
  }
  
  interface Sys4 {
    space: Space;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: Space;
    revision: number;
    locale: string;
  }
  
  interface HeroItems {
    metadata: Metadata;
    sys: Sys3;
    fields: Fields;
  }
  
  interface Fields {
    mainHeading: string;
    tagLine: string;
    heroImage: Space;
  }
  
  interface Sys3 {
    space: Space;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: Space;
    revision: number;
    contentType: Space;
    locale: string;
  }
  
  interface Space {
    sys: Sys2;
  }
  
  interface Sys2 {
    type: string;
    linkType: string;
    id: string;
  }
  
  interface Metadata {
    tags: any[];
  }
  
  interface Sys {
    type: string;
  }