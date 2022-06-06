var express = require('express');
var router = express.Router();
const request = require('request-promise');

const jsdom = require("jsdom")
const { JSDOM } = jsdom
var dom = new jsdom.JSDOM();
var window = dom.window;
var document = window.document;

router.use(express.static("public"))
router.use(express.json())
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res, next) => {
  req.redirect("/index.html")
});

router.get('/', (req, res, next) => {
  req.redirect("/style.css")
});

const getSvg = (url) => {
  return request({
    url: url,
    encoding: null
  },
    (err, resp) => {
      if (!err && resp.statusCode === 200) {
        return (resp.body)
      }
      return null
    });
}


// let num = 0

// const addClassName = (node) => {
//   if (!(node.tagName === "STYLE")) {
//     if (!node.classList.value) {
//       const fill = window.getComputedStyle(node).fill
//       const stroke = window.getComputedStyle(node).stroke
//       let style = document.createElement("style")
//       style.type = "text/css"
//       if (node.id) {
//         const stopColor = window.getComputedStyle(node).stopColor
//         style.innerHTML = `.${node.id}  { fill: ${fill}; stroke:${stroke}; stop-color:${stopColor}; }`
//         ShapeRef.current.appendChild(style)
//         node.classList.value = node.id
//       } else {
//         style.innerHTML = `.${"class" + num
//           } { fill: ${fill}; stroke:${stroke} ; }`
//         ShapeRef.current.appendChild(style)
//         node.classList.value = "class" + num
//       }
//     }
//     num++
//   }
// }

// const findEachChild = (node) => {
//   const children = Array.from(node.children)
//   if (children.length) {
//     children.forEach((child) => {
//       findEachChild(child)
//     })
//   } else {
//     addClassName(node)
//   }
// }


const clicked = (node) => {
  // console.log(node);
  var ret = node.replace('<?xml version="1.0" encoding="UTF-8"?>', '');
  const svg = new JSDOM(ret, { contentType: "image/svg+xml "});
  const abg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="eN26DbCTmRc1" viewBox="0 0 640 480" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><ellipse rx="226.77622" ry="169.937168" transform="matrix(1.15263 0 0 1.250605 343.199613 234.896085)" fill="none" stroke="#ff5151" stroke-width="7"/><polygon points="0,-64 50.037215,-39.903347 62.395386,14.24134 27.768559,57.662008 -27.768559,57.662008 -62.395386,14.24134 -50.037215,-39.903347 0,-64" transform="matrix(1.15263 0 0 1.250605 224.301595 158.917351)" fill="none" stroke="#070707" stroke-width="7"/><polygon points="0,-64 50.037215,-39.903347 62.395386,14.24134 27.768559,57.662008 -27.768559,57.662008 -62.395386,14.24134 -50.037215,-39.903347 0,-64" transform="matrix(1.15263 0 0 1.250605 471.377477 163.557274)" fill="none" stroke="#070707" stroke-width="7"/><rect width="64" height="48" rx="0" ry="0" transform="translate(311.199613 211.116481)" fill="none" stroke="#1b31ff" stroke-width="10" stroke-linejoin="round"/><line x1="-121.217979" y1="-0.57999" x2="121.21798" y2="0.57999" transform="translate(350.159498 356.694055)" fill="none" stroke="#05f" stroke-width="10"/><line x1="-32" y1="0" x2="32" y2="0" transform="translate(812.411794 432.672789)" fill="none" stroke="#3f5787" stroke-width="3"/><ellipse rx="64" ry="48" transform="matrix(.543739 0 0 0.676656 224.301595 149.637506)" fill="none" stroke="#1d4949" stroke-width="10"/><ellipse rx="64" ry="48" transform="matrix(.561862 0 0 0.792571 471.377478 159.594112)" fill="none" stroke="#1d4949" stroke-width="10"/></svg>'

  console.log(svg.window);
  console.log(svg.window.document.querySelector("svg"));

  // ShapeRef = node
  // findEachChild(node.current)
}

router.get('/image', async (req, res) => {
  const url = "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Wine_tasting_re_4jjf.svg";
  return getSvg(url).then((body) => {
    clicked(body.toString())
    res.set("Content-Type", "image/svg+xml ");
    res.send(body);
  })
});


router.get('*', (req, res, next) => {
  res.render('index');
});

module.exports = router;
