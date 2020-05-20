export default {
  name: "footnote",
  functional: true,
  props: [],
  render(h, { props, data, children }) {
    const footerClass = "p-2 text-sm text-center";
    return h("div", { class: footerClass }, children);
  },
};