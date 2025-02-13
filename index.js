import {ServiceBroker} from "moleculer";

const broker = new ServiceBroker();

//greeting
broker.createService({
    name:"greeting",
    actions: {
        hello(ctx) {
            return `Hello ${ctx.params.name}`;
   
        }
    }
});

async function startApp(){
    await broker.start();
    const res = await broker.call('greeting.hello', {name: 'Syl'});
    console.log(res);
    broker.stop();
}

startApp();