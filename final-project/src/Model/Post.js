

class Post {
    constructor(postData) {

        this.id = postData.id;
        this.sid = postData.sid;
        this.userID = postData.userID;
        this.createdAt = postData.createdAt;
        this.isPublic = postData.isPublic;
        this.title = postData.title;
        this.subtitle = postData.subtitle;
        this.imageUrl = postData.imageUrl;
        this.text = postData.text
    }
}

export default Post