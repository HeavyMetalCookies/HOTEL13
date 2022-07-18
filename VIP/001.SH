
    git add .

    git commit -m "[VIP_AUTO_COMMIT:KanjiCoder]"

    VAR_REDACTED="[REDACTED]"

    VAR_IMGUR_KANJICODER_CID=$(cat "./VIP/001/API_IMGUR/CID._")
    VAR_IMGUR_KANJICODER_C_S=$(cat "./VIP/001/API_IMGUR/C_S._")

    echo "[VAR_IMGUR_KANJICODER_CID]:"$VAR_REDACTED
    echo "[VAR_IMGUR_KANJICODER_C_S]:"$VAR_REDACTED

    ECHO_PIT=""

    ECHO_PIT=$( heroku config:set --app aim-hotel13 \
        "VAR_IMGUR_KANJICODER_CID"=$VAR_IMGUR_KANJICODER_CID )

    ECHO_PIT=$( heroku config:set --app aim-hotel13 \
        "VAR_IMGUR_KANJICODER_C_S"=$VAR_IMGUR_KANJICODER_C_S )

 

    ## git push GIT_SSH master
    ## git push HER_OKU master