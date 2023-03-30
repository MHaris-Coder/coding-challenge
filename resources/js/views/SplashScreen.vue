<template>
    <div :class="{ loader: true, fadeout: !isLoading }">
      <div class="spin-container">
        <div class="fa fa-spinner fa-spin"></div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "LoadingScreen",
        props: ["isLoading"]
    };
  </script>
  
  <style>
    .loader {
        background: #455666;
        bottom: 0;
        background-repeat: no-repeat;
        background-size: contain;
        color: white;
        left: 0;
        background-position: center;
        overflow: hidden;
        position: fixed;
        right: 0;
        text-align: center;
        top: 0;
    }
    
    .fadeout {
        animation: fadeout 0s forwards;
    }
    
    @keyframes fadeout {
        to {
        opacity: 0;
        visibility: hidden;
        }
    }

    .spin-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100%;
    }

    .fa-spin {
      font-size: 15em;
    }
  </style>