var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: 'Mjc4Njk1NTc5NjI4ODYzNDg5.C3wDCA.YAWg9-ikugkciUhzB372WDAZKWw'
});
client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == 'PING') {
    e.message.channel.sendMessage('PONG')
  }
});
