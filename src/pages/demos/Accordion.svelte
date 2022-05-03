<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Accordion</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list inset="true">
    <ion-list-header>Basic</ion-list-header>
    <ion-accordion-group>
      <ion-accordion value="colors">
        <ion-item slot="header">
          <ion-label>Colors</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Red</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Green</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Blue</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="shapes">
        <ion-item slot="header">
          <ion-label>Shapes</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Circle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Triangle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Square</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="numbers">
        <ion-item slot="header">
          <ion-label>Numbers</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>1</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>2</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>3</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
    </ion-accordion-group>
  </ion-list>

  <ion-list inset="true">
    <ion-list-header>Custom Icon</ion-list-header>
    <ion-accordion-group>
      <ion-accordion value="colors" toggle-icon="arrow-down-circle">
        <ion-item slot="header">
          <ion-label>Colors</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Red</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Green</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Blue</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="shapes" toggle-icon="arrow-down-circle">
        <ion-item slot="header">
          <ion-label>Shapes</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Circle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Triangle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Square</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="numbers" toggle-icon="arrow-down-circle">
        <ion-item slot="header">
          <ion-label>Numbers</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>1</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>2</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>3</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
    </ion-accordion-group>
  </ion-list>

  <ion-list inset="true">
    <ion-list-header>Open Accordion</ion-list-header>
    <ion-accordion-group value="colors">
      <ion-accordion value="colors">
        <ion-item slot="header">
          <ion-label>Colors</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Red</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Green</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Blue</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="shapes">
        <ion-item slot="header">
          <ion-label>Shapes</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Circle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Triangle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Square</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="numbers">
        <ion-item slot="header">
          <ion-label>Numbers</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>1</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>2</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>3</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
    </ion-accordion-group>
  </ion-list>

  <ion-list inset="true">
    <ion-list-header>Multiple Accordions</ion-list-header>
    <ion-accordion-group multiple="true" id="multiple">
      <ion-accordion value="colors">
        <ion-item slot="header">
          <ion-label>Colors</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Red</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Green</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Blue</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="shapes">
        <ion-item slot="header">
          <ion-label>Shapes</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Circle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Triangle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Square</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="numbers">
        <ion-item slot="header">
          <ion-label>Numbers</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>1</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>2</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>3</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
    </ion-accordion-group>
  </ion-list>

  <ion-list inset="true">
    <ion-list-header>Managing State</ion-list-header>
    <ion-accordion-group id="state" value="numbers">
      <ion-accordion value="colors">
        <ion-item slot="header">
          <ion-label>Colors</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Red</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Green</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Blue</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="shapes">
        <ion-item slot="header">
          <ion-label>Shapes</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>Circle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Triangle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Square</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
      <ion-accordion value="numbers">
        <ion-item slot="header">
          <ion-label>Numbers</ion-label>
        </ion-item>

        <ion-list slot="content">
          <ion-item>
            <ion-label>1</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>2</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>3</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
    </ion-accordion-group>
  </ion-list>
</ion-content>

<style>
  ion-content {
    --background: #f4f4f4;
  }
</style>
