<script>
    import {isDateEven, isRestricted, nextRestrictedDate, sum} from "./parkingmath.js"

    // const testDate = "11/30/2023 6:49:00";
    // const todaysDate = new Date(testDate);

    const todaysDate = new Date();

    const restricted = isRestricted(todaysDate);
    const restrictedDate = nextRestrictedDate(todaysDate);
    const isEven = isDateEven(restrictedDate);
    const oddOrEvenText = isEven ? "EVEN" : "ODD";

</script>
<div class="flex-center">
    <h3>Rochester, MN Alternate Side Parking</h3>
</div>
<div class="flex-center" style="flex-direction: column;">
    <p  >
        <span>Current Device Time:</span><br>
        <span style="font-weight: bolder; font-size: large; font-family: 'Orbitron', sans-serif;">{`${todaysDate.toLocaleDateString()} ${todaysDate.toLocaleTimeString()}`}</span>
    </p>
</div>
{#if restricted}
<div class="flex-center" style="background-color: #CCCCCC; padding: 4px; display: flex; align-items: center; justify-content: center;">
    <p style="color: red; font-weight: bolder; font-size: x-large;">RESTRICTED</p>
</div>
<div class="flex-center" style="margin-top: 4px; font-size: x-large; background-color: #CCCCCC; color: #233474; padding: 4px;">
    <p style="font-wight: bolder;">{oddOrEvenText}</p>
</div>
{:else}
<div class="flex-center" style="background-color: #CCCCCC; padding: 4px; display: flex; align-items: center; justify-content: center;">
    <p style="color: green; font-size: x-large;font-weight: bolder;">NOT RESTRICTED</p>
</div>
<div class="flex-center">
    <p>Next Restriction Starts: 2 A.M. on {restrictedDate.toLocaleDateString()}
</div>
<div class="flex-center" style="background-color: #CCCCCC; color: #233474; padding: 4px;">
    <p style="font-weight: bolder; font-size: x-large;">{oddOrEvenText}</p>
</div>

{/if}

<style>
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>