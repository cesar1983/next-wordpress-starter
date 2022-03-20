import { useContext, createContext } from 'react';

import config from '../../package.json';

import { removeLastTrailingSlash } from 'lib/util';

export const SiteContext = createContext();

/**
 * @param {*} data
 * @returns useSiteContext hook
 */
export function useSiteContext(data) {
  let { homepage = '' } = config;

  // Trim the trailing slash from the end of homepage to avoid
  // double // issues throughout the metadata

  homepage = removeLastTrailingSlash(homepage);

  return {
    ...data,
    homepage,
  };
}

/**
 * @returns useSite hook
 */
export default function useSite() {
  const site = useContext(SiteContext);
  return site;
}
