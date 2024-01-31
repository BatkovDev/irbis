import AbstractView from "./View.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Настройки профиля | Irbis");
    }

    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}