<!--
  Copyright 2022, Bart Butenaers
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<template>
  <div class="px-1 width100 flex-grow-1 flex-shrink-1 overflow-hidden" ref="svgdiv">
  </div>
</template>

<script scoped>
// import the two functions we need from the vis-network ESM library
//import { DataSet, Network } from "vis-network/standalone/index.js";

export default {
  name: "SvgDrawing", // the name of this widget in camel case

  // FlexDash thing: help text to show in the add-widget drop-down in FD
  help: `Displays an interactive SVG drawing`,

  // Props are the inputs to the widget. They are all reactive, meaning that whatever
  // reads them gets re-executed when they change. The tip is a FlexDash thing, not vue.
  props: {
    svg_source: {
      type: Object,
      tip: "The source of the SVG drawing",
      default() { return { } }
    },
    events: {
      type: Array,
      tip: "Event handlers",
      default() { return [] }
    },
    js_events: {
      type: Array,
      tip: "Javascript event handlers",
      default() { return [] }
    },    
    settings: {
      type: Object,
      default() { return { } }
    }
  },

  full_page: true, // allow widget to be expanded full-page, a FD thing...

  // computed values are variables that get automatically recomputed when their inputs change,
  computed: {
  },

  // created is called by Vue when the component is instantiated, before it's template
  // is rendered into the DOM. It's usually to do stuff that doesn't fit the reactive
  // paradigm...
  created() {
  },

  // mounted is called after created when the template has been rendered into the DOM.
  mounted() {  },

  // watches observe some variable and trigger a function when it changes. They're typically
  // used to trigger non-reactive code. 
  watch: {
  },

  // beforeDestroy is called just before the component is destroyed. It's a good place to
  // do some clean-up.
  beforeDestroy() {

  },

  // method are just simple method on the components that can be called from anywhere and have
  // 'this' bound correctly.
  methods: {

  },

}
</script>

<style scoped> /* scoped means that any CSS only applies to this component */
/* .network-diagram { height: 100%; } */
</style>
