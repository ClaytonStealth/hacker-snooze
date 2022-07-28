let url100 = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
let id = [];
let urlId = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
let otherStories = [];
let storiesList = document.querySelector('#story')
let aTag = document.createElement('a')
let parentTitle = document.createElement('div')
let child = document.createElement('div')
parent.innerText = ''
parent.className = 'parent';


let apiCall100 = async () => {
    let res = await fetch(url100);
    let data = await res.json();
    for (let i = 0; i < 100; i++) {
        id.push(data[i])
    }
    apiCallId();
}
apiCall100();

let apiCallId = async () => {
    for (let idNumber of id) {
        let newUrl = await fetch(`https://hacker-news.firebaseio.com/v0/item/${idNumber}.json?print=pretty`);

        let secondUrl = await newUrl.json();

        parentTitle = document.createElement('div');
        parentTitle.setAttribute('id', 'parentDiv');
        child = document.createElement('div');
        aTag = document.createElement('a')
        storiesList.appendChild(parentTitle);
        parentTitle.appendChild(aTag);
        storiesList.appendChild(child);
        aTag.innerText = secondUrl.title
        aTag.href = secondUrl.url;
        child.innerText = `${secondUrl.descendants} comments ${secondUrl.score}points submitted by ${secondUrl.by}`
        // console.log(secondUrl)
    }
}
