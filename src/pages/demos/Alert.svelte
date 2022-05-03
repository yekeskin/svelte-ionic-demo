<script>
  import { alertController } from "../../providers/ionic/alert-controller";

  async function showAlert() {
    const alert = await alertController.create({
      header: "Use this lightsaber?",
      message: "Do you agree to use this lightsaber to do good across the galaxy?",
      buttons: ["Disagree", "Agree"],
    });

    await alert.present();
  }
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Alert</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" on:click={showAlert}>Show Alert</ion-button>
</ion-content>
