/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "client:click",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "click",
        entrypoint: "./click.js",
      });
    },
  },
});
