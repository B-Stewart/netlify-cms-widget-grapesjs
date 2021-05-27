import { Control } from "./control";
import { Preview } from "./preview";

// declare global {
//   interface Window {
//     GrapesJSControl: any;
//     GrapesJSPreview: any;
//   }
// }

// if (typeof window !== "undefined") {
//   window.GrapesJSControl = Control;
//   window.GrapesJSPreview = Preview;
// }

export { Control as GrapesJSControl, Preview as GrapesJSPreview };
