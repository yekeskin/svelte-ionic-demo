import { toastController as ionicController } from "@ionic/core";

class ToastController {
  create(opts) {
    return ionicController.create(opts || {});
  }

  dismiss(data, role, id) {
    return ionicController.dismiss(data, role, id);
  }

  getTop() {
    return ionicController.getTop();
  }
}

export const toastController = new ToastController();
