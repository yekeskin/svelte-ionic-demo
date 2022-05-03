import { pickerController as ionicController } from "@ionic/core";

class PickerController {
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

export const pickerController = new PickerController();
