let crypto = require('crypto')
let request = require('request')

let sk = `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDTNgfM4kK9bFKeFyVFHuoLmyMP0zQsYVfsSh7Ghq2qgYuVCHvk
YWikO5lYAK5zYT5z3lLBOXP1KLm/JlxQLwhzFlRXZNqv3hIkVQAlASChTp83RYXr
Yz5FGUWstZXMbqs5+g4jPPGNWKUl/t9MmimCwISGeXDWmGo6l3DoRuDcRQIDAQAB
AoGAfs9N16FxWLGU2P4kjl+FPfqjDnlMNeksFN5bo+5wjpLA73XsjK4/WXu/Eas3
EmcsS/0Lyp9oE6WkADRT8ICMnRS4ApxwEWQTW9ObQyy1oyb/iWlPr1w7OilNZWxr
Dy5MpBy+R7pupPlE4US8ZutyEAkZau2nXRAj13xupvulq3ECQQD5uSrAaKQMx+aN
gfzuXb5d5N6XFkihQnafIhtyhZlOI22qUlK89Zg/xxle5+U2NOl+PdJ5/WdLAoEM
a7QD+UKrAkEA2IUO5M/Z+vMqPeinzNrhtovdUjmoP9iHOCukqgmyPxWCmhhhI0VF
fIcp/uRN6evvnNS3iw5JfhCFJ5FmeRvczwJBANcGkQBSWgfDTQtGBXN+dr/EpcG0
518rqpaFuNqYnRQCP5isACBC3RD1sCvfQ6e0UeVo+EYgY4PcKSB30O6m/7cCQQDM
T/KX85LL/T11Id+FrV2kNiLofkPHy3j9hiFh2rh6Ur/kzPCMqcdCFQGJ5sGm5N48
bXWtIBQ1gz1C8y9xRNt9AkAeKnSj67A5WytM4HehqLV1SgigXWRsQU6cp2z8KwBK
0GmpU4SLNpww8rdDVXQZpupZWiuJopjwEZJDQmaO6QGe
-----END RSA PRIVATE KEY-----`

function sendRequest ({ content, signature }) {
    var bodyData = { content, signature }
    return new Promise((resolve, reject) => {
        request.post({ url: 'http://localhost:1323/verify', body: bodyData, json: true }, function optionalCallback (
            err,
            httpResponse,
            body
        ) {
            if (err) {
                reject()
                return console.error('upload failed:', err)
            }

            console.log('Upload successful!', body)
            resolve()
        })
    })
}

async function wait () {
    let signer = crypto.createSign('RSA-SHA256')

    let content = 'test_test_test'
    signer.update(content)

    let privateKey = {key: sk, format:"pem", type:"pkcs1"}
    let signature = signer.sign(privateKey, 'base64')

    console.log(signature)

    await sendRequest({ content, signature })
}let crypto = require('crypto')
let request = require('request')

let sk = `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDTNgfM4kK9bFKeFyVFHuoLmyMP0zQsYVfsSh7Ghq2qgYuVCHvk
YWikO5lYAK5zYT5z3lLBOXP1KLm/JlxQLwhzFlRXZNqv3hIkVQAlASChTp83RYXr
Yz5FGUWstZXMbqs5+g4jPPGNWKUl/t9MmimCwISGeXDWmGo6l3DoRuDcRQIDAQAB
AoGAfs9N16FxWLGU2P4kjl+FPfqjDnlMNeksFN5bo+5wjpLA73XsjK4/WXu/Eas3
EmcsS/0Lyp9oE6WkADRT8ICMnRS4ApxwEWQTW9ObQyy1oyb/iWlPr1w7OilNZWxr
Dy5MpBy+R7pupPlE4US8ZutyEAkZau2nXRAj13xupvulq3ECQQD5uSrAaKQMx+aN
gfzuXb5d5N6XFkihQnafIhtyhZlOI22qUlK89Zg/xxle5+U2NOl+PdJ5/WdLAoEM
a7QD+UKrAkEA2IUO5M/Z+vMqPeinzNrhtovdUjmoP9iHOCukqgmyPxWCmhhhI0VF
fIcp/uRN6evvnNS3iw5JfhCFJ5FmeRvczwJBANcGkQBSWgfDTQtGBXN+dr/EpcG0
518rqpaFuNqYnRQCP5isACBC3RD1sCvfQ6e0UeVo+EYgY4PcKSB30O6m/7cCQQDM
T/KX85LL/T11Id+FrV2kNiLofkPHy3j9hiFh2rh6Ur/kzPCMqcdCFQGJ5sGm5N48
bXWtIBQ1gz1C8y9xRNt9AkAeKnSj67A5WytM4HehqLV1SgigXWRsQU6cp2z8KwBK
0GmpU4SLNpww8rdDVXQZpupZWiuJopjwEZJDQmaO6QGe
-----END RSA PRIVATE KEY-----`

function sendRequest ({ content, signature }) {
    var bodyData = { content, signature }
    return new Promise((resolve, reject) => {
        request.post({ url: 'http://localhost:1323/verify', body: bodyData, json: true }, function optionalCallback (
            err,
            httpResponse,
            body
        ) {
            if (err) {
                reject()
                return console.error('upload failed:', err)
            }

            console.log('Upload successful!', body)
            resolve()
        })
    })
}

async function wait () {
    let signer = crypto.createSign('RSA-SHA256')

    let content = 'test_test_test'
    signer.update(content)

    let privateKey = {key: sk, format:"pem", type:"pkcs1"}
    let signature = signer.sign(privateKey, 'base64')

    console.log(signature)

    await sendRequest({ content, signature })
}