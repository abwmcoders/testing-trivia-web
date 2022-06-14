'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "671ee0b2608f4cd367e1d1451df9e175",
".git/config": "b52fe0441d7c98f8365c3e7e32de4f23",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b8d78ee3a92ec26884d19cf3514d700",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e91d454a336b021e7de9fb9caeee8ec5",
".git/logs/refs/heads/main": "0d05fdcf5fe2a4a9f876f372b546778b",
".git/logs/refs/remotes/origin/main": "7dbfa865790555f960158dab45dc4a35",
".git/objects/00/8b4f52ef2da546f45551c0b997201b51afdb8e": "d4154604c2d65f278a1918665613a0be",
".git/objects/01/6913446a6be0a946e9aa6a5a17bdbe6fddbdb4": "6832a3fa8991822b7d5cebedce352c0c",
".git/objects/04/7190ca803b37da6f6b35b4cb1ea6199750781c": "ffbd9b5c885a163b60e073d117e1599f",
".git/objects/05/1804d3cb3da4a794b1d05245f24ba5843479fc": "54965e9870580122c33781f51b5affec",
".git/objects/08/43933940ef7336b15e01cad7318d15e8f8200a": "48bae084eadd542d3c4a258e5f41724c",
".git/objects/09/86734be0f26cc90c66970aa49ca5eb749c4774": "f14cda394def3bd9dc9f839e487f78ce",
".git/objects/0d/d8cc76bb94c3d83b5e7229113af28dc3561ca5": "de99236b856c179d06c774c4a23edddd",
".git/objects/0e/54ab7e9b0e6e6bc1d3555a83a15d69dac414b7": "538a90d591c4b783487931283251249f",
".git/objects/0f/1915ec743d06f09102cd7a4fcf83a3ab8c8094": "1c696663f62ce0d8a68ef68c11e0be3b",
".git/objects/0f/afbccaff5ff40071e28fd770eb2bf34abe9b2f": "b122818f25c7b4e641a83d9be6359614",
".git/objects/10/9bc1ad92eb8746b01bb3a5f5d4f1ba122457d8": "c9523f349ee0a6a84ae58de84c0211a1",
".git/objects/17/c0694ad47124fb4ae09e66c55d4e39e13382c3": "7122867b39a13d92bc0de81b1dff02c2",
".git/objects/18/422642403518eb7f93de676ae11bc01bb42f30": "18d2f6e1ba3d78e954601d4866facbdb",
".git/objects/1b/6aaf1d1eef740fdeec27819f87792182c61fb7": "9f6b92b84d5dd303f4391b0292e153a7",
".git/objects/22/1556cfe9443876452a79e6d3722e0ce633c17f": "38bbbf764e1b8c0f9e3a262521462a53",
".git/objects/23/f24cc6631767bf311fb005bd590184d208ebf3": "94317ad7db154ee2096394534ae85b44",
".git/objects/26/2878d278ae24ca2141483b3463389941432b71": "0a627459a60922da2c8ab243446cf3dd",
".git/objects/27/2f6e6553dd86d507d0cb39ee46d8281fe6508e": "f5608dea53fe7e942fbb8332f766687e",
".git/objects/2b/8b765dc5186b433b2ec6db6a0d9b94f4ea316b": "06f791d154640cad3bde25d3770b5ea6",
".git/objects/2c/222e49bd7a3697b0723d4a6786c18fe944a07f": "dc8512aef18722056f97d533179f72fd",
".git/objects/35/0adbe7f6f399c284c5d18503ed434ee0966de7": "bb6cd6607bcc53c049504154da38d2ff",
".git/objects/38/9f60ea0ba220130a55f01752bf81ad1b7cd5d8": "d1875bfda5211604ebc82f932b2a5dc4",
".git/objects/3a/060980d2d2db9f643875ec603ffbee0dbb4042": "c2cb35cfbebd942876af5cb5d69b822e",
".git/objects/3a/154ec3c885313b4f6dd90bf08942d7086c66d1": "19372274f9100a52ccf870c4cf16ad70",
".git/objects/3a/23b43e2bbc21b0b68b926f012b11a8c22fcf76": "149cf6911c1e0a96c29b5d5031bd5bd3",
".git/objects/3f/aa43768e28d8965121a08fb4d61ea199c87c52": "e446a2278d42a5b1dedd05c27feeb561",
".git/objects/40/0c8512f56bea6f9efeede2044c8c93c405c0bb": "b68898fdcb780862bb09bc45f4c5aba5",
".git/objects/48/5548a2d30b71d61a29b3459a4b8255b9a1cd66": "a2efa2ee4e52a4b6415d63ac65e1fb37",
".git/objects/4b/80aaea92a583ad0228a05b13887dfde4e0e1bf": "56ae665a3c235ed2b1233d55f6f8ae0f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/f0a8c3c0d636b0e7786ddfc6e463544a4492c2": "0cbacf758eba9a3a6814ce8a136c8ba0",
".git/objects/50/b4ca5877c87bbe67880ae372b341d2f3eb2fae": "cea5ae9ac0a3d1719add97ce45396921",
".git/objects/52/5d4af88b48351108130906f6233db31db50a0c": "a87e277dc48b127e94deb1b62f8ea4ee",
".git/objects/54/bd81842cf615d1194ae3a96d42cb2d1d633d09": "ff0d9fdf06651b4ef8928cbf8a5c4b5a",
".git/objects/58/7fbbaaa118f2a564dfdf767396f5f5007645d5": "b05d3d4adcb055be8afce9b5cc9b0aa2",
".git/objects/5c/37cf2eda0f0ae7690914996e3b5c6993698517": "d382572aac04bdc97110b4b7daea52ce",
".git/objects/5c/4235d526986a28810d361885a64c4c99835445": "f1b0c43f54f9d7e41c1e910391153873",
".git/objects/62/e5e2c2a58c67458327825e24df5dec20981597": "aad67cd70d04390e23810cc729a892d4",
".git/objects/6a/759575e5aa8f93ae69faee958f0a2d0d9e0f12": "7c74debb25fedb6dbc13f57bb6f265e1",
".git/objects/6c/431359e0dc7a2b78dd7791a6cdd0cb84467661": "4a6eec65d517446f6d75bb87be2cc808",
".git/objects/6c/e17a9f48ff63baed439cdbbda65b65332354a4": "65e07243bec8f6dc381cc8af0b18448d",
".git/objects/74/e25f43bbcf4b99eda4db39697b9f07ca45f839": "e2f43d67b9095f44fbea3c25b42400d5",
".git/objects/75/db1d2b398a716b443744eea415ecb3b46f5faf": "79b9c425588fe1b87d32c7412f56a7b7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/9be178cfa63f08b53a6bf76ac42f08ee6596ed": "6f9a8091282de9b73502146b78a3d957",
".git/objects/7f/d77ea617ce5ad611c4199173ec70be8331817f": "f4e0b503079f7aacb3263c7c6e5a5d21",
".git/objects/82/79ce012aa8feb72df22b22e3fefeb825ceedce": "8a4be5ff2b18199d1a761e027e257841",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/92/75decb4bfc774780b0bb056fad78d7535594c1": "f555859f0b158f8d3cdcd7e61b0cd275",
".git/objects/92/efc70dff0ebf80136b46eafdb802a7082e2776": "89970d91ff4d9ff49ad3e9d5bf5ad00b",
".git/objects/93/bbf55c8aa52ba571d989c209bea48a47febc2f": "5468559a1110fc6ed6125726947b867e",
".git/objects/97/e6d67acf12e3f53bfe850d88551e9118688c46": "8fd128df091aa9532cea56f5210e3d96",
".git/objects/98/4aa35d72f4aaa2a8222d284c34bdaddf8a0dd9": "b6d31ddd8007d4bce5afd49f6c8aa58d",
".git/objects/99/12dc52590371e13ed072e5144bb688f217ed75": "012d6b7d381fc10bb1d32bf15c706eb8",
".git/objects/9d/ab14d1afbf1e2e36189278e395e014fdfa9eb8": "4ef9f3eafe94bcb30e2f23e421504b27",
".git/objects/9e/1203f9bee6f9680c78a700c9931022b174c64f": "79da3a3283b7ce395e836501ea5c3c38",
".git/objects/a0/78facd2f5852675e1c9fd033a96bf3aa63ca0e": "93fcc2e852948c32a73ad9a9572178b2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/f13060e14726f76ca221423e0749cbd44ea1de": "19f20aa1a12b1942e3686f8492e6d489",
".git/objects/a9/5ea5c22932d205b23ef89109045be236e5167f": "53088d58b92d7414e900cca64d5cab77",
".git/objects/aa/6b85cc6a29bf52327d2f37e951bb074136324e": "9f2b1c5948f54d919588bf831dabbd73",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/003cbb0928095c451ccc2dda290618e5a9dc0e": "69d00f10e3bb187d759db9e8ea427ec6",
".git/objects/b0/2daba0bfd83ee85695dc1763641e8c7e627d68": "4f17815f8234aec6165322e5dfaf9044",
".git/objects/b1/66eede9764145eac543e3439e8f51aeb2a13a3": "6e2abb3e5344a027e877555c38857a54",
".git/objects/b2/fda1e15c8695c4d384236dac7ef73d6870072e": "08c53a428c5fddac5f4d8b84937f9606",
".git/objects/b6/5f86dc9807698c3b438f27f63a48c32eac2b03": "66a26cb4b1ad6b4cbff0899cba7a0c4b",
".git/objects/b7/2bdc5184e07c292ba9ba7702f8556638dbf307": "2c26dd1c2ca32c7d0b116cfc4d728f13",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/bc9161a37e9d9f30939d153b30b9c61e972694": "5053159f2709fa8c2b7620ee12e9103f",
".git/objects/bb/85b8c4002185afcb2cc9067399eb83625c3d75": "309e186ad0490dfceee8b3663d270133",
".git/objects/bb/94e65d5fc03a34769ce33a117e9f8e0a2fb73f": "5e82bf924f9a3a6b46e90290127ae7f6",
".git/objects/bb/e3359d29890c5b52dba315ae1712c8d489d2d6": "c6b72dec69742c8451416bc722970559",
".git/objects/bc/820c829c152d48e9c1be7f8c4104ac12a2a884": "788fae71237f56ce5a1fb9f946ba58b4",
".git/objects/bc/ad7857a0547b16842e5098747e374d53a91209": "337738c4f80ac4f0b7652a93e503b9f9",
".git/objects/be/976dcc145f47f0dc3c5c54f11be8bf7fd15616": "6785791a9302f85fcbfd7937d7767fff",
".git/objects/c5/3445d958b94dd0b85275593db10be8e44cb62c": "98da3394f11baa2787082939a3f410ce",
".git/objects/cb/cf115db572d20d36bf38ecc22692c54457c403": "3a062b80d71fb7c1a4f5bdcfd6dc1695",
".git/objects/cc/f2f65b8e0a82f4ef76053e48c4f3045ea4a4a6": "ea81a4c824cf1ddae6bac236ad47996b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/56d0a43ed6c8b4e72125a5885dd583758f8f50": "ae39c6420236ff82812aa92c8de4e05d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/d8340ee63456745bd3a6db6b27b6f8f282df55": "9a0e144b0bdc0e3b97623360ec71327e",
".git/objects/ea/0c979c5c899760e52357995a50d2c6cfed5fd5": "59f99abaf0f34ef35e3f851a6ffea26d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0e3f9b8e4a5d9301d86f1293806e4c8115a288": "be918768e4aa8316987d2c28f327c512",
".git/objects/ec/adca46c584b4f0b447f6a9ed1d839d649dd953": "a2d37b569825147036f3fa1f1dc55d12",
".git/objects/ee/32b8da9d9fe9e5427173d293af6d053dd696ae": "e2c41e3d36d2c49112d33c045c9ed32c",
".git/objects/f0/035553031756db1a2f06c0c1015d579176b31d": "0f037f213d6be6edd9854bd378acb1f8",
".git/objects/f1/a80351baf89a6bd0e0af29868388435c43124d": "793b064d33100920bc075eccaaa29596",
".git/objects/fd/75e1531df7adf97ea3611497d12407c8f9f308": "358a3b273687dc04f190fa6d55548538",
".git/refs/heads/main": "2f76338378dd9e548690354d8a246ef4",
".git/refs/remotes/origin/main": "2f76338378dd9e548690354d8a246ef4",
"assets/AssetManifest.json": "28b8a191c99fd9ece8cb1795b975d973",
"assets/assets/fonts/volte.ttf": "b29ee2bb9efbf72ebb0cf79b5cb9f2e4",
"assets/assets/icons/app.png": "e3939db3490f87ee4a9acf372365e926",
"assets/assets/icons/back_arrow.png": "226c7a1c3204db9d24c3ad3e14fcdb53",
"assets/assets/icons/cancel.png": "28ee99e188ed9aeccd6621e2b111633d",
"assets/assets/icons/Facebook.png": "4a613c1b72590009db89884a174720ae",
"assets/assets/icons/fi-thumb-down.png": "4dbb3f170a710d4eec6fc4b7f6859ba8",
"assets/assets/icons/fi-thumbs-up.png": "a2431d94b2beb24fc666ee6b5a897b46",
"assets/assets/icons/heart.png": "b0e6e8776e8a1d0fc00583e39f9a609e",
"assets/assets/icons/home_icon.png": "4f3353f397da42a79ddec494c5be6c99",
"assets/assets/icons/invite_a_friend.png": "e8ff6f688f2914200cbe8b2b8fd5f0fc",
"assets/assets/icons/logout.png": "e1d961d8f6353e201674d656572c5ecb",
"assets/assets/icons/person.png": "54f63a8ab8c6314f134e6a604158ba76",
"assets/assets/icons/play-icon.png": "6fd8896a4b8e48c92bf43db96dfd488d",
"assets/assets/icons/puser.png": "f20d79c12dfaa350338e6779ed2ec263",
"assets/assets/icons/referral_gift.png": "5a5cef86aecee3233a693bd1052da6db",
"assets/assets/icons/Stack.png": "847bb8e3149b3adba3fe037cf9eda3d6",
"assets/assets/icons/subscription_icon.png": "68284c282692a3a59b560bdc0a94f35b",
"assets/assets/icons/trophy_icon.png": "3429052c19b3e42945a1732a89a60713",
"assets/assets/icons/twitter.png": "97cac94410ba565749057c0cf4798d4c",
"assets/assets/icons/user.png": "84d0f74f0ac5e1bd601565c3dd0532a4",
"assets/assets/icons/Vector.png": "daae59471a12d8c9e20e0cebea22dfb6",
"assets/assets/icons/verified_check.png": "01b2f24cdd3fe2d0eda2a75ac658bcca",
"assets/assets/icons/whatsapp.png": "41fcf586dd929f7a933dd15e1c0902e3",
"assets/assets/icons/yellow_mark.png": "a33585b6c7a42e827b77cb20ff1375b6",
"assets/assets/icons/youtube.png": "1b3a976c41c7c076984002dcfc4d2d20",
"assets/assets/images/Afcon%2520call.png": "22bf485f89301b5e4588ed8c1adbf542",
"assets/assets/images/Afcon.png": "5163656122160fe8dc4480750d7c9424",
"assets/assets/images/appAds.png": "8e2cb5593df4765a7b2ff2015b479c1b",
"assets/assets/images/ball.png": "37d71c8e6af004a68131cb479e6de730",
"assets/assets/images/Burkina%2520Faso.png": "2aaab12bbde8a6bd91cb9524ca7f19de",
"assets/assets/images/Cameroon%2520flag%25201.png": "15c168d39eea535f87e1ac22b1a46aee",
"assets/assets/images/Cape%2520verde.png": "b3093d093fce3d992ce48543c106d51e",
"assets/assets/images/challengeLock.png": "bd6ad797bb3511aa50966c0df888b3ec",
"assets/assets/images/Champ%2520league.png": "dab008bb71f1d19667531314f0e426d0",
"assets/assets/images/CheckCircle.png": "c6ee9ee61ff860f45a40870645479520",
"assets/assets/images/cupp.png": "fbab5bd9b43f94b59c1cdf39e60da8cb",
"assets/assets/images/dailytrivia.png": "b29c554de905e22b2421d9aff8798c79",
"assets/assets/images/endofquiz.png": "85ad464d8c1ae25f702f0ecf519b642b",
"assets/assets/images/Ethopia.png": "afdb858d347e11fc534bf106f1a694c1",
"assets/assets/images/footer.png": "3da774231ff1b6cc4c4b05246069ab9a",
"assets/assets/images/funfacts.png": "49b32a57683af39e54da2337c148fc0b",
"assets/assets/images/fun_fact.png": "e30840a64d8a8bacc100d1b2bd5eeb75",
"assets/assets/images/Gift.png": "48c515b6acdfe4291e11c5bdd772dc50",
"assets/assets/images/Group%252011.png": "3004188b7567f1c744967d30bc3685f8",
"assets/assets/images/Guinea.png": "5fa54d89ba5ef189bcacfbed22b5a4a9",
"assets/assets/images/happy_woman.png": "0f7970346ae402e0c04beb14af8ce8e4",
"assets/assets/images/img.png": "89a04a174f94241a2c7f3e8a9991a9a6",
"assets/assets/images/img_1.png": "7686036f251190b0c3639356627c09c6",
"assets/assets/images/lionel-messi-psg.png": "09e4e25857a8ad415560402c076fb1ed",
"assets/assets/images/littleOnboarding.png": "c329177d6e5a5ced20d41ad1aa387847",
"assets/assets/images/livedata.png": "1ef22d7018025c5bbb0415e0b474108e",
"assets/assets/images/livedraw.png": "60260b3bbd15aaba6e5bb44311c04341",
"assets/assets/images/Make%2520Predictions.png": "e8a3b43793108a5bbba64341c062f6ac",
"assets/assets/images/Malawi.png": "0276d0e4ebff2098c1fc72381995fa2d",
"assets/assets/images/Predict%2520and%2520win.png": "5a2ab5ca4f838d161dbf3f34fedd1b7f",
"assets/assets/images/Premier%2520League.png": "5e1dfa2f21fc24a7a765bf0341c31383",
"assets/assets/images/qP.png": "81aca5153131b15dd5734f8f0ef5e9e4",
"assets/assets/images/refree.png": "f13eeef6788344b0df03377906f06d19",
"assets/assets/images/Senegal.png": "8d90f330a4940006654b4f271506b4ac",
"assets/assets/images/sir.png": "4c09105c3d510bb12f39233dbf3ee640",
"assets/assets/images/team%2520players.png": "06284df0aa85364d3d6f731f46522dcb",
"assets/assets/images/team%2520players2.png": "f9a254a90a4429646d9d134f7bf3da0d",
"assets/assets/images/todaytrivia.png": "b29c554de905e22b2421d9aff8798c79",
"assets/assets/images/video%2520frame.png": "9a0a5a2baf0fc7d5a6cd5bc156ac4044",
"assets/assets/images/View%2520Predictions.png": "5dd605448ee23bdf5399501d2571c9f8",
"assets/assets/images/welcome.png": "153ff583c88633614f96c3a8051302ad",
"assets/assets/images/whistle.png": "1e130cb491c1972768916957a97d8c15",
"assets/assets/images/young%2520fair%2520man%25201.png": "ad80a8b90b8f802f7473b01b38fe6655",
"assets/assets/images/Zimbabwe.png": "6885059699ca7cf3921e3c8430ae0378",
"assets/assets/images/zombieing.png": "3beb6c4fc12f211e7dcc0c1bfd060021",
"assets/assets/json/fun_fact.json": "0055307c31d3dbad6e2b36d5b614dfd4",
"assets/FontManifest.json": "0aa84b7fce674c88153b6674baa96c2e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2b1baafeed54fc662a68227e194fd8f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c3229386d5593a88b913ebd635a9b051",
"/": "c3229386d5593a88b913ebd635a9b051",
"main.dart.js": "5db3474d3bac81de956a52e23a7fb377",
"manifest.json": "20a34f52300b3f4e762e489fd4753f9d",
"version.json": "7446c54add4918550e1ab937ee26bddf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
