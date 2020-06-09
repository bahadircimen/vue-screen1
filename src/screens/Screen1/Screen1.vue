<template>
<!--    <div>-->
<!--        <Bullets/>-->
<!--        <Info/>-->
<!--        <Paragraph/>-->
<!--        <Steps/>-->
<!--        <OrderCard/>-->
<!--        <SupportButtons support-type="wa"/>-->
<!--    </div>-->
    <div class="screen">
        <OrderCard/>
        <div class="template-container" v-for="data in dataa" >
            <div class="template">
                <Paragraph v-if="data.type==='ParagraphTemplate'" :paragraph-title="data.template.title" :paragraph-text="data.template.description"/>
                <Steps v-if="data.type==='StepTemplate'" :step-item="data.template.items" :step-title="data.template.title"/>
                <Info v-if="data.type==='InfoTemplate'" :info-text="data.template.description"/>
                <Bullets v-if="data.type==='BulletTemplate'" :bullet-item="data.template.items"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Bullets from "../../components/Bullets"
    import  Info from  "../../components/Info"
    import  Paragraph from  "../../components/Paragraph"
    import  Steps from  "../../components/Steps"
    import  OrderCard from  "../../components/OrderCard"
    import  SupportButtons from  "../../components/SupportButtons"
    export default {
        name: "Screen1",
        components:{
            Bullets,
            Info,
            Paragraph,
            Steps,
            OrderCard,
            SupportButtons
        },
        data(){return {
            dataa:[
                {
                "type": "ParagraphTemplate",
                "sortNo": 1,
                "template": {
                    "title": "",
                    "items": [],
                    "description": "Satın aldığınız ürünü, kargodan teslim aldığınız günden itibaren 14 gün içinde Hepsiburada’ya başvurarak iade koşulları dahilinde, kargo bedeli ödemeden ücretsiz olarak kolayca iade edebilirsiniz.",
                    "columns": [],
                    "rows": []
                }
            },
                {
                    "type": "StepTemplate",
                    "sortNo": 2,
                    "template": {
                        "title": "",
                        "items": [
                            {
                                "sort": 1,
                                "title": "İade koşullarına dikkat edin",
                                "description": "-Satın alınan ürünün orijinal kutusunda ve zarar görmemiş olması,<br> -Tüm tamamlayıcı aksesuarları ile birlikte olması,<br> -Varsa hediye olarak verilen promosyonlu, kampanyalı ürünlerle birlikte aynı anda eksiksiz ve hasarsız gönderilmesi gerekir.",
                                "hasButton": "false",
                                "buttonInfo": null,
                                "link": null
                            }
                        ],
                        "description": null,
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "InfoTemplate",
                    "sortNo": 3,
                    "template": {
                        "title": "",
                        "items": [],
                        "description": "Cayma hakkının geçerli olmadığı ürün tiplerinden biri, 'Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış iadesi sağlık ve hijyen açısından uygun olmayan ürünlerdir. (İç çamaşırı, mayo, kozmetik, kulaklık vb.)'",
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "StepTemplate",
                    "sortNo": 2,
                    "template": {
                        "title": null,
                        "items": [
                            {
                                "sort": 2,
                                "title": "İade talebi oluşturun",
                                "description": "<p><strong>\"Hesabım - Siparişlerim\"</strong> sayfası altında iade etmek istediğiniz &uuml;r&uuml;n&uuml;n i&ccedil;inde olduğu siparişi a&ccedil;ın ve <strong>\"Talep Oluştur\"</strong> se&ccedil;eneğini se&ccedil;in.</p>",
                                "hasButton": "false",
                                "buttonInfo": {
                                    "text": null,
                                    "link": null
                                },
                                "link": null
                            }
                        ],
                        "description": null,
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "InfoTemplate",
                    "sortNo": 3,
                    "template": {
                        "title": "",
                        "items": [],
                        "description": "İade etmek istediğiniz her ürün için ayrı bir iade talebi açmalısınız. Her ürünü size sunulan ayrı gönderi kargo kodu ile göndermelisiniz. Aynı kodla farklı ürünler gönderilmemelidir.",
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "StepTemplate",
                    "sortNo": 2,
                    "template": {
                        "title": "",
                        "items": [
                            {
                                "sort": 3,
                                "title": "İade etmek istediğiniz ürün ve sebebini seçin",
                                "description": "İade etmek istediğiniz ürünü seçtikten sonra bir sonraki adımda iade sebebinizi açıklayan seçeneklerden size uygun olanı belirtin. İade başvurusu sırasında sadece aynı satıcıdan alınan ürünler iade edilebilir.",
                                "hasButton": "false",
                                "buttonInfo": null,
                                "link": null
                            },
                            {
                                "sort": 4,
                                "title": "Kullanmak istediğiniz iade yöntemini seçin",
                                "description": "İade etmek istediğiniz ürünü, kargo şubesine veya Hepsiburada Teslimat Noktaları'na kendiniz götürebilir ya da adresinizden alınmasını talep edebilirsiniz. Bu adımda size uygun olan seçeneği seçmelisiniz.",
                                "hasButton": "false",
                                "buttonInfo": null,
                                "link": null
                            }
                        ],
                        "description": null,
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "BulletTemplate",
                    "sortNo": 2,
                    "template": {
                        "title": "",
                        "items": [
                            {
                                "sort": 1,
                                "title": null,
                                "description": "HepsiJET ile teslim edilmiş ürünün iadesi için iade talebi oluşturma adımında randevu oluşturabilirsiniz.",
                                "hasButton": null,
                                "buttonInfo": null,
                                "link": null
                            },
                            {
                                "sort": 2,
                                "title": null,
                                "description": "Diğer kargo şirketleri ile iadenizi gönderebilmek için size verilen gönderi numarası ile şubenize teslim edebilir ya da şubenizi arayarak kurye talep edebilirsiniz.",
                                "hasButton": null,
                                "buttonInfo": null,
                                "link": null
                            },
                            {
                                "sort": 3,
                                "title": null,
                                "description": "Büyük hacimli ürünleriniz ise evinizden iade alınacaktır. ",
                                "hasButton": null,
                                "buttonInfo": null,
                                "link": null
                            }
                        ],
                        "description": null,
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "StepTemplate",
                    "sortNo": 2,
                    "template": {
                        "title": null,
                        "items": [
                            {
                                "sort": 5,
                                "title": "İade sebebinizi yazın",
                                "description": "<p>İade sebebinizi detaylıca belirtmelisiniz. Ayrıca bu adımda fotoğraf da ekleyebilirsiniz.</p>",
                                "hasButton": "false",
                                "buttonInfo": {
                                    "text": null,
                                    "link": null
                                },
                                "link": null
                            },
                            {
                                "sort": 6,
                                "title": "İade talebiniz oluşturulur",
                                "description": "<p>Ekranda &ccedil;ıkan kargo g&ouml;nderi kodunu kullanarak &uuml;r&uuml;n&uuml;n&uuml;z&uuml; belirtilen tarihe kadar ambalajı a&ccedil;ılmamış, orijinal kutusunda, t&uuml;m aparatları ile birlikte eksiksiz ve hasarsız geri g&ouml;ndermelisiniz.</p>",
                                "hasButton": "false",
                                "buttonInfo": {
                                    "text": null,
                                    "link": null
                                },
                                "link": null
                            },
                            {
                                "sort": 7,
                                "title": "Kargo kodunu not etmeyi unutmayın",
                                "description": "<p>&Uuml;r&uuml;n&uuml; g&ouml;ndereceğiniz adres, iade i&ccedil;in aldığınız kargo kodunun i&ccedil;erisinde mevcuttur. Herhangi bir adres belirtmenize gerek yoktur.</p>",
                                "hasButton": "false",
                                "buttonInfo": {
                                    "text": null,
                                    "link": null
                                },
                                "link": null
                            },
                            {
                                "sort": 8,
                                "title": "Ürünü teslim edin",
                                "description": "<p>&Uuml;r&uuml;n, t&uuml;m aparatlarıyla eksiksiz bir şekilde paketle ve kargo g&ouml;nderi koduyla 7 g&uuml;n i&ccedil;erisinde ilgili kargo firmasına teslim edilmelidir.</p>",
                                "hasButton": "false",
                                "buttonInfo": {
                                    "text": null,
                                    "link": null
                                },
                                "link": null
                            },
                            {
                                "sort": 9,
                                "title": "İade Sürecinizi takip edin",
                                "description": "<p>İade başvurunuzla ilgili bilgiye <strong>\"Hesabım - Siparişlerim - İadelerim\"</strong> sayfasından ulaşabilirsiniz. Aynı d&ouml;nemde birden fazla &uuml;r&uuml;n&uuml;n&uuml;z i&ccedil;in iade talebi oluşturduysanız, her &uuml;r&uuml;n&uuml;n bildirimini ayrıca kontrol etmeyi unutmayınız.</p>",
                                "hasButton": "false",
                                "buttonInfo": {
                                    "text": null,
                                    "link": null
                                },
                                "link": null
                            }
                        ],
                        "description": null,
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "ParagraphTemplate",
                    "sortNo": 1,
                    "template": {
                        "title": "",
                        "items": [],
                        "description": "İade talebinizin güncel durumu SMS ve e-posta yoluyla size bildirilir.",
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "StepTemplate",
                    "sortNo": 2,
                    "template": {
                        "title": "",
                        "items": [
                            {
                                "sort": 10,
                                "title": "İade Onayı",
                                "description": "İade talebiniz onaylandığında ödemeniz otomatik olarak maksimum 1 iş günü içerisinde bankanıza aktarılır. Geri ödemenizin kartınıza veya hesabınıza yansıması bankanızın belirlediği süreye göre değişebilir.",
                                "hasButton": "false",
                                "buttonInfo": null,
                                "link": null
                            }
                        ],
                        "description": null,
                        "columns": [],
                        "rows": []
                    }
                },
                {
                    "type": "ParagraphTemplate",
                    "sortNo": 1,
                    "template": {
                        "title": "",
                        "items": [],
                        "description": "Ödeme süreleri ile ilgili detaylı bilgiye <a href='https://www.hepsiburada.com/kolay-iade'> buradan</a> ulaşabilirsiniz.",
                        "columns": [],
                        "rows": []
                    }
                }
            ]
        }},
        props:{

        }
    }
</script>

<style scoped lang="scss">
    .screen {
        width: 100%;
        height: max-content;
        box-sizing: border-box;
        padding: 16px 32px;

        & .template-container {
            width: 100%;
            height: max-content;

            & .template {
                width: 100%;
                height: max-content;
                margin: 16px 0 0 0;
            }
        }
    }
</style>