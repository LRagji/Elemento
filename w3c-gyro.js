import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `w3c-gyro`
 * This polymer element uses the w3c standard gyro api to display and log the device gyro values
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class W3cGyro extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'w3c-gyro',
      },
    };
  }
}

window.customElements.define('w3c-gyro', W3cGyro);
