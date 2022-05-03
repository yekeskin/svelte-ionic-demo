<script>
  let customDatetime;
</script>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>DateTime</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding-start ion-padding-end">
  <div class="grid">
    <div class="grid-item">
      <h2>Initial Value</h2>
      <ion-datetime value="2012-12-15T13:47:20.789" />
    </div>
    <div class="grid-item">
      <h2>Readonly</h2>
      <ion-datetime readonly="true" />
    </div>
    <div class="grid-item">
      <h2>Disabled</h2>
      <ion-datetime disabled="true" />
    </div>
    <div class="grid-item">
      <h2>Custom Locale</h2>
      <ion-datetime locale="en-GB" />
    </div>
    <div class="grid-item">
      <h2>Max and min</h2>
      <ion-datetime min="1994-03-14" max="2012-12-09" value="2008-09-02" />
    </div>
    <div class="grid-item">
      <h2>15 minute increments</h2>
      <ion-datetime minute-values="0,15,30,45" />
    </div>
    <div class="grid-item">
      <h2>Specific days/months/years</h2>
      <ion-datetime month-values="6,7,8" year-values="2014,2015" day-values="01,02,03,04,05,06,08,09,10,11,12,13,14" />
    </div>
    <div class="grid-item">
      <h2>Time Only</h2>
      <ion-datetime presentation="time" />
    </div>
    <div class="grid-item">
      <h2>Time First, Date Second</h2>
      <ion-datetime presentation="time-date" />
    </div>
    <div class="grid-item">
      <h2>Custom Hour Cycle</h2>
      <ion-datetime hour-cycle="h23" />
    </div>
    <div class="grid-item">
      <h2>Custom First Day Of Week</h2>
      <ion-datetime first-day-of-week="1" />
    </div>
    <div class="grid-item">
      <h2>Custom Title</h2>
      <ion-datetime>
        <div slot="title">My Custom Title</div>
      </ion-datetime>
    </div>
    <div class="grid-item">
      <h2>Clear Button</h2>
      <ion-datetime show-clear-button="true" />
    </div>
    <div class="grid-item">
      <h2>Custom Buttons</h2>
      <ion-datetime>
        <ion-buttons slot="buttons">
          <ion-button color="primary">Good to go!</ion-button>
          <ion-button color="danger">Reset</ion-button>
        </ion-buttons>
      </ion-datetime>
    </div>
    <div class="grid-item">
      <h2>Datetime in Overlay</h2>
      <ion-button id="open-modal">Open Datetime Modal</ion-button>
      <ion-modal trigger="open-modal">
        <ion-content force-overscroll="false">
          <ion-datetime />
        </ion-content>
      </ion-modal>
    </div>
  </div>
</ion-content>

<style>
  ion-content {
    --background: #f4f4f4;
  }

  ion-datetime {
    height: auto;
    width: auto;

    max-width: 350px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    grid-gap: 0 10px;
  }

  ion-modal {
    --width: 290px;
    --height: 382px;
    --border-radius: 8px;
  }

  ion-modal ion-datetime {
    height: 382px;
  }
</style>
