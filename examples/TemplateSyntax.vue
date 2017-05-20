<template>
  <div v-if="something && items.length" :someattribute="attrValue">
    <ul>
      <li v-for="item in items">{{ item.name }}</li>
    </ul>
    <button v-on:click="clickMe()">Event Binding!</button>
    <button @click="clickMe2()">Event binding shortcut!</button>
  </div>
</template>
