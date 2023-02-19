export const navigateTo = (url: string): void => {
    window.location.href= url;
}

export const isValidEmail = (email: string): boolean => {
    const emailWithoutSpace = removeSpacesFromString(email);

    if (!emailWithoutSpace.includes('@')) {
        return false
    }

    const splitedEmailOnAt = emailWithoutSpace.split('@');
    const [textBeforeAt, textAfterAt] = splitedEmailOnAt;

    const splitedTextOnDot = textAfterAt.split('.');
    const [textBeforeDot, textAfterDot] = splitedTextOnDot;

    const hasSpaceOnEmail = emailWithoutSpace !== email;
    if (hasSpaceOnEmail) {
        return false;
    }

    const hasTextBeforeAndAfterAtSymbol = splitedEmailOnAt.length === 2;
    if (!hasTextBeforeAndAfterAtSymbol) {
        return false;
    }

    const hasTextBeforeAndAfterDot = splitedTextOnDot.length === 2;
    if (!hasTextBeforeAndAfterDot) {
        return false;
    }

    if (isEmpty(textBeforeAt)) {
        return false;
    }

    if (isEmpty(textAfterAt)) {
        return false;
    }

    if (isEmpty(textBeforeDot)) {
        return false;
    }

    if (isEmpty(textAfterDot)) {
        return false;
    }

    return true;
}

export const removeSpacesFromString = (data: string): string => {
    return data.replace(/\s/g, '');
}

export const isEmpty = (data: string | Array<string> | any): boolean => {
    if (isString(data) || isArray(data)) {
        return data.length === 0;
    }
    if (isObject(data)) {
        return data.keys() === 0;
    }
    if (isNull(data) || isUndefined(data)) {
        return true;
    }
    return false;
}

export const isString = (data: any): boolean => {
    return typeof data === 'string'
}

export const isNotString = (data: any): boolean => {
    return !isString(data);
}

export const isArray = (data: any): boolean => {
    return Array.isArray(data);
}

export const isObject = (data: any): boolean => {
    return typeof data === 'object' && data !== null;
}

export const isNull = (data: any): boolean => {
    return data === null;
}

export const isUndefined = (data: any): boolean => {
    return data === undefined;
}