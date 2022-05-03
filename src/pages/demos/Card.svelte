<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Card</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-card>
    <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" />
    <ion-card-header>
      <ion-card-subtitle>Destination</ion-card-subtitle>
      <ion-card-title>Madison, WI</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory
      in 1836.
    </ion-card-content>
  </ion-card>
</ion-content>

<style>
  ion-content {
    --background: #f4f4f4;
  }

  ion-card img {
    width: 100%;
    height: auto;
  }
</style>
