const mqtt = require("mqtt");

const mqtt_url = "your mqtt url";
const mqtt_username = "mqtt username";
const mqtt_password = "mqtt password";

const options = { username: mqtt_username, password: mqtt_password };
const client = mqtt.connect(mqtt_url, options);

// const client = mqtt.connect("mqtt://localhost:1234");
const feed_topic = "topic/ssgs/feed";
const control_topic = "topic/ssgs/control";

client.on("connect", function () {
  console.log("connected");
  client.subscribe(feed_topic, { qos: 2 });
  client.subscribe(control_topic, { qos: 2 });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});
