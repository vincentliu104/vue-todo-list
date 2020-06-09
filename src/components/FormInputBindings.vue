<template>
  <div id="class">
    <h2>Form Input Binding</h2>
    <h3>Basic Usage</h3>
    <p>用 v-model 雙向綁定</p>
    <p>v-model 會略過 value, checked, selected，設定初始值請用 data</p>
    <h4>Text</h4>
    <input v-model="textMessage" placeholder="edit me" value="hahaha">
    <p>Message is: {{ textMessage }}</p>
    <h4>Multiline text</h4>
    <span>Multiline multilineMessage is:</span>
    <p style="white-space: pre-line;">{{ multilineMessage }}</p>
    <br>
    <textarea v-model="multilineMessage" placeholder="add multiple lines"></textarea>
    <br>
    <h4>Checkbox</h4>
    <input type="checkbox" id="checkbox" v-model="checked">
    <br>
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <h4>Radio</h4>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <br>
    <h4>Select</h4>
    <p>value 必須要在 option 清單中，建議提供一個 disabled option</p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <br>
    <select v-model="selected2">
      <option v-for="option in options" v-bind:value="option.value" :key="option.value">
        {{ option.value }} - {{ option.text }}
      </option>
    </select>
    <span>Selected value is {{ selected2 }}
      , text is {{ options.find(opt => opt.value == selected2).text }}</span>
    <h3>Value Bindings</h3>
    <p>value 綁定動態屬性可以用 v-bind, 使用 v-bind 可綁定非字串</p>
    <h4>Checkbox</h4>
    <input
      type="checkbox"
      v-model="toggle"
      true-value="yes"
      false-value="no"
    >
    <span>{{ toggle }}</span>
    <h4>Radio</h4>
    <input type="radio" v-model="pick" v-bind:value="options">object
    <input type="radio" v-model="pick" v-bind:value="toggle">empty string
    <br>
    <span>{{ pick }}</span>
    <h4>Select Options</h4>
    <select v-model="selectedObject">
      <!-- inline object literal -->
      <option disabled value={}>Please select one</option>
      <option v-bind:value="{ number: 123 }">123</option>
      <option v-bind:value="{ number: 456 }">456</option>
    </select>
    <br>
    selected object is {{ selectedObject }}
    <h3>Modifiers</h3>
    <h4>.lazy</h4>
    <p>預設輸入時就會更改資料，用 lazy 只有在 change 時才會改</p>
    <input v-model.lazy="msg">
    {{ msg }}
    <h4>.number</h4>
    <p>限定輸入數字，不過 $vm0.age = 'number'</p>
    <input v-model.number="age" type="number" placeholder="number only">
    age is {{ age }}
    <h4>.trim</h4>
    <p>自動去除空白，不過 $vm0.trimMsg = '               trimMsg               '</p>
    <input v-model.trim="trimMsg">
    '{{ trimMsg }}'
    <h3>v-model with Components</h3>
    <p>todo</p>
  </div>
</template>

<script>
// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'FormInputBindings',
  data() {
    return {
      textMessage: 'input text',
      multilineMessage: 'multiline text',
      checked: true,
      checkedNames: ['Jack', 'John'],
      picked: '',
      selected: '',
      selected2: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ],
      toggle: '',
      pick: this.toggle,
      selectedObject: { number: 456 },
      msg: 'msg',
      age: 18,
      trimMsg: ' trimMsg ',
    };
  },
};
</script>
