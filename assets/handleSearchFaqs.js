const input = document.querySelector("#search-faqs input");
const topicContainer = document.querySelector(".topic-container");

const initContainerHtml = topicContainer.outerHTML;

 const listTopic = Array.from(document.querySelectorAll(".collapse-container"));

let searchHtml = "";
input.addEventListener("input", (e) => {

  const listFoundTopic = listTopic.filter((topic) => {
    const titles = Array.from(topic.querySelectorAll(".collapse-trigger"));

    const contents = Array.from(topic.querySelectorAll(".collapse-content p"));

    const indexTitle = titles.findIndex((title) => {
      return title.innerHTML.toLowerCase().includes(e.target.value.toLowerCase());
    });

    if (indexTitle !== -1) return true;
    else {
      const indexContent = contents.findIndex((content) => {
        return content.innerHTML.toLowerCase().includes(e.target.value.toLowerCase());
      });

      if (indexContent !== -1) return true;
    }
    return false;
  });

  const searchHtml = listFoundTopic.map((topic) => topic.outerHTML).join("");
  topicContainer.innerHTML = searchHtml;

  if(e.target.value === null || e.target.value === "") {
    topicContainer.innerHTML = initContainerHtml;
  }
});
