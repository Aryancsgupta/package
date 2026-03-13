import { Application } from 'express';

export interface AutoRoutesOptions {
  /**
   * Root directory to load routes from. (Only needed if first arg is options object)
   */
  dir?: string;
  folder?: string;
  directory?: string;
  
  /**
   * File extensions to load. Default: ['.js', '.mjs', '.cjs', '.ts']
   */
  extensions?: string[];
  
  /**
   * Recursively load routes from nested directories. Default: false
   */
  recursive?: boolean;
  
  /**
   * Base route prefix. Default: ''
   */
  prefix?: string;
  
  /**
   * Custom logger function. Default: console.log
   * Pass null or false to disable logging.
   */
  logger?: ((msg: string) => void) | boolean | null;
  
  /**
   * Ignore errors when loading routes. Default: false
   */
  ignoreErrors?: boolean;
}

/**
 * Automatically load all Express route files from a given folder and register them.
 * 
 * @param app Express Application instance
 * @param folderPath Directory to scan for route files
 * @param options Additional configuration options
 */
declare function autoRoutes(
  app: Application,
  folderPath: string,
  options?: AutoRoutesOptions
): Promise<void>;

/**
 * Automatically load all Express route files from a given folder and register them.
 * 
 * @param app Express Application instance
 * @param options AutoRoutes Options (must include `dir`)
 */
declare function autoRoutes(
  app: Application,
  options: AutoRoutesOptions
): Promise<void>;

export default autoRoutes;
export = autoRoutes;
