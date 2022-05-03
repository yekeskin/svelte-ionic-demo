<script>
  import { modalController } from "../../../providers/ionic/modal-controller";
  import ModalContent from "./ModaContent.svelte";

  let contentEl;

  async function openModal(opts = {}) {
    const modal = await modalController.create({
      component: ModalContent,
      ...opts,
    });
    modal.present();
  }

  function openSheetModal() {
    openModal({
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.2,
    });
  }

  function openCardModal() {
    const pageEl = contentEl.closest(".ion-page");
    openModal({
      swipeToClose: true,
      presentingElement: pageEl,
    });
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
<ion-content bind:this={contentEl} class="ion-padding">
  <ion-button
    expand="block"
    on:click={() => {
      openModal();
    }}>Show Modal</ion-button
  >
  <ion-button expand="block" on:click={openCardModal}>Show Card Modal</ion-button>
  <ion-button expand="block" on:click={openSheetModal}>Show Sheet Modal</ion-button>
</ion-content>
