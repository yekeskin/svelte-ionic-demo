<script>
  import { actionSheetController } from "../../providers/ionic/action-sheet-controller";

  async function showActionSheet() {
    const actionSheet = await actionSheetController.create({
      header: "Albums",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          id: "delete-button",
          data: {
            type: "delete",
          },
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Share",
          icon: "share",
          data: 10,
          handler: () => {
            console.log("Share clicked");
          },
        },
        {
          text: "Play (open modal)",
          icon: "caret-forward-circle",
          data: "Data value",
          handler: () => {
            console.log("Play clicked");
          },
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Action Sheet</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" on:click={showActionSheet}>Show Action Sheet</ion-button>
</ion-content>
