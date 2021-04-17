export const addComment = (imgId, userId,Comment) => ({
    type: "ADD_Comment",
    payload: { imgId, userId, Comment }
})