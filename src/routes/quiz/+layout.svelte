<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation'
    import { page } from '$app/stores';
    import { answer } from './stores.js';

    onMount(() => {
        if ($answer.nickname === null && $page.route.id !== '/quiz/step1') {
            goto('/quiz/step1');
        }
    });
</script>

<h2>Quiz</h2>

<slot />
