let imageId = 0

export const addImg = (imgUrl, userId) => ({
    type: "ADD_IMG",
    payload: { imgUrl, userId, imageId: ++imageId }
})