<script>
  import { onMount } from "svelte";

  let infiniteScroll;
  let items = [];

  const users = [
    {
      name: "Aline Grover",
      created: "November 28, 2012",
    },
    {
      name: "Nevada Anders",
      created: "January 18, 2014",
    },
    {
      name: "Nicholas Morissette",
      created: "November 11, 2014",
    },
    {
      name: "Rusty Umland",
      created: "January 8, 2019",
    },
    {
      name: "Amada Cerulli",
      created: "July 22, 2009",
    },
    {
      name: "Harriette Garcia",
      created: "July 29, 2018",
    },
    {
      name: "Erminia Marotz",
      created: "September 29, 2016",
    },
    {
      name: "Shanelle Parodi",
      created: "May 26, 2018",
    },
    {
      name: "Roger Leite",
      created: "August 6, 2015",
    },
    {
      name: "Latina Faulcon",
      created: "February 5, 2014",
    },
    {
      name: "Jerrie Hoekstra",
      created: "June 2, 2016",
    },
    {
      name: "Domonique Byam",
      created: "December 30, 2010",
    },
    {
      name: "Monnie Bonar",
      created: "December 20, 2018",
    },
    {
      name: "Chu Kahle",
      created: "November 17, 2017",
    },
    {
      name: "Allan Passman",
      created: "November 12, 2015",
    },
    {
      name: "Conrad Caliendo",
      created: "February 10, 2016",
    },
    {
      name: "Elma Chenier",
      created: "August 13, 2011",
    },
    {
      name: "Wendi Hirano",
      created: "July 27, 2018",
    },
    {
      name: "Loren Wordlaw",
      created: "December 20, 2014",
    },
    {
      name: "Hubert Frum",
      created: "January 21, 2013",
    },
    {
      name: "Rueben Basil",
      created: "December 2, 2013",
    },
    {
      name: "Krystyna Hardiman",
      created: "February 11, 2016",
    },
    {
      name: "Micki Murch",
      created: "December 17, 2009",
    },
    {
      name: "Allene Knight",
      created: "November 3, 2010",
    },
    {
      name: "Davis Lunsford",
      created: "October 17, 2011",
    },
    {
      name: "Elin Conte",
      created: "June 23, 2015",
    },
    {
      name: "Yasuko Hites",
      created: "August 25, 2017",
    },
    {
      name: "Gerri Pinon",
      created: "May 21, 2014",
    },
    {
      name: "Caryl Hawker",
      created: "April 13, 2018",
    },
    {
      name: "Savannah Hoard",
      created: "October 31, 2009",
    },
    {
      name: "Carolyn Knutsen",
      created: "July 16, 2015",
    },
    {
      name: "Shantay Mckissack",
      created: "July 9, 2010",
    },
    {
      name: "Vertie Pinales",
      created: "November 20, 2010",
    },
    {
      name: "Gidget Stuck",
      created: "August 17, 2017",
    },
    {
      name: "Drew Crownover",
      created: "August 30, 2017",
    },
    {
      name: "Vashti Krajewski",
      created: "January 25, 2018",
    },
    {
      name: "Candice Dike",
      created: "November 19, 2018",
    },
    {
      name: "Dorthey Buhler",
      created: "October 22, 2012",
    },
    {
      name: "Hailey Deluna",
      created: "September 13, 2012",
    },
    {
      name: "Richard Aaron",
      created: "April 27, 2016",
    },
  ];

  async function onScroll() {
    if (items.length < users.length) {
      console.log("Loading data...");
      await wait(500);
      infiniteScroll.complete();
      appendItems(10);
      console.log("Done");
    } else {
      console.log("No More Data");
      infiniteScroll.disabled = true;
    }
  }

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  function appendItems(number) {
    console.log("length is", items.length);
    const originalLength = items.length;
    for (let i = 0; i < number; i++) {
      items.push({
        avatar: "https://www.gravatar.com/avatar/" + (i + originalLength) + "?d=monsterid&f=y",
        name: users[i + originalLength].name,
        created: users[i + originalLength].created,
      });
    }
    items = items;
  }

  onMount(() => {
    appendItems(20);
  });
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>InfiniteScroll</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-list>
    {#each items as item}
      <ion-item>
        <ion-avatar slot="start">
          <img src={item.avatar} />
        </ion-avatar>
        <ion-label>
          <h2>{item.name}</h2>
          <p>Created {item.created}</p>
        </ion-label>
      </ion-item>
    {/each}
  </ion-list>

  <ion-infinite-scroll bind:this={infiniteScroll} threshold="100px" on:ionInfinite={onScroll}>
    <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data..." />
  </ion-infinite-scroll>
</ion-content>

<style>
</style>
