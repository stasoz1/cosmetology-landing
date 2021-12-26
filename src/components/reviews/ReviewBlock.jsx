import React from 'react'
import Review from './review/Review'
import './ReviewBlock.css'
//images
import avatar from "../../images/avatar.png"
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import M from "../../images/M.png"
import K from "../../images/К.png"
import O from "../../images/О.png"


const ReviewBlock = () => {
    const settings =  {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        draggable:true,
      };
    return (
        <>
            <section id="reviewSec" name="reviews">
                <div id="reviewLeft" className="sectionLeft">
                    <div className="mainHeading">
                        Отзывы
                    </div>
                    <div className="sectionDesc">
                        Отзывы наших клиентов
                    </div>
                </div>
                <div id="reviewList">
                    <Review img={M} name="Мария Меда" date="10.10.2021"
                    text="С Подросткового возраста волновали высыпания на лице, обратилась к косметологу Лене, она мне рассказала какие мне нужно анализы сдать, подобрала домашний уход, а так же курс пилингов. Сейчас лицо стало намного лучше выглядеть."/>
                    <Review img={K} name="Кристина Дибровская" date="20.11.2021"
                    text="Пользовалась эпилятором и бритвой из-за этого стали жутко врастать волосы, в этом году решила пойти на лазерную эпиляцию, результат не заставил ждать. После 4 процедуры я заметила, что волосы на ногах стали тоньше и светлее, а в некоторых местах перестали и вовсе расти."/>
                    <Review img={O} name="Оксана Танчук" date="29.11.2021"
                    text="Очень беспокоят морщины вокруг глаз, но не хочу прибегать к инъекциям. Лена порекомендовала аппаратную процедуру фотоомоложение. Благодаря ей мое лицо подтянулась, тон лица выровнялся, а так же воспалительные сосуды на крыльях носа исчезли. Спасибо большое!"/>
                </div>
            </section>
            <section id="reviewSecMobile">
                <div className='mobileHeader'>
                   Отзывы
                </div>
                <Slider {...settings}>
                    <div>
                        <Review img={M} name="Мария Меда" date="10.10.2021"
                        text="С Подросткового возраста волновали высыпания на лице, обратилась к косметологу Лене, она мне рассказала какие мне нужно анализы сдать, подобрала домашний уход, а так же курс пилингов. Сейчас лицо стало намного лучше выглядеть."/>
                    </div>
                    <div>
                        <Review img={K} name="Кристина Дибровская" date="20.11.2021"
                        text="Пользовалась эпилятором и бритвой из-за этого стали жутко врастать волосы, в этом году решила пойти на лазерную эпиляцию, результат не заставил ждать. После 4 процедуры я заметила, что волосы на ногах стали тоньше и светлее, а в некоторых местах перестали и вовсе расти."/>
                    </div>
                    <div>
                        <Review img={O} name="Оксана Танчук" date="29.11.2021"
                        text="Очень беспокоят морщины вокруг глаз, но не хочу прибегать к инъекциям. Лена порекомендовала аппаратную процедуру фотоомоложение. Благодаря ей мое лицо подтянулась, тон лица выровнялся, а так же воспалительные сосуды на крыльях носа исчезли. Спасибо большое!"/>
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default ReviewBlock;