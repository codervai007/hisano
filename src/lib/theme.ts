// Kept out of the client component so the server layout can read the string.
export const THEME_KEY = "hisano-theme";

/**
 * Runs in <head> before the page paints, so a visitor who chose dark mode
 * never sees a flash of the light theme. Light is the default.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;
