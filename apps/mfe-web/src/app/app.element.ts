const template = `
<h2>Contacts</h2>
<ul>
  <li>First Contact</li>
  <li>Second Contact</li>
  <li>Third Contact</li>
</ul>
`;

export class AppElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template;
  }
}

customElements.define('mfe-web', AppElement);
