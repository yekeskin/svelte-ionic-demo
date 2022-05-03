<script lang="ts">
  import { router } from "../providers/router";

  export let defaultHref;
  let el: HTMLIonBackButtonElement;

  function onClick(ev) {
    const outlet = el.closest("ion-router-outlet");
    const stackName = outlet?.id ?? "main-router";

    if (router.canGoBack(stackName, 1)) {
      router.pop(stackName);
      ev.preventDefault();
    } else if (defaultHref) {
      router.push(defaultHref, true, "back");
      ev.preventDefault();
    }
  }
</script>

<ion-back-button
  bind:this={el}
  default-href={defaultHref}
  on:click={(ev) => {
    onClick(ev);
  }}
/>
