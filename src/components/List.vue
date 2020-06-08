<template>
  <div id="class">
    <h3><a href="https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for">Mapping an Array to Elements with v-for</a></h3>
    <p>v-for 區塊可以取得父層屬性</p>
    <p>object 順序基於 Object.keys()</p>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
    <ul id="example-2">
      <li v-for="(item, index) in items" :key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <div v-for="item of items" :key="item.message">{{ item.message }}</div>
    <h3><a href="https://vuejs.org/v2/guide/list.html#v-for-with-an-Object">v-for with an Object</a></h3>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name, index) in object" :key="value">
        {{ index }}. {{ name }}: {{ value }}
      </li>
    </ul>
    <h3><a href="https://vuejs.org/v2/guide/list.html#Maintaining-State">Maintaining State</a></h3>
    <p>提供 key, 字串或數字</p>
    <h3><a href="https://vuejs.org/v2/guide/list.html#Array-Change-Detection">Array Change Detection</a></h3>
    <p>$vm0.items.push({message: 'hello'});</p>
    <h3><a href="https://vuejs.org/v2/guide/list.html#Displaying-Filtered-Sorted-Results">Displaying Filtered/Sorted Results</a></h3>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    <ul v-for="set in sets" :key="set">
      <li v-for="n in even(set)" :key="n">{{ n }}</li>
    </ul>
    <h3>v-for with a Range</h3>
    <div>
      <span v-for="n in 10" :key="n">{{ n }} </span>
    </div>
    <h3>v-for on a template</h3>
    <p>類似 v-if 的用法</p>
    <h3>v-for with v-if</h3>
    <p>不建議使用</p>
    <h3>v-for with a Component</h3>
    <p>todo</p>
  </div>
</template>

<script>
// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'List',
  data() {
    return {
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
      ],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
      numbers: [1, 2, 3, 4, 5],
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter((number) => number % 2 === 0);
    },
  },
};
</script>
