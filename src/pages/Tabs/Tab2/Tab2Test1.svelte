<script>
  import { router } from "../../../providers/router";
</script>

<ion-header>
  <ion-toolbar>
    <ion-title>Tab2Test1</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab2Test1</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-button
    expand="block"
    on:click={() => {
      router.push("/tabs/tab2/test2");
    }}
  >
    Test 2
  </ion-button>
</ion-content>

<style>
  ion-content {
    --background: #f4f4f4;
  }
</style>
