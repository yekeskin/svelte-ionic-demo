import { actionSheetController as ionicController } from "@ionic/core";

class ActionSheetController {
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

export const actionSheetController = new ActionSheetController();
