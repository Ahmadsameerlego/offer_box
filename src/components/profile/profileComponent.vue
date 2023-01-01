<template>
    <section class="accordion mt-4">
        <!-- single accordion => الملف الشخصي -->
        <div class="accordion-item mb-3">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="d-flex align-items-center">
                    <!-- accordion header icon -->
                    <img :src="src" alt="" class="accHeaderIcon">
                    <h5 class="fw-bold"> الملف الشخصي </h5>
                </div>
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                    <!-- start personal form  -->
                    <form action="" id="personalInfoForm" class=" mt-5">



                    <!-- username  -->
                    <div class="form-group mb-3 mt-3">
                        <label for="user_name" class="form-label fw-bold"> اسم المستخدم </label>
                        <input type="text" class="form-control" id="user_name" name=""  placeholder="احمد سمير">
                        <i class="fa-solid fa-user"></i>
                    </div>

                    <!-- phone number  -->
                    <div class="form-group mb-3 mt-3">
                        <label for="phone_number" class="form-label fw-bold"> رقم الجوال </label>
                        <input type="tel" class="form-control" id="phone_number" name=""  placeholder="01013746111">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                    </div>

                    

                    <!-- password  -->
                    <div class="form-group mb-3 mt-3">
                        <label for="password" class="form-label fw-bold"> كلمة المرور </label>
                        <input type="password" class="form-control password" id="password" name=""  placeholder="الرجاء ادخال كلمة المرور">
                        <i class="fa-solid fa-unlock-keyhole"></i>

                        <span class="togglePass"><i class="fa-solid fa-eye"></i></span>
                    </div>

                    <!-- confirm  password  -->
                    <div class="form-group mb-3 mt-3">
                        <label for="confirmPass" class="form-label fw-bold"> تأكيد كلمة المرور </label>
                        <input type="password" class="form-control password" id="confirmPass" name=""  placeholder="الرجاء ادخال كلمة المرور">
                        <i class="fa-solid fa-unlock-keyhole"></i>

                        <span class="togglePass"><i class="fa-solid fa-eye"></i></span>
                    </div>

                    <!-- save  -->
                    <div class="d-flex justify-content-center mx-auto mt-3 mb-5">
                        <button class="btn button1"> حفظ </button>
                    </div>
                    </form>
                    <!-- end personal form  -->

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
            src : require('../../assets/profile.png')
        }
    }
}
</script>

<style>
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
    transform: rotate(0deg);
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
    box-shadow: -5px 9px 11px #8776761a !important;
    outline: none !important;
}
</style>