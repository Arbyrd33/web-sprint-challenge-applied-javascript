const Header = (title, date, temp) => {

  const header = document.createElement("div");
  const postedOn = document.createElement("span");
  const h1 = document.createElement("h1");
  const temperature = document.createElement("span");

  header.classList.add("header");
  postedOn.classList.add("date");
  temperature.classList.add("temp");

  postedOn.textContent = date;
  h1.textContent = title;
  temperature.textContent = temp;

  header.appendChild(postedOn);
  header.appendChild(h1);
  header.appendChild(temperature);

  return header;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {

  const injectionSite = document.querySelector(selector);
  injectionSite.appendChild(
    Header(`BREAKING: Local Student Grasps Axios`, `Jul 14, 2022`, `77°`)

  )

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
