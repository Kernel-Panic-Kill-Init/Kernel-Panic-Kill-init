let lang = 'pl';
let count = localStorage.getItem('visitCount') || 0;
count++;
localStorage.setItem('visitCount', count);
document.getElementById('counter').textContent = count;

fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    renderPosts(posts);
    document.getElementById('lang-toggle').addEventListener('click', () => {
      lang = lang === 'pl' ? 'en' : 'pl';
      renderPosts(posts);
    });
  });

function renderPosts(posts) {
  const container = document.getElementById('posts-container');
  container.innerHTML = '';
  posts.forEach(post => {
    const article = document.createElement('article');
    const title = document.createElement('h2');
    const content = document.createElement('p');
    title.textContent = post[`title_${lang}`];
    content.textContent = post[`content_${lang}`];
    article.appendChild(title);
    article.appendChild(content);
    container.appendChild(article);
  });
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});