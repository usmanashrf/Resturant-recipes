import { BLOCKS } from '@contentful/rich-text-types';

interface Recipe {
    sys: Sys;
    total: number;
    skip: number;
    limit: number;
    items: RecipeItem[];
    includes: RecipeIncludes;
  }
  
  interface RecipeIncludes {
    Entry: RecipeEntry[];
    Asset: RecipeAsset[];
  }
  
  interface RecipeAsset {
    metadata: RecipeMetadata;
    sys: RecipeSys4;
    fields: RecipeFields3;
  }
  
  interface RecipeFields3 {
    title: string;
    description: string;
    file: RecipeFile;
  }
  
  interface RecipeFile {
    url: string;
    details: RecipeDetails;
    fileName: string;
    contentType: string;
  }
  
  interface RecipeDetails {
    size: number;
    image: RecipeImage;
  }
  
  interface RecipeImage {
    width: number;
    height: number;
  }
  
  interface RecipeSys4 {
    space: RecipeSpace;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: RecipeSpace;
    revision: number;
    locale: string;
  }
  
  interface RecipeEntry {
    metadata: RecipeMetadata;
    sys: RecipeSys3;
    fields: RecipeFields2;
  }
  
  interface RecipeFields2 {
    meal: string[];
  }
  
  interface RecipeItem {
    metadata: RecipeMetadata;
    sys: RecipeSys3;
    fields: RecipeFields;
  }
  
  interface RecipeFields {
    recipeName: string;
    recipeDescription: RecipeDescription;
    ingredients: string[];
    recipeImage: RecipeSpace;
    category: RecipeSpace;
    price: string;
  }
  
  interface RecipeDescription {
    data: RecipeData;
    content: RecipeContent4[];
    nodeType: typeof BLOCKS.DOCUMENT;
  }
  
  interface RecipeContent4 {
    data: RecipeData;
    content: RecipeContent3[];
    nodeType: string;
  }
  
  interface RecipeContent3 {
    data: RecipeData;
    marks?: RecipeSys[][];
    value?: string;
    nodeType: string;
    content?: RecipeContent2[];
  }
  
  interface RecipeContent2 {
    data: RecipeData;
    content: RecipeContent[];
    nodeType: string;
  }
  
  interface RecipeContent {
    data: RecipeData;
    marks: any[];
    value: string;
    nodeType: string;
  }
  
  interface RecipeData {
  }
  
  interface RecipeSys3 {
    space: RecipeSpace;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: RecipeSpace;
    revision: number;
    contentType: RecipeSpace;
    locale: string;
  }
  
  interface RecipeSpace {
    sys: RecipeSys2;
  }
  
  interface RecipeSys2 {
    type: string;
    linkType: string;
    id: string;
  }
  
  interface RecipeMetadata {
    tags: any[];
  }
  
  interface RecipeSys {
    type: string;
  }