import ReactDOM from "react-dom/client";
import Widget from "./widget";

function normalizeAttribute(attr: string) {
  return attr.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

class ChirpWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    const root = ReactDOM.createRoot(this.shadowRoot!);
    root.render(<Widget {...props} />);
  }

  getPropsFromAttributes() {
    const props: Record<string, string> = {};
    for (const { name, value } of this.attributes) {
      props[normalizeAttribute(name)] = value;
    }
    return props;
  }
}

export default ChirpWebComponent;
