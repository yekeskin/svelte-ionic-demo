<script>
  import { pickerController } from "../../providers/ionic/picker-controller";

  const defaultColumnOptions = [["Dog", "Cat", "Bird", "Lizard", "Chinchilla"]];

  const multiColumnOptions = [
    ["Minified", "Responsive", "Full Stack", "Mobile First", "Serverless"],
    ["Tomato", "Avocado", "Onion", "Potato", "Artichoke"],
  ];

  async function openPicker(numColumns = 1, numOptions = 5, columnOptions = defaultColumnOptions) {
    const picker = await pickerController.create({
      columns: getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Confirm",
          handler: (value) => {
            console.log(`Got Value ${value}`);
          },
        },
      ],
    });

    function getColumns(numColumns, numOptions, columnOptions) {
      let columns = [];
      for (let i = 0; i < numColumns; i++) {
        columns.push({
          name: `col-${i}`,
          options: getColumnOptions(i, numOptions, columnOptions),
        });
      }

      return columns;
    }

    function getColumnOptions(columnIndex, numOptions, columnOptions) {
      let options = [];
      for (let i = 0; i < numOptions; i++) {
        options.push({
          text: columnOptions[columnIndex][i % numOptions],
          value: i,
        });
      }

      return options;
    }

    await picker.present();
  }
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Picker</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button
    expand="block"
    on:click={() => {
      openPicker();
    }}>Show Single Column Picker</ion-button
  >
  <ion-button
    expand="block"
    on:click={() => {
      openPicker(2, 5, multiColumnOptions);
    }}>Show Multi Column Picker</ion-button
  >
</ion-content>

<style>
</style>
