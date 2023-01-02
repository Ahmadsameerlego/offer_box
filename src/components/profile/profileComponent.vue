<template>
    <section class="accordion mt-4">
        <!-- single accordion => الملف الشخصي -->
        <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="d-flex align-items-center">
                    <!-- accordion header icon -->
                    <img :src="src" alt="" class="accHeaderIcon">
                    <h5 class="fw-bold"> {{ $t('profile.personal') }} </h5>
                </div>
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                    <!-- start personal form  -->
                    <form action="" id="personalInfoForm" class=" mt-5">



                    <!-- username  -->
                    <div class="mt-3 mb-3">
                        <h6 class="fontBold mb-0">اسم المستخدم</h6>
                        <div class="form__label">
                        <input
                            class="default_input"
                            type="text"
                            required=""
                            placeholder="الرجاء إدخال اسم المستخدم"
                        />
                        <label class="float__label" for="">الرجاء إدخال اسم المستخدم</label>
                        <span class="icon-input">
                            <i class="fa-solid fa-user"></i>
                        </span>
                        </div>
                    </div>

                    <!-- phone  -->
                    <div class="mt-3 mb-3">
                        <h6 class="fontBold mb-0">رقم الجوال</h6>
                        <div class="form__label">
                        <input
                            class="default_input"
                            type="number"
                            required=""
                            placeholder="الرجاء إدخال رقم الجوال"
                        />
                        <label class="float__label" for="">الرجاء إدخال رقم الجوال</label>
                        <span class="icon-input">
                            <v-img
                            lazy-src="../../assets/noun_mobile.png"
                            height="25"
                            width="25"
                            src="../../assets/noun_mobile.png"
                            ></v-img>
                        </span>
                        <v-select :items="items" solo></v-select>
                        </div>
                    </div>

                    <!-- password  -->
                    <div class="mt-3 mb-3">
                        <h6 class="fontBold mb-0">كلمة المرور</h6>
                        <div class="form__label">
                        <input
                            class="default_input"
                            type="password"
                            required=""
                            placeholder="الرجاء إدخال كلمة المرور"
                        />
                        <label class="float__label" for="">الرجاء إدخال كلمة المرور</label>
                        <span class="icon-input">
                            <v-img
                            lazy-src="../../assets/Unlock.png"
                            height="25"
                            width="25"
                            src="../../assets/Unlock.png"
                            ></v-img>
                        </span>
                        <v-btn class="float_btn" color="white" elevation="0" small
                            ><v-img
                            lazy-src="../../assets/eye-close.png"
                            height="25"
                            width="25"
                            src="../../assets/eye-close.png"
                            ></v-img>
                        </v-btn>
                        </div>
                    </div>

                    <!-- confirm  password  -->
                    <div class="mt-3 mb-3">
                        <h6 class="fontBold mb-0">تأكيد كلمة المرور</h6>
                        <div class="form__label">
                        <input
                            class="default_input"
                            type="password"
                            required=""
                            placeholder="الرجاء تأكيد كلمة المرور"
                        />
                        <label class="float__label" for="">الرجاء تأكيد كلمة المرور</label>
                        <span class="icon-input">
                            <v-img
                            lazy-src="../../assets/Unlock.png"
                            height="25"
                            width="25"
                            src="../../assets/Unlock.png"
                            ></v-img>
                        </span>
                        <v-btn class="float_btn" color="white" elevation="0" small
                            ><v-img
                            lazy-src="../../assets/eye-close.png"
                            height="25"
                            width="25"
                            src="../../assets/eye-close.png"
                            ></v-img>
                        </v-btn>
                        </div>
                    </div>

                    <!-- save  -->
                    <div class="d-flex justify-content-center mx-auto mt-3 mb-5">
                        <button class="main_btn up"> حفظ </button>
                    </div>
                    </form>
                    <!-- end personal form  -->

                </div>
            </div>
        </div>

        <!-- single accordion => سياسة الخصوصية -->
        <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingSe">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSEf" aria-expanded="false" aria-controls="collapseSEf">
            <div class="d-flex align-items-center">
                <!-- accordion header icon -->
                <img :src="privacy" alt="" class="accHeaderIcon">
                <h5 class="fw-bold"> {{ $t('profile.privacy') }} </h5>
            </div>
            </button>
        </h2>
        <div id="collapseSEf" class="accordion-collapse collapse" aria-labelledby="headingSe" data-bs-parent="#accordionExample">
            <div class="accordion-body">

            <div class="aboutImage">

                <p class="fw-6 aboutP w-75 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo libero recusandae, minima atque eveniet consequuntur ex similique dolorum ipsa voluptatum aspernatur, explicabo doloribus quas nihil eum dolore temporibus, expedita rerum. Ab ea dolores facere non optio asperiores officiis. Accusantium nam nobis, aliquid facere est cupiditate quasi sed quia! Possimus!
                </p>
            </div>

            </div>
        </div>
        </div>

        <!-- single accordion => الشروط والاحكام -->
        <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingERw">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collpsesea" aria-expanded="false" aria-controls="collpsesea">
            <div class="d-flex align-items-center">
                <!-- accordion header icon -->
                <img :src="conditions" alt="" class="accHeaderIcon">
                <h5 class="fw-bold"> {{ $t('profile.conditions') }} </h5>
            </div>
            </button>
        </h2>
        <div id="collpsesea" class="accordion-collapse collapse" aria-labelledby="headingERw" data-bs-parent="#accordionExample">
            <div class="accordion-body">


            <div class="aboutImage">

                <p class="fw-6 aboutP mx-auto w-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo libero recusandae, minima atque eveniet consequuntur ex similique dolorum ipsa voluptatum aspernatur, explicabo doloribus quas nihil eum dolore temporibus, expedita rerum. Ab ea dolores facere non optio asperiores officiis. Accusantium nam nobis, aliquid facere est cupiditate quasi sed quia! Possimus!
                </p>
            </div>

            </div>
        </div>
        </div>

        <!-- single accordion => كيفية عمل الموقع -->
        <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingERw3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collpsesea1" aria-expanded="false" aria-controls="collpsesea1">
            <div class="d-flex align-items-center">
                <!-- accordion header icon -->
                <img :src="howWork" alt="" class="accHeaderIcon">
                <h5 class="fw-bold"> {{ $t('profile.howWork') }}</h5>
            </div>
            </button>
        </h2>
        <div id="collpsesea1" class="accordion-collapse collapse" aria-labelledby="headingERw3" data-bs-parent="#accordionExample">
            <div class="accordion-body">


            <div class="aboutImage">

                <p class="fw-6 aboutP mx-auto w-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo libero recusandae, minima atque eveniet consequuntur ex similique dolorum ipsa voluptatum aspernatur, explicabo doloribus quas nihil eum dolore temporibus, expedita rerum. Ab ea dolores facere non optio asperiores officiis. Accusantium nam nobis, aliquid facere est cupiditate quasi sed quia! Possimus!
                </p>
            </div>

            </div>
        </div>
        </div>

        <!-- single accordion => اعدادات الاشعارات -->
        <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingERw5">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collpsesea5" aria-expanded="false" aria-controls="collpsesea5">
            <div class="d-flex align-items-center">
                <!-- accordion header icon -->
                <img :src="profileAlert" alt="" class="accHeaderIcon">
                <h5 class="fw-bold"> {{ $t('profile.alertSet') }}</h5>
            </div>
            </button>
        </h2>
        <div id="collpsesea5" class="accordion-collapse collapse" aria-labelledby="headingERw5" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h3>الاعلانات</h3>
                        <p class="text-muted">اعلانات , عروض , اشياء اخرى</p>
                    </div>

                    <div>
                        <v-switch
                            v-model="switch1"
                            color="success"
                        ></v-switch>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <!-- single accordion => كيفية عمل الموقع -->
        <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingERw6">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collpsesea6" aria-expanded="false" aria-controls="collpsesea6">
            <div class="d-flex align-items-center">
                <!-- accordion header icon -->
                <img :src="howWork" alt="" class="accHeaderIcon">
                <h5 class="fw-bold">{{ $t('profile.commionQues') }}</h5>
            </div>
            </button>
        </h2>
        <div id="collpsesea6" class="accordion-collapse collapse" aria-labelledby="headingERw6" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <!-- الاسئلة الشائعة  -->
                <div class="accordion-item mb-3">
                    <h2 class="accordion-header" id="headingERw8">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collpsesea0" aria-expanded="false" aria-controls="collpsesea0">
                        <div class="d-flex align-items-center">
                            <h5 class="fw-bold"> كيفية عمل الموقع ؟</h5>
                        </div>
                        </button>
                    </h2>

                    <div id="collpsesea0" class="accordion-collapse collapse" aria-labelledby="headingERw8" data-bs-parent="#accordionExample">
                        <div class="accordion-body">


                        <div class="aboutImage">

                            <p class="fw-6 aboutP mx-auto w-75">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo libero recusandae, minima atque eveniet consequuntur ex similique dolorum ipsa voluptatum aspernatur, explicabo doloribus quas nihil eum dolore temporibus, expedita rerum. Ab ea dolores facere non optio asperiores officiis. Accusantium nam nobis, aliquid facere est cupiditate quasi sed quia! Possimus!
                            </p>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <!-- single accordion => لفغة الموقع -->
        <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingERw77">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collpsesea55" aria-expanded="false" aria-controls="collpsesea55">
            <div class="d-flex align-items-center">
                <!-- accordion header icon -->
                <img :src="profilell" alt="" class="accHeaderIcon">
                <h5 class="fw-bold"> {{ $t('profile.siteLang') }} </h5>
            </div>
            </button>
        </h2>
        <div id="collpsesea55" class="accordion-collapse collapse" aria-labelledby="headingERw77" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="d-flex justify-content-between flex-column">
                    <h2 class="text-center fw-bold"> مرحبا بك </h2>
                    <p class="text-center text-muted"> من فضلك قم بتحديد اللغة التي تريدها </p>

                    <div class="lang_buttons d-flex justify-content-center mt-4">

                        <button class="btn d-flex flex-column justify-content-center align-items-center" @click="setArabic()">
                            <!-- lang image  -->
                            <div class="lang_image">
                                <img :src="suadia" alt="">
                            </div>
                            <h5 class="fw-bold">اللغة العربية</h5>

                        </button>

                        <button class="btn d-flex flex-column justify-content-center align-items-center" @click="setEnglish()">
                            <!-- lang image  -->
                            <div class="lang_image">
                                <img :src="usa" alt="">
                            </div>                               
                             <h5 class="fw-bold">اللغة الانجليزية</h5>

                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
// import '../../'
export default {
    data(){
        return{
            src : require('../../assets/profile.png'),
            privacy : require('../../assets/wallet.png'),
            conditions : require('../../assets/terms.png'),
            howWork : require('../../assets/profileoo.png'),
            profileAlert : require('../../assets/profileAlert.png'),
            profilell : require('../../assets/profilell.png'),
            suadia : require('../../assets/saudi.png'),
            usa : require('../../assets/united_states.png'),
            items: ["+996", "+20", "565", "+10"],
            switch1: true,
            ar : 'ar',
            en : 'en',
            lang : '',
        }
    },
    
    methods:{
        setArabic(){
            location.reload();
            this.$i18n.locale = this.ar
            sessionStorage.setItem("locale", this.ar);
        },
        setEnglish(){
            location.reload()
            this.$i18n.locale = this.en
            if( sessionStorage.getItem('locale') ){
                sessionStorage.setItem('locale', this.en);
            }
        },
    }
}
</script>

<style lang="scss">
.lang_buttons{
    button{
        height: 200px;
        width: 200px;
        border: 1px solid #e5dbdb;
        &:first-of-type{
            margin-left: 20px;
        }
        .lang_image{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background-color: rgb(245 244 244);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            img{
                width: 53px;
                height: 38px;
                object-fit: cover;
            }
        }
    }
}
.accordion .fa-user{
    margin: auto;
    color: #24c3aa;
}
.accordion{
    width: 70%;
    margin: auto;
}
.accordion-button {
    border-radius: 10px;
}

.accordion-button::after {
    margin-right: auto;
    margin-left: 0 !important;
    transform: rotate(90deg);
}

.accordion-button:not(.collapsed)::after {
    transform: rotate(0deg) !important;
}

.accordion-item {
    border: none !important;
    border-radius: 12px;
    background-color: #f7f7f7;
}

.accHeaderIcon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: 12px;
}

.accordion-item:last-of-type {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
}

.accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
}

.accordion-item:first-of-type .accordion-button {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.accordion-item:first-of-type {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.accordion-button{
    height: 55px !important;
    border: none !important;
    box-shadow: 5px 0px 16px #87767629 !important;
    outline: none !important;
}
</style>