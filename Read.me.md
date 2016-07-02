# Pink project

---
Please don't try to open file locally via Explorer of Finder.
Since many browsers will block external svgs due to origin mismatch.
If you see something similar in your browser console:
```
Unsafe attempt to load URL file://...img/symbols.svg#icon-youtube from frame with URL file:///.../index.html. 'file:' URLs are treated as unique security origins.
```
It means that you are opened `*.html` file locally this should be avoided.

---


#### How to run?

1. Install gulp build system globally: `npm install gulp -g`
2. Install all npm packages `npm install`
3. Run local server `gulp serve` or `npm start`


#### How to build?

1. Install gulp build system globally: `npm install gulp -g`
2. Install all npm packages `npm install`
3. Run local server `gulp build` or `npm run-script build`
