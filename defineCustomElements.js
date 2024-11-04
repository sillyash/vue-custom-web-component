import { defineCustomElement } from 'vue';
import HelloWorld from '@/components/HelloWorld.ce.vue';
import WelcomeItem from '@/components/WelcomeItem.ce.vue';
import TheWelcome from '@/components/TheWelcome.ce.vue';

const HelloWorldElement = defineCustomElement(HelloWorld);
const WelcomeItemElement = defineCustomElement(WelcomeItem);
const TheWelcomeElement = defineCustomElement(TheWelcome);

customElements.define('hello-world', HelloWorldElement);
customElements.define('welcome-item', WelcomeItemElement);
customElements.define('the-welcome', TheWelcomeElement);