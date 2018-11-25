const _ = require('lodash');

module.exports = class Graph {




    constructor(graph) {
        this.graph = graph; // {(Page)root, (Number)level, (async method)buildNextLevel, (Page[])allPages}

        this.iteration = 1;
    }

    * pageRank() {
        const matrix = {};
        this.graph.allPages.forEach(page => {
            matrix[page.url] = 1 / this.graph.allPages.length;
            page.rank = matrix[page.url];
        });
        yield matrix;

        while (true) {
            this.graph.allPages.forEach(page => {
                page.prevRank = page.rank;
            });
            this.graph.allPages.forEach(page => {
                page.rank = _.sum(page.followers.map(follower => {
                    return follower.prevRank / follower.follows.length;
                }));
                matrix[page.url] = page.rank;
            });
            yield matrix;
        }
    }
};