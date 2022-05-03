<script>
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Input</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-list lines="full" class="ion-no-margin">
    <ion-list-header lines="full">
      <ion-label> Label Positions </ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>Default Label</ion-label>
      <ion-input placeholder="placeholder" />
    </ion-item>
    <ion-item>
      <ion-label position="fixed">Fixed Label</ion-label>
      <ion-input placeholder="placeholder" />
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Stacked Label</ion-label>
      <ion-input placeholder="placeholder" />
    </ion-item>
    <ion-item>
      <ion-label position="floating">Floating Label</ion-label>
      <ion-input />
    </ion-item>
  </ion-list>

  <ion-list lines="full" class="ion-no-margin">
    <ion-list-header lines="full">
      <ion-label> Input Types </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Text Input</ion-label>
      <ion-input placeholder="placeholder" type="text" />
    </ion-item>

    <ion-item>
      <ion-label>Number Input</ion-label>
      <ion-input placeholder="placeholder" type="number" />
    </ion-item>

    <ion-item>
      <ion-label>Password Input</ion-label>
      <ion-input placeholder="placeholder" type="password" />
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Multiple Inputs</ion-label>
      <ion-input placeholder="Address Line 1" />
      <ion-input placeholder="Address Line 2" />
      <ion-input placeholder="City" />
      <ion-input placeholder="State" />
      <ion-input placeholder="Zip Code" />
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Textarea</ion-label>
      <ion-textarea placeholder="placeholder" />
    </ion-item>
  </ion-list>
</ion-content>

<style>
</style>
