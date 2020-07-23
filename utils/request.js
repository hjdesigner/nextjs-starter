import fetch from 'node-fetch'

export async function getAllArticles() {
  const res = await fetch('https://5f189abd475e170016e17ea6.mockapi.io/faq')
  return res.json();
}

export async function getAllPathsArticles() {
  const path = [];
  const res = await fetch('https://5f189abd475e170016e17ea6.mockapi.io/faq')
    .then(response => response.json());
  await res.map(item => path.push({ params: { id: item.slug } }))
  return path;
}

export async function getArticle(id) {
  const res = await fetch(`https://5f189abd475e170016e17ea6.mockapi.io/article?id=${id}`)
  return res.json();
}