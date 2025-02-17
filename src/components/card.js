import axios from "axios"

const Card = (article) => {
  const card = document.createElement("div");
    card.classList.add("card");
  const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = article.headline;
  const author = document.createElement("div");
    author.classList.add("author");
  const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
  const image = document.createElement("img");
    image.src = article.authorPhoto;
  const credit = document.createElement("span");
    credit.textContent = `By ${article.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(credit);

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  console.log(card);
  return card;
}

const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
    .then(res => {
      const entry = document.querySelector(selector);

      console.log("Articles, ", res.data.articles)


      const bootstrap = res.data.articles.bootstrap;
      for(let i = 0; i<bootstrap.length; i++){
        entry.appendChild(Card(bootstrap[i]));
      }

      const javascript = res.data.articles.javascript;
      for(let i = 0; i<javascript.length; i++){
        entry.appendChild(Card(javascript[i]));
      }

      const jquery = res.data.articles.jquery;
      for(let i = 0; i<jquery.length; i++){
        entry.appendChild(Card(jquery[i]));
      }

      const node = res.data.articles.node;
      for(let i = 0; i<node.length; i++){
        entry.appendChild(Card(node[i]));
      }

      const tech = res.data.articles.technology;
      for(let i = 0; i<tech.length; i++){
        entry.appendChild(Card(tech[i]));
      }




    })

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
