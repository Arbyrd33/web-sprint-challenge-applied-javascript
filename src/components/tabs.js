import axios from "axios"

const Tabs = (topics) => {
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");
  topics.forEach(thing =>{
    const newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.textContent = thing;
    topicsDiv.append(newTab);
  })
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  console.log(topicsDiv);
  return topicsDiv;
};

const tabsAppender = (selector) => {
  // const res = ["javascript", "bootstrap", "technology", "jquery", "node.js"]

  const entry = document.querySelector(selector);
  // entry.appendChild(
  //   Tabs(res)
  //   )
  
  axios.get(`http://localhost:5001/api/topics`)
  .then(res => {
    console.log(res.data.topics);
    const topics = res.data.topics;
      console.log(topics);
      entry.appendChild(
        Tabs(topics)
      )
    })
    .catch(err => {
      console.log(err);
    })
    .finally(console.log("get tabs feel good"))


//  // Commented out was used to test the API without internet. I later realized that I could have used the localhost API on the plane anyway and I would have been just fine!

    
//   // TASK 4
//   // ---------------------
//   // Implement this function which takes a css selector as its only argument.
//   // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
//   // Find the array of topics inside the response, and create the tabs using the Tabs component.
//   // Append the tabs to the element in the DOM that matches the selector passed to the function.
//   //
}

export { Tabs, tabsAppender }





