
    git add .

    git commit -m "[VIP_AUTO_COMMIT:KanjiCoder]"

    VAR_IMGUR_KANJICODER_CID=$( cat "./API_IMGUR/CID._" )
    VAR_IMGUR_KANJICODER_C_S=$( cat "./API_IMGUR/C_S._" )

    echo "[VAR_IMGUR_KANJICODER_CID]:"$VAR_IMGUR_KANJICODER_CID
    echo "[VAR_IMGUR_KANJICODER_C_S]:"$VAR_IMGUR_KANJICODER_C_S

    heroku config:set --app aim-hotel13 \
        "VAR_IMGUR_KANJICODER_CID"=$VAR_IMGUR_KANJICODER_CID

    heroku config:set --app aim-hotel13 \
        "VAR_IMGUR_KANJICODER_C_S"=$VAR_IMGUR_KANJICODER_C_S

    ## git push GIT_SSH master
    ## git push HER_OKU master