<script>
    import { step } from '../stores/stores.js'
    import Preload from './Preload.svelte'
    import Quiz1 from './Quiz1.svelte'
    import Quiz2 from './Quiz2.svelte'
    import Quiz3 from './Quiz3.svelte'
    import Quiz4 from './Quiz4.svelte'

    const components = [Quiz1, Quiz2, Quiz3, Quiz4]
</script>

<Preload/>

<svelte:component this="{components[$step - 1]}"/>

<span style="font-family: 'Rampart One'; display: inline-block; width: 0; height: 0; opacity: 0;" aria-hidden="true">Rampart One</span>
