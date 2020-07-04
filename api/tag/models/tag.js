"use strict";

/**
 * Lifecycle callbacks for the `tag` model.
 */

module.exports = {
  lifecycles: {
    async afterCreate() {
      const url = strapi.config.get("server.webhook");

      if (url !== null) {
        axios.post(url).catch(() => {});
      }
    },

    async afterUpdate() {
      const url = strapi.config.get("server.webhook");

      if (url !== null) {
        axios.post(url).catch(() => {});
      }
    },

    async afterDestroy() {
      const url = strapi.config.get("server.webhook");

      if (url !== null) {
        axios.post(url).catch(() => {});
      }
    },
  },
};
