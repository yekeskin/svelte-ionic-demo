<script>
  import Router from "../../../components/Router.svelte";

  const routes = [
    {
      path: "/tabs/tab2",
      redirect: "/tabs/tab2/test1",
    },
    {
      path: "/tabs/tab2/test1",
      fn: (render, data) => import("./Tab2Test1.svelte").then((m) => render(m.default, data)),
    },
    {
      path: "/tabs/tab2/test2",
      fn: (render, data) => import("./Tab2Test2.svelte").then((m) => render(m.default, data)),
    },
  ];
</script>

<Router id="/tabs/tab2" {routes} root="/tabs/tab2" />
