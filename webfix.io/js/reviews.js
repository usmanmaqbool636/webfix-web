var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=dbf74aaa656a363d23355c7d9d3897dd71594207175");
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
fetch("https://reviews.elfsight.com/public/google/reviews?url=data%3Atext%2Fplain%3BChIJywXUd9s_K4gRbRGd6ueU6ws&skip=0", requestOptions)
    .then(response => response.json())
    .then(result => {
        // var element = $(".slick-slider")[0]
        var element = document.getElementsByClassName("slick-slider")[0]
        const newResult = result.data.filter(item => {
            if (item.review_text.length > 0) {
                return true
            }
            else return false
        })

        newResult.forEach(item => {






            if (item.rating === 5) {
                stars = `
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                `
            } else if (item.rating < 5) {
                stars = `
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                `
            } else if (item.rating < 4) {
                stars = `
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                
                `
            } else if (item.rating < 3) {
                stars = `
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                `
            } else if (item.rating < 2) {
                stars = `
                <i class="fa fa-star" style="color:#ffe300" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                `
            } else if (item.rating < 1) {
                stars = `
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                <i class="fa fa-star" style="color:#000" aria-hidden="true"></i>
                `
            }
            // `<div>
            //                 <div class="row text-white m-md-3">
            //                     <div class="col-12 col-md-4">
            //                         <img src=${item.reviewer_picture} class="img-fluid rounded-circle mx-auto" alt="">
            //                     </div>
            //                     <div class="col-12 col-md-8 align-self-center">
            //                         <h4>${item.reviewer_name}</h4>
            //                         <p>${stars}</p>
            //                         <hr />
            //                         <p>
            //                             ${item.review_text}
            //                         </p>
            //                     </div>
            //                 </div>
            //             </div>`
            element.innerHTML += `<div>
                            <div class="row text-white m-md-3">
                                <div class="col-12 col-md-12 align-self-center text-dark">
                                    <h4>${item.reviewer_name}</h4>
                                    <p>${stars}</p>
                                    <hr />
                                    <p>
                                        ${item.review_text}
                                    </p>
                                </div>
                            </div>
                            <a href="https://www.google.ca/search?q=Webfix&stick=H4sIAAAAAAAAAONgecR4hJFb4OWPe8JSuxgnrTl5jXEzIxdXcEZ-uWteSWZJpVAAFxuUpcIlKMWrn65vaJhRmZtiVJ5bpcEgxc-FKiSloMTF61HLJSVadLLigpYQ52nWK-W37bU7BHMF5756PuU1t1KwkfuuS9POsTkKMgCByJlQBylNJWEujpDEivy8_NxKQc75__fn_n1vryTExe5Z7JOfnJgjyFjft8e19Zm9EicnUFPCK4Un9loMTftWHGJj4WAUYOBZxMoWnpqUllkBAMpZBAbTAAAA&sa=X&ved=2ahUKEwj5mNud58TqAhWloHIEHYgGCxIQ6RMwC3oECAwQBA#lrd=0x882b3fdb77d405cb:0xbeb94e7ea9d116d,1,,," target="_blank" class="stretched-link"></a>
                        </div>`
        });
        $(".slick-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

            ]
        })
    })
    .catch(error => console.log('error', error));