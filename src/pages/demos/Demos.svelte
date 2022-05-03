<script>
  import IonBackButton from "../../components/IonBackButton.svelte";
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <IonBackButton defaultHref="/" />
    </ion-buttons>
    <ion-title>Component Demos</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content />

<style>
  ion-content {
    --background: #f4f4f4;
  }
</style>
