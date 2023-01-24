'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/img/dark-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/light-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/img/light-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/dark-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/dark-4x.png": "a4461ada88d7d5c9ef9b85676c84b06a",
"splash/img/light-1x.png": "5fcf94c7fe527528aa70b0b40be0405d",
"splash/img/light-3x.png": "2dace4c08dc337300492ad6472dd8c96",
"splash/img/dark-2x.png": "5599cdb1741b29d70010fb70547dd445",
"splash/style.css": "3f80d51781f907d2597898bb74841ccb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "f0b9b02a886aa80bc2c0d43183ff7b0f",
"assets/AssetManifest.json": "97476beda619d6fe3ff0b234c6b5fcdd",
"assets/shaders/ink_sparkle.frag": "6f41b9dc089f4cd72e747e756cf6bc9d",
"assets/assets/images/avatar5.png": "8e08f5723279cc8bfb2e5280305b4ff9",
"assets/assets/images/avatar15.png": "660ccb6f971f7a3d321e7e728a7ae104",
"assets/assets/images/swipe_logo.png": "05234c2e421c6da8a16e013e9d199fd8",
"assets/assets/images/splash3.png": "560e5f89adb851fac9694689c5b3a102",
"assets/assets/images/avatar10.png": "f79acc4e6604f13f57d6b1d6aced7b5b",
"assets/assets/images/avatar11.png": "842d9edecb53136dc4381a4e2b4e58f6",
"assets/assets/images/avatar14.png": "e3f21314f6c2efa4e547f4a1bf5951a2",
"assets/assets/images/avatar13.png": "addfa3e187adc82b77bda878babd633e",
"assets/assets/images/avatar8.png": "5902c379af5db5411b06fe55ebd83b26",
"assets/assets/images/empty_coupons.png": "7cd26651d3bc9747809a07fb1ea2ebd5",
"assets/assets/images/avatar9.png": "b5d064d98c8f6a0c7913ee2a83332759",
"assets/assets/images/avatar4.png": "2de4675e346f82d720300337dacff237",
"assets/assets/images/avatar2.png": "6ee043ecff2494569dfb21b52c6e162c",
"assets/assets/images/faq.png": "428cd11b33c559a02e7be1b8ec6184f5",
"assets/assets/images/empty.png": "99c43d6047bb43ec8b8335de45347e6d",
"assets/assets/images/first.png": "68c80699c2f8c296101cf57d3237fd43",
"assets/assets/images/avatar6.png": "d494f6af3e87274f82a86e91a711894b",
"assets/assets/images/empty_request.png": "961705d4f86217ae8e60aabd28bf5dbd",
"assets/assets/images/avatar3.png": "85e79442e745037627b0d32adcbedcf3",
"assets/assets/images/avatar12.png": "0c46298e79e11f26c780929592407d5e",
"assets/assets/images/empty_coins.png": "dc0a489ce1ff0009685cbbd1c1f52b04",
"assets/assets/images/avatar1.png": "443109302e3dc4493529a80bd4724166",
"assets/assets/images/avatar7.png": "90a5a5ad3f018f1e265f9a76f6e3eae4",
"assets/assets/images/category_vote.png": "20237f05407ad1e8f764a7fae552e062",
"assets/assets/images/report.png": "6c6cc9e9ef0556c17832ddbb726a2a2e",
"assets/assets/images/coin_image.png": "77b8696caa4a06f72560ff0e08f77fe4",
"assets/assets/images/premium.png": "083253d03740ad4945b1f16e9132bd42",
"assets/assets/images/empty_bookmark.png": "ca1eab15ab607c8f50eca94e2825c4e5",
"assets/assets/images/empty_fav.png": "333c2065eebca47a03af8a5678283f8a",
"assets/assets/images/avatar0.png": "1051badcb1f45c197298175e3b5941f2",
"assets/assets/images/splash4.png": "557822a45b5800e654e5e6ae3dd54fd4",
"assets/assets/images/splash2.png": "1bb6dca4dc5d8a5804994f515572fb8c",
"assets/assets/images/empty_req.png": "ad75d5102fda159cf93842bb9579120f",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"version.json": "0104aaf6c45ddfcf3ac5bad2f501881e",
"manifest.json": "f0d854bd5aa3583eeee928cb73fdef8d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "7ef9fc21de8e23e74250f6ca13d3d728",
".git/config": "8df3279d4a205a419693d4d9cd9acdbf",
".git/logs/refs/heads/main": "163241d8f7d6b185d1c1fe0bc4fd1f38",
".git/logs/refs/remotes/origin/main": "cfeca7c6eb4507a11033a153800d22a2",
".git/logs/HEAD": "a465beb166a84c9ef4fdc68724d7a074",
".git/index": "14e7d41a615abe6162dea4ff21d15d32",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/refs/heads/main": "b9a96c712e1d7b97c1e290483426e2d5",
".git/refs/remotes/origin/main": "b9a96c712e1d7b97c1e290483426e2d5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/56/6235f040a8c41dccd68c3659ff6aa3b2d41283": "503fbbe90aef5288e9adc30d11a86f5c",
".git/objects/c4/ddef2eff86fe2c9cb241bf871376dfe2facafd": "fe131a048e014022fb408ac0bbdb513f",
".git/objects/e3/339247e06c9fb26cd2c0959f35e7206ace6a86": "99254638c93e0f2ee93700deec891307",
".git/objects/fb/b1de2bec342900805420b81a6bfb24357d847e": "4e312d711d397fc3be95aa24e2111fe4",
".git/objects/96/f9daf916c1e2b7320cb9d1c17b42985ad175b9": "37fa447ff8f1a9caec9382b78409cf39",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/fa/0595cd706c2fe7afca12cb9f279e82907f02e3": "e998bdea4a791944677d086590874bcf",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/4e/63d55564d29dca6ca5b2b49bb4b24aeff657db": "7f8b362a9de57fa33678f6f39cf1c368",
".git/objects/46/bd1f8e30c1e09c3006a573fed5290767a89928": "ec1e398e2940fa98ca4cd926e5e37589",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/cbe02efaa72f8ae6a28a7c0369d51aa431b569": "b6fbba9cd0bf0a07ba42aba68f1a62ea",
".git/objects/1c/aba8bb3f310babe23ee107a05df6f0d739c819": "9a2acb63a8737ffdc036ac223afb480b",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/cf/b319033f3adad204b6c3661fb0bd7c4a917d5e": "d46e6ae02cd89b32e565c88673877e75",
".git/objects/cf/78a5afeaa563e3d2715eb4acfcfefa185d2280": "0db15164a67b2c99b40913068ea12fa2",
".git/objects/7b/2f6bfc4bd71c30be2685f57bbbc24d2cf12da9": "ad503217248f3c1eb4ccad4373714baf",
".git/objects/f9/5641f2b7554715ef558efac80f37eb1390c4b4": "d69422660850073f06aa62bd992593ff",
".git/objects/67/90b1a9fc13af9c33a958319f45240bff413fd9": "4c7e242e14f82bc99a49885b66c9a4ba",
".git/objects/0e/e9df5d77ea85777265d9ffa420964e1c4239bc": "ab812a90592703b6f1c86ae54574216a",
".git/objects/e8/38afcf3e805b895df66462d68e133ff90abf73": "1a268f6d7185da6a619f7b10552c480a",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/b8/0cf3584c4fb05929274bb21144cdac3173c622": "996b1d7fc35ef5f0587276b09f9f22d4",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/5e/d101ebfedef15b8b4d2458dcdc326fb8b54a86": "c6ab42f004144f261e7493700e3a1ef0",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/41/142820922ecc79713c8713c4b70ece40f3eacb": "f7b8f5fd086082ca356c00571f736541",
".git/objects/53/bf9419dee3f6af02a6893b37cb65eb4c603624": "894a526dbb1169b6f990c8e939f3b504",
".git/objects/c8/3e56ac24688550a79daca4504cd6dea5c53267": "3a169761a75df14d0ad6c0a56dccf47d",
".git/objects/21/260fe3b7b33808a5202f7cb9c0faf376501bad": "d764dcdbc4852b706db39248814065a3",
".git/objects/a3/62ed631e6e05b0d45833efbfe38322e19ab9b3": "7b8daa4f6c238ad927f3a5f64c0dc207",
".git/objects/72/f3aa79f1a5b504522fc57e37e6309fb3945280": "805c020b1a268577b6df9e8bf78de44a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/27/23615f6b61124a846cb72400322c6cb898cd1c": "31bff7c7a91923f58b57736723028a94",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/54/a6b9d8ae598faafd1451b041da9769094ef35c": "cda82d1722b5e135fbcc9b292eb72cda",
".git/objects/54/55bb6c4deed7486fa689a72811784f5ec2b41a": "e357bc7cb72128e8b0b1adb03ef748f4",
".git/objects/f8/278cfcad7b2113508bedeae939dde2a6b9ca3f": "75e0395403a94dd173c9e19bf2176642",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/6c/06ca072ae640c26c10836912d92b3628e654b6": "ed1f3650a62d122048252ec64218d3fd",
".git/objects/ce/f7dbadee0ebe2f83da571d21a35eb5aba6854a": "dbe08ec0ec1013eab7c625ec33b802cf",
".git/objects/c2/b90ef9c79a271ae801f7303bf158e72b0b7889": "9b7d9b588d78878abdef790be6d90247",
".git/objects/f3/29a0e895d6b96ebc13543917e15bcd8e02d1f2": "de5691681b97f324123b48a42b4ce212",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e0/e81d8586ce312a4ad78bb5c8ed78c9aa0a91a7": "56d3ac73ed719168e3b56ae4c0b873ba",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/fd/7cb932411a398fc488abd7ae38328efe36184c": "985a8a894f9f16e8c1aca19cdcae936c",
".git/objects/2e/68e2427021b713f716044b00be4e4c62d93f3a": "4196afe1497d1bd65bb268cfff2ebcee",
".git/objects/09/a34f59b7b046c6be8f247434833e9dbe5e9ea1": "692720a94334a689e1ffd037b0414543",
".git/objects/93/28b4ee54d926e3a656bcfa3466a7ce1b21b285": "2d4e608ea905cdc0595455bf5146f29e",
".git/objects/03/0044bee9b8925207050d42e12805fcf9e08b8a": "6e30fdf41d721ca7c003bf49a1678a7b",
".git/objects/03/91a04e68ab9e96364f7687aa875e5de743b3fb": "e5b62328542f6e7e7878311b640ba4c5",
".git/objects/1b/123609ac84dda71f6027aaf628804a2efb5bc8": "a579bae4dd649db8329723d0a87d98bb",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/33/4f3602f3dd9c49dbd0fa87a45505500f8ea3a9": "dd69de4ad0fa642b304b175c316b752a",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/45/de5b3829a9448e3af76569619b4e3dc04be15b": "dd31d9cf9b8eeae1801bba54a7b251a9",
".git/objects/45/23f1622dd56269964067e068dc77f5802d8c63": "32652ea4741d8dc3f749b2010fab63e1",
".git/objects/3a/b3918b4685a0b546616d765e33e073ccec5900": "1c876cadb75b025e664e407eb0c975f8",
".git/objects/b3/07b12da6e3b4bf7f071bc4238a512189de180c": "2daea03fac1e2cc935fb1f648df69b30",
".git/objects/6d/7b434f567be5fb03bb514602d55231bf1a12d2": "3b2de91082f10c071dcce87bd896c72b",
".git/objects/0c/fb1c78e793ef1ca2c6ebcab9b74b9196f4828d": "72f8c613e4d9ed9174e276ad17443d20",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/2c8017efa86553904f0246926eac0a38ae9a6a": "6283ca6fde495fb0dbff891d6f23a375",
".git/objects/5d/9c6faf5f38cfac3d72514fcc07bc62297adc90": "aca83a898bc1fb62408686fe0d851d60",
".git/objects/5b/886c29b2c71c8cebded9d2588a618f5554246c": "43f624776298c75e7eda81e91f4f1ad4",
".git/objects/5b/6179823f470eb84a0c60766516e025b06269ae": "4a8df141a89e725da9c3adb8053767eb",
".git/objects/3d/008e0aac75b49ffef2fe6e2e11e753aa85c004": "bf73ff9d1f84615bbe8f6ea0cbee5197",
".git/objects/59/5a8322511a8cc47fdc9f2b0f8ba9e80f8a98ed": "06bf205590d6cbf040a803806f7ac962",
".git/objects/1f/d3e3afd3be828ae69c83a1ffcd24ec023ad992": "af75e117397b56f41c6cdf0a24d28092",
".git/objects/9b/3a1f86c460352621d7b838c97c6d9e0998ff86": "d7ace806c4263a217cb913f32b1f5efe",
".git/objects/a5/81b3c53c955f8dacdfd28f2d7d4f3ec7253454": "873183a4ac4d193689910f5ed792485d",
".git/objects/b7/f8b37aad5fca0dbcef0a574a35c097a9344776": "cba38b3ea2c7a2dd278dc9c75f13a010",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c3/d96efc85d37c4facb1e5d3c2acf5b22402e7fc": "10ee35f4ee116a43cbfe9dcddb9551fb",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/0b/4b902f57d31074e3b68409c6d26d9e474ff5a4": "146cb1261e64d6d790e43e16efadfd59",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/85/c69a6bf9df70c6d743f5f504d813c6f6a6b9b4": "90553b3f1dbd11745a9172cc2afeb613",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/d3/983f80a93ddff96846180ff968be12b3ff0c54": "1d549d0e30a69d44313c776d4102686d",
".git/objects/07/fd1d94186c723c715b38d9bf0649fe5f41392d": "90596b815c757a6620c769aff223225a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/8a/02052b0399b557dc3958aab373be840380a8b8": "ffe1490b65174247e84f5aa42a8f014b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/91d348e134faecb2902b9c6f2d037389c52f83": "6b44c6e1d95b6f61d01b07f69e80ed3f",
".git/objects/7e/e147baa8ec24d558c65b59bdfb97847239b202": "16b05179a41462657d7eaaec7078e15f",
".git/objects/97/98a5a0fa642c22284d7bd35f537606d40db65b": "f9d84186752bf1d8e42a5561e3ce86b1",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/5c22cbeb6daf9bc4350378a0ca0af94223f793": "a7e1ff31b6897e1b6745faba85fc27e8",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/47/29f76f532fcf5949b1ce2953fed5a20b0d9045": "f4d6d058a2f4ace8da06e1e577368480",
".git/COMMIT_EDITMSG": "d5e487e8596c628f00d15262afeb00fa",
"index.html": "849fa220292aaf6ed1f87351f9da65d5",
"/": "849fa220292aaf6ed1f87351f9da65d5",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
