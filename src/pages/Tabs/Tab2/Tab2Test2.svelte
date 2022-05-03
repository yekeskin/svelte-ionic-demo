<script>
  import IonBackButton from "../../../components/IonBackButton.svelte";
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <IonBackButton defaultHref="/tabs/tab2/test1" />
    </ion-buttons>
    <ion-title>Tab2Test2</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content />

<style>
  ion-content {
    --background: #f4f4f4;
  }
</style>
