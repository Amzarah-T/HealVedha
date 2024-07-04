export const isEmptyString = (data) => {
    return (
        data === '' || 
        data === undefined || 
        data === null
    );
}

export const getImage = (image) => {
    console.log('image data', image)
    return isEmptyString(image) ? 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1' : image;
}