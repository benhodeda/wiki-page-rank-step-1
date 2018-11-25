const Graph = require('./Graph');
const Page = require('./Page');

function main() {

    const root = new Page();
    const a = new Page('url1');
    const b = new Page('url2');
    const c = new Page('url3');
    const d = new Page('url4');
    const e = new Page('url5');
    const f = new Page('url6');

    a.followers = [b, c, d, e, f];
    b.followers = [a];
    c.followers = [a];
    d.followers = [a];
    e.followers = [a];
    f.followers = [a];

    a.follows = [b, c, d, e, f];
    b.follows = [a];
    c.follows = [a];
    d.follows = [a];
    e.follows = [a];
    f.follows = [a];

    const allPages = [a, b, c, d, e, f];
    const g = { root, level: 1, allPages };

    const graph = new Graph(g);

    const it = graph.pageRank();

    console.info(it.next());
    console.info(it.next());
    console.info(it.next());
    console.info(it.next());
    console.info(it.next());
    console.info(it.next());
    console.info(it.next());
    console.info(it.next());
}

main();