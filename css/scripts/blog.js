/*
  Javascript used to load and render the blog previews as links to see the whole blog
  
  A note for any future devs who may work on this: I'm a React/Ruby developer. I'm
  used to tools to do a lot of this stuff for me. Sorry if my vanilla JS is ugly. But
  I'm building this for free, so I doubt Cassi will complain.
*/

// Dummy data
const blogs = [
  {
    header: 'The Challenges of Puppy Love',
    subHeader: 'How the journey of raising a dog might just change your life.',
    url: 'https://medium.com/@cassicolvett/the-challenges-of-puppy-love-fbe64493b50f',
    text: 'Picture it: You’ve just made the hesitant choice to bring home a perfect, pint-sized puppy. It wasn’t in the plans, but you’ve stumbled across a post on social media seeking some sucker to take an adorable pup off their hands.Their neighbor’s escape artist of a dog has found its way into their fence yet again, and now they’re looking for a good home for an unexpected litter.She has bright blue eyes, a big round belly, probably more spunk than she weighs, and you can’t help but give her the home she deserves.You envision life with a faithful dog by your side that you’ve raised to be the ideal companion.In fact, almost instantly after deciding you’ll take her home, you’ve already loaded up on all of the “necessities”: a cute, fluffy bed, a pink collar with pearls, stuffed animals that are twice her size, and plenty more.You are over- prepared(or so you think).'
  },
  {
    header: 'Training Your Dog',
    subHeader: 'Follow These Tips for Success',
    url: 'https://medium.com/@cassicolvett/training-your-dog-237e951b98cd',
    text: 'Your dog is not like any other dog on the planet. I mean, that’s what makes them so special, right? They are your dog, and your dog is going to learn at a different pace and in different ways than any other pet.So, you have to do yourself a favor.Focus on you and your pet’s journey only.Keep learning together while exploring your pet’s unique personality and any embarrassment, with a little work, will turn into joy.'
  }
];

const createElement = (type, opts) => {
  const el = document.createElement(type);

  Object.keys(opts).forEach(key => {
    el[key] = opts[key];
  });

  return el;
}

const renderBlogs = blogs => {
  const anchor = document.getElementById('blog-anchor');
  if (!Array.isArray(blogs)) return null;

  blogs.forEach(blog => {
    // Create elements
    const parentDiv = createElement('div', { className: 'row', onclick: () => window.open(blog.url) });

    const div2 = createElement('div', { className: 'col-xl-9 col-lg-10 mx-auto' });
    const div3 = createElement('div', { className: 'bg-faded rounded p-5 blog-entry' });

    const headerContainer = createElement('h2', { className: 'section-heading mb-4' });
    const header = createElement('span', { className: 'section-heading-lower', innerHTML: blog.header });
    const subHeader = createElement('span', { className: 'section-heading-upper', innerHTML: blog.subHeader });

    const text = createElement('p', { innerHTML: blog.text });

    const link = createElement('a', { innerHTML: 'Click here to keep reading!', href: blog.url, target: '_blank' });
    
    // Attach elements
    headerContainer.appendChild(header);
    headerContainer.appendChild(subHeader);
    
    div2.appendChild(div3);
    parentDiv.appendChild(div2);
    div3.appendChild(headerContainer)
    div3.appendChild(text);
    div3.appendChild(link);

    anchor.appendChild(parentDiv);
  })
};

const fetchAndRenderBlogs = () => {
  // TODO: add in request to fetch real blogs

  renderBlogs(blogs);
};

fetchAndRenderBlogs();
