<script lang="ts">
    import GreetingSpan from "./GreetingSpan.svelte";
    let current = "en";
    const greetings = [
        "en",
        "jp",
        "ar",
        "gr",
        "tm",
        "kr",
        "es",
        "hi",
        "fr",
        "ch",
    ];
    function setGreeting(greetingMessage: string, i: number) {
        setTimeout(() => {
            current = greetingMessage;
        }, 1000 * i);
    }
    for (let i = 0; i <= greetings.length; i++) {
        if (i === greetings.length) {
            setGreeting("en", i);
        } else {
            setGreeting(greetings[i] as string, i);
        }
    }
</script>

<h2
    class="text-2xl sm:text-3xl font-extrabold inline-block text-blaze-300 italic"
>
    {#if current === "en"}
        <GreetingSpan>Hello there!</GreetingSpan>
    {/if}
    {#if current === "jp"}
        <GreetingSpan>こんにちは!</GreetingSpan>
    {/if}
    {#if current === "ar"}
        <GreetingSpan>مرحبًا!</GreetingSpan>
    {/if}
    {#if current === "gr"}
        <GreetingSpan>Guten tag!</GreetingSpan>
    {/if}
    {#if current === "tm"}
        <GreetingSpan>வணக்கம்!</GreetingSpan>
    {/if}
    {#if current === "kr"}
        <GreetingSpan>안녕하세요!</GreetingSpan>
    {/if}
    {#if current === "es"}
        <GreetingSpan>Hola!</GreetingSpan>
    {/if}
    {#if current === "hi"}
        <GreetingSpan>नमस्ते!</GreetingSpan>
    {/if}
    {#if current === "fr"}
        <GreetingSpan>Bonjour!</GreetingSpan>
    {/if}
    {#if current === "ch"}
        <GreetingSpan>你好!</GreetingSpan>
    {/if}
</h2>
