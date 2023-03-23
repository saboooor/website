import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      <section class="pt-16">
        <Slot />
      </section>
    </main>
  );
});
