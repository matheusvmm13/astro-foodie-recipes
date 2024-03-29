/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_GEOAPIFY_API_KEY: string;
    readonly PUBLIC_OPENCAGEDATA_API_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }