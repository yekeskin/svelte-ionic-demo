import { menuController as ionicController } from "@ionic/core";

class MenuController {
  open(menuId = null) {
    return ionicController.open(menuId);
  }

  close(menuId = null) {
    return ionicController.close(menuId);
  }

  toggle(menuId = null) {
    return ionicController.toggle(menuId);
  }

  enable(shouldEnable, menuId = null) {
    return ionicController.enable(shouldEnable, menuId);
  }

  swipeGesture(shouldEnable, menuId = null) {
    return ionicController.swipeGesture(shouldEnable, menuId);
  }

  isOpen(menuId = null) {
    return ionicController.isOpen(menuId);
  }

  isEnabled(menuId = null) {
    return ionicController.isEnabled(menuId);
  }

  get(menuId = null) {
    return ionicController.get(menuId);
  }

  getOpen() {
    return ionicController.getOpen();
  }

  getMenus() {
    return ionicController.getMenus();
  }
}

export const menuController = new MenuController();
