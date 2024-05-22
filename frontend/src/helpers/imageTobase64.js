const imageTobase64 = async (image) => {
    if (!(image instanceof Blob)) {
        throw new TypeError("Parameter is not of type 'Blob'");
    }

    const reader = new FileReader();
    reader.readAsDataURL(image);

    const data = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    return data;
}

export default imageTobase64;
