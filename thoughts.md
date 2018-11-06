## data structure

arrayOf(linkedList) seklinde bir yapisi var. end kismina tekli node gelince sadece sona ekleniyor. ikili node gelince list klonlanip end node farkli olarak ekleniyor. linkedListler gidisati temsil ediyor.


## featurelar

- email ile login
- dashboard sayfasi (yeni yarat, browseby, tema yarat)
- user profil sayfasi (isim, user'in yarattigi storylerin display linkleri, userin yarattigi temalar, user'in followerlari, public saved linkleri)
- forum


### template tarzlari: 

- temel = En kolayi - neredeyse hic feature yok. pre-made light & dark theme

- stilli = - kendi veya baskasinin yapili stilini secebilirsin.

- itemli = - pagelere item ekleyebiliyorsun. sonuclarda item toplamlari ve ona gore oduller cikiyor. oyunun forumunda userlara sonuclarina gore flair cikiyor.

- resimli = - bir node'un basina ve sonuna transitionlu resim eklemeli


### tip yapimi: 

style yarattiriyor ekrana renk koyma arti font secimi konusunda degisiklikler ve daha detayli buton yapimi

### user forumu
forum. => subdomain
her oyunun threadi var. 
reddit tarzi upvoteli forum. 
premium adamlara ona gore ozel flair var. 
insanlarin biriktirdikleri oduller flair'de gosteriliyor. 
ingilizce turkce korean

genel threadlerde oyunlarla alakali fanfic ivir zivir falan var.

## oduller
forum.
/leaderboard
/leaderboard/{leaderboardCategory}/{leaderboardFrequency}
/user/achievements

leaderboardda gorule

# en kucuk urun

- sayfa1: state machine yarat (card basina max iki secenek, repeatable cardsiz)
- sayfa2: state machine sayfasina yazi ve gitmelik yer ekle
- sayfa3: listede yarattigin oyuna tikla, oyna