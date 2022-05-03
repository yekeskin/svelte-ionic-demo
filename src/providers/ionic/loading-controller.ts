import { loadingController as ionicController } from "@ionic/core";

class LoadingController {
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

export const loadingController = new LoadingController();
