<script lang="ts">
  import { getContext } from "svelte";
  import { router } from "../providers/router";
  import { ION_TABS } from "./IonTabs.svelte";

  export let href = "/";
  let el: HTMLIonTabButtonElement;
  const ionTabs = getContext(ION_TABS);

  function onClick() {
    const tabBar = el.closest("ion-tab-bar");
    if (tabBar) {
      tabBar.selectedTab = href;
    }
    const target = router.deepestRoute(href);
    router.push(target, false);
    ionTabs.activateTab(href);
  }
</script>

<ion-tab-button bind:this={el} on:click={onClick} tab={href}><slot /></ion-tab-button>
