declare global {interface Window {dataLayer?:unknown[];gtag?:(...args:unknown[])=>void;clarity?:(...args:unknown[])=>void;}}
export function track(name:string,params:Record<string,string|number>={}){if(typeof window!=='undefined'&&document.cookie.split('; ').includes('analytics_consent=accepted'))window.gtag?.('event',name,params);}
