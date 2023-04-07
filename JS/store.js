
let works = [
    { imagePath: "Images/Work/1.jpeg",
        instaLink: "https://www.instagram.com/p/CnR5dXYI5vf/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/2.JPEG",
        instaLink: "https://www.instagram.com/p/CnPSvgjLnsI/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/3.JPEG",
        instaLink: "https://www.instagram.com/p/CmwZEVtL_om/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/4.JPEG",
        instaLink: "https://www.instagram.com/p/CmWpV9WIBLg/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/5.JPEG",
        instaLink: "https://www.instagram.com/p/Cl1HZEGI8My/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/6.JPEG",
        instaLink: "https://www.instagram.com/p/ClymyPAoqZf/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/7.JPEG",
        instaLink: "https://www.instagram.com/p/Cllt-P3oqev/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/8.JPEG",
        instaLink: "https://www.instagram.com/p/CljJUnEodzB/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/9.JPEG",
        instaLink: "https://www.instagram.com/p/ClgkY69IsDg/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/10.JPEG",
        instaLink: "https://www.instagram.com/p/ClOizjNrJXh/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/11.JPEG",
        instaLink: "https://www.instagram.com/p/Ck_GBt7rXnQ/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/12.JPEG",
        instaLink: "https://www.instagram.com/reel/CgKJmUADoWk/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/13.JPEG",
        instaLink: "https://www.instagram.com/p/Cj3LXjkr39Z/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/14.JPG",
        instaLink: "https://www.instagram.com/p/Cja2AubLDPG/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/15.JPEG",
        instaLink: "https://www.instagram.com/p/Chk0WoxLve-/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/16.JPEG",
        instaLink: "https://www.instagram.com/p/CgJ8RgRI1WT/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/17.JPEG",
        instaLink: "https://www.instagram.com/p/CgFKygzIGDr/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/18.JPEG",
        instaLink: "https://www.instagram.com/p/Cnww6ihI_w0/?utm_source=ig_web_copy_link" },
        
    { imagePath: "Images/Work/19.JPEG",
        instaLink: "https://www.instagram.com/p/Cn16c-4I7CK/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/20.JPEG",
        instaLink: "https://www.instagram.com/p/CopvttTLKV4/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/21.JPEG",
        instaLink: "https://www.instagram.com/p/Cp0FcN1OAMO/?utm_source=ig_web_copy_link" },

    { imagePath: "Images/Work/22.JPEG",
        instaLink: "https://www.instagram.com/p/Cp2qPshNzin/?utm_source=ig_web_copy_link" },
];

let reviews = [
    { imagePath: "Images/Reviews/1.JPG",
        reviewText: `المكياج جميل جدا وطبيعي بيظهر جمال العيون الألوان هادية وثابته المكياج خامات أصلية مش تقليد في ذوق وجمال من غير بهرجة تسلم ايديك يا قمر`},
    { imagePath: "Images/Reviews/2.JPG",
        reviewText: `شغل الصراحه 10/10 من غير ولا غلطه و التثبيت فعلا تحفه ⭐⭐⭐⭐⭐ وفعلا الحاجات الي بتسخدمها مش بتأثر على البشره خالص ❤️👌🏻 ومش هيبقى اخر تعاون ابدا 🥰🥰`},
    { imagePath: "Images/Reviews/3.JPG",
        reviewText: ` بجد شغلك تحفة جدا � وكل الماتريال اورجينال � ان شاء الله دائما متفوقة ومميزة �` },
    { imagePath: "Images/Reviews/4.JPG",
        reviewText: `شغل تحفه والماتريال حلوه اوي ومبيتمسحش حاجه منه ثاااابت بجد تسلم ايدك شغلك جميل 😍😍` },
    { imagePath: "Images/Reviews/5.JPG",
        reviewText: `عايزه اشكرك على الشغل التحفه الي كنتِي عملاه فعلا من غير ولا غلطه والميكب محصلوش حاجه طول اليوم وكفاية الماتريال كلها اوريجنال تسلم أيدك ♥️`},
];

function renderWorks(works, containerDivId) {
    let container = document.getElementById(containerDivId);
    for (const work of works) {
        container.innerHTML += `
        <div class="col-md-4 mix one ">
            <div class="edu-details mt-3">
                <div class="edu-item text-center d-flex justify-content-center flex-wrap p-4">
                    <div class="cert-item">
                        <a target="_blank" href="${work.instaLink}">
                            <div
                                class="mb-4 position-relative d-flex flex-wrap justify-content-center align-items-center">
                                <img src="${work.imagePath}" class="img-fluid" alt="">
                                <div class="position-absolute w-100 h-100 d-flex flex-wrap justify-content-center align-content-center imgdesc  "
                                    id="imgdesc">
                                </div>
                            </div>
                        </a>
                    </div>
        
                </div>
            </div>
        </div>
        
        `
    }
}

function renderReviews(reviews, containerDivId) {
    let container = document.getElementById(containerDivId);
    for (const review of reviews) {
        container.innerHTML += `
        <div class="contact-content media col-md-5">
            <div class="contact-icon mt-1" style="    background-image: url(${review.imagePath}); ">
                <!-- <img src="Images/Safaa Kandil.png" class="img-fluid" alt=""> -->
                <!-- <i class="fa fas fa-user"></i> -->
            </div>
            <div class="contact-addres">
                <p class="p-0 m-0">
                    ${review.reviewText}
                </p>
            </div>
        </div>
        `
    }
}

renderWorks(works , "myWork");
renderReviews(reviews , "reviews");
