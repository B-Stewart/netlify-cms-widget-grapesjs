import CMS from "netlify-cms-app";
import {
  GrapesJSControl,
  GrapesJSPreview,
} from "../../dist/netlify-cms-widget-grapesjs.module.js";

CMS.registerWidget("grapesjs", GrapesJSControl, GrapesJSPreview);

// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)
