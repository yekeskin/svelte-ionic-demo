<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Checkbox</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content
  ><ion-list>
    <ion-list-header>Characters</ion-list-header>
    <ion-item>
      <ion-label>Jon Snow</ion-label>
      <ion-checkbox color="primary" checked slot="start" />
    </ion-item>
    <ion-item>
      <ion-checkbox color="dark" checked slot="start" />
      <ion-label>Daenerys Targaryen</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox disabled slot="start" />
      <ion-label>Arya Stark</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="secondary" slot="start" />
      <ion-label>Tyrion Lannister</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="danger" checked slot="start" />
      <ion-label>Sansa Stark</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="primary" slot="start" />
      <ion-label>Khal Drogo</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="tertiary" checked slot="start" />
      <ion-label>Cersei Lannister</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="medium" checked slot="start" />
      <ion-label>Stannis Baratheon</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="primary" disabled slot="start" />
      <ion-label>Petyr Baelish</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="dark" checked slot="start" />
      <ion-label>Hodor</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="secondary" checked slot="start" />
      <ion-label>Catelyn Stark</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="primary" slot="start" />
      <ion-label>Bronn</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
