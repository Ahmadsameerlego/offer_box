<template>
  <section class="contactUSForm mt-4 mb-5">
    <div class="container">
        <h6 class="labeledSection fw-bold mb-3"> {{  $t('nav.contact')}}   </h6>


        <form action="" class="contactForm mt-4">

            <div class="form-group mb-3">
                <label for="username"> {{ $t('contact.name') }} </label>
                <input type="text" id="username" class="form-control" :placeholder="$t('contact.nameplc')">
            </div>

            <div class="form-group mb-3">
                <label for="email"> {{ $t('contact.mail') }} </label>
                <input type="email" id="email" class="form-control" :placeholder="$t('contact.mailplc')">
            </div>

            <div class="form-group mb-3">
                <label for=""> {{ $t('contact.spec') }} </label>
                <select class="form-select">
                    <option selected hidden disabled> {{$t('contact.selcspec')}} </option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>

                
            </div>

            <div class="form-group mb-3">
                <label for=""> {{ $t('contact.message') }} </label>
                <textarea :placeholder="$t('contact.messageplc')" class="form-control"></textarea>
            </div>

            <div class="d-flex justify-center mx-auto">
                <button class="main_btn up"> {{$t('contact.send')}} </button>
            </div>
        </form>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .contactForm{
        width: 55%;
        margin: auto;
        label{
            font-size: 18px;
            font-weight: 600;
            display: block;
            margin-bottom: 12px;
        }
        input, select{
            height: 55px;
            border: 1px solid #918181;
            background-position: left 0.75rem center;
            &::placeholder{
                color: #333 ;
            }
        }
        select{
            padding: .375rem 1rem .375rem .75rem;
        }
        textarea{
            height: 100px;
            border: 1px solid #918181;

        }
    }
</style>