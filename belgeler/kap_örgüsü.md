# Kap Örgüsü

## Kap Örgüsü Nedir?

Kap kelimesi genelde bir şeyi bir arada tutan fiziksel nesneler için kullanılır. Buradan yola çıkarak anlamını kodlama dünyasına yansıtabilirsiniz. Kap örgüsü İngilizce dilinde "grid system" diye anılır. Deveb çatısı altında bu örgü kendine özgü kullanımı ile diğer önyüz iskeletlerindeki kap örgülerinden farklıdır. Çok amaçlı yönleri vardır.

## Kap Örgüsünün Ana Yapısı

Kap örgüsü iki ana yapının birleşimiyle ortaya çıkan bir örgüdür. Bu iki ana yapı birbirinden bağımsız kullanılabileceği gibi bağlanarakta kullanılabilir. Deveb kap örgüsü "CSS > display:flex" üzerine yapılandırılmıştır.

Birinci yapımızın adı "bölme". Bölme anıldığında bir genişliği verilen değere bölerek içindeki kaplara aynı genişliği vermesi işlemidir. Örneğin eşit genişliğe sahip 4 sütunlu bir diziliş istiyorsam eğer bunu deveb kap örgüsü ile yapabiliriz.

İkinci yapımızın adı "parça". Parça anıldığında bir genişlik içinde istenilen miktarda parça oranını kendi genişliği yapması işlemidir. Örneğin bir genişliği 24 eşit parçaya bölüm 3 parçalık alanın genişliğini kullanmak istiyorsanız bu yöntemle yapabilirsiniz. Kullanabileceğiniz parça ölçekleri 5, 6, 8, 9, 10, 12, 16, 18, 20, 24 olmak üzere toplam 10 tanedir.

## Kap Örgüsü Duyarlı Yapısı

Deveb'in kap örgüsü ile farklı ekran ölçülerine göre tasarımlar hazırlayabilirsiniz. Genel, büyük, orta, küçük, ufak olmak üzere 5 farklı türde ölçüler girebilirsiniz.

## Bilinmesi Gerekenler

b: Bölme kelimesinin baş harfini temsil eder. Bulunduğu etiketin içine yazan "kap-0p" sınıfında olan tüm etiketleri ölçeklendirir. Örnek kullanımı şu şekildedir; kap-5b_lg-4b_md-3b_sm-2b_xs-1b

p: Parça kelimesinin baş harfini temsil eder. "Kap-" sınıfı kullanılarak yazılmış bir etiket içinde iken bulunduğu genişliği yazılan değerlere göre parçalanmasını sağlar. Örnek kullanımı şu şekildedir; kap-4-24p_lg-8-24p_md-12-24p_sm-24-24p_xs-24-24p

## Örnekler

Her şartlarda 4 sütunlu bir düzen istiyoruz. Yalnız ufak ekranlarda 2 sütunlu bir düzen olsun. Bunun için HTML dosyasında şöyle bir hazırlık yaparız. DEMO: https://jsfiddle.net/epu3cra3/
