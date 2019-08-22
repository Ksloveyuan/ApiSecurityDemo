package main

import (
	"github.com/ksloveyuan/rsautil"
	"net/http"

	"github.com/labstack/echo"
)

const PublicKey  = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDTNgfM4kK9bFKeFyVFHuoLmyMP
0zQsYVfsSh7Ghq2qgYuVCHvkYWikO5lYAK5zYT5z3lLBOXP1KLm/JlxQLwhzFlRX
ZNqv3hIkVQAlASChTp83RYXrYz5FGUWstZXMbqs5+g4jPPGNWKUl/t9MmimCwISG
eXDWmGo6l3DoRuDcRQIDAQAB
-----END PUBLIC KEY-----`


type VerifyArgs struct {
	Content string  `json:"content" description:"" binding:"required" `
	Signature string  `json:"signature" description:"" binding:"required" `
}

func main() {
	e := echo.New()

	e.POST("/verify", func(c echo.Context) error {
		args:= VerifyArgs{}
		if err := c.Bind(&args); err !=nil{
			return c.String(http.StatusBadRequest, "参数不正确")
		}

		message := ""
		if success, _ := rsautil.VerySignWithSha256Base64(args.Content, args.Signature, []byte(PublicKey)); success{
			message = "success"
		} else {
			message = "fail"
		}

		return c.String(http.StatusOK, message)
	})

	e.Logger.Fatal(e.Start(":1323"))
}
