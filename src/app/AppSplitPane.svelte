<script>
  import Router from "../components/Router.svelte";
  import { router } from "../providers/router";
  import { routes } from "./routes";

  let menuEl;
</script>

<ion-app>
  <ion-split-pane content-id="main-router">
    <!--  the side menu  -->
    <ion-menu bind:this={menuEl} content-id="main-router">
      <ion-content color="light">
        <ion-list>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/", false);
              menuEl.close();
            }}
          >
            Home
          </ion-item>
          <ion-list-header color="light"> Demos </ion-list-header>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/accordion", false);
              menuEl.close();
            }}
          >
            Accordion
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/action-sheet", false);
              menuEl.close();
            }}
          >
            Action Sheet
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/alert", false);
              menuEl.close();
            }}
          >
            Alert
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/badge", false);
              menuEl.close();
            }}
          >
            Badge
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/breadcrumbs", false);
              menuEl.close();
            }}
          >
            Breadcrumbs
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/button", false);
              menuEl.close();
            }}
          >
            Button
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/card", false);
              menuEl.close();
            }}
          >
            Card
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/checkbox", false);
              menuEl.close();
            }}
          >
            Checkbox
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/chip", false);
              menuEl.close();
            }}
          >
            Chip
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/datetime", false);
              menuEl.close();
            }}
          >
            DateTime
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/picker", false);
              menuEl.close();
            }}
          >
            Picker
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/fab", false);
              menuEl.close();
            }}
          >
            Fab
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/grid", false);
              menuEl.close();
            }}
          >
            Grid
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/infinite-scroll", false);
              menuEl.close();
            }}
          >
            InfiniteScroll
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/input", false);
              menuEl.close();
            }}
          >
            Input
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/item", false);
              menuEl.close();
            }}
          >
            Item
          </ion-item>

          <ion-item
            button="true"
            on:click={() => {
              router.push("/avatar", false);
              menuEl.close();
            }}
          >
            Avatar
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/thumbnail", false);
              menuEl.close();
            }}
          >
            Thumbnail
          </ion-item>
          <ion-item
            button="true"
            on:click={() => {
              router.push("/modal", false);
              menuEl.close();
            }}
          >
            Modal
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- the main content -->
    <Router {routes} stack={false} />
  </ion-split-pane>
</ion-app>
