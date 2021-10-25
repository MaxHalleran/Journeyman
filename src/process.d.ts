/// <reference types="node" />

// Target the module containing the `ProcessEnv` interface
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
declare namespace NodeJS
{

    interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'staging' | 'test';
    readonly PUBLIC_URL: string;
	readonly DATABASE_URL: string;
	readonly USER: string;
	readonly TOKEN_SECRET: string;
  }
}