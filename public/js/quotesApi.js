const quoteEl = document.querySelector('#quote')
const authorEl = document.querySelector('#author')

setInterval(function(){fetch("https://api.quotable.io/random?tags=Success")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  const quote = data.content
  const author = data.author
  quoteEl.textContent = `${quote}`
  authorEl.textContent = `- ${author} -`
})}, 20000)