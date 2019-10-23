module.exports = (id, title, content) => {
  id = `${id}`;
  return {
    id,
    title: `The title of news item #${title}`,
    content: `News item #${id}: The content is ${content}`,
    image: `/images/news/${id % 5}.jpg`,
  };
};
