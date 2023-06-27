<script>
    import { beforeUpdate } from 'svelte'
    import { goto } from '$app/navigation'
    import { answer } from '../stores.js';

    beforeUpdate(() => {
        if ($answer.nickname === null) {
            goto('/quiz/step1');
        }
    });
</script>

<h2>Quiz / step4</h2>

<p>Done, {$answer.nickname}</p>
