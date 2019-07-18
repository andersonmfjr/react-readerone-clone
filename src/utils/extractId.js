const extract = channels => channels.map(channel => channel.id);

export const extractNameById = (id, channels) => {
  const channel = channels.find(el => el.id === id);
  return channel.name;
};

export default extract;
