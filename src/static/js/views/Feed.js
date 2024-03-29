import AbstractView from "./View.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Главная | Irbis");
    }

    async getHtml() {
        document.querySelector('.sidebar').classList.add('active');
        return `
            <div class="main-content" id="feed">
                <div class="feed posts-design">

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
                                    <div class="id">@batkovdev</div>
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
                                    <div class="id">@batkovdev</div>
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
                    <div class="post">
                        <div class="post-details">
                            <div class="author">
                                <img src="static/assets/img/ava2.jpg" class="account-avatar">
                                <div class="author-info">
                                    <div class="name">Erasyl Yessimov</div>
                                    <div class="id">@batkovdev</div>
                                </div>
                            </div>
                            <div class="date">5 дн.</div>
                            <div class="more-detail"><i class="bi bi-three-dots-vertical"></i></div>
                        </div>
                        <div class="content">
                            <input type="checkbox" id="expanded">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, delectus dolorem vero nesciunt eveniet dicta quis asperiores molestiae accusamus velit veritatis nihil consequuntur ipsa illum tempore at harum deleniti et, dolores nisi. Deleniti neque natus blanditiis cum, quos. Officia, adipisci, sunt ipsum minus consequuntur aspernatur explicabo iste corporis assumenda magni illum dolorem distinctio est! Consequuntur quisquam praesentium quis id quaerat, esse aliquid reiciendis facilis magnam minima, magni incidunt a doloremque eligendi omnis, nulla vitae nobis tenetur numquam tempore cum facere. Ipsam, labore doloribus explicabo nesciunt sit quisquam amet optio aut non, eligendi voluptate odio omnis dolor id aliquam eveniet? Maiores quod voluptas nostrum hic, dicta quia, saepe commodi reiciendis porro ut temporibus. Beatae odit reprehenderit sunt atque blanditiis laudantium neque consectetur voluptatum? Repudiandae, ut temporibus dolore optio, doloremque aut laudantium autem ipsa ratione sunt eveniet culpa deserunt sint minima explicabo adipisci labore error atque expedita quis aliquid repellendus distinctio nostrum quidem voluptatibus? Doloremque quisquam numquam veniam, aperiam dignissimos. Expedita qui praesentium molestias magnam est sit inventore sequi voluptatibus veniam rem ea ad repellendus excepturi autem atque aspernatur ipsa et deleniti eveniet, facilis suscipit incidunt nemo sed eius deserunt? Error, quasi? Eius ratione quas obcaecati quasi corporis aliquid alias velit fuga repellat omnis ut numquam molestiae ex dolor hic deserunt, natus necessitatibus inventore voluptates amet consequuntur sed ad. Laborum, illum amet beatae quibusdam quas nisi tenetur error commodi nulla minima. Itaque nihil nemo iste error totam tempore nobis odio illum dolores laborum molestiae, blanditiis, quo recusandae. Quod recusandae dolorum rem, nobis tempora quibusdam assumenda error minima officia voluptate, aspernatur dignissimos voluptatibus similique fugiat eaque natus dolor maiores, ex, dolore porro magni praesentium cumque cupiditate ipsum. Laboriosam voluptate dolores pariatur tempore tempora eum dolorum culpa praesentium quasi eos facere dignissimos deleniti in saepe veniam, modi accusamus, quisquam alias? Saepe doloribus deserunt reiciendis!</p>
                            <label class="read-more-button" for="expanded" role="button">Читать дальше</label>
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
                                    <div class="id">@batkovdev</div>
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
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
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
                                    <div class="id">@batkovdev</div>
                                </div>
                            </div>
                            <div class="date">5 дн.</div>
                            <div class="more-detail"><i class="bi bi-three-dots-vertical"></i></div>
                        </div>
                        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod deleniti beatae sed animi.</div>
                        <div class="thumbnails">
                            <figure class="thumbnail-item large">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                        </figure>
                        <figure class="thumbnail-item small">
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
                                    <div class="id">@batkovdev</div>
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
                                    <div class="id">@batkovdev</div>
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
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
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
                                    <div class="id">@batkovdev</div>
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
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
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
                                    <div class="id">@batkovdev</div>
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
                            <figure class="thumbnail-item">
                                <img src="static/assets/img/image1.jpg" class="thumbnail">
                            </figure>
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

                </div>

                <div class="side">
                    <div class="stories">
                        <div class="title">История друзей</div>
                        <ul class="carousel">
                            <li class="story-item">
                                <img src="static/assets/img/image1.jpg" alt="thumbnail" class="story-preview">
                                <div class="account">
                                    <img src="static/assets/img/ava2.jpg" class="account-avatar">
                                    <span>Erasyl Yessimov</span>
                                </div>
                            </li>
                            <li class="story-item">
                                <img src="static/assets/img/image1.jpg" alt="thumbnail" class="story-preview">
                                <div class="account">
                                    <img src="static/assets/img/ava2.jpg" class="account-avatar">
                                    <span>Erasyl Yessimov</span>
                                </div>
                            </li>
                        </ul>
                        <a href="#" class="show-more button">Посмотреть все</a>
                    </div>
                </div>
            </div>
        `;
    }
}