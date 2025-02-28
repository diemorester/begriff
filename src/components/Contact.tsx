const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-96 flex flex-col justify-center p-10 md:p-20 gap-6 md:gap-10 bg-begriff-dark-green"
    >
      <p className="font-gugi text-3xl md:text-4xl text-begriff-white">Begriff Kaffee</p>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-28 w-full">
        <div>
          <p className="font-begriff font-bold text-sm md:text-base text-footer-head">ADDRESS</p>
          <p className="font-begriff text-xs md:text-sm font-light py-3 text-footer-body">
            Jl. Kyai Tapa No.101, Tomang, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11440
          </p>
        </div>
        <div>
          <p className="font-begriff font-bold text-sm md:text-base text-footer-head">OPERATION HOURS</p>
          <div className="py-3 flex gap-x-3">
            <p className="font-begriff text-xs md:text-sm font-light text-footer-body">Mon - Sun</p>
            <p className="font-begriff text-xs md:text-sm text-begriff-white">09.00 - 21.00</p>
          </div>
        </div>
        <div>
          <p className="font-begriff font-bold text-sm md:text-base text-footer-head">CALL US</p>
          <p className="text-xs md:text-sm text-begriff-white py-3">+62 819 3210 6158</p>
        </div>
        <div>
          <p className="font-begriff font-bold text-sm md:text-base text-footer-head">SOCIALS</p>
          <div className="flex flex-col font-begriff pt-0.5">
            <a
              href="https://www.instagram.com/begriffkaffee/"
              target="_blank"
              className="text-xs md:text-sm hover:text-begriff-white transition-colors duration-200 text-footer-body pt-2"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <p className="font-begriff font-bold text-sm md:text-base text-footer-head">SHOP</p>
          <div className="flex flex-col font-begriff pt-0.5">
            <a
              href="https://gofood.co.id/en/jakarta/restaurant/begriff-kaffee-grogol-302a801f-f216-4e19-b5a1-f36316f0ae17"
              target="_blank"
              className="text-xs md:text-sm hover:text-begriff-white transition-colors duration-200 text-footer-body pt-2"
            >
              GoFood
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-[0.1px] border-footer-body"></div>
    </section>
  );
};

export default Contact;