import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back, Dom</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut porro doloribus illo temporibus est sunt voluptas maiores delectus reiciendis.</p>
        <p><a href="/posts" data-link>View recent posts</p>
        `;
    }
}
