/**
 * Hydrate on first click on the window
 * @type {import('astro').ClientDirective}
 */
export default (load, opts, el) => {
  el.addEventListener('click', async () => {
    const hydrate = await load()
    await hydrate()
  }, { once: true })
}
