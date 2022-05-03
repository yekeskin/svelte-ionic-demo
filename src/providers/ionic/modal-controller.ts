import { modalController as ionicController } from "@ionic/core";

import { svelteDelegate } from "./svelte-delegate";

class ModalController {
  create(opts) {
    return ionicController.create({
      ...opts,
      delegate: svelteDelegate
    });
  }

  dismiss(data, role, id) {
    return ionicController.dismiss(data, role, id);
  }

  getTop() {
    return ionicController.getTop();
  }
}

export const modalController = new ModalController();
