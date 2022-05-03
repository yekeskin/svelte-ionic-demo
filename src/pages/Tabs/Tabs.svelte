<script>
  import IonTabs from "../../components/IonTabs.svelte";
  import IonTabButton from "../../components/IonTabButton.svelte";
  import Router from "../../components/Router.svelte";

  const routes = [
    {
      path: "/tabs",
      redirect: "/tabs/tab1",
    },
    {
      path: "/tabs/tab1",
      fn: (render, data) => import("./Tab1.svelte").then((m) => render(m.default, data)),
    },
    {
      path: "/tabs/tab2",
      fn: (render, data) => import("./Tab2/Tab2.svelte").then((m) => render(m.default, data)),
    },
    {
      path: "/tabs/tab3",
      fn: (render, data) => import("./Tab3.svelte").then((m) => render(m.default, data)),
    },
  ];
</script>

<ion-content>
  <IonTabs>
    <Router id="tabs" {routes} stack={false} root="/tabs" />
    <ion-tab-bar slot="bottom">
      <IonTabButton href="/tabs/tab1">
        <ion-icon name="calendar" />
        <ion-label>Tab1</ion-label>
      </IonTabButton>

      <IonTabButton href="/tabs/tab2">
        <ion-icon name="person-circle" />
        <ion-label>Tab2</ion-label>
      </IonTabButton>

      <IonTabButton href="/tabs/tab3">
        <ion-icon name="map" />
        <ion-label>Tab3</ion-label>
      </IonTabButton>
    </ion-tab-bar>
  </IonTabs>
</ion-content>
