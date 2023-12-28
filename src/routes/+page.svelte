<script>
    import {isDateEven, isRestricted, nextRestrictedDate, sum} from "./parkingmath.js"
    import {Modal} from "carbon-components-svelte"

    // const testDate = "11/30/2023 16:49:00";
    // const todaysDate = new Date(testDate);

    let aboutUsOpen = false;
    const todaysDate = new Date();

    const restricted = isRestricted(todaysDate);
    const restrictedDate = nextRestrictedDate(todaysDate);
    const isEven = isDateEven(restrictedDate);
    const oddOrEvenText = isEven ? "EVEN" : "ODD";

</script>
<div style="display: flex; flex-direction: column;" class="flex-center">
    <h3>Alternate Side Parking</h3>
    <h3 style="margin-top: -8px;">Rochester, MN</h3> 
</div>
<div class="flex-center" style="flex-direction: column;">
    <p  >
        <span>Current Device Time:</span><br>
        <span style="font-weight: bolder; font-size: large; font-family: 'Orbitron', sans-serif;">{`${todaysDate.toLocaleDateString()} ${todaysDate.toLocaleTimeString()}`}</span>
    </p>
</div>
{#if restricted}
<div class="flex-center">
    Current Parking Status:
</div>
<div class="flex-center" style="background-color: #CCCCCC; padding: 4px; display: flex; align-items: center; justify-content: center;">
    <p style="color: red; font-weight: bolder; font-size: x-large;">RESTRICTED</p>
</div>
<div class="flex-center">
      You must park on this side:
</div>
<div class="flex-center" style="margin-top: 4px; font-size: x-large; background-color: #CCCCCC; color: #233474; padding: 4px;">
    <p style="font-wight: bolder;">{oddOrEvenText}</p>
</div>
{:else}
<div class="flex-center">
    Current Parking Status:
</div>
<div class="flex-center" style="background-color: #CCCCCC; padding: 4px; display: flex; align-items: center; justify-content: center;">
    <p style="color: green; font-size: x-large;font-weight: bolder;">NOT RESTRICTED</p>
</div>
<div class="flex-center" style="display: flex; flex-direction: column;">
    <p>Next Restriction Starts: 2 A.M. on {restrictedDate.toLocaleDateString()}</p>
    <p>When it starts you must park on this side:</p>
</div>
<div class="flex-center" style="background-color: #CCCCCC; color: #233474; padding: 4px;">
    <p style="font-weight: bolder; font-size: x-large;">{oddOrEvenText}</p>
</div>

{/if}

<div class="footer" >
   <div style="font-size: smaller;">
    Disclaimer: While we strive to provide accurate and up-to-date information, we cannot guarantee the absolute accuracy, completeness, or reliability of the parking regulations displayed on this website. Users are advised to double-check local signage, laws, and regulations before parking, as these may change or be subject to error. We do not accept responsibility for any inconvenience, penalty, or liability resulting from the use of information provided on this website.
   </div>
   <div>

    <a href="https://www.rochestermn.gov/Home/Components/News/News/9350/1121" target="_blank">Rochester Parking Restriction</a> 
    |
    <a href="#0" on:click|preventDefault={() => {aboutUsOpen=true}}>About Us</a>
    |
    <a href="">Donate</a>
    |
    <a href="https://github.com/techsistance-ken/alternate-side-parking" target="_blank">Open Source - Contribute!</a>

   </div>

</div>

<Modal
  bind:open={aboutUsOpen}
  modalHeading="About Us"
  primaryButtonText="Close"
  on:click:button--primary={() => (aboutUsOpen = false)}
  on:open
  on:close
  on:submit
>
  <p>
    I was tired of trying to remember the seasonal parkign restrictions and the current date or tomorrows date.
    As a software engineer with a few hobbyist sized projects, I felt it would be fun to create a tool for me and my family.
    Now, I've decided to share it to a wider audience as we find it helpful.  
  </p>
</Modal>

<style>
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #CCCCCC;
        color: black;
        position: absolute; 
        bottom: 0; 
        left: 0; 
        width: 100%;
        padding: 8px;
        z-index: 10;
}
</style>