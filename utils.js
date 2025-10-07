import crypto from 'crypto' //core
export function attempt(func, ...args) {
    try {
        return [true, func(...args)];
    } catch (e) {
        return [false, e];
    }
}
export function makekey(length = 32) {
    return crypto.randomBytes(length).toString('hex');
}