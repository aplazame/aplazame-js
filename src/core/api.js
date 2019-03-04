
import ENV from '_env'

console.warn('ENV', ENV)

export default {
  host: ENV.url_api,
  widgets_base: ENV.url_widgets,
  checkout_url: ENV.url_checkout,
  version: 1,
  sandbox: false
};
