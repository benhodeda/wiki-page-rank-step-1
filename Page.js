module.exports = class Page {
    constructor(url) {
        this.url = url;
        this.follows = [];
        this.followers = [];
    }
};