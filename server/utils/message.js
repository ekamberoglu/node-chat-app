var generateMessage = (from, text) => {
  return {
    from,
    text,
    ceatedAt: new Date().getTime()
  }
};

module.exports = {generateMessage};