<script context="module">
  export const ION_TABS = {};
</script>

<script lang="ts">
  import { setContext } from "svelte";

  let tabsEl: HTMLIonTabsElement;

  setContext(ION_TABS, {
    activateTab: (tab) => {
      // console.log(tab);
    },
    getRouter: (id) => {
      return tabsEl.querySelector("ion-router-outlet#" + id);
    },
  });

  export function select(tab: string) {
    tabsEl.select(tab);
  }
</script>

<ion-tabs bind:this={tabsEl}>
  <slot name="top" slot="top" />
  <slot />
  <slot name="bottom" slot="bottom" />
</ion-tabs>
