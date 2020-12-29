import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueMqtt from 'vue-mqtt'

// Bootstrap imports
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// This is used to display the marker
import { Icon } from 'leaflet'
// Vue Leaflet imports
import 'leaflet/dist/leaflet.css'

 // var bookingRequest = 'booking/request'
// var bookingResponse = 'booking/response'

/* const options = {
  keepalive: 60,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  reschedulePings: true,
  protocolId: 'MQTT',
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  queueQoSZero: true,
} */

Vue.use(VueMqtt, 'ws://localhost:9001', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)});

Vue.config.productionTip = false

 




/* const mqtt = require('mqtt');
const url = 'mqtt://127.0.0.1';
const options = {
  port: 5000,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
};



const client = mqtt.connect(url, options);
var bookingTopic = 'BookingRequest'
var msg = 'This is a booking request btw'

client.on('connect', function() { // When connected

  // subscribe to a topic
   client.subscribe('hello/world', function() {
    // when a message arrives, do something with it
    client.on('message', function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  }); 

  // publish a message to a topic
  client.publish(bookingTopic, msg, function() {
    console.log("Message is published");
    client.end(); // Close the connection when published
  });
}); */

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})



// Use bootstrap for styling the ui
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
