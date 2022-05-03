export const routes = [
    {
        path: "/",
        fn: (render, data) => import("../pages/Home.svelte").then(m => render(m.default, data))
    },
    {
        path: "/accordion",
        fn: (render, data) => import("../pages/demos/Accordion.svelte").then(m => render(m.default, data))
    },
    {
        path: "/action-sheet",
        fn: (render, data) => import("../pages/demos/ActionSheet.svelte").then(m => render(m.default, data))
    },
    {
        path: "/alert",
        fn: (render, data) => import("../pages/demos/Alert.svelte").then(m => render(m.default, data))
    },
    {
        path: "/badge",
        fn: (render, data) => import("../pages/demos/Badge.svelte").then(m => render(m.default, data))
    },
    {
        path: "/breadcrumbs",
        fn: (render, data) => import("../pages/demos/Breadcrumbs.svelte").then(m => render(m.default, data))
    },
    {
        path: "/button",
        fn: (render, data) => import("../pages/demos/Button.svelte").then(m => render(m.default, data))
    },
    {
        path: "/card",
        fn: (render, data) => import("../pages/demos/Card.svelte").then(m => render(m.default, data))
    },
    {
        path: "/checkbox",
        fn: (render, data) => import("../pages/demos/Checkbox.svelte").then(m => render(m.default, data))
    },
    {
        path: "/chip",
        fn: (render, data) => import("../pages/demos/Chip.svelte").then(m => render(m.default, data))
    },
    {
        path: "/datetime",
        fn: (render, data) => import("../pages/demos/DateTime.svelte").then(m => render(m.default, data))
    },
    {
        path: "/picker",
        fn: (render, data) => import("../pages/demos/Picker.svelte").then(m => render(m.default, data))
    },
    {
        path: "/fab",
        fn: (render, data) => import("../pages/demos/Fab.svelte").then(m => render(m.default, data))
    },
    {
        path: "/grid",
        fn: (render, data) => import("../pages/demos/Grid.svelte").then(m => render(m.default, data))
    },
    {
        path: "/infinite-scroll",
        fn: (render, data) => import("../pages/demos/InfiniteScroll.svelte").then(m => render(m.default, data))
    },
    {
        path: "/input",
        fn: (render, data) => import("../pages/demos/Input.svelte").then(m => render(m.default, data))
    },
    {
        path: "/item",
        fn: (render, data) => import("../pages/demos/Item.svelte").then(m => render(m.default, data))
    },

    {
        path: "/avatar",
        fn: (render, data) => import("../pages/demos/Avatar.svelte").then(m => render(m.default, data))
    },
    {
        path: "/thumbnail",
        fn: (render, data) => import("../pages/demos/Thumbnail.svelte").then(m => render(m.default, data))
    },
    {
        path: "/modal",
        fn: (render, data) => import("../pages/demos/Modal/Modal.svelte").then(m => render(m.default, data))
    },

    {
        path: "/tabs",
        fn: (render, data) => import("../pages/Tabs/Tabs.svelte").then(m => render(m.default, data))
    },
    {
        path: "/demos",
        fn: (render, data) => import("../pages/demos/Demos.svelte").then(m => render(m.default, data))
    },
];
  