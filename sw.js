if(!self.define){let e,a={};const r=(r,s)=>(r=new URL(r+".js",s).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const t=e=>r(e,n),f={module:{uri:n},exports:c,require:t};a[n]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/0.BU_zNLAf.css",revision:"ec03b95024149c8d8a42fc28e2fc54d5"},{url:"_app/immutable/assets/1.BAilV8_-.avif",revision:"182755106b1b92ad1336f5cf476b4653"},{url:"_app/immutable/assets/1.BQZdaE3o.avif",revision:"be0cbbcc05db1aab0a0f5cf26dcc75f3"},{url:"_app/immutable/assets/1.CixqYgLQ.avif",revision:"d02a02cf28f20dcf66b2e598819820e3"},{url:"_app/immutable/assets/1.CucsGx5r.avif",revision:"77a554f1a6fece21ea59bb079bf36b4c"},{url:"_app/immutable/assets/2.BzgwyO_D.avif",revision:"c400c9fa9db5bad295aba3624023e64d"},{url:"_app/immutable/assets/cover.BJgz-7IP.avif",revision:"c49608a3cbb0ad50dd7d27e31a2aeab8"},{url:"_app/immutable/assets/cover.BuYYlmCG.avif",revision:"4f2d57ad36ebfc5670c7d95b02ef2933"},{url:"_app/immutable/assets/cover.Cq8kHEIv.avif",revision:"7cf1ebfeb1f9e898464e6f1698636eee"},{url:"_app/immutable/assets/cover.D7asOp9X.avif",revision:"deb9ca3ed873f0f28f4225901b7f74fb"},{url:"_app/immutable/assets/cover.DLVD1rVE.avif",revision:"5f8056ab64a102e11b4a023af8c87a73"},{url:"_app/immutable/assets/cover.DObE8GMJ.avif",revision:"dbe06412612ebd578d036a89d2578fe8"},{url:"_app/immutable/assets/cover.M-8RtayT.avif",revision:"60741442773f4110650cee09fa8dc88a"},{url:"_app/immutable/assets/cover.PKxx_Vey.avif",revision:"bcac4e95ac50e9d6f6ccfedd4c88d9fd"},{url:"_app/immutable/assets/favicon.DiqaJUa5.avif",revision:"f050e0496f83086f7d74e0dcab87927d"},{url:"_app/immutable/assets/phase-diagram-chemsep-1.D0lokJuQ.avif",revision:"4705a1203625006a96265e7f7826d2f7"},{url:"_app/immutable/assets/phase-diagram-chemsep-2.DJ21VPcq.avif",revision:"0cdc01709e31d986a7aca76b77356772"},{url:"_app/immutable/assets/phase-diagram-chemsep-3.CAYHBL_t.avif",revision:"ddf675920fb1fbb8026e7941329376f8"},{url:"_app/immutable/assets/phase-diagram-chemsep-3.CDtPMnpC.avif",revision:"fb26dd0eb048a750ddd2f86b156da515"},{url:"_app/immutable/assets/phase-diagram-chemsep-4.CpzyAS04.avif",revision:"13e866c0853497291e45330fd1141093"},{url:"_app/immutable/assets/phase-diagram-chemsep-5.BeHQyxE-.avif",revision:"51139344de7371cfdb31588b5640e0bc"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-1.CYWHUXmC.avif",revision:"06d4c24d1c95ac4bb710a7204fc1840f"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-10.CVAf_hB2.avif",revision:"33f1d4934a3371f02d548b622619248f"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-11.CPuaK5Ok.avif",revision:"606ecd9a285039c1157b9f0f44ba7262"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-12.CpgY3eQ6.avif",revision:"591a5e5467efb14da84607ff30ce2c6e"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-13.CK6_jA5x.avif",revision:"e3096913d8c95684f84c9d810bba8363"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-14.CFuudMfX.avif",revision:"60a9680152830b637dca663bebe49a55"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-15.Co7OU_4f.avif",revision:"49205febc81091debc0aef8ee079e008"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-2.CO4CnQHC.avif",revision:"eb28e01207ad17e422222ab54ad59d53"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-3.cYFW1prb.avif",revision:"a198b093745a504f34944cf7ddeb63a6"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-4.BkJF7oqz.avif",revision:"d0ad0fa23be0a3baa9f74568ed4b9589"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-5.HnKm0qIu.avif",revision:"f9c584b835503791234f8a8cdc68b4c8"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-6.tBQXhwl0.avif",revision:"24d28380b07afbccc068819f440ea86b"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-8.DmCFE1tZ.avif",revision:"6fa46c1f98799bbe758ecfb9987e3918"},{url:"_app/immutable/assets/turn-any-graph-or-chart-to-a-function-9.CKyBOBo4.avif",revision:"a08687071f7dab69bbfbc0aa6247a8c8"},{url:"_app/immutable/chunks/entry.T_Zi4SfO.js",revision:"50dbb62be1fa252370a25fa1d8054545"},{url:"_app/immutable/chunks/index.BI7v63FY.js",revision:"d5368d39bd3bf59876e42a1851d811fe"},{url:"_app/immutable/chunks/index.CPkGT8D8.js",revision:"0b37c74eb4c2191e027fbf0b53edb745"},{url:"_app/immutable/chunks/post_card.DZA2OJB6.js",revision:"0d47f9a4636f2b197dc513e9dc9a2727"},{url:"_app/immutable/chunks/post_layout.DVKmMXBK.js",revision:"40360c2d1d9af72540bc67b0bfcf72ee"},{url:"_app/immutable/chunks/posts.B8VZUOZP.js",revision:"426b71eb952da48a7c9861b45911e8da"},{url:"_app/immutable/chunks/posts.cGomt25j.js",revision:"aa80119ea6990f94ba1774f41bb9c00a"},{url:"_app/immutable/chunks/preload-helper.BQ24v_F8.js",revision:"472c6113b1d8c07d0abf58e2dc75283f"},{url:"_app/immutable/chunks/scheduler.FGUOCI5T.js",revision:"2fa015b27503f1afd3bacdc5aa48436f"},{url:"_app/immutable/chunks/stores.DFen5_Og.js",revision:"d90f68fee3248c464bc8c03f58744294"},{url:"_app/immutable/entry/app.-gn-uNE7.js",revision:"28877d7a895ea9f930149ed7f8e0e697"},{url:"_app/immutable/entry/start.Bs5eQ01D.js",revision:"dbc9786d4d43935c4087d9fb9095af52"},{url:"_app/immutable/nodes/0.Cqw3OZSJ.js",revision:"5ba3b44015259dde07300b3520b0bdc7"},{url:"_app/immutable/nodes/1.BSIJ1PkA.js",revision:"08c074d6a4123bd4526d6cc3849e11c9"},{url:"_app/immutable/nodes/10.BcSWtmd0.js",revision:"3ee41e9744b66b9bc1a366e4a4b6e5be"},{url:"_app/immutable/nodes/2.DRVaE5ip.js",revision:"cdcd38d7867c74e88eb2f7913e0b5225"},{url:"_app/immutable/nodes/3.DOZweDJs.js",revision:"b1d796b0ec7f2c075cb03bf2e4814a87"},{url:"_app/immutable/nodes/4.BoYrAM3P.js",revision:"f53c0f2d1eeddeb0884152d78b539bef"},{url:"_app/immutable/nodes/5.BvuNorbL.js",revision:"1ab679cda12e2b8b10ebc9c0712ec352"},{url:"_app/immutable/nodes/6.BrzjSvl2.js",revision:"0877e27732f5e40d6dcca1aeb355493a"},{url:"_app/immutable/nodes/7.U-ElA8wH.js",revision:"c18abe6ce8d43601087a4995d21e4131"},{url:"_app/immutable/nodes/8.DvUKliad.js",revision:"0a36ab439155406029055ceeb6873398"},{url:"_app/immutable/nodes/9.tbVMZ85V.js",revision:"3984e3b35f14f8f08b13b059625c03ad"},{url:"assets/any@180.png",revision:"f4f60db532ae6da52da5ede208b59988"},{url:"assets/any@192.png",revision:"5206db97ccfcfb7aa8250cd1ae88ca7b"},{url:"assets/any@512.png",revision:"18a88f7030b0f8485466d553489a55b9"},{url:"assets/logo@192.png",revision:"9e93919b6c3a5685eb479e14ae8f34c2"},{url:"assets/logo@512.png",revision:"17c6d820cbd6f7ee441d9ff6d0329883"},{url:"assets/maskable@192.png",revision:"6b777c4543f418b595d173d3d6839a26"},{url:"assets/maskable@512.png",revision:"4de74e06031ddc52aa54ff80f1300aa6"},{url:"favicon.ico",revision:"401b8fbe23046e28943c9ed44ea66555"},{url:"favicon.png",revision:"137640ce164cb27fe96170080632de13"},{url:"how-to-calculate-dew-bubble-point-with-dwsim/phase-diagram-chemsep-3.png",revision:"94e8a77e88208dfa39ab62b9f47d4553"},{url:"isi-sumur-migas/1.png",revision:"d10c2a5ce83b9c476abf0977384e64b4"},{url:"isi-sumur-migas/cover.png",revision:"f7df375ce5038e0d41f00cf81e7fc2e7"},{url:"saat-sadar/cover.png",revision:"72e88edf90cac1c14826053b2792f220"},{url:"turn-any-graph-or-chart-to-a-function/cover.png",revision:"52f37281dbc6ad200c116bf46cba6a26"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-1.png",revision:"55a4e29e99b18cd98bff35f8ea4b09a4"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-10.png",revision:"73d10a8812267b36737c943b4edefbd3"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-11.png",revision:"062bc74f31528105ec0bab2db1dae8b2"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-12.png",revision:"198d097867d9118999158deaa6321f0e"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-13.png",revision:"a78be913b8669131eaf7de9edd383842"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-14.png",revision:"09e9b431177ab94893c95bf0bbdd1dd6"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-15.png",revision:"acfc13c03f04cad28dcc2e0b88136dcf"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-2.png",revision:"4188ad97e5b6ff44032917957c70a188"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-3.png",revision:"5cee7a6a6414d6e367d3f0366f25c287"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-4.png",revision:"744d18f59a771b6d0923aea130d6e595"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-5.png",revision:"dfb6a6e20ee83a4c372219ee112e99ea"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-6.png",revision:"e7f82229591415c9855efd673301430c"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-7.png",revision:"52f37281dbc6ad200c116bf46cba6a26"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-8.png",revision:"e25adbc35ba6050a304cf3052374d050"},{url:"turn-any-graph-or-chart-to-a-function/turn-any-graph-or-chart-to-a-function-9.png",revision:"89e7c0b168ec8c6a7d71f5713eff7d51"},{url:"server/_app/immutable/assets/_layout.DOQVO150.css",revision:"80e2e74dd25b1e3bf2035b162db652a7"},{url:"server/_app/immutable/assets/1.BAilV8_-.avif",revision:"182755106b1b92ad1336f5cf476b4653"},{url:"server/_app/immutable/assets/1.BQZdaE3o.avif",revision:"be0cbbcc05db1aab0a0f5cf26dcc75f3"},{url:"server/_app/immutable/assets/1.CixqYgLQ.avif",revision:"d02a02cf28f20dcf66b2e598819820e3"},{url:"server/_app/immutable/assets/1.CucsGx5r.avif",revision:"77a554f1a6fece21ea59bb079bf36b4c"},{url:"server/_app/immutable/assets/2.BzgwyO_D.avif",revision:"c400c9fa9db5bad295aba3624023e64d"},{url:"server/_app/immutable/assets/cover.BJgz-7IP.avif",revision:"c49608a3cbb0ad50dd7d27e31a2aeab8"},{url:"server/_app/immutable/assets/cover.BuYYlmCG.avif",revision:"4f2d57ad36ebfc5670c7d95b02ef2933"},{url:"server/_app/immutable/assets/cover.Cq8kHEIv.avif",revision:"7cf1ebfeb1f9e898464e6f1698636eee"},{url:"server/_app/immutable/assets/cover.D7asOp9X.avif",revision:"deb9ca3ed873f0f28f4225901b7f74fb"},{url:"server/_app/immutable/assets/cover.DLVD1rVE.avif",revision:"5f8056ab64a102e11b4a023af8c87a73"},{url:"server/_app/immutable/assets/cover.DObE8GMJ.avif",revision:"dbe06412612ebd578d036a89d2578fe8"},{url:"server/_app/immutable/assets/cover.M-8RtayT.avif",revision:"60741442773f4110650cee09fa8dc88a"},{url:"server/_app/immutable/assets/cover.PKxx_Vey.avif",revision:"bcac4e95ac50e9d6f6ccfedd4c88d9fd"},{url:"server/_app/immutable/assets/favicon.DiqaJUa5.avif",revision:"f050e0496f83086f7d74e0dcab87927d"},{url:"server/_app/immutable/assets/phase-diagram-chemsep-1.D0lokJuQ.avif",revision:"4705a1203625006a96265e7f7826d2f7"},{url:"server/_app/immutable/assets/phase-diagram-chemsep-2.DJ21VPcq.avif",revision:"0cdc01709e31d986a7aca76b77356772"},{url:"server/_app/immutable/assets/phase-diagram-chemsep-3.CAYHBL_t.avif",revision:"ddf675920fb1fbb8026e7941329376f8"},{url:"server/_app/immutable/assets/phase-diagram-chemsep-3.CDtPMnpC.avif",revision:"fb26dd0eb048a750ddd2f86b156da515"},{url:"server/_app/immutable/assets/phase-diagram-chemsep-4.CpzyAS04.avif",revision:"13e866c0853497291e45330fd1141093"},{url:"server/_app/immutable/assets/phase-diagram-chemsep-5.BeHQyxE-.avif",revision:"51139344de7371cfdb31588b5640e0bc"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-1.CYWHUXmC.avif",revision:"06d4c24d1c95ac4bb710a7204fc1840f"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-10.CVAf_hB2.avif",revision:"33f1d4934a3371f02d548b622619248f"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-11.CPuaK5Ok.avif",revision:"606ecd9a285039c1157b9f0f44ba7262"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-12.CpgY3eQ6.avif",revision:"591a5e5467efb14da84607ff30ce2c6e"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-13.CK6_jA5x.avif",revision:"e3096913d8c95684f84c9d810bba8363"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-14.CFuudMfX.avif",revision:"60a9680152830b637dca663bebe49a55"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-15.Co7OU_4f.avif",revision:"49205febc81091debc0aef8ee079e008"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-2.CO4CnQHC.avif",revision:"eb28e01207ad17e422222ab54ad59d53"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-3.cYFW1prb.avif",revision:"a198b093745a504f34944cf7ddeb63a6"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-4.BkJF7oqz.avif",revision:"d0ad0fa23be0a3baa9f74568ed4b9589"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-5.HnKm0qIu.avif",revision:"f9c584b835503791234f8a8cdc68b4c8"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-6.tBQXhwl0.avif",revision:"24d28380b07afbccc068819f440ea86b"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-8.DmCFE1tZ.avif",revision:"6fa46c1f98799bbe758ecfb9987e3918"},{url:"server/_app/immutable/assets/turn-any-graph-or-chart-to-a-function-9.CKyBOBo4.avif",revision:"a08687071f7dab69bbfbc0aa6247a8c8"},{url:"server/chunks/exports.js",revision:"e920d81e281ea3c66d681d1d6b1ea6aa"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"ae835e5e705367d4a7362dc2361e3e64"},{url:"server/chunks/index.js",revision:"7d516ecf4065d6cd7f1cfd479a26ee95"},{url:"server/chunks/index2.js",revision:"8ebae786535102fbe234640fd4f6ebcc"},{url:"server/chunks/internal.js",revision:"9ed184b432c52c60b17640fd8d5b27d5"},{url:"server/chunks/post_card.js",revision:"8f88d690157c2637ef5b85e8f1945365"},{url:"server/chunks/posts.js",revision:"2a5dca0c1b4f6c51fb6b0d1e1f32e3d2"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"95e41bbb4e698e3f115ff0e10bc1b4b5"},{url:"server/chunks/ssr.js",revision:"47d1ebcbf5650d714c61c4e1161270ee"},{url:"server/chunks/stores.js",revision:"3f2ffa1498dcccbaaa2b35aa23b94315"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"ad6cdc1cbbf01bf5cf54700e9ba8f609"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"9683781fe90d1aca90c3ba085f82d4d2"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"a55751f0342c61e027c4401460e67ccc"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"48ac44a8bfeb2b172771a8410ce00d7a"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"2696d65cf912a1c762ac6c693cb1842c"},{url:"server/entries/fallbacks/error.svelte.js",revision:"872888901dc3cf741c337a764cc7f3bd"},{url:"server/entries/pages/_layout.svelte.js",revision:"3377abcf69fcf5860516cf43777c0b58"},{url:"server/entries/pages/_layout.ts.js",revision:"c16450e3e496b092d739d84611674b71"},{url:"server/entries/pages/_page.svelte.js",revision:"1916787b972ffba426208b22b5e5a697"},{url:"server/entries/pages/am-i-different/_page.md.js",revision:"ab28d9df6bef95228f154278e476af7e"},{url:"server/entries/pages/hilang/_page.md.js",revision:"935551f17bdc400df7e32d58fdfbd1f4"},{url:"server/entries/pages/how-to-calculate-dew-bubble-point-with-dwsim/_page.md.js",revision:"3838b8686d50ac37e6a672f64d2d3f8a"},{url:"server/entries/pages/is-someone-changing/_page.md.js",revision:"5054d3072c0a176056c74a1e41e0ccad"},{url:"server/entries/pages/isi-sumur-migas/_page.md.js",revision:"1700dc20aa10c6fe4f4e6ce0e8e6c2f0"},{url:"server/entries/pages/saat-sadar/_page.md.js",revision:"6acbd723d57547346f20e6464cf5c989"},{url:"server/entries/pages/solo-trip-to-vietnam-part-1/_page.md.js",revision:"65516a5f91170055d2217c988f5ca01a"},{url:"server/entries/pages/turn-any-graph-or-chart-to-a-function/_page.md.js",revision:"de1f8e0facad53b66f98758bd700fd11"},{url:"server/index.js",revision:"62dfafb09409741d2cf4a51bc6f3b054"},{url:"server/internal.js",revision:"3981fc423a6eed9c7b6608a12de568ea"},{url:"server/manifest-full.js",revision:"38229ce19c53ee495e8c41e73fa91485"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/10.js",revision:"958ebdb8a9cf58cd744e37833c933590"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"},{url:"server/nodes/7.js",revision:"e22e3d1ce8bb198a6783d7a2d6f24681"},{url:"server/nodes/8.js",revision:"bdc52451b2c36e8b730bd7a48718204d"},{url:"server/nodes/9.js",revision:"8e755d984cb8a89877bc64ff812e3169"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
