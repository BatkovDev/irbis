const post_content = document.querySelectorAll('.feed .post .content p');
const bs = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
  }
});
document.querySelector('.modal-content .bar .modal-close').addEventListener("click", ()=>{
	document.querySelector('.modal').style.display = 'none';
})
const createPost = document.querySelector('.post-create .wrap');
createPost.addEventListener("click", ()=>{
	document.querySelector('.modal').style.display = 'flex';
});

const post_likes = document.querySelectorAll('.post--wrap .pwrap__likes');

post_likes.forEach(like => {
	like.addEventListener("click", () => {
		if(!like.classList.contains('liked')){
			like.classList.toggle('liked');
			like.querySelector('span').innerHTML = parseInt(like.querySelector('span').textContent)+1;
		}else{
			like.classList.remove('liked');
			like.querySelector('span').innerHTML = parseInt(like.querySelector('span').textContent)-1;
		}
	})
});

post_content.forEach(paragraph => {
  bs.observe(paragraph);
});