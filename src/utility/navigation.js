export const getCurrentUrlPathname = (document) => {
    return document.location.pathname.match(/(?<=\/)[a-z]*(?![a-z])/)[0];
}