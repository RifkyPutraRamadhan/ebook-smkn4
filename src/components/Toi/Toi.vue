<template>
  <div class="container">
    <h2 class="text-center text-dark fw-bold uppercase">
      TEKNIK OTOMASI INDUSTRI
    </h2>
    <h5 class="text-center text-dark fw-semibold">
      Silahkan Pilih Kelas Kalian Masing-Masing !
    </h5>

    <div class="row">
      <div class="col-md-4 col-12">
        <div class="">
          <div class="card w-100 mt-2" style="border: 5px solid #777b7e">
            <img
              class="card-img-top"
              src="../../assets/class10.png"
              alt="Card image cap"
            />
            <div class="card-body" align="center">
              <h5 class="card-title fw-bold" align="center">Kelas 10</h5>
              <router-link to="/toi10" class="btn btn-primary"
                >Tampilkan</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12">
        <div class="card w-100 mt-2" style="border: 5px solid #777b7e">
          <img
            class="card-img-top"
            src="../../assets/class11.png"
            alt="Card image cap"
          />
          <div class="card-body" align="center">
            <h5 class="card-title text-dark fs-4 fw-bold" align="center">
              Kelas 11
            </h5>
            <router-link to="/toi11" class="btn btn-primary"
              >Tampilkan</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12">
        <div
          class="card w-100 mt-2"
          style="width: 12rem; border: 5px solid #777b7e"
        >
          <img
            class="card-img-top"
            src="../../assets/class12.png"
            alt="Card image cap"
          />
          <div class="card-body" align="center">
            <h5 class="card-title fw-bold" align="center">Kelas 12</h5>
            <router-link to="/toi12" class="btn btn-primary"
              >Tampilkan</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</template>
