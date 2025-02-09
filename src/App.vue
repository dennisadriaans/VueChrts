<script>
import { ref } from 'vue'
import DemoComponent from './components/demo.vue'

export default {
  name: 'App',
  components: {
    DemoComponent
  },
  setup() {
    const title = ref('Vue 3 Demo App')
    const user = ref({
      name: 'John Doe',
      role: 'Admin'
    })
    const items = ref([
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
      { id: 3, text: 'Item 3' }
    ])

    const handleItemClick = (item) => {
      console.log('Item clicked:', item)
    }

    return {
      title,
      user,
      items,
      handleItemClick
    }
  }
}
</script>

<template>
    <DemoComponent></DemoComponent>
</template>