module.exports.onWindow = browserWindow =>
  browserWindow.setVibrancy("ultra-dark");

const foregroundColor = "#fff";
const backgroundColor = "rgba(0, 0, 0, .65)";
const overlap = "rgba(0, 0, 0, .15)";
const red = "#FF3B30";
const green = "#4CD964";
const yellow = "#FFCC00";
const blue = "#0095FF";
const magenta = "#FF2D55";
const cyan = "#5AC8FA";
const white = "#FFFFFF";
const custCyan = '#aff3fd';

// standard ANSI Colours
const black = '#000000';
const lightBlack = '#808080';
const lightRed = '#ff0000';
const lightGreen = '#33ff00';
const lightYellow = '#ffff00';
const lightBlue = '#1478DB';
const lightMagenta = '#cc00ff';
const lightCyan = '#00ffff';
const lightWhite = '#ffffff';

// custom colours
const cobalt2blue = '#193549';
const variableBlue = '#0d3a58';
const dustyBlue = '#34424C';
const highlightBlue = '#1F4662';
const frostyGreen = '#69F0AE';
const lightFrostyGreen = '#B9F6CA';

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor: yellow,
    foregroundColor,
    backgroundColor,
    borderColor: overlap,
    cursorColor: blue,
    selectionColor: 'rgba(255,198,0, 0.5)',
    css: `
    ${config.css || ''}
    .tab_active {
      background: rgba(255,255,255,0.05);
      border-bottom: 1px solid ${frostyGreen} !important;
    }
    .tabs_nav {
      border-bottom: 1px solid rgba(255,255,255,0.1)  !important;
    }
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background-color: ${overlap} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    .tab_tab {
      border: 0;
    }

    .tab_textActive {
      background: rgba(255, 255, 255, .05);
      color: ${lightFrostyGreen};
    }
    .tab_textActive i{
      color: ${lightFrostyGreen};
    }
    .hyper-search-wrapper {
        border: 0 !important;
        padding: 0 !important;
        background-color: transparent !important;
        display: flex;
        opacity: 0.8 !important;
      }
    .hyper-search-wrapper button {
      top: 0 !important;
      opacity: 0.8 !important;
      padding: 0 6px;
      cursor: pointer;
    }
    .hyper-search-wrapper button:hover {
      opacity: 1.0 !important;
    }
    .hyper-search-wrapper button:nth-of-type(1) {
      border-radius: 4px 0 0 4px !important;
      border-right: 1px solid #ddd !important;
    }
    .hyper-search-wrapper button:nth-of-type(2) {
      border-radius: 0 4px 4px 0 !important;
    }
    .hyper-search-wrapper:before {
      width: 20px;
      color: #000;
      position: absolute;
      content: "🔍";
      font-size: 10px;
      margin: 7px;
      z-index: 999;
    }
    #hyper-search-input {
      background-color: #fff !important;
      border-radius: 4px;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
      padding: 3px 6px 3px 24px !important;
      color: #000 !important;
      opacity: 0.9 !important;
      margin-right: 2px;
    }
    #hyper-search-input:focus {
      opacity: 1.0 !important;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
    }
  `,
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: "#686868",
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor,
    },
  });
