<script>
  import IonBackButton from "../../components/IonBackButton.svelte";

  import { router } from "../../providers/router";
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <IonBackButton defaultHref="/" />
    </ion-buttons>
    <ion-title>Tab1</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <p>Tab1</p>
  <ion-button
    expand="block"
    on:click={() => {
      router.push("/components");
    }}
  >
    Components
  </ion-button>
</ion-content>

<style>
  ion-content {
    --background: #f4f4f4;
  }
</style>
