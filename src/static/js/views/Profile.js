import AbstractView from "./View.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.id = params.userProfileID;
        this.setTitle("Erasyl Yesimov");
    }

    async getHtml() {
        document.querySelector('.sidebar').classList.remove('active');
        return `
            <div class="main-content" id="profile">
                <div class="profile-content">
                    <div class="profile-banner">
                        <img src="static/assets/img/banner.jpg">
                    </div>
                    <ul class="nav-media">
                        <li class="media-tab active">Записи</li>
                        <li class="media-tab">Фотографии</li>
                        <li class="media-tab">Видео</li>
                    </ul>

                    <div class="media-tab__content">
                        <h2 class="media-tab-title">Все записи</h2>
                        <div class="media-tab-grid posts-design" id="posts">
                            <div class="post post-create">
                                <div class="title">Создайте новую публикацию</div>
                                <div class="wrap">
                                    <img src="static/assets/img/ava2.jpg" class="account-avatar">
                                    <span class="placeholder-input">Напишите что-нибудь...</span>
                                    <div class="media">
                                        <i class="bi bi-image"></i>
                                        <i class="bi bi-film"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="post">
                                <div class="post-details">
                                    <div class="author">
                                        <img src="static/assets/img/ava2.jpg" class="account-avatar">
                                        <div class="author-info">
                                            <div class="name">Erasyl Yessimov</div>
                                            <div class="id">@${this.id}</div>
                                        </div>
                                    </div>
                                    <div class="date">5 дн.</div>
                                    <div class="more-detail"><i class="bi bi-three-dots-vertical"></i></div>
                                </div>
                                <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod deleniti beatae sed animi.</div>
                                <div class="thumbnails">
                                    <figure class="thumbnail-item">
                                        <img src="static/assets/img/image1.jpg" class="thumbnail">
                                    </figure>
                                </div>
                                <div class="post--wrap">
                                    <div class="pwrap__likes">
                                        <i class="bi bi-heart-fill"></i>
                                        <span>13</span>
                                    </div>
                                    <div class="pwrap__comments">
                                        <i class="bi bi-chat-right-dots-fill"></i>
                                        <span>2</span>
                                    </div>
                                    <div class="pwrap__views">
                                        <i class="bi bi-eye-fill"></i>
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                            <div class="post">
                                <div class="post-details">
                                    <div class="author">
                                        <img src="static/assets/img/ava2.jpg" class="account-avatar">
                                        <div class="author-info">
                                            <div class="name">Erasyl Yessimov</div>
                                            <div class="id">@${this.id}</div>
                                        </div>
                                    </div>
                                    <div class="date">5 дн.</div>
                                    <div class="more-detail"><i class="bi bi-three-dots-vertical"></i></div>
                                </div>
                                <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod deleniti beatae sed animi.</div>
                                <div class="post--wrap">
                                    <div class="pwrap__likes">
                                        <i class="bi bi-heart-fill"></i>
                                        <span>13</span>
                                    </div>
                                    <div class="pwrap__comments">
                                        <i class="bi bi-chat-right-dots-fill"></i>
                                        <span>2</span>
                                    </div>
                                    <div class="pwrap__views">
                                        <i class="bi bi-eye-fill"></i>
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-aside">
                    <div class="banner-peace">
                        <div class="profile-avatar">
                            <img src="static/assets/img/ava2.jpg" class="account-avatar">
                        </div>
                        <div class="banner-peace-info">
                            <h1 class="username">Erasyl Yessimov</h1>
                            <h2 class="user_id"><span>@${this.id}</span> • <span class="online">В сети</span></h2>
                        </div>
                        <div class="banner-peace-actions">
                            <button type="button" class="action-item"><i class="bi bi-exclamation-circle"></i> Информация об аккаунте</button>
                        </div>
                    </div>
                    <div class="profile-total-actions">
                        <button type="button" class="action-item">Сообщение</button>
                        <button type="button" class="action-item" id="add-friend">Добавить в друзья</button>
                    </div>
                    <div class="profile-description">
                        <div class="profile-description-item excerpt">
                            <i class="bi bi-quote"></i>
                            <p>
                                Код - как черно-белые ноты на пианино...?
                            </p>
                        </div>
                        <div class="profile-description-item full">
                            <i class="bi bi-text-paragraph"></i>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Consectetur nobis iure quas magni facere fuga earum placeat enim corporis ipsam possimus iusto eaque tempora molestias sed, nam accusantium? Consequatur, laborum nobis hic, exercitationem odio asperiores culpa illum recusandae repellat a beatae vel vitae fuga. Et possimus suscipit quia maiores iste!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}