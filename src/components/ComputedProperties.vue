<template>
  <div id="computed">
    <h2>Computed Properties and Watchers</h2>
    複雜邏輯時使用
    <h3><a href="https://vuejs.org/v2/guide/computed.html#Basic-Example">Basic Example</a></h3>
    <p>反轉字串 <font color="red">$vm0.message = '123'</font></p>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <h3><a href="https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods">Computed Caching vs Methods</a></h3>
    <p>表達式可直接呼叫，不需快取的屬性放在 methods 即可</p>
    <p>computed properties 快取基於 reactive dependencies</p>
    <p>Reversed message: "{{ reverseMessage() }}"</p>
    <h3><a href="https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property">Computed vs Watched Property</a></h3>
    <p>comnputed 許法較為簡潔，多數情境適用</p>
    <p>{{ fullName }}</p>
    <h3>Computed Setter</h3>
    <p>Computed properties 預設只有 getter, 如有需要可自行增加 setter</p>
    <h3>Watchers</h3>
    <p>執行非同步或執行複雜運算已取得資料</p>
  </div>
</template>

<script>
export default {
  name: 'ComputedProperties',
  data() {
    return {
      message: 'Computed Properties',
      firstName: 'Vincent',
      lastName: 'Liu',
    };
  },
  methods: {
    reverseMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  computed: {
    // a computed getter
    reversedMessage() {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('');
    },
    now() {
      return Date.now(); // now() will never update. Date.now() is not a reactive dependency
    },
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    vincentName: {
    // getter
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      // setter
      set(newValue) {
        const names = newValue.split(' ');
        // eslint-disable-next-line prefer-destructuring
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
};
</script>
