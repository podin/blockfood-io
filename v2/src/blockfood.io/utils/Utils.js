export const cleanUrl = (url) => url.replace(/\\/g, '/')

export const getScrollValue = () => Math.max(0, document.documentElement.scrollTop || document.body.scrollTop)