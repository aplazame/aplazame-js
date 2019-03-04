
import ENV from '_env'

export default {
  host: ENV.settings.url_api,
  widgets_base: ENV.settings.url_widgets,
  checkout_url: ENV.settings.url_checkout,
  version: 1,
  sandbox: false
};
