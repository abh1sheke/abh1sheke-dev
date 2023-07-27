<script lang="ts">
  import { quintOut } from "svelte/easing";
  import { fade } from "svelte/transition";
</script>

<span
  in:fade={{
    delay: 250,
    duration: 300,
    easing: quintOut,
  }}
  out:fade={{ duration: 200, easing: quintOut }}><slot /></span
>
