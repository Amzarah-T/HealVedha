export const isEmptyString = (data) => {
    return (
        data === '' || 
        data === undefined || 
        data === null
    );
}

export const getImage = (image, prefix) => {
    if (image?.startsWith('http')) {
        return isEmptyString(image) ? 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1' : image;
    } else {
        if (image) {
            return prefix + image;
        } else {
            return 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1'
        }
    }
}