import { popoverController as ionicController } from "@ionic/core";

import { svelteDelegate } from "./svelte-delegate";

class PopoverController {
  create(opts) {
    return ionicController.create({
      ...opts,
      delegate: svelteDelegate
    });
  }

  dismiss(data?, role?, id?) {
    return ionicController.dismiss(data, role, id);
  }

  getTop() {
    return ionicController.getTop();
  }
}

export const popoverController = new PopoverController();
