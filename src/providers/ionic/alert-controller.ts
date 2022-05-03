import { alertController as ionicController } from "@ionic/core";

class AlertController {
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

export const alertController = new AlertController();
