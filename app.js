import { App } from "@slack/bolt";
import "dotenv/config";
const app= new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,

});

app.command("/hello", async ({ ack, respond}) => {
    await ack();
    await respond("hello sir!");
});
app.command("/ping", async({ ack, respond}) => {
    await ack();
    await respond("Pong!");
});

(async () => {
    await app.start();
    console.log("Slaxkyyy is running!:");

})();